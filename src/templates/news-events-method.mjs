import { SITE, RUBRIC_WEIGHTS, LCI_BANDS } from '../data/site-meta.mjs';
import { ARTICLES } from '../data/articles.mjs';
import { EVENTS } from '../data/events.mjs';
import { esc, renderLayout } from './layout.mjs';

export function renderNewsIndexPage() {
  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">Texas Mineral Title, RRC &amp; Courthouse News Desk</span>
        <h1>Texas Oil &amp; Gas Landman News, Supreme Court Rulings &amp; Regulatory Analysis</h1>
        <p class="lead-deck">
          Primary-source reporting on Texas Supreme Court mineral and royalty decisions, Railroad Commission LoneSTAR and SB 1150 rules, county clerk record fee economics, and AI verification architectures.
        </p>
      </div>
    </section>

    <section class="section-block" style="border-bottom:none;">
      <div class="container">
        ${ARTICLES.map(
          (a) => `<article class="tool-dossier">
          <span class="rubric-pill">${esc(a.rubric)}</span>
          <h2 style="font-size:1.5rem;margin-bottom:0.4rem;"><a href="/news/${esc(a.slug)}/">${esc(
            a.title
          )}</a></h2>
          <p style="font-size:0.98rem;">${esc(a.subtitle)}</p>
          <ul class="compact-list" style="margin:0.75rem 0;">
            ${a.keyTakeaways.map((k) => `<li>${esc(k)}</li>`).join('')}
          </ul>
          <div class="btn-row" style="align-items:center;justify-content:space-between;">
            <span class="mono" style="font-size:0.78rem;color:var(--ink-muted);">Published ${esc(
              a.publishedDate
            )} · ${esc(a.readMinutes)} min read · ${esc(a.sources.length)} cited primary sources</span>
            <a class="btn btn-primary" href="/news/${esc(a.slug)}/">Read Full Article →</a>
          </div>
        </article>`
        ).join('\n')}
      </div>
    </section>
  `;

  return renderLayout({
    title: 'Texas Oil & Gas Landman News, Mineral Law & RRC Regulatory Updates',
    description:
      'In-depth sourced coverage of Clifton v. Johnson (Tex. 2026), Fasken v. Puig, RRC 100.2M digitized records and SB 1150 inactive-well hearings, Texas courthouse fees, and AI title software.',
    canonicalPath: '/news/',
    currentNav: '/news/',
    breadcrumbs: [{ href: '/news/', label: 'Texas News & Case Law' }],
    showInlineDisclosure: true,
    bodyHtml,
  });
}

export function renderArticlePage(article) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.subtitle,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.origin },
    mainEntityOfPage: `${SITE.origin}/news/${article.slug}/`,
  };

  const bodyHtml = `
    <article class="section-block" style="border-bottom:none;padding-top:1.5rem;">
      <div class="container">
        <div class="article-prose">
          <span class="rubric-pill">${esc(article.rubric)}</span>
          <h1>${esc(article.title)}</h1>
          <p class="lead-deck">${esc(article.subtitle)}</p>
          <div class="mono" style="font-size:0.8rem;color:var(--ink-muted);padding-bottom:1rem;border-bottom:1px solid var(--rule);">
            By ${esc(article.author)} · Published ${esc(article.publishedDate)} · ${esc(article.readMinutes)} minute read
          </div>

          <div class="takeaway-box">
            <h4 style="font-family:var(--font-mono);font-size:0.8rem;text-transform:uppercase;margin-bottom:0.5rem;">Executive Takeaways for Working Landmen</h4>
            <ul class="compact-list">
              ${article.keyTakeaways.map((k) => `<li>${esc(k)}</li>`).join('')}
            </ul>
          </div>

          ${article.sections
            .map(
              (sec) => `
            <h2>${esc(sec.heading)}</h2>
            ${sec.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n')}
          `
            )
            .join('\n')}

          <div class="tool-dossier" style="margin-top:2rem;">
            <h3 style="font-size:1.1rem;">Primary Sources &amp; Public Filings Cited</h3>
            <ul class="compact-list">
              ${article.sources
                .map(
                  (s) =>
                    `<li><a href="${esc(s.url)}" rel="noopener">${esc(s.label)}</a> <span class="mono" style="font-size:0.75rem;color:var(--ink-muted);">(${esc(
                      s.url
                    )})</span></li>`
                )
                .join('')}
            </ul>
          </div>

          <div class="btn-row" style="margin-top:1.5rem;">
            <a class="btn btn-outline" href="/news/">← Back to All Texas News</a>
            <a class="btn btn-primary" href="/rankings/">View 2026–2027 Software Rankings →</a>
          </div>
        </div>
      </div>
    </article>
  `;

  return renderLayout({
    title: article.title,
    description: article.subtitle,
    canonicalPath: `/news/${article.slug}/`,
    currentNav: '/news/',
    breadcrumbs: [
      { href: '/news/', label: 'Texas News & Case Law' },
      { href: `/news/${article.slug}/`, label: article.rubric },
    ],
    showInlineDisclosure: true,
    customDisclosureText: article.ownProductMention ? SITE.disclosureArticleOwnProduct : SITE.disclosureInline,
    jsonLd: [articleSchema],
    bodyHtml,
  });
}

export function renderEventsPage() {
  const eventSchemas = EVENTS.map((ev) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: ev.title,
    startDate: ev.startDate,
    endDate: ev.endDate,
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: ev.city,
      address: { '@type': 'PostalAddress', addressRegion: 'TX', addressCountry: 'US' },
    },
    organizer: { '@type': 'Organization', name: ev.organizer, url: ev.url },
    description: ev.landmanRelevance,
  }));

  const regions = [...new Set(EVENTS.map((e) => e.region))];
  const categories = [...new Set(EVENTS.map((e) => e.category))];

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">2026–2027 Texas Energy, CLE &amp; Regulatory Calendar</span>
        <h1>Texas Oil &amp; Gas Landman, Mineral Law &amp; RRC Hearings Calendar</h1>
        <p class="lead-deck">
          Key dates for Texas Railroad Commission rulemakings, NAPE Summit Houston, UT Ernest E. Smith Oil &amp; Gas Law Institute, PBLA Midland, HAPL/FWAPL/DAPL seminars, TLTA, and AAPL continuing education.
        </p>
        <div class="filter-bar">
          <label for="event-filter-region" class="mono" style="font-size:0.8rem;font-weight:700;">Region:</label>
          <select id="event-filter-region">
            <option value="all">All Texas Regions</option>
            ${regions.map((r) => `<option value="${esc(r)}">${esc(r)}</option>`).join('')}
          </select>
          <label for="event-filter-cat" class="mono" style="font-size:0.8rem;font-weight:700;">Event Type:</label>
          <select id="event-filter-cat">
            <option value="all">All Categories</option>
            ${categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}
          </select>
        </div>
      </div>
    </section>

    <section class="section-block" style="border-bottom:none;">
      <div class="container">
        ${EVENTS.map(
          (ev) => `<article class="tool-dossier" data-event-card data-region="${esc(ev.region)}" data-category="${esc(
            ev.category
          )}">
          <div class="dossier-top" style="border-bottom:none;padding-bottom:0.25rem;">
            <div>
              <span class="rank-pill">${esc(ev.dateLabel)}</span>
              <span class="mono" style="font-size:0.78rem;color:var(--rust);font-weight:700;">${esc(
                ev.category
              )} · ${esc(ev.city)}</span>
              <h2 style="font-size:1.3rem;margin:0.45rem 0 0.35rem;">${esc(ev.title)}</h2>
              <p style="margin:0 0 0.6rem;"><strong>Why It Matters to Landmen:</strong> ${esc(ev.landmanRelevance)}</p>
              <div class="mono" style="font-size:0.79rem;color:var(--ink-muted);">
                Organizer: ${esc(ev.organizer)} · <a href="${esc(ev.url)}" rel="noopener">Official Event / Agency Portal →</a>
              </div>
            </div>
          </div>
        </article>`
        ).join('\n')}
      </div>
    </section>
  `;

  return renderLayout({
    title: '2026–2027 Texas Landman Events, NAPE, CLE & RRC Regulatory Hearings Calendar',
    description:
      'Upcoming 2026–2027 Texas oil & gas landman events: RRC SB 1150 hearings, NAPE Summit 2027 Houston, Ernest E. Smith Oil & Gas Law Institute, PBLA Midland, HAPL, FWAPL, DAPL, TLTA, and AAPL.',
    canonicalPath: '/events/',
    currentNav: '/events/',
    breadcrumbs: [{ href: '/events/', label: '2026–2027 Events' }],
    showInlineDisclosure: false,
    jsonLd: eventSchemas,
    bodyHtml,
  });
}

export function renderMethodologyPage() {
  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">Scoring Weights, LCI Formula &amp; Source Governance</span>
        <h1>Benchmark Methodology, Learning Curve Index (LCI) &amp; Disclosure Policy</h1>
        <p class="lead-deck">
          How Texas Landman &amp; Title Tech evaluates mineral title software, computes Learning Curve Index scores, verifies primary vendor citations, and maintains transparent publisher governance.
        </p>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>1. Six-Factor Mineral Title Composite Rubric (100 Points)</h2>
            <p>Designed explicitly from the perspective of a working Texas CPL, RPL, title examiner, or brokerage producing defensible chain-of-title and Net Mineral Acre deliverables.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Weight</th>
                <th>Evaluation Criteria</th>
              </tr>
            </thead>
            <tbody>
              ${RUBRIC_WEIGHTS.map(
                (r) => `<tr>
                <td><strong>${esc(r.name)}</strong></td>
                <td class="mono"><strong>${esc(r.weightPct)}%</strong></td>
                <td>${esc(r.summary)}</td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>2. Learning Curve Index (LCI 1–100, Lower = Faster Mastery)</h2>
            <p>Marketing demos often make complex tools look effortless. Our LCI measures the real hours required before a landman or analyst produces client-safe deliverables without errors.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>LCI Score Band</th>
                <th>Proficiency Tier</th>
                <th>Typical Time to Full Working Proficiency</th>
                <th>Operational Profile</th>
              </tr>
            </thead>
            <tbody>
              ${LCI_BANDS.map(
                (b) => `<tr>
                <td class="mono"><strong>${esc(b.range)}</strong></td>
                <td><strong>${esc(b.tier)}</strong></td>
                <td class="mono">${esc(b.timeToProficiency)}</td>
                <td>${esc(b.description)}</td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-block" style="border-bottom:none;">
      <div class="container">
        <div class="article-prose">
          <h2>3. Primary-Source Citation Discipline &amp; Known Industry Data Gaps</h2>
          <p>
            Every third-party product profile in our benchmark records the exact public URLs inspected and verification date (${esc(
              SITE.editionDate
            )}). Where a vendor publishes conflicting numbers across its own live pages (for example, differing county counts or pricing models between a product page and a company blog), we document both figures openly rather than guessing.
          </p>
          <p>
            As of November 2026, no independent, peer-reviewed accuracy benchmark exists across all commercial oil and gas AI title tools; vendor speed and accuracy percentages ("99%+ accuracy," "75% faster," "10× faster") are reported explicitly as vendor claims, whereas architectural facts (such as public pricing, local OCR execution, BigInt rational arithmetic, and multi-model page-image verification and workbook readback gates) are verified from product specifications and reproducible test harnesses.
          </p>

          <h2>4. Ownership Disclosure &amp; Editorial Corrections</h2>
          <p>
            ${esc(SITE.disclosureFooterFinePrint)}
          </p>
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    title: 'Methodology, Rubric Weights, Learning Curve Index & Editorial Disclosure',
    description:
      'Complete scoring rubric, Learning Curve Index (LCI 1–100) scale, primary-source citation rules, and FTC 16 CFR Part 465 / Part 255 ownership disclosure for Texas Landman & Title Tech.',
    canonicalPath: '/methodology/',
    currentNav: '/methodology/',
    breadcrumbs: [{ href: '/methodology/', label: 'Methodology' }],
    showInlineDisclosure: true,
    bodyHtml,
  });
}
