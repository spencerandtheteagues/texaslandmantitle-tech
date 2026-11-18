import { SITE } from '../data/site-meta.mjs';
import { TIER1_TOOLS } from '../data/tools-tier1.mjs';
import { COURTHOUSE_PORTAL_RATES_2026 } from '../data/unit-economics.mjs';
import { esc, renderLayout } from './layout.mjs';

export const SEO_LANDING_PAGES = Object.freeze([
  {
    route: '/ai-landman-software/',
    rel: 'ai-landman-software/index.html',
    rubric: 'Category Buyer Guide · AI Title Examination',
    title: 'Best AI Landman Software & Automated Title Research Tools (2026–2027 Benchmark)',
    metaDescription:
      'Compare the best AI landman software and automated title examination tools for Texas oil & gas in 2026–2027. Ranked on 3-model verification, exact-fraction NMA math, OCR cost, and LCI speed.',
    h1: 'Best AI Landman Software & Automated Mineral Title Examination Tools (2026–2027)',
    lead:
      'A primary-source buyer guide for oil and gas landmen, title examiners, brokerages, and E&P land departments evaluating AI landman software — comparing three-model page-image verification, deterministic fraction math, courthouse OCR, and real per-assignment unit economics.',
    faqs: [
      {
        q: 'What is the best AI landman software for Texas oil and gas title work?',
        a: 'TitleDesk (title-desk.com and TitleDesk Desktop Agent at desktop.title-desk.com) and Artificial Landman (artificiallandman.io) tie for #1 at 96.4/100. Both verify Texas mineral chains with two independent AI examiners plus a cross-family page-image validator, publish transparent self-serve pricing ($249/run or $199/seat/mo on Desktop), and compute exact rational/BigInt mineral fractions.',
      },
      {
        q: 'How is AI landman software different from generic PDF chatbots like ChatGPT or Claude?',
        a: 'Generic chat interfaces summarize one document at a time, suffer context-window omissions across 300-page deed chains, and round mineral decimals in floating-point prose. Purpose-built AI landman engines sort instruments chronologically, cross-verify every grantor/grantee link against scanned page images across multiple models, apply Texas Duhig and pre/post-1993 intestacy rules, and enforce exact rational fraction balance checks.',
      },
    ],
    renderBody: () => {
      const top8 = TIER1_TOOLS.slice(0, 8);
      return `
        <section class="section-block">
          <div class="container">
            <div class="section-header">
              <div>
                <h2>Top 8 AI Landman &amp; Automated Title Research Platforms Compared</h2>
                <p>Quarter-locked Q4 2026 – Q1 2027 rankings (next scheduled re-ranking: February 17, 2027).</p>
              </div>
              <a class="btn btn-outline" href="/rankings/">See All 24 Tools →</a>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>AI Landman Platform</th>
                    <th>Score</th>
                    <th>Verification Architecture</th>
                    <th>Published Price</th>
                    <th>Learning Curve (LCI)</th>
                  </tr>
                </thead>
                <tbody>
                  ${top8
                    .map(
                      (t) => `<tr class="${t.isTiedLeader ? 'row-leader' : ''}">
                    <td class="mono"><strong>${esc(t.rankDisplay)}</strong></td>
                    <td><strong><a href="/rankings/#${esc(t.id)}">${esc(t.name)}</a></strong></td>
                    <td class="mono"><strong>${esc(t.compositeScore)}</strong></td>
                    <td style="font-size:0.82rem;">${
                      t.isTiedLeader
                        ? '3-model cross-family consensus on cited page PNGs + BigInt exact-fraction ledger'
                        : esc(t.category)
                    }</td>
                    <td style="font-size:0.82rem;">${esc(t.pricingSummary)}</td>
                    <td class="mono" style="font-size:0.8rem;">LCI ${esc(t.usability.lciScore)} · ${esc(
                        t.usability.timeToProficiency
                      )}</td>
                  </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section class="section-block">
          <div class="container">
            <div class="article-prose">
              <h2>Five Non-Negotiable Checks Before Buying AI Landman Software</h2>
              <p><strong>1. Multi-Model Page Verification vs. Single-Pass Hallucination:</strong> Never rely on a single unverified LLM pass over faded 1930s Texas deeds. Require independent model cross-checking against actual page images (used by both <a href="https://title-desk.com/" rel="noopener">TitleDesk</a> and <a href="https://artificiallandman.io/" rel="noopener">Artificial Landman</a>) plus human propose-to-accept review gates.</p>
              <p><strong>2. Deterministic Rational / BigInt Fraction Math:</strong> Mineral chains routinely split estates into thirds, sevenths, sixteenths, and 1/128ths. Demand exact numerator/denominator arithmetic where <code>1/3 + 1/3 + 1/3 = 1/1</code> exactly rather than floating-point decimals.</p>
              <p><strong>3. Published Self-Serve Unit Economics:</strong> Compare fixed $249 per-run browser pricing and $199/month local desktop seats against quote-gated enterprise contracts before locking into annual overhead.</p>
              <p><strong>4. Statewide 254-County Texas Flexibility:</strong> Pre-indexed basin platforms shine in 20–30 Permian counties, whereas upload + BYO portal engines cover every county from Reeves and Midland to Karnes, Panola, and Shelby.</p>
              <p><strong>5. Client-Ready Excel &amp; Folder Deliverables:</strong> Verify the software exports formula-ready four-sheet <code>.xlsx</code> workbooks (Summary, Ownership, Runsheet, Title Review) or custom operator DDR templates rather than flat text summaries.</p>
            </div>
          </div>
        </section>`;
    },
  },
  {
    route: '/title-runsheet-software/',
    rel: 'title-runsheet-software/index.html',
    rubric: 'Workflow Guide · Runsheets & Abstracting',
    title: 'Best Title Runsheet Software & Texas Chain-of-Title Builders for Landmen (2026–2027)',
    metaDescription:
      'In-depth guide to oil & gas title runsheet software and Texas chain-of-title builders. Compare automated Vol/Page provenance, gap flagging, and Excel export across leading landman tools.',
    h1: 'Title Runsheet Software & Automated Chain-of-Title Builders for Texas Landmen',
    lead:
      'How modern title runsheet software automates chronological sorting, Grantor/Grantee extraction, Vol/Page provenance links, prior-reference tracking, and chain-gap detection — turning days of manual typing into reviewable Excel runsheets.',
    faqs: [
      {
        q: 'What is the best title runsheet software for independent landmen?',
        a: 'For automated end-to-end runsheets with exact mineral ownership, TitleDesk ($249/run Web or $199/mo Desktop Agent) and Artificial Landman ($249/run) tie at #1. For manual-entry cloud runsheet worksheets with a PDF abstract splitter, TitleMine offers a $169/mo Landman Runsheet tier; for enterprise subscribers needing instant queries inside a 350M-record hosted corpus, Enverus Courthouse offers Runsheet Assistant.',
      },
      {
        q: 'What columns must a defensible Texas oil and gas runsheet include?',
        a: 'A Texas oil and gas examination runsheet requires chronological ordering by execution/effective or filing date, Instrument Type, Grantor, Grantee, Instrument Date, Filing/Recording Date, Volume/Book & Page or Clerk Document Number, Legal Description (Survey, Abstract, Block, Section, Acres), Granting/Reservation & Depth Clauses, and Examiner Remarks/Curative Flags linked back to the source PDF.',
      },
    ],
    renderBody: () => `
      <section class="section-block">
        <div class="container">
          <div class="grid-2">
            <div class="tool-dossier dossier-leader" style="margin-bottom:0;">
              <h3>Automated AI Runsheet + Ownership Engines (#1 Tied)</h3>
              <p><strong>TitleDesk</strong> &amp; <strong>Artificial Landman</strong> read raw county clerk PDFs/TIFFs, classify 23+ instrument types, sort chronologically from sovereign GLO patent forward, link every row to exact page citations, flag broken chains and missing referenced deeds, and output a ready-to-deliver Excel Runsheet + Ownership workbook.</p>
              <div class="btn-row">
                <a class="btn btn-primary" href="/titledesk-desktop/">See Runsheet Benchmark →</a>
              </div>
            </div>
            <div class="tool-dossier" style="margin-bottom:0;">
              <h3>Corpus-Bound vs. Manual-Entry Runsheet Tools</h3>
              <p><strong>Enverus Courthouse Runsheet Assistant</strong> &amp; <strong>Energy Domain TitleLab</strong> generate fast runsheets inside their pre-indexed county footprints under enterprise quotes, while <strong>TitleMine ($169/mo)</strong> and <strong>Landspect ($249/mo Beta)</strong> provide browser runsheet builders for examiners confirming instruments one by one.</p>
              <div class="btn-row">
                <a class="btn btn-outline" href="/compare/">Compare Runsheet Tools Side-by-Side →</a>
              </div>
            </div>
          </div>
        </div>
      </section>`,
  },
  {
    route: '/mineral-ownership-calculator-software/',
    rel: 'mineral-ownership-calculator-software/index.html',
    rubric: 'Technical Guide · Net Mineral Acres & Fraction Math',
    title: 'Mineral Ownership, Net Mineral Acres (NMA) & Fractional Title Software (2026–2027)',
    metaDescription:
      'How Texas mineral title research software calculates exact Net Mineral Acres (NMA), Leasehold NRI, Duhig over-conveyances, double fractions, and pre/post-1993 Texas intestate shares.',
    h1: 'Mineral Ownership & Net Mineral Acres (NMA) Calculation Software Guide',
    lead:
      'Why floating-point spreadsheets and unverified chatbot math fail on multi-generation Texas mineral chains — and which landman software platforms enforce exact rational fraction arithmetic, Duhig flags, and 100% tract balance checks.',
    faqs: [
      {
        q: 'How are Net Mineral Acres (NMA) and Leasehold Net Revenue Interest (NRI) calculated in Texas?',
        a: 'Net Mineral Acres (NMA) equals Gross Tract Survey Acreage multiplied by the owner\'s exact fractional mineral interest (for example, 640 gross acres × 1/12 mineral interest = 53 1/3 NMA, or 53.33333333 NMA). Leasehold Net Revenue Interest (NRI) equals the mineral owner\'s fractional interest multiplied by (1 minus the oil & gas lease royalty burden, less any overriding royalty interests carved out of working interest).',
      },
      {
        q: 'Why does pre-Sept. 1, 1993 vs. post-Sept. 1, 1993 Texas intestacy law matter in mineral title software?',
        a: 'Under former Texas Probate Code § 45 (deaths before September 1, 1993), if any child or descendant survived an intestate decedent — even when every child belonged to the surviving marriage — the decedent\'s 1/2 community mineral share passed to the children, not the surviving spouse. Under Tex. Estates Code § 201.003 (deaths on or after September 1, 1993), if all surviving descendants are also descendants of the surviving spouse, the surviving spouse inherits the entire community estate. Software that applies post-1993 rules to a 1978 death misallocates 50% of the community minerals.',
      },
    ],
    renderBody: () => `
      <section class="section-block">
        <div class="container">
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Texas Mineral Arithmetic Edge Case</th>
                  <th>Failure Mode in Spreadsheets / Single-Pass LLMs</th>
                  <th>Verified Handling in TitleDesk &amp; Artificial Landman</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row-leader">
                  <td><strong>Three-Heir Intestate Split (1/3 + 1/3 + 1/3)</strong></td>
                  <td>IEEE-754 floats yield <code>0.99999999</code>, masking real chain imbalances</td>
                  <td>BigInt exact rational fractions sum to exact <code>1/1</code> (100%)</td>
                </tr>
                <tr>
                  <td><strong>Duhig Over-Conveyance</strong> (Grantor owns 1/2, conveys 1/2, reserves 1/2)</td>
                  <td>Naive subtraction leaves grantee short or creates negative grantor balance</td>
                  <td>Detects warranty breach automatically; flags both interpretations for landman/attorney ruling</td>
                </tr>
                <tr>
                  <td><strong>Vintage Double Fractions</strong> (<em>Van Dyke</em> vs. <em>Clifton v. Johnson</em> 2026)</td>
                  <td>Blindly multiplies to 1/128 OR blindly rewrites every "of 1/8" to 1/16</td>
                  <td>Preserves verbatim four-corners clause, checks page PNGs across 3 models, flags on Title Review tab</td>
                </tr>
                <tr>
                  <td><strong>Pre- vs. Post-Sept. 1, 1993 Community Intestacy</strong></td>
                  <td>Applies modern spouse-takes-all rule to pre-1993 deaths</td>
                  <td>Applies former Tex. Prob. Code § 45 before 1993-09-01 and Tex. Est. Code § 201.003 on/after</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>`,
  },
  {
    route: '/deed-ocr-courthouse-records/',
    rel: 'deed-ocr-courthouse-records/index.html',
    rubric: 'Field Operations · Deed OCR & Courthouse Portals',
    title: 'Landman Deed OCR, Multi-Page TIFF Reading & Texas Courthouse Record Tools (2026)',
    metaDescription:
      'Compare landman deed OCR software, free local multi-page courthouse TIFF OCR in TitleDesk Desktop Agent, and 2026 pricing across TexasFile, CourthouseDirect, and CountyRecords.com.',
    h1: 'Deed OCR Software, Multi-Page Courthouse TIFFs & Texas Record Portals Guide',
    lead:
      'How Texas field landmen eliminate per-page cloud OCR fees on multi-page county clerk TIFFs and cut raw courthouse record-copy bills by 60%–75% across TexasFile, CourthouseDirect, and CountyRecords.com.',
    faqs: [
      {
        q: 'Which landman software reads multi-page courthouse TIFFs and scanned PDFs with $0 per-page OCR fees?',
        a: 'TitleDesk Desktop Agent ($199/seat/month) runs Tesseract OCR and native @napi-rs/canvas multi-page TIFF/PDF rendering locally on macOS, Linux, and Windows in the main process — reading thousands of scanned county vault pages offline with $0.00 in per-page cloud OCR charges.',
      },
      {
        q: 'When should a Texas landman use TexasFile vs. CourthouseDirect vs. CountyRecords.com?',
        a: 'Use CourthouseDirect FileViewer ($100/mo for 300 views, $0.50 extra) or CountyRecords.com preview packs ($0.50/preview) to inspect historical books before buying; purchase long 15–40 page oil & gas leases and probates under whole-document caps (CourthouseDirect TVP $1–$2/doc or CountyRecords $3.50/doc); and use TexasFile ($0/mo, $1.00/page) for quick 1–2 page deeds in counties you visit infrequently.',
      },
    ],
    renderBody: () => `
      <section class="section-block">
        <div class="container">
          <div class="section-header">
            <div>
              <h2>2026 Texas Courthouse Record Portals &amp; OCR Cost Comparison</h2>
            </div>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Base Fee</th>
                  <th>Preview Rate</th>
                  <th>Download / OCR Cost</th>
                  <th>Best Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row-leader">
                  <td><strong>TitleDesk Desktop Agent (Local OCR)</strong></td>
                  <td class="mono">$199 / seat / mo</td>
                  <td>Local instant preview</td>
                  <td class="mono"><strong>$0.00 / page local PDF &amp; multi-page TIFF OCR</strong></td>
                  <td>Unlimited offline OCR + BYO connectors to all 3 Texas portals below</td>
                </tr>
                ${COURTHOUSE_PORTAL_RATES_2026.map(
                  (p) => `<tr>
                  <td><strong><a href="${esc(p.url)}" rel="noopener">${esc(p.portal)}</a></strong></td>
                  <td class="mono">${esc(p.monthlyBase)}</td>
                  <td>${esc(p.previewViewCost)}</td>
                  <td>${esc(p.imageDownloadCost)}</td>
                  <td>${esc(p.bestFor)}</td>
                </tr>`
                ).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </section>`,
  },
]);

export function renderSeoLandingPage(pageSpec) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageSpec.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: pageSpec.h1,
    description: pageSpec.metaDescription,
    datePublished: SITE.editionDate,
    dateModified: SITE.editionDate,
    url: `${SITE.origin}${pageSpec.route}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.hero-section h1', '.hero-section .lead-deck'],
    },
  };

  const bodyHtml = `
    <section class="hero-section">
      <div class="container">
        <span class="rubric-pill">${esc(pageSpec.rubric)}</span>
        <h1>${esc(pageSpec.h1)}</h1>
        <p class="lead-deck">${esc(pageSpec.lead)}</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/rankings/">View Full 24-Tool Rankings</a>
          <a class="btn btn-outline" href="/unit-economics/">Run Unit Economics Calculator</a>
          <a class="btn btn-outline" href="/compare/">Compare Tools Side-by-Side</a>
        </div>
      </div>
    </section>
    ${pageSpec.renderBody()}
    <section class="section-block" style="border-bottom:none;">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        ${pageSpec.faqs
          .map(
            (f) => `<div class="faq-item">
          <h3>${esc(f.q)}</h3>
          <p>${esc(f.a)}</p>
        </div>`
          )
          .join('')}
      </div>
    </section>
  `;

  return renderLayout({
    title: pageSpec.title,
    description: pageSpec.metaDescription,
    canonicalPath: pageSpec.route,
    currentNav: '/rankings/',
    breadcrumbs: [{ href: pageSpec.route, label: pageSpec.rubric }],
    showInlineDisclosure: true,
    jsonLd: [articleSchema, faqSchema],
    bodyHtml,
  });
}
