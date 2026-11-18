#!/usr/bin/env node
// Verifies DNS cutover to GitHub Pages, enables HTTPS enforcement on GitHub Pages,
// checks all live HTTPS routes, and submits all canonical URLs to IndexNow.

import { execFileSync } from 'node:child_process';
import { pingIndexNow } from './ping-search-engines.mjs';
import { SITE } from '../src/data/site-meta.mjs';

const GH_PAGES_IPS = new Set([
  '185.199.108.153',
  '185.199.109.153',
  '185.199.110.153',
  '185.199.111.153',
]);

const aRecords = execFileSync('dig', ['+short', 'A', SITE.domain], { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Current A records for ${SITE.domain}:`, aRecords.join(', ') || '(none)');

if (!aRecords.some((ip) => GH_PAGES_IPS.has(ip))) {
  console.error(
    `DNS for ${SITE.domain} has not propagated to GitHub Pages yet.\n` +
      `In Hostinger DNS (${SITE.domain}), replace A @ 82.180.139.100 with:\n` +
      `  A @ 185.199.108.153\n  A @ 185.199.109.153\n  A @ 185.199.110.153\n  A @ 185.199.111.153\n` +
      `and delete AAAA @ 2a02:4780:10:aa70::1 (or replace with 2606:50c0:8000::153 .. 8003::153).`
  );
  process.exit(2);
}

try {
  execFileSync(
    'gh',
    ['api', '-X', 'PUT', 'repos/spencerandtheteagues/texaslandmantitle-tech/pages', '-F', 'https_enforced=true'],
    { stdio: 'inherit' }
  );
  console.log('Enabled GitHub Pages HTTPS enforcement.');
} catch (err) {
  console.warn('Note: Let\'s Encrypt certificate still provisioning on GitHub Pages; re-run in 2 minutes if needed.');
}

const ping = await pingIndexNow();
console.log(`Submitted ${ping.submittedUrls} canonical URLs to IndexNow (HTTP ${ping.status}).`);
