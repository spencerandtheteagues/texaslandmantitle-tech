import { SITE } from '../data/site-meta.mjs';
import { ALL_RANKED_TOOLS } from '../data/tools-ecosystem.mjs';
import {
  HEAD_TO_HEAD_COMPARISONS,
  WORKFLOW_DECISION_MATRIX,
  INDUSTRY_FAQS,
} from '../data/comparisons.mjs';
import { esc, renderLayout } from './layout.mjs';

export function renderComparePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INDUSTRY_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const defaultA = ALL_RANKED_TOOLS[0];
  const defaultB = ALL_RANKED_TOOLS[2];

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">Side-by-Side Tool Comparator &amp; Buyer Matchups</span>
        <h1>Head-to-Head Texas Landman &amp; Title Software Comparisons</h1>
        <p class="lead-deck">
          Compare any two of the 24 benchmarked tools line by line across pricing, Texas county scope, unit economics, Learning Curve Index, and exact workflow fit.
        </p>
      </div>
    </section>

    <section class="section-block" id="interactive-comparator">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>1. Interactive Two-Tool Side-by-Side Matrix</h2>
            <p>Select any two platforms from our 24-tool dataset to compare documented pricing, savings, complexity, and LCI proficiency speed.</p>
          </div>
        </div>
        <div class="filter-bar">
          <label for="comp-select-a" class="mono" style="font-size:0.8rem;font-weight:700;">Platform A:</label>
          <select id="comp-select-a" style="flex:1;min-width:220px;">
            ${ALL_RANKED_TOOLS.map(
              (t, i) =>
                `<option value="${esc(t.id)}"${i === 0 ? ' selected' : ''}>${esc(t.rankDisplay)} — ${esc(
                  t.name
                )}</option>`
            ).join('')}
          </select>
          <label for="comp-select-b" class="mono" style="font-size:0.8rem;font-weight:700;">Platform B:</label>
          <select id="comp-select-b" style="flex:1;min-width:220px;">
            ${ALL_RANKED_TOOLS.map(
              (t, i) =>
                `<option value="${esc(t.id)}"${i === 2 ? ' selected' : ''}>${esc(t.rankDisplay)} — ${esc(
                  t.name
                )}</option>`
            ).join('')}
          </select>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width:230px;">Dimension</th>
                <th id="comp-col-a">${esc(defaultA.name)}</th>
                <th id="comp-col-b">${esc(defaultB.name)}</th>
              </tr>
            </thead>
            <tbody id="comp-live-body">
              <tr><th>Benchmark Rank &amp; Score</th><td>${esc(defaultA.rankDisplay)} (${esc(
    defaultA.compositeScore
  )}/100)</td><td>${esc(defaultB.rankDisplay)} (${esc(defaultB.compositeScore)}/100)</td></tr>
              <tr><th>Published Pricing</th><td>${esc(defaultA.pricingSummary)}</td><td>${esc(
    defaultB.pricingSummary
  )}</td></tr>
              <tr><th>Texas Coverage</th><td>${esc(defaultA.texasCoverage)}</td><td>${esc(
    defaultB.texasCoverage
  )}</td></tr>
              <tr><th>Effective Cost / Assignment</th><td>${esc(
                defaultA.unitEconomics.effectiveCostPerAssignment
              )}</td><td>${esc(defaultB.unitEconomics.effectiveCostPerAssignment)}</td></tr>
              <tr><th>Learning Curve Index</th><td>LCI ${esc(defaultA.usability.lciScore)}/100 (${esc(
    defaultA.usability.timeToProficiency
  )})</td><td>LCI ${esc(defaultB.usability.lciScore)}/100 (${esc(
    defaultB.usability.timeToProficiency
  )})</td></tr>
            </tbody>
          </table>
        </div>
        <script type="application/json" id="comparator-dataset">${JSON.stringify(ALL_RANKED_TOOLS).replace(
          /</g,
          '\\u003c'
        )}</script>
      </div>
    </section>

    <section class="section-block" id="matchups">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>2. Five Critical Buyer Matchups Explained in Depth</h2>
            <p>Detailed guidance on the exact head-to-head questions Texas landmen, brokerages, and E&amp;P teams ask most often.</p>
          </div>
        </div>
        ${HEAD_TO_HEAD_COMPARISONS.map(
          (m) => `<article class="tool-dossier" id="${esc(m.id)}">
          <span class="rubric-pill">${esc(m.verdict)}</span>
          <h3 style="font-size:1.35rem;">${esc(m.title)}</h3>
          <p>${esc(m.summary)}</p>
          <div class="dossier-columns">
            <div class="box-pros">
              <h4>${esc(m.chooseLeftLabel)}</h4>
              <ul class="compact-list">
                ${m.chooseLeftPoints.map((pt) => `<li>${esc(pt)}</li>`).join('')}
              </ul>
            </div>
            <div class="box-econ">
              <h4>${esc(m.chooseRightLabel)}</h4>
              <ul class="compact-list">
                ${m.chooseRightPoints.map((pt) => `<li>${esc(pt)}</li>`).join('')}
              </ul>
            </div>
          </div>
        </article>`
        ).join('\n')}
      </div>
    </section>

    <section class="section-block" id="workflow-fit">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>3. Exact Stack Recommendation by Landman Job Type</h2>
            <p>Which primary engine and supporting courthouse portals deliver the highest net return for five common Texas roles.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Real-World Texas Land &amp; Title Scenario</th>
                <th>Recommended Primary Software</th>
                <th>Optimal Courthouse Portals</th>
                <th>Unit-Economics Rationale</th>
              </tr>
            </thead>
            <tbody>
              ${WORKFLOW_DECISION_MATRIX.map(
                (w) => `<tr>
                <td><strong>${esc(w.scenario)}</strong></td>
                <td>${esc(w.recommendedPrimary)}</td>
                <td>${esc(w.supportingPortals)}</td>
                <td>${esc(w.whyItWins)}</td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-block" style="border-bottom:none;">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>4. Complete Buyer &amp; Technical FAQ (10 Core Questions)</h2>
          </div>
        </div>
        ${INDUSTRY_FAQS.map(
          (f) => `<div class="faq-item">
          <h3>${esc(f.question)}</h3>
          <p>${esc(f.answer)}</p>
        </div>`
        ).join('')}
      </div>
    </section>
  `;

  return renderLayout({
    title: 'Head-to-Head Texas Landman Software Comparisons & Decision Matrix',
    description:
      'Compare TitleDesk and Artificial Landman (#1 Tied) head-to-head against Enverus Courthouse, Energy Domain TitleLab, Landman.ai, Rowland, TitleMine, Landspect, Quorum Land, and IFS iLandMan.',
    canonicalPath: '/compare/',
    currentNav: '/compare/',
    breadcrumbs: [{ href: '/compare/', label: 'Head-to-Head Compare' }],
    showInlineDisclosure: true,
    jsonLd: [faqSchema],
    bodyHtml,
  });
}
