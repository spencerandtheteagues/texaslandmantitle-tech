#!/usr/bin/env node
// Deploys dist/ cleanly to the orphan gh-pages branch on origin without touching working tree branches.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const remoteUrl = execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: ROOT, encoding: 'utf8' }).trim();
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tltt-ghpages-'));

try {
  fs.cpSync(DIST, tmpDir, { recursive: true });
  execFileSync('git', ['init', '-b', 'gh-pages'], { cwd: tmpDir, stdio: 'ignore' });
  execFileSync('git', ['config', 'user.name', 'spencerandtheteagues'], { cwd: tmpDir });
  execFileSync('git', ['config', 'user.email', '220981384+spencerandtheteagues@users.noreply.github.com'], { cwd: tmpDir });
  execFileSync('git', ['add', '-A'], { cwd: tmpDir });
  execFileSync('git', ['commit', '-m', `Publish texaslandmantitle.tech (${new Date().toISOString()})`], {
    cwd: tmpDir,
    stdio: 'ignore',
  });
  execFileSync('git', ['push', '--force', remoteUrl, 'gh-pages:gh-pages'], { cwd: tmpDir, stdio: 'inherit' });
  console.log('Successfully pushed dist/ to origin/gh-pages.');
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
