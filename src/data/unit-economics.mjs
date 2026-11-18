// Empirical Unit Economics, Task-Time Benchmarks, Courthouse Record Fee Schedules & Multi-Volume Cost Curves

export const MANUAL_TASK_BENCHMARKS = Object.freeze([
  {
    task: 'Abstract one recorded instrument onto a runsheet row (parties, dates, Vol/Page, granting/reservation clauses)',
    manualMinutes: 12,
    typical45DocChainMinutes: 540,
    automatedByTitleDeskAndAL: 'Automated with page-image citation & human review gate',
  },
  {
    task: 'Transcribe one runsheet row cleanly into the client\'s Excel workbook format',
    manualMinutes: 3,
    typical45DocChainMinutes: 135,
    automatedByTitleDeskAndAL: 'Generated directly into 4-sheet .xlsx or custom client template',
  },
  {
    task: 'Work one fractional conveyance, reservation, or heirship split through the ownership ledger by hand',
    manualMinutes: 8,
    typical45DocChainMinutes: 256, // ~32 conveyances
    automatedByTitleDeskAndAL: 'Deterministic BigInt / 3-model verified rational fraction ledger',
  },
  {
    task: 'Verify each tract balances to 100.000000% (exact 1/1) and hunt down rounding or Duhig discrepancies',
    manualMinutes: 15,
    typical45DocChainMinutes: 45, // 3 tracts
    automatedByTitleDeskAndAL: 'Instant exact-fraction balance proof + Duhig / shortfall flag',
  },
  {
    task: 'Draft one curative requirement / title defect note with recording citations',
    manualMinutes: 20,
    typical45DocChainMinutes: 80, // 4 defects
    automatedByTitleDeskAndAL: 'Pre-drafted in Title Review sheet / Issues register with Vol/Page links',
  },
  {
    task: 'Assemble numbered deliverable folder tree and rename/file source instrument PDFs',
    manualMinutes: 55,
    typical45DocChainMinutes: 55,
    automatedByTitleDeskAndAL: 'Automated in TitleDesk Desktop Agent custom folder-tree builder',
  },
  {
    task: 'Re-format a completed MOR / DDR report to satisfy a second operator\'s column layout',
    manualMinutes: 45,
    typical45DocChainMinutes: 45,
    automatedByTitleDeskAndAL: 'Zero-code template switch in TitleDesk Desktop Agent',
  },
]);

// Total on a representative 45-instrument, 3-tract, 260-page Texas mineral chain = 1,156 minutes (~19.3 hours = ~2.4 landman days)
export const STANDARD_ASSIGNMENT_MODEL = Object.freeze({
  label: 'Representative Texas Mineral Assignment (45 Instruments · 260 Pages · 3 Tracts · 4 Curative Items)',
  manualHours: 19.3,
  manualDaysAt8Hrs: 2.41,
  dayRateDefault: 600, // $600/day ($75/hr) experienced CPL/RPL benchmark
  manualLaborCostAtDefault: 1448,
  reviewHoursWithTitleDeskOrAL: 2.2, // ~2.2 hrs final human CPL/examiner verification & curative judgment
  reviewLaborCostAtDefault: 165,
});

export const COURTHOUSE_PORTAL_RATES_2026 = Object.freeze([
  {
    portal: 'TexasFile',
    url: 'https://www.texasfile.com/pricing',
    monthlyBase: '$0 / mo',
    indexSearch: 'Free',
    previewViewCost: 'None (index summary free; AI summary $1–$4)',
    imageDownloadCost: '$1.00 / page (+$0.25/pp optional OCR)',
    subscriptionPlantOption: 'N/A (pure pay-as-you-go; $5 statewide search)',
    sample260PagePacketCost: '$260.00 (buying all 260 pages)',
    bestFor: 'Zero-retainer downloads across all 254 counties & short 1–3 page deeds',
  },
  {
    portal: 'CourthouseDirect.com',
    url: 'https://www.courthousedirect.com/SignUpPricing.aspx',
    monthlyBase: '$100 / mo (FileViewer) or $50–$200 / mo (TVP)',
    indexSearch: 'Included in plan / plant',
    previewViewCost: '300 views included in $100 FileViewer ($0.50/view extra)',
    imageDownloadCost: '$1.00/TX doc (TVP Plus, $200 min) or $2.00/TX doc (TVP, $50 min)',
    subscriptionPlantOption: '$500 / county / mo + $50/user + $1.50/doc (96 TX plants)',
    sample260PagePacketCost: '~$45.00 – $90.00 (45 docs on TVP Plus after FileViewer screening)',
    bestFor: 'Viewing historical books (~$0.33–$0.50/view) BEFORE buying & multi-page oil/gas leases',
  },
  {
    portal: 'CountyRecords.com',
    url: 'https://www.countyrecords.com/pricing/',
    monthlyBase: '$0 / mo (PAYG) or $500 / county / mo',
    indexSearch: 'Free',
    previewViewCost: '$100 bulk pack for 200 previews ($0.50/preview)',
    imageDownloadCost: '$3.50 / whole document (with preview) or $1.50 / page PAYG',
    subscriptionPlantOption: '$500 / county / mo (includes 200 downloads + 200 previews)',
    sample260PagePacketCost: '~$157.50 (45 whole docs @ $3.50/doc PAYG)',
    bestFor: '220+ TX counties, rural deed books & long 10–40 page probate/trust instruments',
  },
  {
    portal: 'TX Public Portals (Kofile / GLO / RRC)',
    url: 'https://rrc.texas.gov/',
    monthlyBase: '$0 / mo',
    indexSearch: 'Free',
    previewViewCost: '$0 watermarked browser preview (participating Kofile counties)',
    imageDownloadCost: '$0 (GLO patents & RRC LoneSTAR/GIS) · ~$1.00/page official clerk copy',
    subscriptionPlantOption: 'Public taxpayer infrastructure',
    sample260PagePacketCost: '$0 preview / ~$0 for GLO & RRC filings',
    bestFor: 'Sovereign GLO patents, RRC 100.2M well/HBP filings & watermarked modern OPR screening',
  },
]);

export const VOLUME_UNIT_ECONOMICS = Object.freeze([
  {
    option: 'Manual Abstracting & Hand Ledger ($600/day CPL)',
    pricingBasis: '19.3 hrs/assignment @ $75/hr (excludes courthouse copies)',
    cost1Run: '$1,448',
    cost5Runs: '$7,238',
    cost10Runs: '$14,475',
    cost25Runs: '$36,188',
    cost70Runs: '$101,325',
    perRunAt10: '$1,447.50',
    idleMonthBurn: '$0 (contractor) / $10k+ (salaried)',
  },
  {
    option: 'TitleDesk Browser OR Artificial Landman (Optimal Tier)',
    pricingBasis: '$249 PAYG · Solo $1,299 (8) · Pro $3,899 (25) · Ent $9,999 (70) + 2.2 hr CPL review',
    cost1Run: '$414 ($165 on free 1st ≤150pp run)',
    cost5Runs: '$2,070 ($249×5 + review)',
    cost10Runs: '$3,387 (Solo + 2 extra + review)',
    cost25Runs: '$8,024 (Pro $3,899 + review)',
    cost70Runs: '$21,549 (Ent $9,999 + review)',
    perRunAt10: '$173.70 software + $165 review = $338.70',
    idleMonthBurn: '$0 on PAYG',
  },
  {
    option: 'TitleDesk Desktop Agent ($199/mo Individual Seat)',
    pricingBasis: '$199/mo flat seat + ~$8/run BYO AI + $0 local OCR + 2.8 hr local review',
    cost1Run: '$417',
    cost5Runs: '$1,289',
    cost10Runs: '$2,379',
    cost25Runs: '$5,848 (2 seats)',
    cost70Runs: '$16,653 (5 Ent seats)',
    perRunAt10: '$27.90 software/AI + $210 review = $237.90',
    idleMonthBurn: '$199 / mo',
  },
  {
    option: 'TitleMine (MOR Landman $289/mo · Attorney $489/mo)',
    pricingBasis: '$289/mo seat + volume PDF splitter + ~14.5 hrs manual reading/entry',
    cost1Run: '$1,377',
    cost5Runs: '$5,727',
    cost10Runs: '$11,164',
    cost25Runs: '$27,763 (2 seats)',
    cost70Runs: '$77,565 (5 seats)',
    perRunAt10: '$28.90 software + $1,087.50 manual labor = $1,116.40',
    idleMonthBurn: '$289 – $489 / mo',
  },
  {
    option: 'Rowland ($199/mo Work Plan + Credit Packs)',
    pricingBasis: '$199/mo (200 credits) + credit top-ups + ~9.5 hrs manual chain/NMA build',
    cost1Run: '$912',
    cost5Runs: '$3,824',
    cost10Runs: '$7,524',
    cost25Runs: '$18,610',
    cost70Runs: '$51,900',
    perRunAt10: '~$39.90 software/credits + $712.50 labor = $752.40',
    idleMonthBurn: '$99 – $199 / mo (credits expire)',
  },
  {
    option: 'Landspect Beta ($249/seat/mo)',
    pricingBasis: '$249/mo seat + ~11.0 hrs manual packet assembly & deed-by-deed confirmation',
    cost1Run: '$1,074',
    cost5Runs: '$4,374',
    cost10Runs: '$8,499',
    cost25Runs: '$21,123 (2 seats)',
    cost70Runs: '$58,995 (5 seats)',
    perRunAt10: '$24.90 software + $825.00 labor = $849.90',
    idleMonthBurn: '$249 / mo',
  },
]);
