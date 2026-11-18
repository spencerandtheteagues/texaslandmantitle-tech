import { SITE } from '../data/site-meta.mjs';
import {
  MANUAL_TASK_BENCHMARKS,
  STANDARD_ASSIGNMENT_MODEL,
  COURTHOUSE_PORTAL_RATES_2026,
  VOLUME_UNIT_ECONOMICS,
} from '../data/unit-economics.mjs';
import { renderCalculatorWidget } from './home.mjs';
import { esc, renderLayout } from './layout.mjs';

export function renderUnitEconomicsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '2026–2027 Texas Mineral Title Unit Economics: Cost vs. Gain, Courthouse Record Fees & Break-Even Analysis',
    datePublished: SITE.editionDate,
    dateModified: SITE.editionDate,
    url: `${SITE.origin}/unit-economics/`,
  };

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">Empirical Cost vs. Gain &amp; Break-Even Study</span>
        <h1>Texas Landman Software Unit Economics: Time, Work &amp; Net Dollar Savings</h1>
        <p class="lead-deck">
          A rigorous per-assignment and monthly unit-economics breakdown comparing manual $600/day abstracting against TitleDesk, Artificial Landman, TitleDesk Desktop Agent, point tools, and Texas courthouse record portals.
        </p>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>1. Interactive Monthly ROI &amp; Per-Assignment Cost Calculator</h2>
            <p>Adjust monthly tract volume, average pages per chain, CPL day rate, and courthouse copy strategy to see exact all-in unit costs.</p>
          </div>
        </div>
        ${renderCalculatorWidget()}
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>2. Multi-Volume Cost Curve: 1 to 70 Assignments per Month</h2>
            <p>Modeled on a representative Texas mineral chain (${esc(STANDARD_ASSIGNMENT_MODEL.label)}) at $${esc(
    STANDARD_ASSIGNMENT_MODEL.dayRateDefault
  )}/day ($75/hr) CPL verification labor, before county record copy pass-throughs.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Workflow / Software Stack</th>
                <th>Pricing &amp; Labor Basis</th>
                <th>1 Run/Mo</th>
                <th>5 Runs/Mo</th>
                <th>10 Runs/Mo</th>
                <th>25 Runs/Mo</th>
                <th>70 Runs/Mo</th>
                <th>All-In Cost / Run (@10)</th>
                <th>Idle Month Burn</th>
              </tr>
            </thead>
            <tbody>
              ${VOLUME_UNIT_ECONOMICS.map(
                (v, idx) => `<tr class="${idx === 1 || idx === 2 ? 'row-leader' : ''}">
                <td><strong>${esc(v.option)}</strong></td>
                <td style="font-size:0.8rem;">${esc(v.pricingBasis)}</td>
                <td class="mono">${esc(v.cost1Run)}</td>
                <td class="mono">${esc(v.cost5Runs)}</td>
                <td class="mono"><strong>${esc(v.cost10Runs)}</strong></td>
                <td class="mono">${esc(v.cost25Runs)}</td>
                <td class="mono">${esc(v.cost70Runs)}</td>
                <td class="mono"><strong>${esc(v.perRunAt10)}</strong></td>
                <td class="mono">${esc(v.idleMonthBurn)}</td>
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
            <h2>3. 2026 Texas Courthouse Record Copy Fee Schedule</h2>
            <p>Verified public pricing across TexasFile, CourthouseDirect.com, CountyRecords.com, and public GLO/RRC/Kofile portals — showing why viewing before buying saves 60%–75% on copy bills.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Portal</th>
                <th>Monthly Base</th>
                <th>Index Search</th>
                <th>Preview / View Rate</th>
                <th>Image / Doc Download Rate</th>
                <th>County Plant Option</th>
                <th>260-Page Chain Copy Cost</th>
                <th>Optimal Role</th>
              </tr>
            </thead>
            <tbody>
              ${COURTHOUSE_PORTAL_RATES_2026.map(
                (p) => `<tr>
                <td><strong><a href="${esc(p.url)}" rel="noopener">${esc(p.portal)}</a></strong></td>
                <td class="mono">${esc(p.monthlyBase)}</td>
                <td>${esc(p.indexSearch)}</td>
                <td>${esc(p.previewViewCost)}</td>
                <td>${esc(p.imageDownloadCost)}</td>
                <td>${esc(p.subscriptionPlantOption)}</td>
                <td class="mono"><strong>${esc(p.sample260PagePacketCost)}</strong></td>
                <td style="font-size:0.81rem;">${esc(p.bestFor)}</td>
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
            <h2>4. Anatomy of the 19.3 Manual Hours Per Texas Mineral Assignment</h2>
            <p>Conservative task-level minute assumptions derived from experienced Texas landman workflows and the reproducible 10-assignment pipeline test harness.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Task Component</th>
                <th>Manual Unit Time</th>
                <th>Representative 45-Deed Chain</th>
                <th>Automation Mechanism in #1 Tied Leaders</th>
              </tr>
            </thead>
            <tbody>
              ${MANUAL_TASK_BENCHMARKS.map(
                (b) => `<tr>
                <td>${esc(b.task)}</td>
                <td class="mono">${esc(b.manualMinutes)} min</td>
                <td class="mono">${esc(b.typical45DocChainMinutes)} min</td>
                <td>${esc(b.automatedByTitleDeskAndAL)}</td>
              </tr>`
              ).join('')}
              <tr class="row-leader">
                <td><strong>Total Mechanical Production Work</strong></td>
                <td class="mono">—</td>
                <td class="mono"><strong>1,156 min (19.3 hrs)</strong></td>
                <td><strong>Compressed to ~2.2 – 2.8 hrs of high-value human CPL review &amp; curative judgment</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    title: 'Unit Economics, Cost vs. Gain & Courthouse Fee Guide for Texas Landman Tools',
    description:
      'Detailed unit economics, ROI break-even calculator, and 2026 Texas courthouse copy fee comparison across TitleDesk, Artificial Landman, TitleDesk Desktop Agent, TitleMine, Rowland, TexasFile, CourthouseDirect, and CountyRecords.com.',
    canonicalPath: '/unit-economics/',
    currentNav: '/unit-economics/',
    breadcrumbs: [{ href: '/unit-economics/', label: 'Unit Economics & ROI' }],
    showInlineDisclosure: true,
    jsonLd: [articleSchema],
    bodyHtml,
  });
}
