import { SITE } from '../data/site-meta.mjs';

export function esc(val) {
  return String(val ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const NAV_ITEMS = [
  { href: '/', label: 'Benchmark Desk' },
  { href: '/rankings/', label: '24-Tool Rankings & Fact Sheets' },
  { href: '/titledesk-desktop/', label: 'TitleDesk & Artificial Landman Deep Dive' },
  { href: '/unit-economics/', label: 'Unit Economics & ROI' },
  { href: '/compare/', label: 'Head-to-Head Compare' },
  { href: '/news/', label: 'Texas News & Case Law' },
  { href: '/events/', label: '2026–2027 Events' },
  { href: '/methodology/', label: 'Methodology' },
];

function brandSealSvg() {
  return `<svg class="brand-seal" viewBox="0 0 64 64" role="img" aria-label="Texas Landman & Title Tech Survey Benchmark Seal" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#FAF8F3" stroke="#1A3A5C" stroke-width="2.5"/>
    <circle cx="32" cy="32" r="25" fill="none" stroke="#9D3823" stroke-width="1" stroke-dasharray="3 2"/>
    <line x1="32" y1="6" x2="32" y2="58" stroke="#1A3A5C" stroke-width="1.2"/>
    <line x1="6" y1="32" x2="58" y2="32" stroke="#1A3A5C" stroke-width="1.2"/>
    <polygon points="32,11 36,28 53,32 36,36 32,53 28,36 11,32 28,28" fill="#1A3A5C"/>
    <circle cx="32" cy="32" r="4.5" fill="#FAF8F3" stroke="#9D3823" stroke-width="1.8"/>
  </svg>`;
}

export function renderLayout({
  title,
  description,
  canonicalPath,
  currentNav = '/',
  breadcrumbs = [],
  showInlineDisclosure = true,
  customDisclosureText = null,
  jsonLd = [],
  bodyHtml,
}) {
  const canonicalUrl = `${SITE.origin}${canonicalPath}`;
  const fullTitle = canonicalPath === '/' ? `${SITE.name} — ${SITE.tagline}` : `${title} | ${SITE.name}`;

  const baseOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    alternateName: 'Texas Landman Title Tech',
    url: SITE.origin,
    description: SITE.subtitle,
    inLanguage: 'en-US',
    dateModified: SITE.editionDate,
  };

  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.origin}/` },
            ...breadcrumbs.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 2,
              name: b.label,
              item: `${SITE.origin}${b.href}`,
            })),
          ],
        }
      : null;

  const allSchemas = [baseOrgSchema, ...(breadcrumbSchema ? [breadcrumbSchema] : []), ...jsonLd];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${esc(canonicalUrl)}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(SITE.name)}">
  <meta property="og:title" content="${esc(fullTitle)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonicalUrl)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(fullTitle)}">
  <meta name="twitter:description" content="${esc(description)}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate" type="application/rss+xml" title="${esc(SITE.name)} RSS Feed" href="/feed.xml">
  <link rel="alternate" type="text/plain" title="LLM Machine-Readable Summary (llms.txt)" href="/llms.txt">
  <link rel="alternate" type="text/plain" title="LLM Complete Dataset (llms-full.txt)" href="/llms-full.txt">
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(allSchemas)}</script>
</head>
<body>
  <div class="dateline-bar">
    <div class="container dateline-inner">
      <span class="dateline-tag">${esc(SITE.editionLabel)} · ${esc(SITE.location)}</span>
      <div class="dateline-links">
        <a href="/api/tools.json">JSON Dataset</a>
        <a href="/llms.txt">llms.txt</a>
        <a href="/llms-full.txt">llms-full.txt</a>
        <a href="/feed.xml">RSS</a>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="container">
      <div class="masthead-row">
        <a class="brand-lockup" href="/">
          ${brandSealSvg()}
          <span>
            <span class="brand-title">${esc(SITE.name)}</span>
            <span class="brand-kicker">${esc(SITE.tagline)}</span>
          </span>
        </a>
        <div class="masthead-meta">
          <div>DOMAIN: <strong>texaslandmantitle.tech</strong> · ALL 254 TX COUNTIES</div>
          <div>Published by the makers of TitleDesk &amp; Artificial Landman</div>
        </div>
      </div>
      <nav class="primary-nav" aria-label="Primary Navigation">
        ${NAV_ITEMS.map(
          (item) =>
            `<a href="${esc(item.href)}"${item.href === currentNav ? ' aria-current="page"' : ''}>${esc(item.label)}</a>`
        ).join('\n        ')}
      </nav>
    </div>
  </header>

  <main id="main-content">
    ${
      breadcrumbs.length > 0
        ? `<div class="container"><nav class="breadcrumb-bar" aria-label="Breadcrumb">
        <a href="/">Home</a> ${breadcrumbs
          .map((b, idx) =>
            idx === breadcrumbs.length - 1
              ? `<span> / ${esc(b.label)}</span>`
              : ` / <a href="${esc(b.href)}">${esc(b.label)}</a>`
          )
          .join('')}
      </nav></div>`
        : ''
    }
    ${bodyHtml}
    ${
      showInlineDisclosure
        ? `<div class="container"><aside class="editorial-note" aria-label="Editorial and ownership note">${esc(
            customDisclosureText || SITE.disclosureInline
          )}</aside></div>`
        : ''
    }
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>${esc(SITE.name)}</h4>
          <p style="margin:0 0 0.7rem;font-size:0.9rem;">${esc(SITE.subtitle)}</p>
          <p class="mono" style="margin:0;font-size:0.78rem;color:var(--ink-muted);">Canonical Reference: https://texaslandmantitle.tech · Verified ${esc(
            SITE.editionDate
          )}</p>
        </div>
        <div class="footer-col">
          <h4>Software Benchmarks</h4>
          <ul>
            <li><a href="/rankings/">All 24 Benchmarked Tools</a></li>
            <li><a href="/titledesk-desktop/">TitleDesk &amp; Artificial Landman (#1 Tied)</a></li>
            <li><a href="/unit-economics/">Unit Economics &amp; ROI Calculator</a></li>
            <li><a href="/compare/">Head-to-Head Comparisons</a></li>
            <li><a href="/methodology/">Rubric &amp; LCI Methodology</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Texas Desk &amp; Data</h4>
          <ul>
            <li><a href="/news/">Texas Mineral Case Law &amp; RRC News</a></li>
            <li><a href="/events/">2026–2027 Landman Events</a></li>
            <li><a href="/api/tools.json">Public JSON Benchmark Feed</a></li>
            <li><a href="/llms-full.txt">Complete AI / RAG Fact Sheet</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Co-#1 Ranked Platforms</h4>
          <ul>
            <li><a href="https://title-desk.com/" rel="noopener">TitleDesk Browser Engine</a></li>
            <li><a href="https://desktop.title-desk.com/" rel="noopener">TitleDesk Desktop Agent</a></li>
            <li><a href="https://artificiallandman.io/" rel="noopener">Artificial Landman (.io)</a></li>
          </ul>
        </div>
      </div>
      <p class="legal-fine-print">${esc(SITE.disclosureFooterFinePrint)}</p>
    </div>
  </footer>
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}
