import { SITE } from '../data/site-meta.mjs';
import { TIER1_TOOLS } from '../data/tools-tier1.mjs';
import { ALL_RANKED_TOOLS } from '../data/tools-ecosystem.mjs';
import { ARTICLES } from '../data/articles.mjs';
import { EVENTS } from '../data/events.mjs';
import { INDUSTRY_FAQS } from '../data/comparisons.mjs';
import { esc, renderLayout } from './layout.mjs';

export function renderCalculatorWidget() {
  return `<div class="calc-panel" id="roi-calculator">
    <div class="calc-controls">
      <div class="calc-field">
        <label for="calc-runs">Monthly Title Assignments</label>
        <input type="range" id="calc-runs" min="1" max="80" value="8">
        <div class="calc-readout" id="calc-runs-val">8 assignments / mo</div>
      </div>
      <div class="calc-field">
        <label for="calc-pages">Avg. Courthouse Pages / Chain</label>
        <input type="range" id="calc-pages" min="60" max="800" step="20" value="260">
        <div class="calc-readout" id="calc-pages-val">260 pages / chain</div>
      </div>
      <div class="calc-field">
        <label for="calc-dayrate">Landman / Examiner Day Rate</label>
        <input type="range" id="calc-dayrate" min="350" max="1000" step="25" value="600">
        <div class="calc-readout" id="calc-dayrate-val">$600 / day ($75/hr)</div>
      </div>
      <div class="calc-field">
        <label for="calc-portal">Courthouse Copy Source</label>
        <select id="calc-portal" class="calc-input" style="width:100%;">
          <option value="client">Client-Supplied Packet ($0 copies)</option>
          <option value="optimized" selected>View-Before-Buy Mix (FileViewer + TVP)</option>
          <option value="texasfile">Unscreened $1.00/Page Downloads</option>
        </select>
      </div>
    </div>
    <div class="calc-results-grid">
      <div class="calc-result-card">
        <div class="mono" style="font-size:0.76rem;color:var(--ink-muted);text-transform:uppercase;">Manual Baseline (All-In)</div>
        <div class="mono" style="font-size:1.45rem;font-weight:700;color:var(--rust);margin:0.25rem 0;" id="res-manual-total">$12,230/mo</div>
        <div style="font-size:0.83rem;color:var(--ink-muted);" id="res-manual-per-run">$1,529 per assignment (19.3 hrs manual)</div>
      </div>
      <div class="calc-result-card highlight">
        <div class="mono" style="font-size:0.76rem;color:var(--oak);font-weight:700;text-transform:uppercase;">#1 Tied Browser (TitleDesk / Artificial Landman)</div>
        <div class="mono" style="font-size:1.45rem;font-weight:700;color:var(--oak);margin:0.25rem 0;" id="res-hosted-total">$3,267/mo</div>
        <div style="font-size:0.82rem;color:var(--ink-body);" id="res-hosted-plan">Solo Plan ($1,299/mo · 8 runs) · $408/assignment all-in</div>
        <div class="mono" style="font-size:0.84rem;font-weight:700;color:var(--oak);margin-top:0.35rem;" id="res-hosted-savings">$8,963/mo net gain</div>
      </div>
      <div class="calc-result-card highlight">
        <div class="mono" style="font-size:0.76rem;color:var(--navy);font-weight:700;text-transform:uppercase;">#1 TitleDesk Desktop Agent ($199/Seat)</div>
        <div class="mono" style="font-size:1.45rem;font-weight:700;color:var(--navy);margin:0.25rem 0;" id="res-desktop-total">$2,575/mo</div>
        <div style="font-size:0.82rem;color:var(--ink-body);">Local $0 Tesseract OCR + BigInt Exact-Fraction Ledger</div>
        <div class="mono" style="font-size:0.84rem;font-weight:700;color:var(--oak);margin-top:0.35rem;" id="res-desktop-savings">$9,655/mo net gain (1 seat @ $199)</div>
      </div>
    </div>
    <p class="mono" style="margin:0.9rem 0 0;font-size:0.82rem;color:var(--ink-muted);">
      Estimated Capacity Dividend: <strong id="res-hours-saved" style="color:var(--ink);">137 CPL/examiner hours reclaimed per month</strong> · <a href="/unit-economics/">See full empirical task-minute assumptions &amp; courthouse copy schedules →</a>
    </p>
  </div>`;
}

export function renderHomePage() {
  const leaders = TIER1_TOOLS.filter((t) => t.isTiedLeader);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2026–2027 Best Texas Oil & Gas Landman & AI Mineral Title Research Software Rankings',
    description:
      'Comprehensive empirical ranking of 24 AI mineral title examination tools, landman workstations, Texas courthouse record portals, and enterprise land systems.',
    numberOfItems: ALL_RANKED_TOOLS.length,
    itemListElement: ALL_RANKED_TOOLS.map((t) => ({
      '@type': 'ListItem',
      position: t.rank,
      name: `${t.rankDisplay}: ${t.name} (${t.compositeScore}/100)`,
      url: `${SITE.origin}/rankings/#${t.id}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INDUSTRY_FAQS.slice(0, 8).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">2026–2027 Texas Mineral Title &amp; Landman Fact Sheet</span>
        <h1>The Empirical Source of Truth for Texas Oil &amp; Gas Landman Tools, Title Research Economics &amp; Industry News</h1>
        <p class="lead-deck">
          Every AI chain-of-title engine, desktop landman workstation, Texas county clerk portal, and E&amp;P land administration suite — benchmarked side by side on exact-fraction ownership math, source-page verification, true per-assignment unit economics, Learning Curve Index (LCI), and 254-county Texas courthouse applicability.
        </p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/rankings/">Explore Full 24-Tool Rankings &amp; Pros/Cons</a>
          <a class="btn btn-outline" href="/titledesk-desktop/">Why TitleDesk &amp; Artificial Landman Tie for #1</a>
          <a class="btn btn-outline" href="/unit-economics/">Run Cost vs. Gain Calculator</a>
        </div>
        <div class="stat-grid">
          ${SITE.stats
            .map(
              (s) => `<div class="stat-box">
            <span class="stat-value">${esc(s.value)}</span>
            <span class="stat-label">${esc(s.label)}</span>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section-block" id="co-leaders">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="rubric-pill" style="margin-bottom:0.35rem;">Co-Ranked #1 Industry Leaders · 96.4 / 100</span>
            <h2>Tied for #1 Overall: TitleDesk &amp; Artificial Landman</h2>
            <p>The only platforms combining three-model cross-family page-image consensus on browser runs with a deterministic BigInt exact-fraction local desktop workstation and transparent self-serve pricing.</p>
          </div>
          <a class="btn btn-outline" href="/titledesk-desktop/">Read Full Technical Monograph →</a>
        </div>
        <div class="grid-2">
          ${leaders
            .map(
              (t) => `<article class="leader-card">
            <div>
              <div class="leader-badge-row">
                <span class="badge-rank-one">${esc(t.rankDisplay)} OVERALL</span>
                <span class="score-chip">Score: ${esc(t.compositeScore)} / 100</span>
              </div>
              <h3><a href="/rankings/#${esc(t.id)}">${esc(t.name)}</a></h3>
              <p style="font-size:0.93rem;margin:0.4rem 0 0.75rem;">${esc(t.overview)}</p>
              <div class="leader-meta-strip">
                <div><span>Pricing</span><strong>${t.id === 'titledesk' ? '$249/run · $199/mo App' : '$249/run (1st ≤150pp Free)'}</strong></div>
                <div><span>Learning Curve</span><strong>LCI ${esc(t.usability.lciScore)}/100 (${esc(t.usability.easeOfUseScore)}/10 Ease)</strong></div>
                <div><span>Texas Scope</span><strong>All 254 Counties</strong></div>
              </div>
              <h4 style="font-family:var(--font-mono);font-size:0.78rem;text-transform:uppercase;color:var(--oak);margin:0.75rem 0 0.35rem;">Documented Strengths</h4>
              <ul class="compact-list">
                ${t.pros
                  .slice(0, 4)
                  .map((p) => `<li>${esc(p)}</li>`)
                  .join('')}
              </ul>
              <h4 style="font-family:var(--font-mono);font-size:0.78rem;text-transform:uppercase;color:var(--amber-ink);margin:0.75rem 0 0.35rem;">Scope Boundaries (Light Cons)</h4>
              <ul class="compact-list">
                ${t.cons
                  .slice(0, 2)
                  .map((c) => `<li>${esc(c)}</li>`)
                  .join('')}
              </ul>
            </div>
            <div class="btn-row">
              <a class="btn btn-primary" href="${esc(t.website)}" rel="noopener">Visit ${esc(t.shortName)} →</a>
              ${
                t.secondaryUrl
                  ? `<a class="btn btn-outline" href="${esc(t.secondaryUrl)}" rel="noopener">Desktop Workstation</a>`
                  : ''
              }
              <a class="btn btn-outline" href="/rankings/#${esc(t.id)}">Full Dossier</a>
            </div>
          </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section-block" id="master-leaderboard">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>2026–2027 Master Leaderboard: All 24 Texas Landman &amp; Title Tools</h2>
            <p>Complete snapshot across AI Mineral Title Engines (1–14), Texas Courthouse Portals (15–18), Enterprise Land Admin Suites (19–23), and Royalty Portfolio Tools (24).</p>
          </div>
          <a class="btn btn-primary" href="/rankings/">Open All 24 Full Fact Sheets →</a>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Platform / Tool</th>
                <th>Category</th>
                <th>Score</th>
                <th>Published Pricing</th>
                <th>Texas Coverage</th>
                <th>Saves Time / Work / Money</th>
                <th>Ease &amp; LCI (Proficiency)</th>
              </tr>
            </thead>
            <tbody>
              ${ALL_RANKED_TOOLS.map(
                (t) => `<tr class="${t.isTiedLeader ? 'row-leader' : ''}">
                <td class="mono"><strong>${esc(t.rankDisplay)}</strong></td>
                <td>
                  <strong><a href="/rankings/#${esc(t.id)}">${esc(t.name)}</a></strong>
                  <div style="font-size:0.77rem;color:var(--ink-muted);">${esc(t.vendor)}</div>
                </td>
                <td style="font-size:0.81rem;">${esc(t.category)}</td>
                <td class="mono"><strong>${esc(t.compositeScore)}</strong></td>
                <td style="font-size:0.81rem;">${esc(t.pricingSummary)}</td>
                <td style="font-size:0.81rem;">${esc(t.texasCoverage)}</td>
                <td style="font-size:0.8rem;">
                  <div><strong>Time:</strong> ${esc(t.unitEconomics.savesTime.verdict)}</div>
                  <div><strong>Money:</strong> ${esc(t.unitEconomics.savesMoney.verdict)}</div>
                </td>
                <td class="mono" style="font-size:0.79rem;">
                  <div><strong>${esc(t.usability.easeOfUseScore)}/10</strong> (${esc(t.usability.effectiveComplexity)})</div>
                  <div>LCI ${esc(t.usability.lciScore)} · ${esc(t.usability.timeToProficiency)}</div>
                </td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-block" id="live-economics">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Interactive Unit Economics &amp; Cost-vs.-Gain Calculator</h2>
            <p>Model your monthly tract load, average courthouse page count, and landman day rate against manual abstracting, hosted 3-model runs, and local desktop workstations.</p>
          </div>
          <a class="btn btn-outline" href="/unit-economics/">Full Unit Economics Study →</a>
        </div>
        ${renderCalculatorWidget()}
      </div>
    </section>

    <section class="section-block" id="texas-news-desk">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Texas Mineral Law, RRC Regulation &amp; Courthouse News</h2>
            <p>Sourced reporting on 2026 Texas Supreme Court deed decisions, Railroad Commission LoneSTAR &amp; SB 1150 rules, county clerk record fees, and AI verification architectures.</p>
          </div>
          <a class="btn btn-outline" href="/news/">View All Sourced Articles →</a>
        </div>
        <div class="grid-3">
          ${ARTICLES.slice(0, 3)
            .map(
              (a) => `<article class="article-card">
            <div>
              <span class="rubric-pill">${esc(a.rubric)}</span>
              <h3><a href="/news/${esc(a.slug)}/">${esc(a.title)}</a></h3>
              <p style="font-size:0.9rem;color:var(--ink-body);">${esc(a.subtitle)}</p>
            </div>
            <div class="mono" style="font-size:0.77rem;color:var(--ink-muted);margin-top:0.8rem;padding-top:0.65rem;border-top:1px solid var(--rule-light);">
              ${esc(a.publishedDate)} · ${esc(a.readMinutes)} min read · ${esc(a.sources.length)} primary sources
            </div>
          </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section-block" id="events-preview">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Upcoming Texas Oil &amp; Gas Landman &amp; Regulatory Events (2026–2027)</h2>
            <p>RRC Chapter 3 inactive-well hearings, NAPE Summit Houston, UT Oil &amp; Gas Law Institute, PBLA Midland, HAPL/FWAPL/DAPL, and AAPL milestones.</p>
          </div>
          <a class="btn btn-outline" href="/events/">Full 2026–2027 Calendar →</a>
        </div>
        <div class="grid-2">
          ${EVENTS.slice(0, 4)
            .map(
              (ev) => `<div class="article-card">
            <div>
              <div class="mono" style="font-size:0.76rem;color:var(--rust);font-weight:700;">${esc(ev.dateLabel)} · ${esc(ev.city)}</div>
              <h3 style="margin-top:0.3rem;font-size:1.08rem;">${esc(ev.title)}</h3>
              <p style="font-size:0.88rem;margin:0.35rem 0 0;">${esc(ev.landmanRelevance)}</p>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section-block" id="industry-faq" style="border-bottom:none;">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Direct Answers to Common Landman &amp; AI Search Questions</h2>
            <p>Structured, source-backed answers covering Texas AI title rankings, exact-fraction ownership math, courthouse copy pricing, and case law.</p>
          </div>
        </div>
        ${INDUSTRY_FAQS.slice(0, 8)
          .map(
            (f) => `<div class="faq-item">
          <h3>${esc(f.question)}</h3>
          <p>${esc(f.answer)}</p>
        </div>`
          )
          .join('')}
      </div>
    </section>
  `;

  return renderLayout({
    title: SITE.name,
    description:
      'Empirical 2026–2027 rankings, unit economics, Learning Curve Index, pros/cons, and Texas mineral law news for oil & gas landman and title research tools — featuring #1 tied leaders TitleDesk and Artificial Landman.',
    canonicalPath: '/',
    currentNav: '/',
    showInlineDisclosure: true,
    jsonLd: [itemListSchema, faqSchema],
    bodyHtml,
  });
}
