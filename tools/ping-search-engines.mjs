#!/usr/bin/env node
// Submits all canonical URLs in dist/sitemap.xml to IndexNow (Bing, ChatGPT Search, DuckDuckGo, Yandex).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/data/site-meta.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITEMAP_PATH = path.resolve(__dirname, '..', 'dist', 'sitemap.xml');

export async function pingIndexNow() {
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const payload = {
    host: SITE.domain,
    key: SITE.indexNowKey,
    keyLocation: `${SITE.origin}/${SITE.indexNowKey}.txt`,
    urlList: urls,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  return { status: res.status, submittedUrls: urls.length, urls };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const out = await pingIndexNow();
  console.log(`IndexNow submission HTTP ${out.status} (${out.submittedUrls} canonical URLs submitted for ${SITE.domain}).`);
}
