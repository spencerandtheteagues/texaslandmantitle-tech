#!/usr/bin/env node
// Enforces Spencer's 3-month quarterly ranking freeze (2026-11-17 -> 2027-02-17):
// Weekly Sunday midnight updates may ONLY publish news/articles; rankings, scores, pricing, and pros/cons stay locked.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOCK_PATH = path.join(ROOT, 'src', 'data', 'rankings-lock.json');

const PROTECTED_FILES = [
  'src/data/tools-tier1.mjs',
  'src/data/tools-ecosystem.mjs',
  'src/data/unit-economics.mjs',
  'src/data/comparisons.mjs',
];

function hashFile(rel) {
  const bytes = fs.readFileSync(path.join(ROOT, rel));
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

export function createRankingsLock({ lockedAt = '2026-11-17', lockedUntil = '2027-02-17T00:00:00-06:00' } = {}) {
  const hashes = {};
  for (const rel of PROTECTED_FILES) {
    hashes[rel] = hashFile(rel);
  }
  const payload = {
    policy: 'Quarterly 3-month ranking freeze: weekly Sunday midnight updates touch news/articles ONLY; rankings stay locked until lockedUntil.',
    lockedAt,
    lockedUntil,
    coNumberOneLeaders: ['titledesk', 'artificial-landman'],
    protectedFiles: hashes,
  };
  fs.writeFileSync(LOCK_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  return payload;
}

export function verifyRankingsLock({ now = new Date() } = {}) {
  if (!fs.existsSync(LOCK_PATH)) {
    throw new Error('Missing src/data/rankings-lock.json — rankings freeze lock must exist.');
  }
  const lock = JSON.parse(fs.readFileSync(LOCK_PATH, 'utf8'));
  const unlockDate = new Date(lock.lockedUntil);
  const mismatches = [];
  for (const [rel, expectedSha] of Object.entries(lock.protectedFiles || {})) {
    const actualSha = hashFile(rel);
    if (actualSha !== expectedSha) {
      mismatches.push({ file: rel, expectedSha, actualSha });
    }
  }
  if (mismatches.length > 0 && now < unlockDate) {
    throw new Error(
      `RANKINGS FREEZE VIOLATION before ${lock.lockedUntil}: ${mismatches.map((m) => m.file).join(', ')} modified!`
    );
  }
  return { ok: true, lockedUntil: lock.lockedUntil, protectedCount: Object.keys(lock.protectedFiles).length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const mode = process.argv[2] || 'verify';
  if (mode === 'write') {
    const out = createRankingsLock();
    console.log(`Wrote 3-month rankings lock through ${out.lockedUntil}.`);
  } else {
    const res = verifyRankingsLock();
    console.log(`Rankings lock VERIFIED (${res.protectedCount} benchmark files frozen through ${res.lockedUntil}).`);
  }
}
