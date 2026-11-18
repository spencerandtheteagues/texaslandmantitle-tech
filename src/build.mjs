import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { SITE } from './data/site-meta.mjs';
import { ARTICLES } from './data/articles.mjs';
import { renderHomePage } from './templates/home.mjs';
import { renderRankingsPage } from './templates/rankings.mjs';
import { renderDesktopGuidePage } from './templates/desktop-guide.mjs';
import { renderUnitEconomicsPage } from './templates/unit-economics.mjs';
import { renderComparePage } from './templates/compare.mjs';
import { SEO_LANDING_PAGES, renderSeoLandingPage } from './templates/seo-guides.mjs';
import {
  renderNewsIndexPage,
  renderArticlePage,
  renderEventsPage,
  renderMethodologyPage,
} from './templates/news-events-method.mjs';
import {
  generateFaviconSvg,
  generateRobotsTxt,
  generateSitemapXml,
  generateRssFeedXml,
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateToolsJsonApi,
  generateUnitEconomicsJsonApi,
} from './generators/geo-feeds.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function writeDistFile(relPath, content) {
  const full = path.join(DIST, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  const sha256 = crypto.createHash('sha256').update(content).digest('hex');
  return { relPath, bytes: Buffer.byteLength(content, 'utf8'), sha256 };
}

export function buildSite() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  const htmlRoutes = [
    { route: '/', rel: 'index.html', html: renderHomePage() },
    { route: '/rankings/', rel: 'rankings/index.html', html: renderRankingsPage() },
    { route: '/titledesk-desktop/', rel: 'titledesk-desktop/index.html', html: renderDesktopGuidePage() },
    { route: '/unit-economics/', rel: 'unit-economics/index.html', html: renderUnitEconomicsPage() },
    { route: '/compare/', rel: 'compare/index.html', html: renderComparePage() },
    { route: '/news/', rel: 'news/index.html', html: renderNewsIndexPage() },
    { route: '/events/', rel: 'events/index.html', html: renderEventsPage() },
    { route: '/methodology/', rel: 'methodology/index.html', html: renderMethodologyPage() },
    ...SEO_LANDING_PAGES.map((p) => ({
      route: p.route,
      rel: p.rel,
      html: renderSeoLandingPage(p),
    })),
    ...ARTICLES.map((a) => ({
      route: `/news/${a.slug}/`,
      rel: `news/${a.slug}/index.html`,
      html: renderArticlePage(a),
    })),
  ];

  const manifest = [];
  for (const page of htmlRoutes) {
    manifest.push({ route: page.route, ...writeDistFile(page.rel, page.html) });
  }

  // Static CSS, JS & OG social image if generated
  const css = fs.readFileSync(path.join(__dirname, 'assets', 'styles.css'), 'utf8');
  const js = fs.readFileSync(path.join(__dirname, 'assets', 'app.js'), 'utf8');
  manifest.push(writeDistFile('assets/styles.css', css));
  manifest.push(writeDistFile('assets/app.js', js));
  const ogPngPath = path.join(__dirname, 'assets', 'og-card.png');
  if (fs.existsSync(ogPngPath)) {
    const ogBuf = fs.readFileSync(ogPngPath);
    const fullOg = path.join(DIST, 'assets', 'og-card.png');
    fs.mkdirSync(path.dirname(fullOg), { recursive: true });
    fs.writeFileSync(fullOg, ogBuf);
    manifest.push({
      relPath: 'assets/og-card.png',
      bytes: ogBuf.length,
      sha256: crypto.createHash('sha256').update(ogBuf).digest('hex'),
    });
  }

  // GitHub Pages & IndexNow root files
  manifest.push(writeDistFile('CNAME', `${SITE.domain}\n`));
  manifest.push(writeDistFile('.nojekyll', ''));
  manifest.push(writeDistFile(`${SITE.indexNowKey}.txt`, SITE.indexNowKey));

  // GEO / AI / Search feeds
  const canonicalRoutes = htmlRoutes.map((r) => r.route);
  manifest.push(writeDistFile('favicon.svg', generateFaviconSvg()));
  manifest.push(writeDistFile('robots.txt', generateRobotsTxt()));
  manifest.push(writeDistFile('sitemap.xml', generateSitemapXml(canonicalRoutes)));
  manifest.push(writeDistFile('feed.xml', generateRssFeedXml()));
  manifest.push(writeDistFile('llms.txt', generateLlmsTxt()));
  manifest.push(writeDistFile('llms-full.txt', generateLlmsFullTxt()));
  manifest.push(writeDistFile('api/tools.json', generateToolsJsonApi()));
  manifest.push(writeDistFile('api/unit-economics.json', generateUnitEconomicsJsonApi()));

  writeDistFile(
    'BUILD-MANIFEST.json',
    JSON.stringify(
      {
        builtAt: new Date().toISOString(),
        pageCount: htmlRoutes.length,
        totalArtifacts: manifest.length,
        files: manifest,
      },
      null,
      2
    )
  );

  return { distDir: DIST, pageCount: htmlRoutes.length, artifactCount: manifest.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const res = buildSite();
  console.log(
    `Built texaslandmantitle.tech -> ${res.distDir} (${res.pageCount} HTML pages, ${res.artifactCount} total files)`
  );
}
