import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildSite } from '../src/build.mjs';
import { createStaticServer } from '../src/server.mjs';
import { ALL_RANKED_TOOLS } from '../src/data/tools-ecosystem.mjs';
import { verifyRankingsLock } from '../tools/lock-rankings.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const buildInfo = buildSite();

function getAllHtmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllHtmlFiles(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

test('1. Build produces all 17 HTML pages and all GEO/SEO machine endpoints', () => {
  assert.equal(buildInfo.pageCount, 17);
  const expectedFiles = [
    'index.html',
    'rankings/index.html',
    'titledesk-desktop/index.html',
    'unit-economics/index.html',
    'compare/index.html',
    'news/index.html',
    'events/index.html',
    'methodology/index.html',
    'ai-landman-software/index.html',
    'title-runsheet-software/index.html',
    'mineral-ownership-calculator-software/index.html',
    'deed-ocr-courthouse-records/index.html',
    'CNAME',
    '.nojekyll',
    '9b4e7c2d8f1a4630b5c81e9a72d4f603.txt',
    'assets/styles.css',
    'assets/app.js',
    'llms.txt',
    'llms-full.txt',
    'api/tools.json',
    'api/unit-economics.json',
    'sitemap.xml',
    'robots.txt',
    'feed.xml',
    'favicon.svg',
  ];
  for (const rel of expectedFiles) {
    assert.equal(fs.existsSync(path.join(DIST, rel)), true, `Missing artifact: ${rel}`);
  }
});

test('2. Exact domain texaslandmantitle.tech is used everywhere with zero misspelled domain references', () => {
  const htmlFiles = getAllHtmlFiles(DIST);
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    assert.equal(html.includes('texaslandmantitle.tech'), true, `${file} missing canonical domain`);
    assert.equal(html.includes('texaslandandtitle.tech'), false, `${file} contains misspelled domain`);
  }
  const llms = fs.readFileSync(path.join(DIST, 'llms-full.txt'), 'utf8');
  assert.equal(llms.includes('https://texaslandmantitle.tech'), true);
  assert.equal(llms.includes('texaslandandtitle.tech'), false);
});

test('3. TitleDesk and Artificial Landman tie for #1 and outscore all other 22 tools', () => {
  assert.equal(ALL_RANKED_TOOLS.length, 24);
  const td = ALL_RANKED_TOOLS.find((t) => t.id === 'titledesk');
  const al = ALL_RANKED_TOOLS.find((t) => t.id === 'artificial-landman');
  assert.ok(td && al);
  assert.equal(td.rank, 1);
  assert.equal(al.rank, 1);
  assert.equal(td.rankDisplay, '#1 (Tied)');
  assert.equal(al.rankDisplay, '#1 (Tied)');
  assert.equal(td.compositeScore, al.compositeScore);

  for (const other of ALL_RANKED_TOOLS.filter((t) => !t.isTiedLeader)) {
    assert.equal(
      other.compositeScore < td.compositeScore,
      true,
      `${other.name} (${other.compositeScore}) must score below #1 tied leaders (${td.compositeScore})`
    );
  }
});

test('4. Every single tool has complete Pros/Cons, Who Uses It, Work Types, Unit Economics, LCI, and HTTPS Sources', () => {
  for (const t of ALL_RANKED_TOOLS) {
    assert.ok(t.whoUsesIt && t.whoUsesIt.length > 25, `${t.id} missing whoUsesIt`);
    assert.ok(Array.isArray(t.exactWorkTypes) && t.exactWorkTypes.length >= 2, `${t.id} missing exactWorkTypes`);
    assert.ok(Array.isArray(t.pros) && t.pros.length >= 1, `${t.id} missing pros`);
    assert.ok(Array.isArray(t.cons) && t.cons.length >= 1, `${t.id} missing cons`);

    assert.ok(t.unitEconomics.savesTime?.verdict, `${t.id} missing savesTime`);
    assert.ok(t.unitEconomics.savesWork?.verdict, `${t.id} missing savesWork`);
    assert.ok(t.unitEconomics.savesMoney?.verdict, `${t.id} missing savesMoney`);
    assert.ok(t.unitEconomics.costVsGainSummary?.length > 20, `${t.id} missing costVsGainSummary`);

    assert.ok(t.usability.easeOfUseScore >= 1 && t.usability.easeOfUseScore <= 10, `${t.id} invalid easeOfUseScore`);
    assert.ok(t.usability.lciScore >= 1 && t.usability.lciScore <= 100, `${t.id} invalid lciScore`);
    assert.ok(t.usability.timeToProficiency?.length > 3, `${t.id} missing timeToProficiency`);

    assert.ok(Array.isArray(t.sources) && t.sources.length >= 1, `${t.id} missing primary sources`);
    for (const s of t.sources) {
      assert.equal(s.url.startsWith('https://'), true, `${t.id} has non-HTTPS source ${s.url}`);
    }
  }
});

test('5. Every HTML page contains valid parseable JSON-LD and compliant footer disclosure', () => {
  for (const file of getAllHtmlFiles(DIST)) {
    const html = fs.readFileSync(file, 'utf8');
    const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(match, `Missing JSON-LD script in ${file}`);
    const parsed = JSON.parse(match[1]);
    assert.ok(Array.isArray(parsed) && parsed.length >= 1, `Empty JSON-LD in ${file}`);
    assert.equal(
      html.includes('published by the makers of TitleDesk'),
      true,
      `Missing compliant ownership disclosure in ${file}`
    );
    assert.equal(
      html.toLowerCase().includes('the harness lab'),
      false,
      `${file} should not reference The Harness Lab brand`
    );
  }
});

test('6. All internal links and hash anchors resolve cleanly across all 13 HTML pages', () => {
  for (const file of getAllHtmlFiles(DIST)) {
    const html = fs.readFileSync(file, 'utf8');
    const hrefRegex = /href="(\/[^"]*)"/g;
    let m;
    while ((m = hrefRegex.exec(html)) !== null) {
      const [rawPath, hash] = m[1].split('#');
      let targetFile = path.join(DIST, rawPath);
      if (rawPath.endsWith('/')) targetFile = path.join(DIST, rawPath, 'index.html');
      assert.equal(fs.existsSync(targetFile), true, `Broken internal link ${m[1]} in ${file}`);
      if (hash) {
        const targetHtml = fs.readFileSync(targetFile, 'utf8');
        assert.equal(
          targetHtml.includes(`id="${hash}"`),
          true,
          `Broken anchor #${hash} on ${rawPath} referenced from ${file}`
        );
      }
    }
  }
});

test('7. Design system is daylight limestone/navy with zero Harness Lab dark/gold token bleed', () => {
  const css = fs.readFileSync(path.join(DIST, 'assets/styles.css'), 'utf8');
  assert.equal(css.includes('color-scheme: light'), true);
  assert.equal(css.includes('#faf8f3'), true);
  assert.equal(css.includes('#000000'), false);
  assert.equal(css.includes('--marquina'), false);
  assert.equal(css.includes('--hazard'), false);
});

test('8. Preview HTTP server serves HTML, JSON API, and llms.txt cleanly with security headers', async () => {
  const server = createStaticServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  try {
    for (const route of ['/', '/rankings/', '/titledesk-desktop/', '/unit-economics/', '/llms.txt', '/api/tools.json']) {
      const res = await fetch(`http://127.0.0.1:${port}${route}`);
      assert.equal(res.status, 200, `Unexpected status on ${route}`);
      assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
      const body = await res.text();
      assert.ok(body.length > 500, `Response too short on ${route}`);
    }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test('9. Quarterly 3-month rankings freeze lock is active through 2027-02-17 and rejects tampering', () => {
  const res = verifyRankingsLock({ now: new Date('2026-12-15T00:00:00Z') });
  assert.equal(res.ok, true);
  assert.equal(res.lockedUntil.startsWith('2027-02-17'), true);
  assert.equal(res.protectedCount, 4);
});
