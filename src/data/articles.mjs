// Full-length, primary-source-cited articles on Texas mineral case law, RRC regulation, courthouse economics, and AI title engineering.

export const ARTICLES = Object.freeze([
  {
    slug: 'clifton-v-johnson-fasken-puig-2026-texas-mineral-deeds-ai',
    rubric: 'Texas Supreme Court · Mineral & Royalty Law',
    title: 'Clifton v. Johnson & Fasken v. Puig (Tex. 2026): Why 1950s Double-Fraction Deeds and Postproduction Clauses Break Naive AI Title Prompts',
    subtitle:
      'For the first time since Van Dyke v. Navigator Group, the Texas Supreme Court held that four-corners deed text rebutted the 1/8 estate-misconception presumption — fixing a 1951 conveyance at 1/128 rather than 1/16. Weeks later, Fasken Oil & Ranch v. Puig proved "free of cost forever" still bears postproduction deductions.',
    publishedDate: '2026-11-17',
    readMinutes: 9,
    author: 'Texas Landman & Title Tech Research Desk',
    ownProductMention: true,
    keyTakeaways: [
      'In Clifton v. Johnson, No. 23-0671 (Tex. Mar. 13, 2026), the Texas Supreme Court unanimously held that surrounding clauses in a 1951 royalty deed rebutted the Van Dyke double-fraction presumption, yielding a fixed 1/128 royalty rather than a floating 1/16.',
      'In Fasken Oil & Ranch, Ltd. v. Puig, No. 24-1033 (Tex. Apr. 10, 2026), Justice Bland\'s opinion confirmed that a royalty clause reciting "free of cost forever" did not shift post-wellhead postproduction costs away from royalty owners without an explicit downstream valuation point.',
      'Single-pass LLM title tools trained to mechanically rewrite every vintage "1/16 of 1/8" into "1/16" after Van Dyke now risk 8× over-conveyance errors unless they quote verbatim four-corners text, attach source page images, and route double-fraction instruments through multi-model consensus and human review — the exact architecture enforced by TitleDesk and Artificial Landman.',
    ],
    sections: [
      {
        heading: '1. What Changed on March 13, 2026 in Clifton v. Johnson',
        paragraphs: [
          'After the Texas Supreme Court decided Van Dyke v. Navigator Group in February 2023, Texas mineral examiners operated under a clean baseline rule: when an antique mid-century mineral or royalty deed uses a double fraction containing "1/8" (such as "1/2 of 1/8"), courts begin with a rebuttable presumption that the drafters labored under the historical estate misconception that a landowner\'s royalty was permanently fixed at 1/8.',
          'For three years, nearly every appellate challenge attempting to rebut Van Dyke failed — leading several hastily engineered AI lease and deed prompts to hard-code a simplistic shortcut: spot "of 1/8" in a pre-1970 Texas deed and divide out the 1/8 automatically. On March 13, 2026, in Clifton v. Johnson (No. 23-0671), the Texas Supreme Court drew the boundary line. Examining the holistic four corners of a 1951 royalty deed, the Court held unanimously that consistent arithmetic references elsewhere in the instrument demonstrated the parties genuinely intended a fixed 1/128 royalty interest rather than 1/16 of total production.',
        ],
      },
      {
        heading: '2. Fasken Oil & Ranch v. Puig: Magic Words Still Do Not Escape Heritage Resources',
        paragraphs: [
          'Less than four weeks later, on April 10, 2026, the Court issued Fasken Oil & Ranch, Ltd. v. Puig (No. 24-1033). Royalty owners argued that a deed reserving a royalty "free of cost forever" insulated their decimal from postproduction gathering, compression, and processing deductions. Writing for the Court, Justice Bland held that even emphatic "forever" phrasing attached to a wellhead-style royalty provision frees the interest from exploration and production (lifting) costs — not post-wellhead postproduction expenses under the Heritage Resources line of authority.',
          'For division-order analysts and A&D diligence landmen pricing net revenue interests across Eagle Ford and Permian horizontal units, Fasken underscores why generic AI "cost-free royalty: YES/NO" checkboxes are actively dangerous. Without capturing the exact valuation point ("at the well," "into the pipeline," or "amount realized at point of sale"), a summary table misleads valuation models by 8% to 18% of net cash flow.',
        ],
      },
      {
        heading: '3. Architectural Consequences for AI Mineral Title Software',
        paragraphs: [
          'Clifton and Fasken expose the flaw in black-box, single-model AI abstracting tools that output smooth decimal tables without showing their work. When a single model summarizes a 1951 deed into `0.06250000` (1/16) instead of `0.00781250` (1/128) and overwrites the underlying clauses, an examiner skimming a 60-row spreadsheet may never catch the 800% discrepancy before the workbook reaches an examining attorney.',
          'Defensible software handles Texas double-fraction and postproduction language through three non-negotiable engineering safeguards — all three built into TitleDesk (title-desk.com and TitleDesk Desktop Agent) and Artificial Landman (artificiallandman.io): (1) preserve exact rational fractions (BigInt numerator/denominator) rather than rounded floats; (2) run independent multi-model examination plus a cross-family validator that opens and inspects the actual scanned page PNGs on every root deed, reservation, Duhig step, and double-fraction clause; and (3) surface the verbatim granting and reservation language with Vol/Page citation on a dedicated Title Review / Curative schedule so a human CPL or title attorney makes the final legal call.',
        ],
      },
    ],
    sources: [
      {
        label: 'Baker Botts Analysis — Texas Supreme Court Unanimously Rules 1951 Royalty Deed Rebuts Van Dyke Presumption (Clifton v. Johnson, Mar. 2026)',
        url: 'https://www.bakerbotts.com/thought-leadership/publications/2026/march/texas-supreme-court-unanimously-rules-that-1951-royalty-deed-rebuts-van-dyke-presumption',
      },
      {
        label: 'Supreme Court of Texas Slip Opinion — Fasken Oil & Ranch, Ltd. v. Puig, No. 24-1033 (Apr. 10, 2026)',
        url: 'https://www.txcourts.gov/media/1462566/241033.pdf',
      },
    ],
  },
  {
    slug: 'texas-rrc-100-million-records-lonestar-sb1150-inactive-wells',
    rubric: 'Railroad Commission of Texas · Regulatory & HBP Title',
    title: 'Texas RRC Crosses 100.2 Million Digitized Files, Ends Paper P-5/PR Filings on LoneSTAR, and Opens SB 1150 Inactive-Well Rulemaking',
    subtitle:
      'What the Railroad Commission\'s 2026 digital overhaul, record 2,022 orphan-well pluggings, and November 2026 Chapter 3 inactive-well hearings mean for Held-by-Production (HBP) lease checks and wellborecurative work.',
    publishedDate: '2026-11-17',
    readMinutes: 8,
    author: 'Texas Landman & Title Tech Regulatory Desk',
    ownProductMention: true,
    keyTakeaways: [
      'On February 2, 2026, the Railroad Commission of Texas announced completion of over 100 million digitized agency records (100,205,204 files), drastically reducing Austin microfilm requests for historical well and proration files.',
      'Effective September 1, 2026, paper filing ended for Forms P-18, PR (Monthly Production Report), P-5 (Organization Report), W-3C, and W-3X, moving operator compliance into the RRC LoneSTAR electronic portal.',
      'Under Senate Bill 1150, the RRC opened formal rulemaking on 16 TAC §§ 3.15 and 3.58 governing inactive wells and plugging extensions (written comments closed Nov. 13, 2026; public hearing scheduled Nov. 20, 2026 in Austin and via Zoom), right after plugging a record 2,022 orphaned wells (~$125.6M) in FY2026.',
    ],
    sections: [
      {
        heading: '1. 100.2 Million Digitized Files and the End of Paper PR / P-5 Forms',
        paragraphs: [
          'Proving whether a 1974 oil and gas lease remains Held by Production (HBP) or terminated during a 90-day cessation-of-production gap has historically forced Texas landmen to piece together incomplete post-1993 online queries with manual Austin RRC file pulls. On February 2, 2026, the RRC crossed 100,205,204 digitized documents across historical well records, Oil & Gas docket files, and legacy reports.',
          'Seven months later, on September 1, 2026, the Commission eliminated paper submissions for five foundational forms that title and A&D teams audit daily: Form PR (Monthly Production Report), Form P-18 (Skim Oil / Condensate), Form P-5 (Operator Organization Report), and Forms W-3C / W-3X (plugging-extension surface equipment certifications and plugging extensions). Mandatory LoneSTAR electronic filing cuts multi-week lag times when verifying whether a marginal operator maintained active P-5 status or filed timely W-3X plugging extensions on shut-in lease-holding wells.',
        ],
      },
      {
        heading: '2. SB 1150 Inactive-Well Rulemaking (16 TAC §§ 3.15 & 3.58) Creates Top-Leasing & Curative Opportunities',
        paragraphs: [
          'Following Texas Senate Bill 1150 and a fiscal year 2026 in which the Commission plugged a record 2,022 orphaned wells at roughly $125.6 million in state-managed funds, the RRC proposed sweeping amendments to 16 TAC § 3.15 (Surface Equipment Removal Requirements and Inactive Wells) and § 3.58 (Certificate of Compliance and Transportation Authority; Operator Margareting/Transfer Scrutiny). Written comments were due November 13, 2026, with a hybrid Austin and Zoom public hearing set for November 20, 2026 — alongside the Commission\'s announcement that public comment at open meetings (suspended 2–1 on August 18, 2026) returns at the December 2026 meeting.',
          'For acquisition landmen and mineral buyers, tighter W-3X inactive-well extension rules directly impact leasehold survival analysis. Operators holding legacy HBP acreage with long-shut-in vertical wellbores face stricter financial assurance and plugging timelines — accelerating lease expirations where shut-in royalty clauses were improperly tendered or operations lapsed. Pairing RRC well/production joins inside TitleDesk Desktop Agent with 3-model deed/lease chain verification lets A&D teams spot dead HBP leases ahead of competing brokers.',
        ],
      },
    ],
    sources: [
      {
        label: 'Railroad Commission of Texas — 100 Million Records Digitized Press Release (Feb. 2, 2026)',
        url: 'https://rrc.texas.gov/news/020226-digitization-press-release/',
      },
      {
        label: 'RRC Notice to Operators — Mandatory Transition from Paper Forms to LoneSTAR Electronic Filing (Sept. 1, 2026)',
        url: 'https://rrc.texas.gov/announcements/06042026-nto-transitioning-from-paper-forms-to-electronic-filing/',
      },
      {
        label: 'World Oil — Texas RRC Seeks Comment on Inactive Well Rules Under SB 1150 (Nov. 6, 2026)',
        url: 'https://worldoil.com/news/2026/11/6/texas-railroad-commission-seeks-comment-on-inactive-well-rules-under-sb-1150/',
      },
      {
        label: 'World Oil — Texas RRC Plugs Record 2,022 Orphaned Wells in FY2026 (Sept. 30, 2026)',
        url: 'https://worldoil.com/news/2026/9/30/texas-rrc-plugs-record-2-022-orphaned-oil-and-gas-wells-in-fiscal-2026/',
      },
      {
        label: 'KSAT / Texas Tribune — Texas RRC Reinstating Open-Meeting Public Comment in December 2026',
        url: 'https://www.ksat.com/news/texas/2026/11/11/texas-oil-and-gas-commission-to-reinstate-public-comment-after-suspending-it-a-few-months-ago/',
      },
    ],
  },
  {
    slug: '2026-texas-courthouse-record-cost-fact-sheet-sb16-rural-gaps',
    rubric: 'Courthouse Operations · Unit Economics',
    title: 'The 2026 Texas Courthouse Record Cost Fact Sheet: TexasFile vs. CourthouseDirect vs. CountyRecords.com, SB 16 Clerk Rules, and the Rural Gap',
    subtitle:
      'Exact 2026 per-page, per-document, preview, and county-plant fee schedules across Texas\'s Big Three portals — plus how "view-before-buy" discipline cuts raw deed spend by 65% and where physical courthouse vaults still win.',
    publishedDate: '2026-11-17',
    readMinutes: 10,
    author: 'Texas Landman & Title Tech Field Economics Desk',
    ownProductMention: true,
    keyTakeaways: [
      'Blindly buying 260 pages at $1.00–$1.50/page costs $260–$390 per chain; routing previews through CourthouseDirect FileViewer ($100/mo for 300 views, $0.50 extra) and buying multi-page probates/leases under whole-document caps ($1.00–$3.50/doc) cuts raw copy bills under $85.',
      'Texas SB 16 anti-deed-fraud rules (photo ID for in-person recording and clerk law-enforcement notice frameworks taking effect across late 2025 and Jan. 1, 2026) have tightened counter procedures at county clerk offices across the state.',
      'As documented in Permian Basin Oil and Gas Magazine (June 2026), rural pre-1970 paper indexes still limit pure remote AI to digitized layers — making local zero-cost TIFF/PDF OCR inside TitleDesk Desktop Agent vital once a field landman photographs vault volumes.',
    ],
    sections: [
      {
        heading: '1. Comparing the Big Three Texas Record Portals Line by Line',
        paragraphs: [
          'Every independent Texas landman and brokerage pays into some combination of TexasFile, CourthouseDirect.com, and CountyRecords.com (hal Systems), alongside free state GLO/RRC databases and county Kofile portals. Yet very few teams optimize per-instrument routing across all three.',
          'TexasFile charges $0/month, free index searches, and $1.00/page for PDF downloads across all 254 counties (+$0.25/page OCR add-on) — unbeatable for a two-page Warranty Deed in a county you touch once a year, but punishing ($35.00) on a 35-page Oil & Gas Lease or Probate transcript. By contrast, CountyRecords.com (220+ TX counties) caps PAYG whole-document downloads with preview at $3.50/document ($1.50/page single pages; $100 for 200 previews), and CourthouseDirect offers FileViewer ($100/month for 300 views, then $0.50/view) plus Texas Volume Plans ($2.00/TX doc at $50/mo min, or $1.00/TX doc on TVP Plus at $200/user min) and $500/county/month geographic title plants in 96 Texas counties.',
        ],
      },
      {
        heading: '2. The "View for $0.50 Before Buying for $5+" Rule',
        paragraphs: [
          'In common-surname chains (Garcia in South Texas, Smith in East Texas, Johnson in the Permian), 60% to 75% of grantor-grantee index hits turn out to describe the wrong survey or town lots once opened. Inspecting historical book pages in CourthouseDirect FileViewer (~$0.33–$0.50/view) or CountyRecords preview packs ($0.50/preview) before purchasing official PDFs routinely drops a tract\'s courthouse bill from $300+ down to $55–$90.',
          'Once those targeted PDFs or multi-page TIFFs are downloaded — or photographed in person at a rural county clerk\'s vault — uploading the packet into TitleDesk or Artificial Landman ($249 flat up to 400 pages) or processing them locally with $0-per-page Tesseract OCR inside TitleDesk Desktop Agent avoids paying double OCR fees.',
        ],
      },
      {
        heading: '3. SB 16 Clerk Counter Rules and Undigitized Rural Vaults',
        paragraphs: [
          'Field landmen visiting courthouses in 2026 also navigate Senate Bill 16\'s real-property fraud protections, including government photo-ID requirements for in-person paper filings and clerk notice procedures for suspected fraudulent instruments filed after January 1, 2026. Meanwhile, as Permian Basin Oil and Gas Magazine reported in June 2026, field examiners working rural counties with undigitized 19th- and early-20th-century patent-to-1960 Deed Books still spend days photographing physical ledger volumes — proving why an offline-capable desktop workstation that reads photographed PDFs and multi-page TIFFs locally remains essential alongside cloud tools.',
        ],
      },
    ],
    sources: [
      { label: 'TexasFile Official Pricing Page', url: 'https://www.texasfile.com/pricing' },
      { label: 'CourthouseDirect Published Plan & Title Plant Schedule', url: 'https://www.courthousedirect.com/SignUpPricing.aspx' },
      { label: 'CountyRecords.com (hal Systems) Pricing Schedule', url: 'https://www.countyrecords.com/pricing/' },
      { label: 'Texas Legislature Online — SB 16 Bill Analysis (Real Property Fraud & Clerk Procedures)', url: 'https://capitol.texas.gov/tlodocs/892/analysis/html/SB00016F.htm' },
      { label: 'Permian Basin Oil and Gas Magazine — The Lay of the Land (June 22, 2026)', url: 'https://pboilandgasmagazine.com/the-lay-of-the-land/' },
    ],
  },
  {
    slug: 'fall-2026-ai-landman-software-wave-multi-model-verification',
    rubric: 'Software Architecture · Industry Benchmark',
    title: 'Inside the Fall 2026 AI Title Wave: Why Three-Model Verification & Deterministic BigInt Math Beat Single-Model Chatbots',
    subtitle:
      'Evaluating the rapid cluster of 2026 launches — TitleDesk, Artificial Landman, Enverus Runsheet Assistant, Energy Domain MCP, RecordsOnline AI Suite, and Quorum Data Extraction — on verification rigor.',
    publishedDate: '2026-11-17',
    readMinutes: 11,
    author: 'Texas Landman & Title Tech Systems Desk',
    ownProductMention: true,
    keyTakeaways: [
      'Between May and November 2026, oil and gas land software shifted decisively from generic PDF chat toward specialized chain-of-title engines, MCP connectors, and enterprise extraction modules.',
      'No independent third-party accuracy benchmark existed across the 24 tools surveyed; consequently, buyers must audit each vendor\'s architectural safeguards against hallucination and rounding drift.',
      'Only TitleDesk and Artificial Landman combine cross-family 3-model page-image consensus on browser runs with deterministic BigInt exact-fraction ownership math and unsupported-row report blocking on the desktop.',
    ],
    sections: [
      {
        heading: '1. Four Distinct Architectures Competing for the Landman\'s Desk',
        paragraphs: [
          'The 2026 Texas AI title market splits cleanly into four engineering models: (1) End-to-end verified examination engines with public per-run and workstation pricing — led by co-#1 leaders TitleDesk (title-desk.com / desktop.title-desk.com) and Artificial Landman (artificiallandman.io); (2) Proprietary corpus platforms adding AI layers for enterprise subscribers — Enverus Courthouse\'s Runsheet Assistant (Oct. 7, 2026) and Energy Domain\'s TitleLab + Claude MCP connector (Oct. 28, 2026); (3) Credit- or seat-priced assistive point tools — Rowland ($99–$199/mo), TitleMine ($169–$489/mo), Echo Title Intelligence, and Landspect Beta ($249/mo); and (4) Post-research enterprise systems of record adding lease-intake extraction — Quorum On Demand Land (May 18, 2026) and PakEnergy Land AI.',
        ],
      },
      {
        heading: '2. The Two Fatal Failure Modes in Mineral Title AI: Unchecked Hallucination & Float Rounding',
        paragraphs: [
          'When a single LLM reads 300 pages of faded 1928–1995 Texas deeds in one context window, two silent defects routinely occur. First, the model bridges a missing link by assuming "John H. Miller" and "J. Miller Jr." were identical without flagging a missing probate, or misreads a handwritten Vol. 148 / Page 309 reference. Second, if ownership is calculated in IEEE-754 floating-point decimals or LLM prose across 14 generations of 1/3, 1/6, 1/7, and 3/16 royalty reservations, tract totals drift to `0.99999997` or `1.000412` — hiding real 1/128 over-conveyances inside rounding noise.',
          'TitleDesk and Artificial Landman eliminate both failure modes structurally. On browser runs ($249 Upload), Examiner 1 builds the chain, Examiner 2 works ownership independently, and a third Validator from a separate frontier model family inspects the actual page PNGs — withholding workbook generation until all three agree and listing any referenced-but-unsupplied instrument explicitly. On TitleDesk Desktop Agent ($199/mo), every fractional movement executes in exact BigInt numerator/denominator arithmetic where `1/3 + 1/3 + 1/3 = 1` exactly, every extraction enters as `proposed` until human acceptance, and any unbacked figure stamps the report `NOT READY TO ISSUE`.',
        ],
      },
    ],
    sources: [
      { label: 'TitleDesk Browser & Three-Model Verification Overview', url: 'https://title-desk.com/' },
      { label: 'Artificial Landman Subsurface Examination Architecture', url: 'https://artificiallandman.io/' },
      { label: 'Enverus Runsheet Assistant Announcement (Oct. 7, 2026)', url: 'https://techintelpro.com/news/ai/enterprise-ai/enverus-gives-land-and-title-teams-a-faster-path-to-title-certainty' },
      { label: 'Energy Domain MCP Frontier AI Chaining Post (Oct. 28, 2026)', url: 'https://www.energydomain.com/blog/energy-domain-brings-proprietary-title-chaining-ip-to-frontier-ai-models' },
      { label: 'RecordsOnline — AI Without an Examiner Is Not a Title Product, It Is a Liability', url: 'https://recordsonline.com/?p=1741' },
    ],
  },
  {
    slug: 'browser-runs-vs-local-desktop-workstation-landman-guide',
    rubric: 'Workflow Guide · TitleDesk & Artificial Landman',
    title: 'Browser Title Runs vs. Local Desktop Workstation: A Practical Deployment Guide for Solo Landmen, Brokerages, and E&P Teams',
    subtitle:
      'When to fire a zero-setup $249 four-sheet workbook run on Artificial Landman or TitleDesk Web — and when to live inside the $199/mo TitleDesk Desktop Agent for multi-tract units, offline TIFF OCR, and custom client folder trees.',
    publishedDate: '2026-11-17',
    readMinutes: 7,
    author: 'Texas Landman & Title Tech Practice Desk',
    ownProductMention: true,
    keyTakeaways: [
      'Use $249 browser Upload runs (Artificial Landman or TitleDesk Web) when you already hold a single-county PDF deed packet (up to 400 pages, +$40/200 extra) and want a 3-model verified four-sheet Excel workbook with zero local setup and zero monthly recurring burn.',
      'Use TitleDesk Desktop Agent ($199/seat/mo Individual; $349/seat/mo Enterprise) when assembling multi-tract horizontal drilling units, OCRing raw multi-page courthouse TIFFs locally for $0/page, connecting your own CountyRecords/CourthouseDirect/TexasFile accounts, or outputting custom operator DDR/PLM Word/Excel templates and folder trees.',
      'High-output Texas brokerages combine both: Desktop Agent as the daily local workspace + Pro ($3,899/mo, 25 runs = $155.96/run) or Solo ($1,299/mo, 8 runs = $162.38/run) hosted capacity during pre-closing crunches.',
    ],
    sections: [
      {
        heading: '1. Zero Monthly Burn vs. Unlimited Local Multi-Tract Power',
        paragraphs: [
          'Independent Texas landmen face feast-or-famine project cycles: three intense weeks chaining eight Permian or Haynesville tracts before an A&D bid date, followed by two weeks of field curative, heirship affidavits, or lease negotiations where no new base chains are started. Annual enterprise software contracts punish that reality with relentless fixed monthly invoices.',
          'Artificial Landman (artificiallandman.io) and TitleDesk\'s browser engine (title-desk.com) solve irregular volume with $249 per-run Upload pricing (and a free first upload run up to 150 pages). Every dollar of software cost attaches directly to a billable client tract, passes a free pre-payment abstract/acreage check, and delivers a clean Summary, Ownership, Runsheet, and Title Review `.xlsx` workbook.',
        ],
      },
      {
        heading: '2. Inside the TitleDesk Desktop Agent ($199/seat/mo)',
        paragraphs: [
          'When an examiner works 5 to 20+ assignments a month — or serves operator clients like Permian or Gulf Coast brokerages that mandate strict 6-column Excel DDR layouts, Word Ownership Summaries, and numbered folder trees (`01 REPORTS`, `02 LEASES`, `DDR / OPINIONS`) — the native TitleDesk Desktop Agent (desktop.title-desk.com) pays for itself in a single afternoon.',
          'Because Tesseract OCR and `@napi-rs/canvas` multi-page TIFF rendering execute locally on your Mac, Linux, or Windows machine, OCRing 2,000 scanned county vault pages costs $0.00 in cloud page fees. You connect your own ChatGPT/Codex, Claude, API, or local air-gapped Ollama model for assistive deed examination, approve each proposed conveyance into the BigInt exact-fraction ledger, track billable hours and courthouse receipts to the exact cent, and export two completely different client deliverable packages from one project without re-typing a single row.',
        ],
      },
    ],
    sources: [
      { label: 'Artificial Landman Pricing & Run Calculator', url: 'https://artificiallandman.io/pricing' },
      { label: 'TitleDesk Hosted Plans & Run Types', url: 'https://title-desk.com/pricing' },
      { label: 'TitleDesk Desktop Agent Feature & Benchmark Overview', url: 'https://desktop.title-desk.com/how-it-works/' },
    ],
  },
]);
