import { SITE } from '../data/site-meta.mjs';
import { MANUAL_TASK_BENCHMARKS } from '../data/unit-economics.mjs';
import { esc, renderLayout } from './layout.mjs';

const E2E_ASSIGNMENTS = [
  ['1. Clean Mineral Takeoff', 'One 640-acre Texas tract, sovereign patent plus one conveyance', 'Baseline runsheet + exact NMA'],
  ['2. Multi-Tract Drilling Unit', 'Five separate tracts, each carrying an independent chain of title', 'Tract-isolated mineral ownership'],
  ['3. Duhig Over-Conveyance', 'Grantor conveys a larger fraction than held while reserving an interest', 'Caught automatically; both figures surfaced for human ruling'],
  ['4. Broken Chain / Stranger to Title', 'Instrument executed by a party with no prior vesting link in the chain', 'Flagged explicitly rather than silently bridged'],
  ['5. Three-Way Probate / Heirship', 'Estate split 1/3 + 1/3 + 1/3 across three heirs', 'BigInt rational ledger sums to exact 1/1 (zero float drift)'],
  ['6. Leasehold & HBP Survival', 'Oil & gas lease past primary term joined against producing RRC well', 'Lease + RRC production status joined'],
  ['7. Out-of-Balance Tract (3/4 Accounted)', 'Chain accounts for 75% of the mineral estate', '25% shortfall stated prominently on report'],
  ['8. Strict Source-Citation Gate', 'Ownership figure entered without an accepted source deed', 'Stamped NOT READY TO ISSUE — UNSUPPORTED SOURCE REQUIRED'],
  ['9. Client A Custom Deliverable', '6-column Excel Due Diligence Report + DDR / OPINIONS folder tree', 'Generated with zero code changes'],
  ['10. Client B Custom Deliverable', '2-column Word Ownership Summary + numbered 01/02 folder tree', 'Same project data exported into second client spec'],
];

export function renderDesktopGuidePage() {
  const softwareSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Title-Desk (Browser Engine & Title-Desk Agent)',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, macOS, Linux, Windows',
      url: 'https://title-desk.com/',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '199.00',
        highPrice: '9999.00',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Artificial Landman',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web (with Companion Desktop Workstation)',
      url: 'https://artificiallandman.io/',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '249.00',
        highPrice: '9999.00',
        priceCurrency: 'USD',
      },
    },
  ];

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">Co-#1 Ranked Architecture Monograph · 96.4 / 100</span>
        <h1>Inside Title-Desk, Artificial Landman &amp; the Title-Desk Agent</h1>
        <p class="lead-deck">
          Why two sister platforms tie for the #1 spot in Texas mineral title research — and how multi-model cross-family browser verification and independent workbook readback pair with local $0 Tesseract OCR and deterministic BigInt fraction arithmetic on the desktop.
        </p>
        <div class="btn-row">
          <a class="btn btn-primary" href="https://title-desk.com/" rel="noopener">Open Title-Desk (title-desk.com)</a>
          <a class="btn btn-primary" href="https://artificiallandman.io/" rel="noopener">Open Artificial Landman (artificiallandman.io)</a>
          <a class="btn btn-outline" href="https://desktop.title-desk.com/" rel="noopener">Title-Desk Agent ($199/mo)</a>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>1. Why Title-Desk &amp; Artificial Landman Tie for #1 Overall</h2>
            <p>Every rival in our 24-tool study automates at most half of the mineral-title production chain — leaving either courthouse reading, exact rational fraction math, or client deliverables unresolved.</p>
          </div>
        </div>
        <div class="grid-2">
          <div class="tool-dossier dossier-leader" style="margin-bottom:0;">
            <h3>The Browser Examination Engine (Title-Desk &amp; Artificial Landman)</h3>
            <p style="font-size:0.93rem;">
              Both <strong>title-desk.com</strong> and <strong>artificiallandman.io</strong> execute the exact same Texas-specific hosted verification pipeline:
            </p>
            <ul class="compact-list">
              <li><strong>Free Pre-Payment Scope Check:</strong> Validates Texas county, abstracts/surveys, gross acreage, and internal packet consistency before charging a cent.</li>
              <li><strong>Examiner Model 1 (Chain Builder):</strong> Reads every recorded instrument and builds the chronological chain of title with exact Vol/Page or Document # citations.</li>
              <li><strong>Examiner Model 2 (Independent Ownership Examiner):</strong> Independently works all conveyances, reservations, Duhig steps, double fractions, and pre/post-Sept. 1, 1993 Texas community-property intestacy splits.</li>
              <li><strong>Cross-Family Validator (Model 3) &amp; Readback Gate:</strong> An independent third model from a separate provider inspects the final answer against the scanned page images, giving the examiner one repair pass and keeping any still-unresolved tract as a proposal leading the curative requirements; an independent reader then reopens the written .xlsx file and stops delivery on any mismatch.</li>
              <li><strong>Four-Sheet Excel Deliverable:</strong> Outputs <code>Summary</code>, <code>Ownership</code>, <code>Runsheet</code>, and <code>Title Review</code> — explicitly naming any referenced prior deed missing from the upload packet.</li>
            </ul>
          </div>
          <div class="tool-dossier dossier-leader" style="margin-bottom:0;">
            <h3>The Local Workstation: Title-Desk Agent (desktop.title-desk.com)</h3>
            <p style="font-size:0.93rem;">
              For working landmen, title attorneys, and brokerages managing multi-tract units, rural courthouse photo archives, and strict operator deliverable specs:
            </p>
            <ul class="compact-list">
              <li><strong>$0 Local Tesseract OCR + Multi-Page TIFF Rendering:</strong> Runs locally via Tesseract + <code>@napi-rs/canvas</code> in the main process — zero cloud per-page OCR charges on 2,000-page archives.</li>
              <li><strong>Deterministic BigInt Exact-Fraction Math:</strong> LLMs never touch arithmetic. Every conveyance is computed as exact BigInt numerators/denominators (<code>1/3 + 1/3 + 1/3 = 1/1</code> exact) with automatic tract balance checks.</li>
              <li><strong>Human Propose → Accept Gates:</strong> Extracted instruments remain inert proposals until a human examiner accepts them; unbacked report rows trigger <code>NOT READY TO ISSUE</code>.</li>
              <li><strong>BYO Portals &amp; BYO AI:</strong> Connects to your CountyRecords.com, CourthouseDirect, and TexasFile accounts plus Texas RRC data, using ChatGPT/Codex, Claude, API keys, or air-gapped local Ollama.</li>
              <li><strong>Multi-Client Deliverables &amp; Billing:</strong> Exports custom Excel/Word reports, builds numbered client folder trees, and tracks time/expenses to the exact cent.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>2. Complete Published Pricing Matrix (Browser Runs, Plans &amp; Desktop Agent)</h2>
            <p>Zero "book a sales call" gates — every single run tier, subscription bundle, and workstation seat price is published openly.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Product &amp; Tier</th>
                <th>Published Price</th>
                <th>Included Volume / Seats</th>
                <th>Effective Unit Cost</th>
                <th>Key Terms &amp; Safeguards</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-leader">
                <td><strong>First Upload Run Trial</strong> (Web / AL)</td>
                <td class="mono"><strong>$0 Free</strong></td>
                <td>1st upload run up to 150 pages</td>
                <td class="mono">$0.00</td>
                <td>Full 3-model verified 4-sheet Excel output</td>
              </tr>
              <tr>
                <td><strong>Upload Run</strong> (Title-Desk &amp; Artificial Landman)</td>
                <td class="mono"><strong>$249 / run</strong></td>
                <td>Up to 400 pages (+$40 per extra 200 pp)</td>
                <td class="mono">$249.00 / run (~$0.62/pp)</td>
                <td>Open self-serve; free pre-run scope check; full credit if run fails</td>
              </tr>
              <tr>
                <td><strong>Hybrid Run</strong> (Web &amp; Artificial Landman)</td>
                <td class="mono"><strong>$349 / run</strong></td>
                <td>Up to 400 pp + $60 record copies included</td>
                <td class="mono">$289 net of copy allowance</td>
                <td>By invitation; missing chain deeds retrieved; extra copies require user approval</td>
              </tr>
              <tr>
                <td><strong>Full-Service Run</strong> (Web &amp; Artificial Landman)</td>
                <td class="mono"><strong>$449 / run</strong></td>
                <td>Up to 400 pp + $125 record copies included</td>
                <td class="mono">$324 net of copy allowance</td>
                <td>By invitation; full document retrieval from assignment intake</td>
              </tr>
              <tr>
                <td><strong>Solo Plan</strong> (Web &amp; Artificial Landman)</td>
                <td class="mono"><strong>$1,299 / mo</strong> ($12,990/yr)</td>
                <td>8 runs / mo · 1 seat ($219 extra run)</td>
                <td class="mono"><strong>$162.38 / run</strong> ($135.31 annual)</td>
                <td>Annual billing grants 2 months free; email support</td>
              </tr>
              <tr>
                <td><strong>Pro Plan</strong> (Web &amp; Artificial Landman)</td>
                <td class="mono"><strong>$3,899 / mo</strong> ($38,990/yr)</td>
                <td>25 runs / mo · 3 seats ($199 extra run)</td>
                <td class="mono"><strong>$155.96 / run</strong> ($129.97 annual)</td>
                <td>Built for small title shops &amp; partnerships; next-business-day support</td>
              </tr>
              <tr>
                <td><strong>Enterprise Hosted Plan</strong> (Web &amp; AL)</td>
                <td class="mono"><strong>$9,999 / mo</strong> ($99,990/yr)</td>
                <td>70 runs / mo · 10 seats ($179 extra run)</td>
                <td class="mono"><strong>$142.84 / run</strong> ($119.04 annual)</td>
                <td>No retrieval fee; email &amp; phone support for land departments</td>
              </tr>
              <tr class="row-leader">
                <td><strong>Title-Desk Agent — Individual</strong></td>
                <td class="mono"><strong>$199 / seat / mo</strong></td>
                <td>Unlimited local projects &amp; $0 local OCR</td>
                <td class="mono">$19.90/run @ 10 runs/mo</td>
                <td>7-day trial ($1 card check refunded) or month-to-month; BYO AI &amp; portals</td>
              </tr>
              <tr>
                <td><strong>Title-Desk Agent — Enterprise</strong></td>
                <td class="mono"><strong>$349 / seat / mo</strong> ($4,188/yr)</td>
                <td>Company workspaces + Customization Lab</td>
                <td class="mono">$349/seat/mo (12-mo term)</td>
                <td>Free 14-day 5-computer demo; optional $5,000 15-day custom build-out; $199/mo Yr-1 Founder 40+ seat tier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-block" style="border-bottom:none;">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>3. Reproducible 10-Assignment Desktop Pipeline Verification</h2>
            <p>Measured end-to-end across ten synthetic title assignments exercising clean takeoffs, 5-tract units, Duhig over-conveyances, broken chains, 3-way heirship splits, HBP wells, shortfalls, and multi-client deliverables (saving 17.6 manual hours across 33 compact test files).</p>
          </div>
        </div>
        <div class="table-wrap" style="margin-bottom:1.5rem;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Benchmark Assignment</th>
                <th>Title Defect / Scenario Exercised</th>
                <th>Verified System Outcome</th>
              </tr>
            </thead>
            <tbody>
              ${E2E_ASSIGNMENTS.map(
                (r) => `<tr>
                <td><strong>${esc(r[0])}</strong></td>
                <td>${esc(r[1])}</td>
                <td>${esc(r[2])}</td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>

        <h3>Task-Level Manual Time Benchmarks Replaced</h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Mechanical Title Task</th>
                <th>Conservative Manual Minutes</th>
                <th>45-Deed Chain Manual Time</th>
                <th>How Title-Desk &amp; Artificial Landman Handle It</th>
              </tr>
            </thead>
            <tbody>
              ${MANUAL_TASK_BENCHMARKS.map(
                (m) => `<tr>
                <td>${esc(m.task)}</td>
                <td class="mono">${esc(m.manualMinutes)} min</td>
                <td class="mono">${esc(m.typical45DocChainMinutes)} min</td>
                <td>${esc(m.automatedByTitleDeskAndAL)}</td>
              </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    title: 'Title-Desk, Artificial Landman & Title-Desk Agent — Co-#1 Technical Deep Dive',
    description:
      'In-depth architectural review of co-#1 ranked Title-Desk (title-desk.com), Artificial Landman (artificiallandman.io), and Title-Desk Agent (desktop.title-desk.com): 3-model verification, BigInt fraction math, local $0 OCR, and full pricing.',
    canonicalPath: '/titledesk-desktop/',
    currentNav: '/titledesk-desktop/',
    breadcrumbs: [{ href: '/titledesk-desktop/', label: 'Title-Desk & Artificial Landman Deep Dive' }],
    showInlineDisclosure: true,
    customDisclosureText: SITE.disclosureArticleOwnProduct,
    jsonLd: softwareSchema,
    bodyHtml,
  });
}
