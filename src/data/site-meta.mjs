// Core publication metadata, rubric definitions, and compliant editorial disclosure.

export const SITE = Object.freeze({
  domain: 'texaslandmantitle.tech',
  origin: 'https://texaslandmantitle.tech',
  name: 'Texas Landman & Title Tech',
  shortName: 'TL&TT',
  tagline: 'The Empirical Reference for Texas Mineral Title, Courthouse Research & Landman Software',
  subtitle:
    'Primary-source benchmarks, unit economics, learning-curve indices, Texas mineral case law, and RRC regulatory intelligence for working landmen, title examiners, brokerages, and E&P land departments.',
  editionDate: '2026-11-17',
  editionLabel: 'Q4 2026 – Q1 2027 Benchmark (Rankings Locked Through Feb 17, 2027) · News Updated Weekly Sundays 12:00 AM CST',
  indexNowKey: '9b4e7c2d8f1a4630b5c81e9a72d4f603',
  rankingCycle: {
    lockedAt: '2026-11-17',
    nextReRankingDate: '2027-02-17',
    weeklyNewsSchedule: 'Sundays at 12:00 AM Midnight CST (0 0 * * 1)',
  },
  location: 'Texas Basin Coverage: Permian · Eagle Ford · Haynesville · Barnett · Anadarko · Gulf Coast (All 254 Counties)',
  stats: [
    { value: '24', label: 'Tools & Platforms Benchmarked' },
    { value: '254', label: 'Texas Counties Indexed in Cost Study' },
    { value: '100.2M+', label: 'Digitized RRC Records Tracked' },
    { value: '62', label: 'Cited Primary Sources & Filings' },
  ],
  // Understated, matter-of-fact institutional disclosure satisfying FTC 16 CFR Part 465 & Part 255
  // without naming The Harness Lab (per approved 2026-11-17 publisher standard).
  disclosureInline:
    'Editorial & Ownership Note: Texas Landman & Title Tech is published by the makers of Title-Desk and Artificial Landman. All competitor specifications, pricing, and coverage figures are compiled from cited public vendor documentation, statutory schedules, and press filings as of November 2026.',
  disclosureArticleOwnProduct:
    'Publisher Note: Title-Desk, Title-Desk Agent, and Artificial Landman are built and operated by the publisher of Texas Landman & Title Tech. Third-party tool data is sourced from public vendor pages and cited filings.',
  disclosureFooterFinePrint:
    'Disclosure & Legal Notice (16 CFR Part 465 / Part 255 Compliance): Texas Landman & Title Tech (texaslandmantitle.tech) is published by the makers of Title-Desk (title-desk.com, desktop.title-desk.com) and Artificial Landman (artificiallandman.io), which are evaluated and ranked in this publication alongside third-party software, courthouse portals, and enterprise land systems. Rankings reflect our published six-factor mineral-title rubric weighting end-to-end title chain coverage, deterministic ownership arithmetic, source-page verification gates, published unit-cost transparency, learning-curve efficiency, and Texas courthouse applicability; organizations prioritizing enterprise-wide post-closing lease accounting or multi-basin proprietary data subscriptions may weight criteria differently. All third-party product names, logos, and brands are property of their respective owners. Pricing, county counts, and feature availability reflect publicly accessible vendor documentation and cited filings verified through November 17, 2026, and are subject to vendor change without notice. Nothing on this site constitutes legal advice, a legal title opinion, title insurance, or land surveying. Vendor corrections with primary documentation are welcomed and processed on the Methodology page.',
});

export const RUBRIC_WEIGHTS = Object.freeze([
  {
    id: 'chainDepth',
    name: 'End-to-End Title Production Coverage',
    weightPct: 28,
    summary:
      'Measures how much of the real mineral-title workflow the software executes directly: assignment scoping, OCR/document reading, instrument classification, chronological chain construction, ownership calculation, curative/defect flagging, and client-ready workbook output.',
  },
  {
    id: 'mathAndProof',
    name: 'Ownership Math & Source-Citation Discipline',
    weightPct: 24,
    summary:
      'Evaluates whether mineral fractions and Net Mineral Acres (NMA) use exact rational/BigInt arithmetic vs. unverified LLM prose, whether every runsheet row cites Vol/Page or Instrument #, whether multi-model or human acceptance gates block unsupported claims, and whether Texas-specific rules (Duhig, Van Dyke/Clifton double fractions, pre/post-1993 intestacy) are handled.',
  },
  {
    id: 'unitEconomics',
    name: 'Unit Economics & Pricing Transparency',
    weightPct: 18,
    summary:
      'Rewards publicly posted, predictable per-run or per-seat pricing, low break-even volume, zero hidden per-page OCR markups, and clear refund/credit guarantees over opaque enterprise-only sales quotes.',
  },
  {
    id: 'usabilityAndLci',
    name: 'Ease of Use & Learning Curve Efficiency',
    weightPct: 12,
    summary:
      'Combines day-one ease of operation with our Learning Curve Index (LCI 1–100, lower = faster mastery) measuring actual hours required for a working CPL/RPL or land tech to produce client-defensible work.',
  },
  {
    id: 'texasFit',
    name: 'Texas Courthouse, Survey & Regulatory Fit',
    weightPct: 10,
    summary:
      'Assesses support for Texas Spanish/Mexican land grants, Abstract/Survey/Block/Section legal descriptions, RRC well/lease cross-referencing, and compatibility with TexasFile, CourthouseDirect, and CountyRecords.com.',
  },
  {
    id: 'practiceOps',
    name: 'Deliverable Formatting, Auditability & Data Control',
    weightPct: 8,
    summary:
      'Covers custom Excel/Word client templates, structured folder-tree assembly, offline/local data sovereignty options, append-only audit trails, and built-in time/expense billing.',
  },
]);

export const LCI_BANDS = Object.freeze([
  {
    range: '1 – 20',
    tier: 'Immediate Mastery',
    timeToProficiency: '15 – 45 minutes',
    description:
      'Guided assignment intake with zero query-language syntax or template scripting. A field landman or examiner produces a complete deliverable on the first assignment.',
  },
  {
    range: '21 – 35',
    tier: 'Same-Day Working Proficiency',
    timeToProficiency: '1 – 4 hours (one afternoon)',
    description:
      'Desktop workstation or structured document reader with clear human review gates; requires learning keyboard review shortcuts, folder mappings, or portal sign-ins.',
  },
  {
    range: '36 – 55',
    tier: 'Multi-Day Operational Ramp',
    timeToProficiency: '1 – 3 days',
    description:
      'Multi-module cloud platforms or courthouse abstract plants requiring familiarity with county-specific book codes, tract-index search syntax, and export templates.',
  },
  {
    range: '56 – 75',
    tier: 'Specialist / Analyst Ramp',
    timeToProficiency: '1 – 2 weeks',
    description:
      'Enterprise data intelligence platforms combining GIS layers, multi-county query builders, and proprietary dataset schemas.',
  },
  {
    range: '76 – 100',
    tier: 'Enterprise Implementation & Admin Training',
    timeToProficiency: '3 – 8+ weeks',
    description:
      'Full E&P system-of-record suites (lease administration, DOI/deck accounting, SOX payment workflows, custom database migration) requiring dedicated land analysts and vendor onboarding.',
  },
]);
