#!/usr/bin/env node
// Editorial review queue CLI: agents stage sourced news drafts in content/drafts/*.json;
// nothing enters published HTML until Spencer approves.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DRAFTS_DIR = path.resolve(__dirname, '..', 'content', 'drafts');

fs.mkdirSync(DRAFTS_DIR, { recursive: true });
const cmd = process.argv[2] || 'list';

const files = fs.readdirSync(DRAFTS_DIR).filter((f) => f.endsWith('.json'));

if (cmd === 'list') {
  console.log(`Editorial Draft Queue (${files.length} staged in content/drafts/):`);
  for (const f of files) {
    const d = JSON.parse(fs.readFileSync(path.join(DRAFTS_DIR, f), 'utf8'));
    console.log(` - [${d.status || 'PENDING_APPROVAL'}] ${d.slug} :: "${d.title}" (${(d.sources || []).length} sources)`);
  }
} else if (cmd === 'validate') {
  let errors = 0;
  for (const f of files) {
    const d = JSON.parse(fs.readFileSync(path.join(DRAFTS_DIR, f), 'utf8'));
    if (!d.slug || !d.title || !Array.isArray(d.sources) || d.sources.length === 0) {
      console.error(`FAIL ${f}: every draft requires slug, title, and >=1 primary https source.`);
      errors++;
    }
    for (const s of d.sources || []) {
      if (!String(s.url || '').startsWith('https://')) {
        console.error(`FAIL ${f}: source URL must use https:// (${s.url})`);
        errors++;
      }
    }
  }
  if (errors > 0) process.exit(1);
  console.log(`All ${files.length} staged drafts passed primary-source https validation.`);
} else {
  console.log('Usage: node tools/editorial-queue.mjs [list | validate]');
}
