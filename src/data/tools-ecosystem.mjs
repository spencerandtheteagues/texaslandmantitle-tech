import { TIER1_TOOLS } from './tools-tier1.mjs';

// Tiers 2, 3 & 4: Texas Courthouse Record Portals, Enterprise Land Administration Systems, and Specialist/Historical Platforms (#15–#24 + Reference Ledger)

export const ECOSYSTEM_TOOLS = Object.freeze([
  // ── TIER 2: TEXAS COURTHOUSE INDEX, TITLE PLANT & IMAGE RETRIEVAL PORTALS ──
  {
    id: 'texasfile',
    rank: 15,
    rankDisplay: '#15',
    isTiedLeader: false,
    name: 'TexasFile',
    shortName: 'TexasFile',
    vendor: 'TexasFile LLC',
    website: 'https://www.texasfile.com/',
    category: 'Texas 254-County Clerk Index, Appraisal Mineral Roll & Image Retrieval Portal',
    tierGroup: 'tier2-courthouse-portals',
    compositeScore: 83.0,
    subscores: {
      chainDepth: 48,
      mathAndProof: 70,
      unitEconomics: 92,
      usabilityAndLci: 88,
      texasFit: 99,
      practiceOps: 68,
    },
    pricingSummary: 'Free grantor/grantee index search · $1.00/page PDF image · +$0.25/page OCR text · $0.25 mineral roll search · $5.00 statewide search',
    pricingDetail:
      'Published pay-as-you-go schedule: County clerk index searches are free; instrument PDF images cost $1.00/page; OCR + PDF add-on $0.25/page (or $0.50/page OCR-only without PDF); AI document summaries $1.00–$4.00; mineral appraisal searches $0.25; statewide name search $5.00.',
    publicPricing: true,
    startingPriceNumeric: 0,
    texasCoverage: 'All 254 Texas counties (depth of digitized historical deed years varies by county clerk digitization archive)',
    whoUsesIt:
      'Virtually every working Texas field landman, title examiner, mineral buyer, and oil & gas attorney pulling raw county clerk deed images — and as a primary document-retrieval feed into TitleDesk Desktop Agent and Artificial Landman.',
    exactWorkTypes: [
      'Free grantor-grantee index searching across Texas county clerk Official Public Records (OPR) and historical Deed Records',
      'On-demand $1.00/page PDF instrument downloads for uploading into TitleDesk or Artificial Landman',
      'OCR Super Search across full instrument text and $0.25 county appraisal district mineral roll lookups',
    ],
    overview:
      'TexasFile is not an AI chain-of-title or ownership-math workstation — it is the foundational public-pricing courthouse image portal for Texas landmen (and is ranked in our Courthouse Infrastructure tier rather than against end-to-end examination engines). Its free index searches, transparent $1.00/page image downloads, 254-county reach, and newer OCR Super Search and $1–$4 instrument summaries make it an indispensable source layer. Experienced landmen pair TexasFile (for pulling raw deeds) directly with TitleDesk or Artificial Landman (to execute 3-model chain verification and exact-fraction NMA workbooks).',
    desktopProgramNote: 'Web portal; integrates directly as a supported Texas source inside TitleDesk Desktop Agent.',
    pros: [
      'Free grantor/grantee index searches across Texas with crystal-clear $1.00/page pay-as-you-go image pricing and $0 monthly commitment',
      'Covers all 254 Texas counties on its AI & data platform plus low-cost $0.25 mineral tax-roll lookups',
      'Pairs seamlessly with TitleDesk Desktop Agent and $249 browser upload runs',
    ],
    cons: [
      'Raw record portal only — builds zero chains of title, computes zero mineral fractions, and generates no runsheets or client workbooks',
      '$1.00/page image downloads add up quickly ($250–$400) if you buy unscreened 300-page packets without previewing on CourthouseDirect FileViewer first',
      'Historical start dates vary county by county depending on when each county clerk digitized early Deed Books',
    ],
    unitEconomics: {
      model: '$0/mo fixed fee + $1.00/page downloaded PDF image',
      effectiveCostPerAssignment: '$80 – $300 in per-page clerk downloads depending on chain length (raw images only)',
      savesTime: {
        verdict: 'Yes — Eliminates physical drives to Texas county courthouses for digitized years',
        detail: 'Saves 1–2 travel days per assignment whenever county Deed Records are imaged back to the needed root.',
      },
      savesWork: {
        verdict: 'Retrieval only — Does not read deeds, calculate NMA, or build runsheets',
        detail: 'Supplies the raw PDFs that an examination engine like TitleDesk or Artificial Landman then processes.',
      },
      savesMoney: {
        verdict: 'Yes vs. courthouse travel ($500+/trip), best paired with view-before-buy discipline',
        detail: 'Zero monthly burn makes it unbeatable for occasional counties, though heavy single-county runs may favor CourthouseDirect FileViewer previews.',
      },
      costVsGainSummary:
        'Essential $0-retainer Texas record source; highest ROI comes from pulling targeted PDF packets on TexasFile and feeding them straight into TitleDesk or Artificial Landman.',
    },
    usability: {
      easeOfUseScore: 9.0,
      effectiveComplexity: 'Low',
      complexityDetail: 'Fast, clean county/name/volume-page search UI; effective use mainly requires knowing county book abbreviations (DR, OPR, Vol/Page) and historical index cutoff dates.',
      lciScore: 22,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '1 – 2 hours',
    },
    sources: [
      { label: 'TexasFile Main Portal', url: 'https://www.texasfile.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'TexasFile Public Pricing Schedule', url: 'https://www.texasfile.com/pricing', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'TexasFile AI & 254-County Data Features', url: 'https://www.texasfile.com/texas-land-records-data-features/ai-and-data/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'courthousedirect',
    rank: 16,
    rankDisplay: '#16',
    isTiedLeader: false,
    name: 'CourthouseDirect.com (FileViewer & Geographic Title Plants)',
    shortName: 'CourthouseDirect',
    vendor: 'CourthouseDirect.com, Inc. (Enverus subsidiary)',
    website: 'https://www.courthousedirect.com/',
    category: 'Texas Geographic Title Plants & Low-Cost Historical Deed Image Viewer',
    tierGroup: 'tier2-courthouse-portals',
    compositeScore: 81.5,
    subscores: {
      chainDepth: 50,
      mathAndProof: 68,
      unitEconomics: 89,
      usabilityAndLci: 74,
      texasFit: 96,
      practiceOps: 65,
    },
    pricingSummary: 'FileViewer $100/mo (300 image views, then $0.50/view) · TVP $1–$2/TX doc · Geographic Title Plants $500/county/mo + $1.50/doc',
    pricingDetail:
      'Public schedule: FileViewer $100/mo for 300 historical book/page image views ($0.50/view thereafter; $50 daily pass); Texas Volume Plan (TVP) $2.00/TX doc ($50 min) or TVP Plus $1.00/TX doc ($200/user min); Plan I $1.00/page + $3.25/doc; Geographic Title Plants $500/county/mo + $50/user + $1.50/doc.',
    publicPricing: true,
    startingPriceNumeric: 50,
    texasCoverage: 'Over 200 counties in Texas & New Mexico on FileViewer; 96 Texas + 9 NM geographic title-plant counties',
    whoUsesIt:
      'Experienced Texas abstractors, sober-minded brokerage teams, and TitleDesk Desktop Agent users executing "view for ~$0.50 before paying $5+ to buy" courthouse workflows.',
    exactWorkTypes: [
      'Browsing scanned historical Texas Deed Record books and handwritten grantor/grantee indexes via FileViewer ($0.33–$0.50/view)',
      'Tract-indexed legal-description searches across 96 Texas geographic title-plant counties',
      'High-volume $1.00–$2.00/document Texas Volume Plan (TVP) retrievals',
    ],
    overview:
      'Acquired by Enverus in 2020 (though still operated under its classic interface), CourthouseDirect.com remains one of the sharpest cost-saving weapons in a Texas landman\'s kit because of FileViewer ($100/mo for 300 views, then $0.50/view) and its 96 Texas geographic title plants. Rather than blindly buying 40 irrelevant deeds at $1.00–$1.50/page, seasoned examiners inspect historical book pages in FileViewer for pennies and purchase only the true chain instruments — a workflow explicitly built into TitleDesk\'s retrieval logic.',
    desktopProgramNote: 'Legacy ASPX web portal; supported directly as a BYO credential integration in TitleDesk Desktop Agent.',
    pros: [
      'FileViewer ($100/mo for 300 views, $0.50 extra) slashes wasted courthouse copy spend by letting landmen inspect deeds before buying',
      '96 Texas geographic title plants allow true Survey/Abstract/Block/Section tract searching rather than name-only index hunts',
      'TVP Plus ($1.00/entire Texas document at $200/mo min) dramatically beats $1.00/page pricing on 20-page oil & gas leases and trust deeds',
    ],
    cons: [
      'Dated early-2000s ASPX interface (`FileViewerB.aspx`) with a steeper navigation curve for newer land techs',
      'Records portal only — performs zero AI extraction, ownership math, or client workbook generation on its own',
      '$500/county/month geographic title-plant fee is economical only when working multiple tracts in the same county all month',
    ],
    unitEconomics: {
      model: '$100/mo FileViewer (300 views) · $50–$200/mo TVP doc plans · $500/county/mo Title Plants',
      effectiveCostPerAssignment: '$25 – $95/assignment in views & doc pulls when using FileViewer + TVP Plus (saving 50%–75% vs. per-page buying)',
      savesTime: {
        verdict: 'Yes — Geographic title plants save days on common-surname tracts (Smith, Garcia, Williams)',
        detail: 'Searching by Abstract/Section in the 96 plant counties bypasses thousands of false-positive name hits.',
      },
      savesWork: {
        verdict: 'Retrieval & plant indexing only — Pair with TitleDesk for reading & math',
        detail: 'Delivers the exact right instruments faster, which TitleDesk then turns into runsheets and NMA tables.',
      },
      savesMoney: {
        verdict: 'Yes — Best courthouse copy unit economics in Texas for multi-page leases & historical books',
        detail: 'A 25-page oil and gas lease costs $1.00–$2.00 total on TVP vs. $25.00 at $1.00/page elsewhere.',
      },
      costVsGainSummary:
        'The single highest-leverage courthouse portal for controlling raw Texas record-copy COGS when paired with TitleDesk Desktop Agent or Artificial Landman.',
    },
    usability: {
      easeOfUseScore: 6.8,
      effectiveComplexity: 'Moderate',
      complexityDetail: 'Requires learning county-specific roll/book naming conventions in FileViewer and picking the right pricing plan (FileViewer vs. TVP vs. Plant).',
      lciScore: 41,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '1 – 2 days',
    },
    sources: [
      { label: 'CourthouseDirect Portal Home', url: 'https://www.courthousedirect.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'CourthouseDirect Published Plan & Plant Pricing', url: 'https://www.courthousedirect.com/SignUpPricing.aspx', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'countyrecords-com',
    rank: 17,
    rankDisplay: '#17',
    isTiedLeader: false,
    name: 'CountyRecords.com',
    shortName: 'CountyRecords.com',
    vendor: 'hal Systems Corporation (Kyle, TX)',
    website: 'https://www.countyrecords.com/',
    category: 'Texas 220+ County Historical Deed & Index Repository',
    tierGroup: 'tier2-courthouse-portals',
    compositeScore: 79.0,
    subscores: {
      chainDepth: 45,
      mathAndProof: 68,
      unitEconomics: 82,
      usabilityAndLci: 79,
      texasFit: 95,
      practiceOps: 62,
    },
    pricingSummary: '$500/county/mo subscription (200 downloads + 200 previews) · PAYG $1.50/page or $3.50/doc with preview · 200 previews $100',
    pricingDetail:
      'Published rates: $500/county/month includes 200 document downloads + 200 previews; pay-as-you-go $1.50/page or $3.50/document with preview; bulk 200-preview pack $100 (credit card billing).',
    publicPricing: true,
    startingPriceNumeric: 0,
    texasCoverage: '220+ Texas counties plus selected New Mexico and Oklahoma counties',
    whoUsesIt:
      'Texas title examiners, rural-county abstractors, and TitleDesk retrieval workflows needing deep historical volume/page scans across 220+ Texas counties.',
    exactWorkTypes: [
      'Searching and previewing historical Texas Deed, Oil & Gas Lease, and Probate volumes across 220+ counties',
      'Whole-document ($3.50/doc) and county-subscription downloads on rural West, South, and East Texas tracts',
    ],
    overview:
      'Operated by Kyle, Texas-based hal Systems Corporation, CountyRecords.com covers 220+ Texas counties and often holds clean historical volume scans in rural counties where clerk self-hosted portals stop in the 1980s or 1990s. Its $3.50 per-document PAYG option (and $100/200-preview pack) makes multi-page oil and gas instruments reasonable without a monthly commitment, and it is one of the three primary Texas portals natively supported by TitleDesk.',
    desktopProgramNote: 'Web portal; supported directly as a BYO courthouse connector in TitleDesk.',
    pros: [
      '220+ Texas county footprint with strong rural historical volume coverage',
      '$3.50 flat per-document PAYG option beats per-page pricing on long multi-page deeds, trusts, and probate packets',
      'Bulk preview packs ($100 for 200 previews = $0.50/preview) let examiners screen instruments before downloading',
    ],
    cons: [
      'Records repository only — zero AI reading, chain assembly, ownership math, or workbook output',
      'Single-page deeds cost $1.50/page on PAYG (vs. $1.00/page on TexasFile), so smart workflows route short vs. long instruments selectively',
      '$500/county/mo subscription only makes sense during concentrated single-county leasing pushes',
    ],
    unitEconomics: {
      model: 'PAYG ($1.50/pp or $3.50/doc) · $100/200 previews · $500/county/mo subscription',
      effectiveCostPerAssignment: '$65 – $180/assignment in targeted previews and whole-document downloads',
      savesTime: {
        verdict: 'Yes — Essential online bridge for rural Texas counties with weak clerk websites',
        detail: 'Eliminates rural courthouse vault trips across dozens of South, West, and Panhandle counties.',
      },
      savesWork: {
        verdict: 'Record access only — Pair with TitleDesk or Artificial Landman for examination',
        detail: 'Supplies verified county clerk TIFF/PDF scans into automated examination pipelines.',
      },
      savesMoney: {
        verdict: 'Yes — $3.50 whole-document cap saves heavily on 15–40 page probate & lease filings',
        detail: 'A 30-page probate packet costs $3.50 on CountyRecords PAYG doc pricing versus $30.00 at $1.00/page.',
      },
      costVsGainSummary:
        'Crucial Texas record backbone — combine CountyRecords.com previews/doc pulls with CourthouseDirect and TexasFile inside TitleDesk for minimum record spend.',
    },
    usability: {
      easeOfUseScore: 7.9,
      effectiveComplexity: 'Low-Moderate',
      complexityDetail: 'Straightforward index and book/page lookup once familiar with county-specific book naming tables (DR, OPR, OGL, PR).',
      lciScore: 28,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '1 – 2 hours',
    },
    sources: [
      { label: 'CountyRecords.com Coverage Home', url: 'https://www.countyrecords.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'CountyRecords.com Published Pricing', url: 'https://www.countyrecords.com/pricing/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'texas-public-portals',
    rank: 18,
    rankDisplay: '#18',
    isTiedLeader: false,
    name: 'Texas Public Clerk & State Portals (Kofile PublicSearch · GLO LandGrants · RRC GIS/LoneSTAR)',
    shortName: 'TX Public Clerk / GLO / RRC',
    vendor: 'Texas County Clerks / General Land Office / Railroad Commission of Texas',
    website: 'https://rrc.texas.gov/',
    secondaryUrl: 'https://s3.glo.texas.gov/glo/history/archives/land-grants/index.cfm',
    category: 'Official Sovereign Patent, Regulatory Well/Lease & Direct County Clerk Portals',
    tierGroup: 'tier2-courthouse-portals',
    compositeScore: 78.0,
    subscores: {
      chainDepth: 40,
      mathAndProof: 85,
      unitEconomics: 98,
      usabilityAndLci: 72,
      texasFit: 100,
      practiceOps: 55,
    },
    pricingSummary: 'Free index, GLO patent & RRC regulatory access · $0–$1.00/page direct county clerk copies',
    pricingDetail:
      'Texas GLO Land Grant database and RRC Public GIS Viewer / LoneSTAR / 100.2M digitized filings are free public infrastructure; Kofile (tx.publicsearch.us) and Tyler Odyssey county portals offer free index/watermarked viewing in participating counties with official copies typically $1.00/page.',
    publicPricing: true,
    startingPriceNumeric: 0,
    texasCoverage: 'Statewide for GLO original land grants and RRC oil & gas records; ~80–120+ participating Texas counties on Kofile/Tyler public portals',
    whoUsesIt: 'Every Texas landman, title attorney, division-order analyst, and automated verification pipeline.',
    exactWorkTypes: [
      'Pulling original Spanish, Mexican, Republic, and State of Texas sovereign patents and survey field notes from the Texas GLO',
      'Verifying Held-by-Production (HBP) status, P-4/P-18/PR production, unit plats, and SB 1150 inactive-well status on RRC GIS & LoneSTAR',
      'Direct free watermarked inspection or $1/page official downloads on county clerk Kofile (`*.tx.publicsearch.us`) portals',
    ],
    overview:
      'Every defensible Texas mineral chain starts at the General Land Office (sovereign patent and original survey acreage) and ends with a Railroad Commission check (active/inactive wells, pooled units, production reports — bolstered in 2026 by the RRC crossing 100,205,204 digitized records and shifting P-18, PR, P-5, W-3C, and W-3X filings onto LoneSTAR). Alongside direct county clerk portals like Kofile PublicSearch, these public systems cost $0/month in subscriptions, though fragmented county logins and missing pre-1980 clerk scans mean landmen still pair them with TexasFile/CourthouseDirect/CountyRecords and run the assembled packet through TitleDesk or Artificial Landman.',
    desktopProgramNote: 'Public state/county web portals; TitleDesk Desktop Agent cross-references RRC well/lease data and GLO survey metadata directly.',
    pros: [
      '$0 subscription cost for official primary-source sovereign patents (GLO), well/production filings (RRC), and participating Kofile county indexes',
      'RRC\'s Feb 2026 100.2M-record digitization milestone and Sept 2026 LoneSTAR e-filing transition dramatically expand online HBP evidence',
      'Kofile OCR full-text search in participating Texas counties surfaces unindexed middle-of-deed tract references',
    ],
    cons: [
      'Fragmented across dozens of separate county subdomains, inconsistent historical scan start dates, and zero unified runsheet export',
      'Provides raw primary documents only — zero automated chain construction, fraction math, or client deliverable assembly',
    ],
    unitEconomics: {
      model: 'Public statutory infrastructure ($0 subscription; $0–$1.00/page clerk copies)',
      effectiveCostPerAssignment: '$0 for GLO patents, RRC well checks & watermarked Kofile views',
      savesTime: {
        verdict: 'Yes — Instant sovereign patent & RRC HBP verification',
        detail: 'Eliminates Austin archive requests for GLO patent files and RRC well-file microfilm pulls.',
      },
      savesWork: {
        verdict: 'Source lookup only — Manual consolidation across separate state & county portals',
        detail: 'Best used as primary-source inputs uploaded into TitleDesk or Artificial Landman.',
      },
      savesMoney: {
        verdict: 'Yes — Maximum $0 cost for root patents, survey plats & regulatory HBP proof',
        detail: 'Zero software or portal markup.',
      },
      costVsGainSummary:
        'Mandatory free primary-source foundation for every Texas title run; feed GLO patents + clerk deeds into TitleDesk or Artificial Landman for automated chaining and NMA math.',
    },
    usability: {
      easeOfUseScore: 7.4,
      effectiveComplexity: 'Moderate',
      complexityDetail: 'Kofile is modern and intuitive, whereas navigating RRC legacy queries, LoneSTAR forms, and GLO original grantee spellings takes Texas regulatory familiarity.',
      lciScore: 35,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '3 – 4 hours across GLO, RRC GIS & Kofile',
    },
    sources: [
      { label: 'Railroad Commission of Texas — 100M Digitized Records Release (Feb 2, 2026)', url: 'https://rrc.texas.gov/news/020226-digitization-press-release/', verifiedDate: '2026-11-17', sourceType: 'Government Filing / Agency Release' },
      { label: 'RRC Transition to LoneSTAR Electronic Filing (Sept 1, 2026)', url: 'https://rrc.texas.gov/announcements/06042026-nto-transitioning-from-paper-forms-to-electronic-filing/', verifiedDate: '2026-11-17', sourceType: 'Government Filing / Agency Release' },
    ],
  },

  // ── TIER 3: ENTERPRISE & MID-MARKET LAND ADMINISTRATION PLATFORMS (POST-RESEARCH) ──
  {
    id: 'landboss',
    rank: 19,
    rankDisplay: '#19',
    isTiedLeader: false,
    name: 'Landboss',
    shortName: 'Landboss',
    vendor: 'UnitK Software',
    website: 'https://www.landboss.com/',
    category: 'Brokerage Lease Tracking, Time/Expense Billing, 1099s & Mail-Merge Admin SaaS',
    tierGroup: 'tier3-land-admin',
    compositeScore: 67.5,
    subscores: {
      chainDepth: 25,
      mathAndProof: 45,
      unitEconomics: 74,
      usabilityAndLci: 80,
      texasFit: 78,
      practiceOps: 91,
    },
    pricingSummary: 'Per-user quote (Accounting / Full Access / View-Only tiers + flat unlimited-user option; dollar figures unpublished)',
    pricingDetail: 'Published tier structure (Accounting, Full Access, View-Only, or unlimited-user flat fee with commitment discounts), exact dollar quotes via sales.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Supports Texas Abstract/Survey plus PLSS and metes-and-bounds tract administration (user-entered data)',
    whoUsesIt:
      'Oil & gas, wind, and solar land brokerages managing field-broker timesheets, client invoicing, 1099 contractor paystubs, QuickBooks Desktop sync, and mail-merge lease/offer packages.',
    exactWorkTypes: [
      'Brokerage contractor time/expense tracking, receipt uploads, client invoicing, and 1099 paystubs',
      'Word mail-merge generation of lease forms, offer letters, and drafts',
      'Tracking signed leases, bonus/rental obligations, and uploaded shapefile maps',
    ],
    overview:
      'Landboss (v1.44 released Sept 2026) is the strongest back-office brokerage administration platform for independent land services firms — handling contractor day-rate billing, QuickBooks Desktop integration, 1099s, lease obligation calendars, and mail-merge offer letters. Crucially, however, Landboss performs **zero title research**: it has no OCR, no AI document reading, no chain-of-title builder, and no automated NMA engine (note that TitleDesk Desktop Agent is the only AI title workstation that also includes built-in exact-cents time & billing).',
    desktopProgramNote: 'Web SaaS with QuickBooks Desktop sync; not a title-examination workstation.',
    pros: [
      'Best-in-class brokerage back-office administration: contractor timesheets, receipts, invoicing, 1099s, and QuickBooks sync',
      'Word mail-merge lease/offer packet generation and granular client/contractor view permissions',
    ],
    cons: [
      'Performs zero courthouse title research, zero OCR, zero AI chain building, and zero automated mineral fraction math',
      'Dollar pricing requires a sales quote despite publishing tier names',
    ],
    unitEconomics: {
      model: 'Role-tiered per-user subscription or flat brokerage license (quote)',
      effectiveCostPerAssignment: 'Back-office overhead amortized across active brokerage crew billing',
      savesTime: {
        verdict: 'Yes on brokerage invoicing & lease mail-merges — Zero on title examination',
        detail: 'Cuts Friday payroll/invoicing admin hours, not courthouse chain-of-title hours.',
      },
      savesWork: {
        verdict: 'Admin & accounting automation only',
        detail: 'Eliminates manual contractor invoice spreadsheets and repetitive Word offer-letter typing.',
      },
      savesMoney: {
        verdict: 'Reduces brokerage bookkeeper overhead for multi-contractor crews',
        detail: 'Complements — never replaces — an AI title examination engine.',
      },
      costVsGainSummary:
        'Strong brokerage back-office companion for 5–50+ person field leasing crews; pair with TitleDesk or Artificial Landman to perform the actual title examination.',
    },
    usability: {
      easeOfUseScore: 8.0,
      effectiveComplexity: 'Moderate',
      complexityDetail: 'Simple for field brokers logging time; moderate setup for accounting admins configuring QuickBooks sync and mail-merge templates.',
      lciScore: 39,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '2 – 3 days',
    },
    sources: [
      { label: 'Landboss Brokerage Management Platform', url: 'https://www.landboss.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'pakenergy-land',
    rank: 20,
    rankDisplay: '#20',
    isTiedLeader: false,
    name: 'PakEnergy Land (WolfePak + PakEnergy Land AI)',
    shortName: 'PakEnergy Land',
    vendor: 'PakEnergy (Abilene, TX)',
    website: 'https://pakenergy.com/blog/ai-lease-analysis',
    category: 'Mid-Market E&P Land Administration, Division Orders & AI Lease Provision Suite',
    tierGroup: 'tier3-land-admin',
    compositeScore: 66.5,
    subscores: {
      chainDepth: 28,
      mathAndProof: 60,
      unitEconomics: 60,
      usabilityAndLci: 70,
      texasFit: 88,
      practiceOps: 86,
    },
    pricingSummary: 'Unpublished per-user enterprise/mid-market SaaS quote',
    pricingDetail: 'Demo-gated per-user SaaS pricing; bundles with WolfePak upstream accounting, division orders, and owner-relations CRM.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Headquartered in Abilene, TX; deep install base across independent Texas E&P operators (post-acquisition lease admin)',
    whoUsesIt:
      'Independent and mid-sized Texas E&P operators managing executed oil & gas leases, SOX-compliant delay rental/royalty approvals, division orders, and owner relations alongside WolfePak accounting.',
    exactWorkTypes: [
      'Post-closing lease obligation eCalendars, SOX-compliant payment approvals, and automated GIS lease polygons',
      'Embedded PakEnergy Land AI flagging lease expirations, depth clauses, and obligations on executed leases',
      'Division-order letter generation, owner-relations CRM, and paperless broker submittals',
    ],
    overview:
      'Abilene-based PakEnergy serves 2,300+ upstream companies and added embedded AI lease-provision flagging inside PakEnergy Land in late 2026 (claiming 5–10× faster agreement input and 20+ hours/month saved on admin searches). Like Quorum and iLandMan, PakEnergy Land is an **operator system of record after leases are signed or title is finished**: it does not pull county clerk deed chains, run patent-to-present runsheets, or compute sovereign mineral title from raw courthouse archives.',
    desktopProgramNote: 'Cloud SaaS suite; no field title-examination desktop app.',
    pros: [
      'Tight native integration between Texas E&P lease administration, division orders, owner-relations CRM, and WolfePak accounting',
      'Embedded AI lease analysis highlights expirations, obligations, and depth clauses during agreement onboarding',
    ],
    cons: [
      'Post-acquisition lease administration system — performs zero courthouse chain-of-title research or historical deed abstracting',
      'Unpublished per-user enterprise pricing and multi-week implementation onboarding',
    ],
    unitEconomics: {
      model: 'Per-user annual E&P SaaS contract (unpublished)',
      effectiveCostPerAssignment: 'Operator G&A system-of-record cost (not priced per title assignment)',
      savesTime: {
        verdict: 'Yes on lease onboarding & monthly obligation calendars — Zero on courthouse title chains',
        detail: 'Speeds entering signed leases into the E&P database, not examining mineral title beforehand.',
      },
      savesWork: {
        verdict: 'Automates lease-admin & DO workflows for in-house land techs',
        detail: 'Replaces disconnected lease-expiration spreadsheets and manual owner-call logs.',
      },
      savesMoney: {
        verdict: 'Prevents costly missed lease expirations & rental payments for E&P operators',
        detail: 'Downstream complement to TitleDesk/Artificial Landman, which produce the pre-acquisition title work.',
      },
      costVsGainSummary:
        'Excellent post-closing system of record for Texas operators running WolfePak; sits downstream of TitleDesk and Artificial Landman in the lifecycle.',
    },
    usability: {
      easeOfUseScore: 7.4,
      effectiveComplexity: 'High',
      complexityDetail: 'Full E&P land + accounting ERP workflow requiring structured chart-of-accounts, deck, and obligation configuration.',
      lciScore: 78,
      lciBand: 'Enterprise Implementation & Admin Training',
      timeToProficiency: '3 – 4 weeks',
    },
    sources: [
      { label: 'PakEnergy AI Lease Analysis Overview', url: 'https://pakenergy.com/blog/ai-lease-analysis', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'ifs-ilandman',
    rank: 21,
    rankDisplay: '#21',
    isTiedLeader: false,
    name: 'IFS iLandMan (formerly P2 iLandMan)',
    shortName: 'IFS iLandMan',
    vendor: 'IFS (acquired P2 Energy Solutions)',
    website: 'https://www.ifs.com/solutions/energy-and-resources-software',
    category: 'Enterprise Tract-Based E&P Lease Lifecycle & GIS Management Platform',
    tierGroup: 'tier3-land-admin',
    compositeScore: 65.5,
    subscores: {
      chainDepth: 26,
      mathAndProof: 62,
      unitEconomics: 54,
      usabilityAndLci: 66,
      texasFit: 86,
      practiceOps: 85,
    },
    pricingSummary: 'Enterprise custom quote only (no public pricing)',
    pricingDetail: 'Multi-seat enterprise cloud contract sold through IFS Energy & Resources.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Widely deployed by mid-to-large E&P operators across Texas basins for tract/formation lease tracking',
    whoUsesIt:
      'Mid-to-large E&P operator land departments and captive leasing brokerages entering completed tract ownership and lease terms into an operator\'s master GIS/DOI database.',
    exactWorkTypes: [
      'Tract- and depth/formation-based lease lifecycle administration, eCalendar obligations, and rental payments',
      'AI-powered lease condition extraction and mobile Land Broker field capture',
      'Real-time GIS tract polygon updates tied to net-acreage and working-interest/NRI dashboards',
    ],
    overview:
      'For two decades iLandMan (acquired by P2 and then by IFS in 2022) has been a staple tract-based E&P land management system, adding AI lease-condition loading and mobile broker capture. Yet confusion persists in generic online lists: **iLandMan does not research title from courthouse deeds**. Examiners must first determine who owns the minerals, trace the chain from patent, and compute exact fractions externally (e.g., in TitleDesk or Artificial Landman) before keying or importing the resulting ownership and lease records into iLandMan.',
    desktopProgramNote: 'Enterprise cloud SaaS + Land Broker mobile module; not a title-examination workstation.',
    pros: [
      'Mature tract- and formation-depth tracking across complex horizontal drilling units',
      'Live GIS linkage updating lease status maps as tract data and obligations change',
    ],
    cons: [
      'Performs zero courthouse deed retrieval, zero chain-of-title construction, and zero raw-instrument OCR abstracting',
      'Heavyweight enterprise IFS sales cycle, unpublished pricing, and steep analyst training requirements',
    ],
    unitEconomics: {
      model: 'Enterprise cloud suite contract (unpublished)',
      effectiveCostPerAssignment: 'Enterprise E&P departmental license',
      savesTime: {
        verdict: 'Yes on multi-broker E&P lease tracking — Zero on raw chain-of-title examination',
        detail: 'Consolidates broker submittals for operators rather than reading county clerk deeds.',
      },
      savesWork: {
        verdict: 'Post-research tract & obligation rollups',
        detail: 'Consumes finished MORs and runsheets produced by title tools.',
      },
      savesMoney: {
        verdict: 'Enterprise governance tool — Not an independent landman cost-saver',
        detail: 'Independent landmen only use iLandMan when an operator client provides a contractor login.',
      },
      costVsGainSummary:
        'Complementary downstream system of record for large E&P operators — TitleDesk and Artificial Landman produce the verified mineral workbooks that get loaded into iLandMan.',
    },
    usability: {
      easeOfUseScore: 6.7,
      effectiveComplexity: 'Enterprise-Specialist',
      complexityDetail: 'Deep relational tract/formation data model requiring dedicated land-tech training to avoid duplicate tract or depth-severance entry errors.',
      lciScore: 84,
      lciBand: 'Enterprise Implementation & Admin Training',
      timeToProficiency: '4 – 6 weeks',
    },
    sources: [
      { label: 'IFS Energy & Resources Land Software Overview', url: 'https://grooper.com/blog_posts/best-land-management-software/', verifiedDate: '2026-11-17', sourceType: 'Industry Reference' },
    ],
  },
  {
    id: 'quorum-land',
    rank: 22,
    rankDisplay: '#22',
    isTiedLeader: false,
    name: 'My Quorum Land / On Demand Land (+ Data Extraction AI)',
    shortName: 'Quorum Land',
    vendor: 'Quorum Software (Houston, TX)',
    website: 'https://quorumsoftware.com/solutions/upstream-on-demand/land/',
    category: 'Tier-1 Enterprise Upstream Land System of Record & Lease Extraction Add-On',
    tierGroup: 'tier3-land-admin',
    compositeScore: 65.0,
    subscores: {
      chainDepth: 24,
      mathAndProof: 66,
      unitEconomics: 50,
      usabilityAndLci: 64,
      texasFit: 86,
      practiceOps: 88,
    },
    pricingSummary: 'Enterprise subscription + separate licensed add-on for Data Extraction AI (no public pricing)',
    pricingDetail: 'Custom enterprise licensing for upstream operators; Data Extraction AI (launched May 18, 2026) is sold as a paid add-on.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Houston-headquartered enterprise standard across major Permian, Eagle Ford, and Haynesville E&P operators (post-research)',
    whoUsesIt:
      'Supermajors and large public/PE-backed E&P operators ("80% of the largest U.S. oil & gas companies," 11M+ managed agreements) administering enterprise leases, obligations, Esri GIS layers, and DOI decks.',
    exactWorkTypes: [
      'Enterprise lease, contract, ROW, obligation payment, and Division of Interest (DOI) management across millions of acres',
      'May 2026 Data Extraction AI pulling fields from executed leases/amendments into Quorum records with confidence scores',
      'Enterprise Esri ArcGIS / QGIS Pro spatial asset synchronization',
    ],
    overview:
      'Houston-based Quorum Software is the heavyweight enterprise system of record for major U.S. operators and introduced Data Extraction in On Demand Land on May 18, 2026 — linking extracted lease/contract values to source page locations with confidence scores for analyst review. Even with that add-on, Quorum Land sits at the **end** of the title supply chain: it manages agreements an operator already owns, whereas field landmen and title examiners use TitleDesk or Artificial Landman to examine courthouse records and prove who owns the minerals in the first place.',
    desktopProgramNote: 'Enterprise cloud platform + Esri ArcGIS desktop extensions; not a title-research app.',
    pros: [
      'Unrivaled enterprise scale (90+ North American operators, 11M+ managed agreements) with deep Esri GIS and accounting integration',
      'May 2026 Data Extraction add-on links extracted lease fields to source coordinates with analyst review gates',
    ],
    cons: [
      'Zero courthouse chain-of-title construction, zero runsheet generation from raw deeds, and zero independent-landman self-serve option',
      'Data Extraction AI is a separate enterprise add-on with bulk analysis and lease chat still listed on the future roadmap',
      'Highest implementation complexity and longest onboarding cycle in upstream land software',
    ],
    unitEconomics: {
      model: 'Six-figure+ enterprise annual subscription + paid AI add-on',
      effectiveCostPerAssignment: 'Enterprise corporate infrastructure (not applicable to per-tract title research)',
      savesTime: {
        verdict: 'Yes for enterprise lease analysts — Zero for courthouse title examiners',
        detail: 'Cuts manual typing when onboarding executed leases and A&D data rooms into Quorum.',
      },
      savesWork: {
        verdict: 'Automates enterprise lease-record population',
        detail: 'Streamlines post-acquisition data entry.',
      },
      savesMoney: {
        verdict: 'Enterprise scale only',
        detail: 'Built for operators managing 50,000+ leases, not field title research.',
      },
      costVsGainSummary:
        'The enterprise destination database where finished title opinions and leases live — completely complementary to TitleDesk and Artificial Landman.',
    },
    usability: {
      easeOfUseScore: 6.4,
      effectiveComplexity: 'Enterprise-Specialist',
      complexityDetail: 'Requires dedicated Quorum land analysts, database governance, and formal training.',
      lciScore: 88,
      lciBand: 'Enterprise Implementation & Admin Training',
      timeToProficiency: '4 – 8 weeks',
    },
    sources: [
      { label: 'Quorum Upstream On Demand Land', url: 'https://quorumsoftware.com/solutions/upstream-on-demand/land/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Quorum Data Extraction AI Announcement (May 18, 2026)', url: 'https://www.quorumsoftware.com/blog/posts/introducing-data-extraction-in-on-demand-land-turning-documents-into-trusted-actionable-data/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'pandell-landworks',
    rank: 23,
    rankDisplay: '#23',
    isTiedLeader: false,
    name: 'Pandell LandWorks',
    shortName: 'Pandell LandWorks',
    vendor: 'Pandell (Houston & Calgary)',
    website: 'https://www.pandell.com/',
    category: 'Cloud Surface & Mineral Agreement Management & GIS Suite',
    tierGroup: 'tier3-land-admin',
    compositeScore: 62.0,
    subscores: {
      chainDepth: 22,
      mathAndProof: 55,
      unitEconomics: 56,
      usabilityAndLci: 68,
      texasFit: 75,
      practiceOps: 80,
    },
    pricingSummary: 'Bundled enterprise quote (no public pricing)',
    pricingDetail: 'Quoted as part of Pandell\'s Land & GIS Suite (LandWorks, GIS, Projects, Crossings, Connect).',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Used by 500+ North American energy/pipeline/utility operators including Texas surface/ROW and E&P teams',
    whoUsesIt: 'Mid-sized E&P, midstream pipeline, and utility surface/mineral land administration teams.',
    exactWorkTypes: [
      'Managing active surface, crossing, ROW, and mineral agreements with GIS mapping and obligation alerts',
      'Assembling historical ownership views exclusively from records manually entered by land analysts',
    ],
    overview:
      'Pandell LandWorks is a respected cloud land-asset administration suite across 500+ North American operators. While marketing copy mentions creating a "chain of title," its own documentation clarifies that this view is assembled from granular acreage records your analysts have already entered — it has no AI document reading, no OCR, and no courthouse deed research capability.',
    desktopProgramNote: 'Cloud browser suite; no local title workstation.',
    pros: [
      'Clean unified suite spanning mineral leases, midstream pipeline crossings, surface rights, and GIS',
    ],
    cons: [
      'Zero AI document extraction, zero OCR, and zero courthouse title-chain research from deeds',
      'Unpublished bundled enterprise pricing',
    ],
    unitEconomics: {
      model: 'Bundled enterprise SaaS quote',
      effectiveCostPerAssignment: 'Departmental land-admin license',
      savesTime: {
        verdict: 'Yes on surface/crossing & lease tracking — Zero on deed examination',
        detail: 'Organizes maintained agreements rather than researching courthouse title.',
      },
      savesWork: {
        verdict: 'Agreement & obligation administration only',
        detail: 'Requires finished title inputs.',
      },
      savesMoney: {
        verdict: 'Midstream / operator admin efficiency only',
        detail: 'Not a substitute for title examination software.',
      },
      costVsGainSummary: 'Solid midstream/operator agreement database; non-competitor to TitleDesk and Artificial Landman for title research.',
    },
    usability: {
      easeOfUseScore: 7.2,
      effectiveComplexity: 'High',
      complexityDetail: 'Multi-module enterprise land/GIS suite requiring structured onboarding.',
      lciScore: 76,
      lciBand: 'Enterprise Implementation & Admin Training',
      timeToProficiency: '3 – 5 weeks',
    },
    sources: [
      { label: 'Pandell Land & GIS Suite Overview', url: 'https://www.pandell.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },

  // ── TIER 4: MINERAL OWNER PORTFOLIO MANAGEMENT ──
  {
    id: 'enverus-mineralsoft',
    rank: 24,
    rankDisplay: '#24',
    isTiedLeader: false,
    name: 'Enverus MineralSoft',
    shortName: 'MineralSoft',
    vendor: 'Enverus',
    website: 'https://www.enverus.com/products/mineralsoft/',
    category: 'Mineral & Royalty Owner Revenue, Check-Stub & Portfolio Platform',
    tierGroup: 'tier4-mineral-portfolio',
    compositeScore: 60.5,
    subscores: {
      chainDepth: 18,
      mathAndProof: 68,
      unitEconomics: 55,
      usabilityAndLci: 74,
      texasFit: 84,
      practiceOps: 78,
    },
    pricingSummary: 'Enterprise / family-office custom quote (no public pricing)',
    pricingDetail: 'Annual portfolio subscription through Enverus.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Strong Texas RRC well/production linkage for auditing royalty check stubs and NRI decimals',
    whoUsesIt:
      'Mineral and royalty funds, bank trust departments, and Texas family offices tracking monthly royalty check stubs, well NRI decimals, and operator underpayments.',
    exactWorkTypes: [
      'Auditing monthly royalty check stubs against Texas RRC production volumes and division-order NRI decimals',
      'Tracking owned mineral acreage, wells, and revenue across family-office or fund portfolios',
    ],
    overview:
      'MineralSoft (acquired by Enverus) is built for **mineral and royalty owners** managing revenue and check stubs after acquisition, rather than for landmen researching courthouse chains of title. Mineral buyers routinely use Artificial Landman or TitleDesk to verify chain-of-title NMA *before* closing an acquisition, then track ongoing monthly royalty checks in MineralSoft.',
    desktopProgramNote: 'Cloud portfolio platform; no title-research desktop app.',
    pros: [
      'Purpose-built check-stub ingestion and RRC production cross-checks to catch operator royalty underpayments',
    ],
    cons: [
      'Zero courthouse chain-of-title research, runsheet construction, or deed examination',
      'Unpublished Enverus enterprise quote pricing',
    ],
    unitEconomics: {
      model: 'Annual portfolio subscription quote',
      effectiveCostPerAssignment: 'Portfolio AUM overhead (not per-tract title research)',
      savesTime: {
        verdict: 'Yes on monthly royalty check-stub reconciliation — Zero on title research',
        detail: 'Automates revenue accounting for owned minerals.',
      },
      savesWork: {
        verdict: 'Eliminates manual CDEX/check-stub entry',
        detail: 'Post-closing portfolio accounting only.',
      },
      savesMoney: {
        verdict: 'Recovers underpaid royalties on producing Texas wells',
        detail: 'Pairs downstream of Artificial Landman / TitleDesk pre-close title diligence.',
      },
      costVsGainSummary: 'Valuable post-acquisition royalty tracker for mineral funds; zero overlap with pre-acquisition title examination.',
    },
    usability: {
      easeOfUseScore: 7.5,
      effectiveComplexity: 'Moderate-High',
      complexityDetail: 'Designed for mineral portfolio analysts reconciling check stubs, decks, and acreage schedules.',
      lciScore: 54,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '3 – 5 days',
    },
    sources: [
      { label: 'Enverus MineralSoft Product Reference', url: 'https://www.enverus.com/products/mineralsoft/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
]);

// Out-of-State Pilots, Services & Absorbed/Defunct Tools Frequently Asked About in AI Queries
export const ADJACENT_AND_HISTORICAL_TOOLS = Object.freeze([
  {
    name: 'MineralScout.ai',
    url: 'https://mineralscout.ai/landman-software',
    status: 'Closed Pilot — Colorado Only (Zero Texas Coverage)',
    summary:
      'Walks first-party county grantor-grantee indexes via breadth-first search and computes net mineral interest per link with skip tracing and lead scoring, but as of November 2026 covers only Colorado\'s DJ Basin (Weld & Adams counties) in a closed pilot with unpublished pricing and cannot OCR user-supplied Texas deed packets.',
  },
  {
    name: 'ThoughtTrace (now Thomson Reuters Document Intelligence)',
    url: 'https://www.thomsonreuters.com/',
    status: 'Acquired May 2022 — No Longer a Standalone Landman Product',
    summary:
      'Once widely known in Texas E&P for AI oil-and-gas lease provision extraction (and powering P2 Tobin\'s 2018 Lease Obligation Intelligence), ThoughtTrace was acquired by Thomson Reuters in May 2022 and folded into enterprise legal Document Intelligence. Still frequently hallucinated as active standalone landman software by outdated AI training cutoffs.',
  },
  {
    name: 'Prosper Natural Resources',
    url: 'https://prospernr.com/',
    status: 'CPL-Verified Turnkey Consulting Service (Not Software)',
    summary:
      'Norman, OK consultancy led by a 28-year CPL combining internal AI lease abstraction with human verification ("machines for the volume, gray hair for the judgment") on client data-room leases; custom engagement service rather than licensable software or courthouse chaining.',
  },
  {
    name: 'Grooper (BIS)',
    url: 'https://www.bisok.com/',
    status: 'Enterprise Intelligent Document Processing (IDP) Platform',
    summary:
      'Oklahoma-based enterprise document capture and OCR engine used in custom BIS-staffed oil & gas lease abstraction engagements; enterprise IT/IDP build rather than a self-serve landman title workstation.',
  },
  {
    name: 'LandGate',
    url: 'https://www.landgate.com/',
    status: 'Pivoted Away from Oil & Gas Landman Title Work (Wood Mackenzie)',
    summary:
      'Pivoted completely to renewable energy, solar, wind, data-center, EV, and carbon/CCS site-selection data and CRE marketplace listings; legacy oil & gas landman/mineral pages now return 404.',
  },
  {
    name: 'Oseberg',
    url: 'https://oseberg.io/',
    status: 'Unreachable / Apparent Shutdown (2026)',
    summary:
      'Historically offered upstream regulatory and courthouse filing analytics in TX/OK/NM, but as of October–November 2026 all Oseberg domains fail TLS validation and are unreachable.',
  },
]);

export const ALL_RANKED_TOOLS = Object.freeze([...TIER1_TOOLS, ...ECOSYSTEM_TOOLS]);
