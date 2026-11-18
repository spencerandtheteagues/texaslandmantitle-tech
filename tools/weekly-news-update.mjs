#!/usr/bin/env node
// Weekly Sunday-Night-at-Midnight (00:00 Monday CST) News Updater & Publisher.
// Strictly enforces the 3-month rankings freeze lock (through 2027-02-17):
// ONLY news/articles update weekly; tool rankings, scores, unit economics, and pros/cons never change until quarterly re-ranking.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { verifyRankingsLock } from './lock-rankings.mjs';
import { buildSite } from '../src/build.mjs';
import { pingIndexNow } from './ping-search-engines.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APPROVED_DIR = path.join(ROOT, 'content', 'approved');
const PUBLISHED_WEEKLY_JSON = path.join(ROOT, 'src', 'data', 'weekly-editions.json');

fs.mkdirSync(APPROVED_DIR, { recursive: true });
if (!fs.existsSync(PUBLISHED_WEEKLY_JSON)) {
  fs.writeFileSync(PUBLISHED_WEEKLY_JSON, '[]\n', 'utf8');
}

// 1. Enforce 3-month rankings freeze BEFORE doing anything
const lockCheck = verifyRankingsLock();
console.log(`[1/5] Rankings freeze verified (locked through ${lockCheck.lockedUntil}).`);

// 2. Ingest any approved weekly articles staged in content/approved/*.json
const existing = JSON.parse(fs.readFileSync(PUBLISHED_WEEKLY_JSON, 'utf8'));
const existingSlugs = new Set(existing.map((a) => a.slug));
const stagedFiles = fs.readdirSync(APPROVED_DIR).filter((f) => f.endsWith('.json'));
let promoted = 0;

for (const file of stagedFiles) {
  const full = path.join(APPROVED_DIR, file);
  const item = JSON.parse(fs.readFileSync(full, 'utf8'));
  if (!item.slug || !item.title || !Array.isArray(item.sources) || item.sources.length === 0) {
    throw new Error(`Approved article ${file} missing slug, title, or primary https sources.`);
  }
  for (const s of item.sources) {
    if (!String(s.url || '').startsWith('https://')) {
      throw new Error(`Approved article ${file} contains non-https source URL: ${s.url}`);
    }
  }
  if (!existingSlugs.has(item.slug)) {
    existing.unshift(item);
    existingSlugs.add(item.slug);
    promoted++;
  }
  fs.unlinkSync(full);
}

if (promoted > 0) {
  fs.writeFileSync(PUBLISHED_WEEKLY_JSON, JSON.stringify(existing, null, 2) + '\n', 'utf8');
}
console.log(`[2/5] Promoted ${promoted} approved weekly article(s).`);

// 3. Re-verify rankings lock & rebuild static dist/
verifyRankingsLock();
const buildRes = buildSite();
console.log(`[3/5] Rebuilt dist/ (${buildRes.pageCount} HTML pages, ${buildRes.artifactCount} artifacts).`);

// 4. Run full automated test gate
execFileSync(process.execPath, ['--test', 'tests/site.test.mjs'], { cwd: ROOT, stdio: 'inherit' });
console.log('[4/5] All automated verification gates passed.');

// 5. Optional live publish to gh-pages + IndexNow ping
if (process.argv.includes('--publish')) {
  execFileSync(process.execPath, ['tools/deploy-gh-pages.mjs'], { cwd: ROOT, stdio: 'inherit' });
  const ping = await pingIndexNow();
  console.log(`[5/5] Published live to GitHub Pages & pinged IndexNow (HTTP ${ping.status}, ${ping.submittedUrls} URLs).`);
} else {
  console.log('[5/5] Dry-run complete (pass --publish to deploy to GitHub Pages and ping IndexNow).');
}
