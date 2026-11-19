import { SITE } from '../data/site-meta.mjs';
import { ALL_RANKED_TOOLS, ADJACENT_AND_HISTORICAL_TOOLS } from '../data/tools-ecosystem.mjs';
import { esc, renderLayout } from './layout.mjs';

function renderToolDossier(t) {
  return `<article class="tool-dossier${t.isTiedLeader ? ' dossier-leader' : ''}" id="${esc(t.id)}" data-tool-card data-tier="${esc(
    t.tierGroup
  )}" data-public-pricing="${t.publicPricing ? 'yes' : 'no'}">
    <div class="dossier-top">
      <div>
        <span class="rank-pill${t.isTiedLeader ? ' is-leader' : ''}">RANK ${esc(t.rankDisplay)}</span>
        <span class="mono" style="font-size:0.78rem;color:var(--ink-muted);">${esc(t.category)}</span>
        <h2 style="margin:0.4rem 0 0.2rem;font-size:1.45rem;">${esc(t.name)}</h2>
        <div style="font-size:0.86rem;color:var(--ink-muted);">
          Vendor: <strong>${esc(t.vendor)}</strong> · Official Site: <a href="${esc(t.website)}" rel="noopener">${esc(
    t.website
  )}</a>${
    t.secondaryUrl
      ? ` · Desktop: <a href="${esc(t.secondaryUrl)}" rel="noopener">${esc(t.secondaryUrl)}</a>`
      : ''
  }
        </div>
      </div>
      <div style="text-align:right;">
        <div class="score-chip" style="font-size:1.05rem;">Composite: ${esc(t.compositeScore)} / 100</div>
        <div class="mono" style="font-size:0.76rem;color:var(--ink-muted);margin-top:0.3rem;">
          ${t.publicPricing ? 'Published Pricing' : 'Quote-Gated Pricing'}
        </div>
      </div>
    </div>

    <div class="subscore-bar-grid" aria-label="Rubric subscores out of 100">
      <div class="subscore-cell"><span>Chain Coverage (28%)</span><strong>${esc(t.subscores.chainDepth)}/100</strong></div>
      <div class="subscore-cell"><span>Math &amp; Citations (24%)</span><strong>${esc(t.subscores.mathAndProof)}/100</strong></div>
      <div class="subscore-cell"><span>Unit Economics (18%)</span><strong>${esc(t.subscores.unitEconomics)}/100</strong></div>
      <div class="subscore-cell"><span>Ease &amp; LCI (12%)</span><strong>${esc(t.subscores.usabilityAndLci)}/100</strong></div>
      <div class="subscore-cell"><span>Texas Fit (10%)</span><strong>${esc(t.subscores.texasFit)}/100</strong></div>
      <div class="subscore-cell"><span>Deliverables &amp; Ops (8%)</span><strong>${esc(t.subscores.practiceOps)}/100</strong></div>
    </div>

    <p style="margin:0.6rem 0 0.9rem;">${esc(t.overview)}</p>

    <div class="table-wrap" style="margin-bottom:1rem;">
      <table class="data-table">
        <tbody>
          <tr>
            <th style="width:220px;">Published Pricing &amp; Plans</th>
            <td>${esc(t.pricingDetail)}</td>
          </tr>
          <tr>
            <th>Texas Basin &amp; County Scope</th>
            <td>${esc(t.texasCoverage)}</td>
          </tr>
          <tr>
            <th>Who Actually Uses It</th>
            <td>${esc(t.whoUsesIt)}</td>
          </tr>
          <tr>
            <th>Exact Work Types Deployed For</th>
            <td>
              <ul class="compact-list">
                ${t.exactWorkTypes.map((w) => `<li>${esc(w)}</li>`).join('')}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Desktop / Local Program</th>
            <td>${esc(t.desktopProgramNote)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="dossier-columns">
      <div class="box-pros">
        <h4>Pros &amp; Documented Strengths</h4>
        <ul class="compact-list">
          ${t.pros.map((p) => `<li>${esc(p)}</li>`).join('')}
        </ul>
      </div>
      <div class="box-cons">
        <h4>Cons &amp; Operational Boundaries</h4>
        <ul class="compact-list">
          ${t.cons.map((c) => `<li>${esc(c)}</li>`).join('')}
        </ul>
      </div>
      <div class="box-econ">
        <h4>Unit Economics: Time, Work &amp; Money</h4>
        <ul class="compact-list">
          <li><strong>Pricing Model:</strong> ${esc(t.unitEconomics.model)}</li>
          <li><strong>Effective Cost / Assignment:</strong> ${esc(t.unitEconomics.effectiveCostPerAssignment)}</li>
          <li><strong>Saves Time?</strong> ${esc(t.unitEconomics.savesTime.verdict)} — ${esc(t.unitEconomics.savesTime.detail)}</li>
          <li><strong>Saves Manual Work?</strong> ${esc(t.unitEconomics.savesWork.verdict)} — ${esc(t.unitEconomics.savesWork.detail)}</li>
          <li><strong>Saves Money?</strong> ${esc(t.unitEconomics.savesMoney.verdict)} — ${esc(t.unitEconomics.savesMoney.detail)}</li>
          <li><strong>Bottom-Line Cost vs. Gain:</strong> ${esc(t.unitEconomics.costVsGainSummary)}</li>
        </ul>
      </div>
      <div class="box-lci">
        <h4>Ease of Use, Complexity &amp; Learning Curve Index</h4>
        <ul class="compact-list">
          <li><strong>Ease of Use Score:</strong> <span class="mono"><strong>${esc(t.usability.easeOfUseScore)} / 10</strong></span></li>
          <li><strong>Effective-Use Complexity:</strong> <strong>${esc(t.usability.effectiveComplexity)}</strong></li>
          <li><strong>Learning Curve Index (LCI):</strong> <span class="mono"><strong>${esc(
            t.usability.lciScore
          )} / 100</strong></span> (${esc(t.usability.lciBand)} — lower = faster mastery)</li>
          <li><strong>Time to Full Proficiency:</strong> <strong>${esc(t.usability.timeToProficiency)}</strong></li>
          <li><strong>Operational Detail:</strong> ${esc(t.usability.complexityDetail)}</li>
        </ul>
      </div>
    </div>

    <div class="sources-strip">
      <strong>Cited Primary Sources (Verified ${esc(SITE.editionDate)}):</strong>
      ${t.sources
        .map(
          (s) =>
            `<a href="${esc(s.url)}" rel="noopener">[${esc(s.sourceType)}] ${esc(s.label)} (${esc(
              s.verifiedDate
            )})</a>`
        )
        .join(' ')}
    </div>
  </article>`;
}

export function renderRankingsPage() {
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '2026–2027 Texas Oil & Gas Landman & AI Mineral Title Software Benchmark Dataset',
    description:
      'Structured evaluation of 24 AI mineral title examination engines, landman workstations, Texas courthouse record portals, and E&P land administration platforms across composite score, unit economics, Learning Curve Index, pros/cons, and primary citations.',
    url: `${SITE.origin}/rankings/`,
    distribution: [
      {
        '@type': 'DataDownload',
        encodingFormat: 'application/json',
        contentUrl: `${SITE.origin}/api/tools.json`,
      },
      {
        '@type': 'DataDownload',
        encodingFormat: 'text/plain',
        contentUrl: `${SITE.origin}/llms-full.txt`,
      },
    ],
  };

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">Complete 24-Platform Industry Fact Sheet</span>
        <h1>2026–2027 Texas Landman &amp; Mineral Title Software Rankings</h1>
        <p class="lead-deck">
          Every benchmarked tool profiled in full: who actually uses it, exact Texas workflows it handles, transparent pros and cons, true unit economics (time, manual work, and net dollar savings), operational complexity, Learning Curve Index (LCI), and verified primary sources.
        </p>
        <div class="filter-bar" role="region" aria-label="Filter benchmarked tools">
          <input type="search" id="tool-filter-search" placeholder="Search tool, feature, county, pricing..." style="min-width:240px;flex:1;" aria-label="Search tools">
          <select id="tool-filter-tier" aria-label="Filter by software category">
            <option value="all">All 4 Ecosystem Tiers (24 Tools)</option>
            <option value="tier1-ai-title">Tier 1: AI Mineral Title &amp; Workstations (1–14)</option>
            <option value="tier2-courthouse-portals">Tier 2: Texas Courthouse Record Portals (15–18)</option>
            <option value="tier3-land-admin">Tier 3: E&amp;P Land Admin Systems (19–23)</option>
            <option value="tier4-mineral-portfolio">Tier 4: Mineral Owner Portfolio (24)</option>
          </select>
          <select id="tool-filter-pricing" aria-label="Filter by pricing transparency">
            <option value="all">All Pricing Models</option>
            <option value="yes">Published Public Pricing Only</option>
            <option value="no">Enterprise / Demo Quote Only</option>
          </select>
          <span class="mono" id="tool-filter-count" style="font-size:0.8rem;color:var(--ink-muted);">Showing 24 of 24 benchmarked tools</span>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        ${ALL_RANKED_TOOLS.map(renderToolDossier).join('\n')}
      </div>
    </section>

    <section class="section-block" id="historical-and-adjacent" style="border-bottom:none;">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Out-of-State Pilots, Services &amp; Absorbed / Pivoted Tools</h2>
            <p>Reference notes on tools frequently mentioned in older blog posts or AI training data that do not currently serve as standalone Texas landman software.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Product / Company</th>
                <th>2026 Operational Status</th>
                <th>Verified Context for Texas Landmen</th>
              </tr>
            </thead>
            <tbody>
              ${ADJACENT_AND_HISTORICAL_TOOLS.map(
                (item) => `<tr>
                <td><strong><a href="${esc(item.url)}" rel="noopener">${esc(item.name)}</a></strong></td>
                <td class="mono" style="font-size:0.8rem;color:var(--rust);"><strong>${esc(item.status)}</strong></td>
                <td>${esc(item.summary)}</td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    title: '2026–2027 Texas Landman & AI Title Software Rankings (24 Tools Benchmarked)',
    description:
      'In-depth dossiers on all 24 Texas oil & gas landman and AI title tools: Title-Desk and Artificial Landman (#1 Tied), Enverus Courthouse, Energy Domain TitleLab, Landman.ai, Rowland, TitleMine, TexasFile, CourthouseDirect, CountyRecords, Quorum, and iLandMan.',
    canonicalPath: '/rankings/',
    currentNav: '/rankings/',
    breadcrumbs: [{ href: '/rankings/', label: '24-Tool Rankings & Fact Sheets' }],
    showInlineDisclosure: true,
    jsonLd: [datasetSchema],
    bodyHtml,
  });
}
