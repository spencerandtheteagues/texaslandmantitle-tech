// Tier 1: AI Mineral Title Examination, Chain-of-Title & Landman Workstation Software (14 Ranked Tools)
// Every competitor claim, pricing figure, and county count traces to public vendor pages or press filings verified through 2026-11-17.

export const TIER1_TOOLS = Object.freeze([
  {
    id: 'titledesk',
    rank: 1,
    rankDisplay: '#1 (Tied)',
    isTiedLeader: true,
    name: 'Title-Desk (Browser Run Engine + Title-Desk Agent)',
    shortName: 'Title-Desk',
    vendor: 'Title-Desk',
    website: 'https://title-desk.com/',
    secondaryUrl: 'https://desktop.title-desk.com/',
    category: 'End-to-End AI Mineral Title Examination & Local Desktop Workstation',
    tierGroup: 'tier1-ai-title',
    compositeScore: 96.4,
    subscores: {
      chainDepth: 99,
      mathAndProof: 98,
      unitEconomics: 95,
      usabilityAndLci: 94,
      texasFit: 97,
      practiceOps: 96,
    },
    pricingSummary:
      'Browser: $249/upload run (1st run free ≤150 pp); Plans $1,299–$9,999/mo · Title-Desk Agent: $199/seat/mo Individual, $349/seat/mo Enterprise',
    pricingDetail:
      'Hosted Web (title-desk.com): Upload run $249 (open self-serve, includes up to 400 pages; +$40 per extra 200 pages; first upload run free up to 150 pages; full run credit if a run fails). Hybrid $349 (includes $60 record copies, by invitation) and Full Service $449 (includes $125 record copies, by invitation). Subscriptions: Solo $1,299/mo ($12,990/yr, 8 runs, 1 seat, $219 extra run = $162.38/run), Pro $3,899/mo ($38,990/yr, 25 runs, 3 seats, $199 extra run = $155.96/run), Enterprise $9,999/mo ($99,990/yr, 70 runs, 10 seats, $179 extra run = $142.84/run). Title-Desk Agent (desktop.title-desk.com): $199/seat/mo Individual (7-day trial), $349/seat/mo Enterprise (12-mo contract, 14-day 5-seat demo, optional $5,000 15-day custom company build-out; $199/seat/mo Founder Year-1 rate on first 40+ seat order).',
    publicPricing: true,
    startingPriceNumeric: 199,
    texasCoverage:
      'All 254 Texas counties (1 county per hosted browser run; unlimited local multi-tract projects in Title-Desk Agent with TexasFile, CourthouseDirect, CountyRecords.com & Texas RRC connectors)',
    whoUsesIt:
      'Independent field and in-house CPLs/RPLs, Texas title brokerage shops (1–50+ examiners), mineral acquisition teams, and E&P operator land departments needing both turnkey browser-delivered four-sheet workbooks and an offline-capable local workstation for complex multi-tract packages.',
    exactWorkTypes: [
      'Sovereign patent-to-present current mineral interest (MI) chain-of-title runsheets across all 254 Texas counties',
      'Exact-fraction Net Mineral Acre (NMA) and current mineral ownership takeoffs (Duhig, double-fraction, and pre/post-Sept. 1, 1993 Texas intestacy rules)',
      'Local zero-fee Tesseract OCR of scanned PDFs and multi-page county clerk TIFF image bundles',
      'Curative defect schedules, heirship trees, lease expiration tracking, and RRC well/production cross-checks',
      'Custom client-template Excel/Word reports (PLM, DDR, MOR) and automated numbered folder-tree assembly',
    ],
    overview:
      'Title-Desk ties with Artificial Landman for the #1 overall position because it is the only platform in the oil and gas market that pairs a three-model, cross-family browser examination engine (title-desk.com) with a full-lifecycle native desktop workstation (Title-Desk Agent at desktop.title-desk.com). On the hosted web platform, a landman enters the Texas county, surveys/abstracts, and gross acreage, passes a free pre-payment scope consistency check, and uploads the recorded deed packet; two Gemini sessions examine the records separately while a deterministic program checks every mineral fraction exactly, and an independent third model from a different provider checks the final answer against the page images (with one repair pass; anything still unresolved stays a proposal leading the curative requirements). After the four-sheet draft Excel workbook (Summary, Ownership, Runsheet, Title Review) is written, an independent .xlsx readback reader verifies every owner, fraction, NMA figure, and curative requirement against the examination result before delivery. For examiners managing ongoing multi-tract units, custom client folder trees, or confidential local files, Title-Desk Agent adds unlimited $0-per-page local Tesseract OCR, deterministic BigInt exact-fraction ledger arithmetic (where 1/3 + 1/3 + 1/3 equals 1 with zero floating-point drift), human propose-to-accept review gates, direct BYO courthouse portal retrieval, and exact-cents time and expense billing.',
    desktopProgramNote:
      'Title-Desk Agent (macOS native Apple Silicon build, Linux AppImage, and Windows build) runs local SQLite storage, offline Tesseract OCR + @napi-rs/canvas TIFF/PDF rendering in the main process with zero cloud per-page fees, 23-type instrument classification, BigInt rational ownership math, unsupported-row report blocking ("NOT READY TO ISSUE" if any figure lacks an accepted source instrument), local Google Drive mount detection without OAuth cloud lock-in, and bring-your-own AI provider selection (ChatGPT/Codex, Claude, Anthropic/OpenAI API, Moonshot/Kimi, or local air-gapped Ollama).',
    pros: [
      'Only suite offering both a zero-setup 3-model browser workbook service ($249/run) and an offline-capable local Title-Desk Agent workstation ($199/seat/mo)',
      'Two separate Gemini sessions plus an independent cross-family page-image validator (with one repair pass and unresolved tracts flagged first in curative requirements) plus an independent .xlsx readback verification gate',
      'Deterministic BigInt exact-fraction ownership engine eliminates floating-point rounding drift and catches Duhig over-conveyances and tract imbalances automatically',
      'Zero per-page OCR cost in Title-Desk Agent via local Tesseract processing of PDFs and multi-page courthouse TIFFs',
      'Free pre-run abstract/acreage check prior to payment, full credit guarantee on failed hosted runs, and fully published self-serve pricing across every tier',
      'Produces client-formatted Excel/Word deliverables and custom folder trees in seconds rather than 45–55 minutes of manual reformatting per client',
    ],
    cons: [
      'Hosted browser runs are scoped to Texas current mineral interest (MI) assignments (one county per run) rather than royalty/NPRI/working-interest schedules or 50-state surface title commitments',
      'Hybrid ($349) and Full-Service ($449) automated courthouse retrieval tiers currently onboard by invitation while Upload ($249) is open to all users',
      'Deliberately enforces human landman or attorney sign-off rather than issuing automated legal title opinions',
      'Title-Desk Agent connects through your own TexasFile, CourthouseDirect, or CountyRecords.com credentials rather than bundling an expensive proprietary data plant',
    ],
    unitEconomics: {
      model: 'Pay-per-run ($249) or volume plan ($142.84–$162.38/run) on Web · Flat $199–$349/seat/mo on Desktop',
      effectiveCostPerAssignment: '$249 flat (PAYG Web) · $155.96/run (Pro Plan) · ~$19.90/assignment at 10 runs/mo on $199 Desktop seat (+ BYO AI)',
      savesTime: {
        verdict: 'Yes — High (65%–82% reduction on mechanical chain & workbook work)',
        detail:
          'Reproducible 10-assignment benchmark measured 17.6 hours of manual abstracting, conveyance ledger math, balance checking, defect writeups, and client folder assembly compressed into guided acceptance review; hosted runs turn 2–4 days of manual deed chaining into a review-ready draft four-sheet workbook.',
      },
      savesWork: {
        verdict: 'Yes — Eliminates transcription, fraction math, OCR & reformatting drudgery',
        detail:
          'Automates page-by-page OCR, Vol/Page runsheet row entry, rational fraction addition/subtraction across multi-heir splits, balance verification, and multi-client workbook/folder formatting.',
      },
      savesMoney: {
        verdict: 'Yes — $950 to $2,400+ net labor savings per complex Texas tract chain',
        detail:
          'At a standard $550–$700/day field landman rate, 2.5 days of manual abstracting and ownership math costs $1,375–$1,750 in labor versus $249 for a hosted Upload run (or $199/mo flat seat cost on Title-Desk Agent with $0 OCR fees).',
      },
      costVsGainSummary:
        'Breaks even on the very first assignment each month: one hosted $249 Upload run or a single afternoon saved on the $199/mo Title-Desk Agent recovers 3×–6× its cost in billable landman hours while eliminating unbilled client re-work from fraction errors.',
    },
    usability: {
      easeOfUseScore: 9.6,
      effectiveComplexity: 'Low (Browser) · Low-Moderate (Title-Desk Agent)',
      complexityDetail:
        'Browser runs require only county/tract metadata and PDF deed uploads; pre-run verification flags scope mismatches automatically. Title-Desk Agent adds richer multi-tract workspaces, client template mapping, and portal connectors, which follow a clean propose-then-accept checklist.',
      lciScore: 14,
      lciBand: 'Immediate Mastery (Web: 12) / Same-Day Working Proficiency (Desktop: 24)',
      timeToProficiency: '20 minutes (Browser Run Engine) · 2 – 3 hours (Title-Desk Agent full workstation)',
    },
    sources: [
      { label: 'Title-Desk Browser Platform & Workflow', url: 'https://title-desk.com/', verifiedDate: '2026-11-18', sourceType: 'Direct Vendor Page' },
      { label: 'Title-Desk Run & Plan Pricing Schedule', url: 'https://title-desk.com/pricing', verifiedDate: '2026-11-18', sourceType: 'Direct Vendor Page' },
      { label: 'Title-Desk Agent Architecture & Licensing', url: 'https://desktop.title-desk.com/', verifiedDate: '2026-11-18', sourceType: 'Direct Vendor Page' },
      { label: 'Title-Desk Agent How It Works & Benchmarks', url: 'https://desktop.title-desk.com/how-it-works/', verifiedDate: '2026-11-18', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'artificial-landman',
    rank: 1,
    rankDisplay: '#1 (Tied)',
    isTiedLeader: true,
    name: 'Artificial Landman',
    shortName: 'Artificial Landman',
    vendor: 'Artificial Landman',
    website: 'https://artificiallandman.io/',
    category: 'Purpose-Built AI Texas Mineral Title Examination Platform for Land Teams',
    tierGroup: 'tier1-ai-title',
    compositeScore: 96.4,
    subscores: {
      chainDepth: 98,
      mathAndProof: 99,
      unitEconomics: 96,
      usabilityAndLci: 97,
      texasFit: 97,
      practiceOps: 92,
    },
    pricingSummary:
      '$249/upload run (1st upload run free ≤150 pp); Hybrid $349 & Full $449 (by invitation); Solo $1,299/mo · Pro $3,899/mo · Enterprise $9,999/mo',
    pricingDetail:
      'Pay-per-run: Upload $249/run (open self-serve, up to 400 pages included, +$40 per additional 200-page block; first upload run free up to 150 pages; run credit returned if a run fails). Hybrid $349/run (by invitation; includes up to $60 of missing courthouse record copies) and Full Service $449/run (by invitation; includes up to $125 of record copies; copies above allowance billed only after user approval at provider price + $0.25 + 3%). Monthly/Annual Plans: Solo $1,299/mo ($12,990/yr, 8 runs, 1 seat, $219 extra run), Pro $3,899/mo ($38,990/yr, 25 runs, 3 seats, $199 extra run), Enterprise $9,999/mo ($99,990/yr, 70 runs, 10 seats, $179 extra run).',
    publicPricing: true,
    startingPriceNumeric: 249,
    texasCoverage:
      'All 254 Texas counties — purpose-built for Texas current mineral interest (MI) title examination (1 county per run)',
    whoUsesIt:
      'Texas land teams, title brokerages, E&P operators, A&D due-diligence landmen, and mineral acquisition groups running multiple assignments who want one consistent four-sheet workbook format without software installation or annual seat lock-in.',
    exactWorkTypes: [
      'Current mineral interest (MI) chain-of-title examination from uploaded Texas county deed packets',
      'Rapid A&D pre-bid mineral ownership verification and Net Mineral Acre (NMA) reconciliation across up to 400+ pages per run',
      'Multi-model cross-checked, readback-verified four-sheet draft Excel title workbooks (Summary, Ownership, Runsheet, Title Review)',
      'Detection of missing prior-referenced instruments, unprobated estate gaps, Duhig over-conveyance exposure, and double-fraction reservations',
      'Consistent overflow capacity for land teams, brokerages, and operators facing tight delivery deadlines',
    ],
    overview:
      'Artificial Landman (artificiallandman.io) shares the #1 ranking with Title-Desk at an identical 96.4 composite score because it runs the same deterministic Texas mineral-title intake, exact rational fraction verification, independent third-model page-image check, and .xlsx readback gate — packaged, sold, and supported on its own for land teams, brokerages, and operators who run many assignments. Before a run starts, Artificial Landman runs a free pre-payment scope check across the assignment\'s Texas county, abstracts, surveys, and gross acreage. During examination, two Gemini sessions examine the records separately while a program checks every mineral fraction exactly; an independent third model from a different provider then checks the final answer against the page images, giving the examiner one repair pass and keeping anything still unresolved as a proposal whose findings lead the curative requirements. After the four-sheet draft workbook (Summary, Ownership, Runsheet, Title Review) is written, an independent reader reopens the .xlsx file to confirm exact parity before delivery.',
    desktopProgramNote:
      'Artificial Landman is a standalone, zero-install hosted browser platform built for land teams, brokerages, and operators who want consistent four-sheet draft workbooks across many assignments without installing or maintaining local desktop software.',
    pros: [
      'Tied #1 verification rigor: two separate Gemini examiners, exact rational fraction arithmetic, an independent third-provider page-image check (with one repair pass and unresolved tracts flagged first in curative requirements), plus an independent .xlsx workbook readback gate',
      'Zero software installation, zero annual contract required, and first upload run free up to 150 pages for immediate side-by-side testing on real Texas deeds',
      'Transparent upfront run quoting ($249 up to 400 pages) with free pre-run abstract/acreage check and automatic run credit if an examination fails',
      'Delivers a clean, consistent four-sheet draft Excel workbook (Summary, Ownership, Runsheet, Title Review) naming any referenced deed missing from the upload packet',
      'Explicit approval gate on any courthouse record copy spend above included Hybrid/Full-Service allowances — never surprises the client with runaway copy bills',
      'Fastest onboarding in the entire benchmark (12/100 Learning Curve Index — full proficiency on assignment #1 in under 20 minutes)',
    ],
    cons: [
      'Scoped specifically to Texas current mineral interest (MI) title examination (single county per run) rather than royalty/NPRI/working-interest schedules, surface closings, or post-closing lease accounting',
      'Hybrid ($349) and Full-Service ($449) courthouse retrieval tiers are currently by invitation while self-serve Upload ($249) is open immediately',
      'Standard single-seat self-serve accounts run one active examination at a time unless stepped up to multi-seat Pro or Enterprise plans',
      'Outputs a reviewable, page-cited draft examination workbook rather than a signed attorney title opinion',
    ],
    unitEconomics: {
      model: 'Zero-lock-in $249/run PAYG + tiered monthly/annual run bundles ($142.84–$162.38 effective per run)',
      effectiveCostPerAssignment: '$0 on first qualifying upload run (≤150 pp) · $249 PAYG (≤400 pp, ~$0.62/page) · $142.84/run on Enterprise',
      savesTime: {
        verdict: 'Yes — High (Compresses 16–30 hours of manual deed reading & chaining into guided review)',
        detail:
          'Eliminates manual chronological sorting, grantor-grantee cross-indexing, multi-heir fraction arithmetic, and four-tab Excel workbook assembly across 150–400+ page packets.',
      },
      savesWork: {
        verdict: 'Yes — Removes two-pass manual self-checking & spreadsheet building',
        detail:
          'Because two separate examination sessions, an independent cross-family page-image validator, and a workbook readback reader check every figure, the human examiner focuses strictly on final judgment calls and flagged curatives rather than raw transcription.',
      },
      savesMoney: {
        verdict: 'Yes — 75%–88% lower unit cost than manual abstracting or enterprise data contracts',
        detail:
          'Converts fixed $4,000–$8,000/mo staffing or enterprise software overhead into variable $249 per-tract COGS that maps 1:1 to billable client assignments.',
      },
      costVsGainSummary:
        'Ideal unit economics for both land teams and A&D bursts: zero idle monthly burn between projects on PAYG ($249/run), free first run up to 150 pages to prove ROI risk-free, and $142.84–$162.38/run marginal cost at scale.',
    },
    usability: {
      easeOfUseScore: 9.8,
      effectiveComplexity: 'Low',
      complexityDetail:
        'Cleanest workflow in the category: specify Texas county, tracts, abstracts, and gross acres, upload deed files, review the free scope check, and receive the four-sheet draft Excel workbook by email and console.',
      lciScore: 12,
      lciBand: 'Immediate Mastery',
      timeToProficiency: '15 – 25 minutes (proficient on first run)',
    },
    sources: [
      { label: 'Artificial Landman Texas Mineral Examination Home', url: 'https://artificiallandman.io/', verifiedDate: '2026-11-18', sourceType: 'Direct Vendor Page' },
      { label: 'Artificial Landman Run & Subscription Pricing', url: 'https://artificiallandman.io/pricing', verifiedDate: '2026-11-18', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'enverus-courthouse',
    rank: 3,
    rankDisplay: '#3',
    isTiedLeader: false,
    name: 'Enverus Courthouse (Instant Analyst & Runsheet Assistant)',
    shortName: 'Enverus Courthouse',
    vendor: 'Enverus (Austin, TX)',
    website: 'https://go.enverus.com/instant-analyst-courthouse',
    category: 'Enterprise Courthouse Data Corpus & AI Chain Analysis Add-On',
    tierGroup: 'tier1-ai-title',
    compositeScore: 86.5,
    subscores: {
      chainDepth: 88,
      mathAndProof: 80,
      unitEconomics: 68,
      usabilityAndLci: 79,
      texasFit: 95,
      practiceOps: 82,
    },
    pricingSummary: 'Enterprise custom quote only (requires active Enverus Courthouse subscription; no public pricing)',
    pricingDetail:
      'Unpublished enterprise annual contract. Runsheet Assistant (launched Oct 7, 2026) and Instant Analyst – Courthouse are gated exclusively to existing Enverus Courthouse enterprise subscribers; Enverus also acquired CourthouseDirect.com in 2020 and partnered with Tracts.co on Permian abstract plants.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage:
      '350M+ courthouse records across key U.S. producing basins; public materials cite up to 246 TX & NM counties (with sovereignty-depth plants in 24–29+ core counties)',
    whoUsesIt:
      'Large E&P operator land and legal departments, multi-basin private-equity A&D teams, and institutional mineral funds that already carry five- or six-figure Enverus enterprise data subscriptions.',
    exactWorkTypes: [
      'Pre-bid A&D screening across 100–150 courthouse documents in a single query without manual document gathering',
      'AI summarization and chatbot Q&A over deeds, leases, and assignments inside the Enverus Courthouse corpus',
      'Early identification of lease restrictions, chain gaps, and title risks across indexed Permian and Eagle Ford tracts',
    ],
    overview:
      'Enverus holds the deepest proprietary courthouse data moat in upstream oil and gas (350M+ indexed courthouse documents) and strengthened its AI tier on October 7, 2026 with Runsheet Assistant alongside Instant Analyst – Courthouse. Unlike upload-based workstations, Runsheet Assistant queries Enverus\'s hosted courthouse repository directly across batches of 100–150 documents, claiming up to 75% faster runsheet analysis. However, it is strictly an enterprise subscriber add-on with zero public pricing, no self-serve access for independent field landmen, no published deterministic BigInt ownership-fraction ledger, no offline mode, and no built-in client billing or custom broker deliverable folder packaging.',
    desktopProgramNote: 'Cloud-only enterprise web platform; no local/offline desktop application.',
    pros: [
      'Unmatched 350M+ owned courthouse record corpus eliminates manual document gathering in covered sovereignty counties',
      'Runsheet Assistant (Oct 2026) analyzes 100+ documents per query directly inside the platform',
      'Tight ecosystem tie-ins with Enverus Prism, MineralSoft, CourthouseDirect, and Permian Tracts.co integration',
    ],
    cons: [
      'Opaque enterprise-only annual pricing prices out solo landmen and small Texas brokerage shops',
      'Stops at chain analysis and export-ready summaries — no published exact-fraction NMA balance engine, curative tracker, or custom client folder-tree builder',
      'Cannot run offline or serve as a standalone BYO-document workstation outside an Enverus Courthouse contract',
      'No public accuracy benchmark or third-party error-rate audit published as of November 2026',
    ],
    unitEconomics: {
      model: 'Multi-seat enterprise annual subscription + Courthouse module licensing (unpublished)',
      effectiveCostPerAssignment: 'Low marginal cost per query ONLY if enterprise seat overhead is already sunk across high monthly tract volume',
      savesTime: {
        verdict: 'Yes — High on document gathering in indexed Permian counties (vendor claims up to 75% faster analysis)',
        detail: 'Bypasses manual clerk portal downloads where Enverus holds complete sovereignty-depth plant images.',
      },
      savesWork: {
        verdict: 'Partial — Automates search & initial chain summary; ownership math & final client deliverables remain separate',
        detail: 'Landmen still verify fractional conveyances, reconcile NMA, and format operator-specific MOR/DDR workbooks externally.',
      },
      savesMoney: {
        verdict: 'Enterprise-volume dependent — Negative ROI for low/mid-volume independents; strong for large E&P A&D desks',
        detail: 'Vendor cites "$1,000 saved per courthouse visit," which offsets annual contract cost for full-time operator teams but not episodic contractors.',
      },
      costVsGainSummary:
        'High fixed annual commitment with strong velocity gains for 10+ person E&P land departments; independent landmen and agile brokerages achieve far better unit economics pairing Title-Desk or Artificial Landman with on-demand courthouse portals.',
    },
    usability: {
      easeOfUseScore: 7.8,
      effectiveComplexity: 'High',
      complexityDetail:
        'Powerful query, spatial filter, and chatbot interface, but effective use requires learning Enverus Courthouse county coverage boundaries, index depth differences (sovereignty vs. partial scan), and multi-module navigation.',
      lciScore: 58,
      lciBand: 'Specialist / Analyst Ramp',
      timeToProficiency: '1 – 2 weeks of platform onboarding and county-index calibration',
    },
    sources: [
      { label: 'Enverus Instant Analyst – Courthouse Overview', url: 'https://go.enverus.com/instant-analyst-courthouse', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Enverus Runsheet Assistant Launch Report (Oct 7, 2026)', url: 'https://techintelpro.com/news/ai/enterprise-ai/enverus-gives-land-and-title-teams-a-faster-path-to-title-certainty', verifiedDate: '2026-11-17', sourceType: 'Press / Industry Report' },
    ],
  },
  {
    id: 'energy-domain-titlelab',
    rank: 4,
    rankDisplay: '#4',
    isTiedLeader: false,
    name: 'Energy Domain TitleLab (+ MCP Frontier AI Chaining)',
    shortName: 'Energy Domain TitleLab',
    vendor: 'Energy Domain (Fort Worth, TX)',
    website: 'https://www.energydomain.com/titlelab',
    category: 'Permian Courthouse Intelligence & Automated Title Chaining Platform',
    tierGroup: 'tier1-ai-title',
    compositeScore: 84.0,
    subscores: {
      chainDepth: 87,
      mathAndProof: 83,
      unitEconomics: 70,
      usabilityAndLci: 81,
      texasFit: 88,
      practiceOps: 78,
    },
    pricingSummary: 'Unpublished subscription quotes (county, basin, or nationwide tiers; "no long-term contracts" stated)',
    pricingDetail:
      'Demo-gated sales quote; no public dollar figures on site. MCP server integration (announced Oct 28, 2026) is included for existing TitleLab subscribers.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage:
      'Vendor pages cite 20–30 live AI-extracted Permian Basin counties (records back to 1800) and structured courthouse search across 210 Texas counties',
    whoUsesIt:
      'Permian-focused mineral funds, A&D teams, oil & gas attorneys, mineral brokers, and independent landmen working heavily inside TitleLab\'s live West Texas county footprint.',
    exactWorkTypes: [
      'Automated "Smart Chain" runsheets pulling prior referenced Vol/Page instruments back five degrees of separation in covered Permian counties',
      '90+ instrument type classification and georeferenced Texas Survey/Abstract tract mapping',
      'Claude / MCP conversational chain-of-title queries, lease takeoffs, and well-cohort cross-checks',
    ],
    overview:
      'Fort Worth-based Energy Domain launched TitleLab in February 2026 and added Model Context Protocol (MCP) connectors for frontier AI models like Claude on October 28, 2026. TitleLab processes underlying courthouse images rather than relying solely on clerk index headers, classifying 90+ document types, georeferencing Texas survey/abstract tracts, and running "Smart Chain" five degrees back to generate runsheets, curative requirements, calls registers, and mineral ownership reports. Its primary limitation is geographic concentration: deep AI courthouse extraction is currently concentrated in 20–30 Permian counties rather than statewide self-serve upload across all 254 Texas counties, and pricing requires a sales demo.',
    desktopProgramNote: 'Cloud web platform + MCP server connector for Claude/desktop MCP clients; no standalone offline workstation.',
    pros: [
      'Deep underlying document extraction (90+ instrument types, records to 1800) in covered Permian Basin counties',
      '"Smart Chain" automatically follows prior book/volume/page references back five degrees and links tracts to API well numbers',
      'Innovative Oct 2026 MCP integration lets subscribers query live title chains inside Claude with source citations',
    ],
    cons: [
      'No public pricing — requires scheduling a sales demo for county or basin quotes',
      'Full AI TitleLab extraction is concentrated in 20–30 Permian counties today (conflicting county counts of 20, 30, and 210 appear across vendor pages)',
      'Platform-bound corpus model rather than an open $249/run upload tool for arbitrary rural East/South/North Texas packets',
      'No built-in contractor time/expense billing or offline desktop execution',
    ],
    unitEconomics: {
      model: 'County / basin subscription quote (unpublished, no long-term lock-in claimed)',
      effectiveCostPerAssignment: 'Unpublished; advantageous for teams running high monthly tract volume inside the 20–30 covered Permian counties',
      savesTime: {
        verdict: 'Yes — High inside covered Permian counties ("hours instead of weeks" vendor claim)',
        detail: 'Pre-extracted Permian deed attributes and 5-degree reference chaining cut manual Permian courthouse legwork substantially.',
      },
      savesWork: {
        verdict: 'Yes — Automates legal-description georeferencing & prior-reference pulls in covered counties',
        detail: 'Reduces manual tract plotting and Vol/Page chasing when working Midland/Delaware Basin acreage.',
      },
      savesMoney: {
        verdict: 'Conditional on Permian concentration — Unproven outside covered basin footprint',
        detail: 'Teams working statewide across Eagle Ford, Haynesville, Barnett, or Gulf Coast still need statewide tools and portals.',
      },
      costVsGainSummary:
        'Strong basin-specialist ROI for dedicated Permian mineral buyers and operators; less economical than Title-Desk or Artificial Landman for landmen whose assignments move across all 254 Texas counties.',
    },
    usability: {
      easeOfUseScore: 8.3,
      effectiveComplexity: 'Moderate',
      complexityDetail:
        'Modern GIS-centric web UI and natural-language MCP queries, though users must understand county extraction depth tiers and MCP client setup for AI workflows.',
      lciScore: 44,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '2 – 3 days',
    },
    sources: [
      { label: 'Energy Domain TitleLab Product Page', url: 'https://www.energydomain.com/titlelab', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Energy Domain Frontier AI / MCP Title Chaining Post (Oct 28, 2026)', url: 'https://www.energydomain.com/blog/energy-domain-brings-proprietary-title-chaining-ip-to-frontier-ai-models', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Energy Domain for Landmen Coverage Page', url: 'https://www.energydomain.com/persona/landmen', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'landman-ai',
    rank: 5,
    rankDisplay: '#5',
    isTiedLeader: false,
    name: 'Landman.ai',
    shortName: 'Landman.ai',
    vendor: 'Viscosity North America, Inc. (Plano, TX)',
    website: 'https://landman.ai/',
    category: 'Enterprise Scoped AI Record Harvesting, ICR & Custom Runsheet Delivery',
    tierGroup: 'tier1-ai-title',
    compositeScore: 80.5,
    subscores: {
      chainDepth: 86,
      mathAndProof: 78,
      unitEconomics: 62,
      usabilityAndLci: 74,
      texasFit: 84,
      practiceOps: 85,
    },
    pricingSummary: 'Custom enterprise engagement scoping only (no public seat or per-run pricing)',
    pricingDetail:
      'Scoped per engagement ("counties, record maturity, workflow and deployment set the scope, not a seat count"). Offers deployment in client Oracle Cloud / on-premise environments, files-only delivery, or hosted apps.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage:
      'Claims harvesting reach across 2,300 of 3,222 U.S. county equivalents in 39 states (as of Oct 3, 2026), including Texas',
    whoUsesIt:
      'Enterprise E&P land, legal, and A&D departments requiring private per-client knowledge graphs, Oracle Cloud / on-prem isolation, and custom-mapped spreadsheet templates.',
    exactWorkTypes: [
      'Large-scale county clerk image harvesting with ICR for historical cursive/handwritten deeds',
      'Entity/party name clustering (aliases, maiden names, OCR typos) and metes-and-bounds closure plotting',
      'Enterprise runsheets, vesting-by-estate summaries, skip tracing, and gap notes delivered into client templates',
    ],
    overview:
      'Built by Plano-based Viscosity North America, Landman.ai is an enterprise-scoped title automation platform using internal small language models (SLMs), RPA county-clerk harvesters, handwriting ICR, and metes-and-bounds closure plotting ("Land records in. Work you can review out."). Philosophically, its emphasis on reviewable work product and private client data isolation aligns well with serious title standards. However, it is sold as custom enterprise engagements rather than a self-serve product — there is no public pricing, no instant sign-up for solo landmen, and public materials note the model stops short of heirship or deterministic exact-fraction math proofs.',
    desktopProgramNote: 'Offers on-premise or private Oracle Cloud enterprise deployments, not a self-serve $199 desktop app.',
    pros: [
      'Broadest claimed multi-state county harvesting footprint (2,300 county equivalents across 39 states)',
      'Strong data-privacy posture: internal SLMs, non-pooled client knowledge graphs, and on-premise/Oracle Cloud options',
      'Handwriting ICR, embedding-based party alias resolution, and metes-and-bounds closure checks ("closure: 0.0 ft")',
    ],
    cons: [
      'Zero public pricing and zero self-serve access — strictly enterprise engagement scoping',
      'No published BigInt/rational exact-fraction ownership arithmetic guarantee; public snippets note no automated heirship determinations',
      'Longer enterprise scoping and deployment cycle compared to instant $249 browser runs or $199 self-serve desktop seats',
    ],
    unitEconomics: {
      model: 'Custom enterprise engagement contract (scoped by county count, record maturity & deployment)',
      effectiveCostPerAssignment: 'Unpublished; structured for multi-hundred-tract enterprise A&D or basin digitization programs',
      savesTime: {
        verdict: 'Yes — High on multi-county enterprise harvesting & handwriting ICR',
        detail: 'Automates bulk clerk harvesting and initial party/tract organization across large project footprints.',
      },
      savesWork: {
        verdict: 'Yes — Delivers runsheets & plots formatted to enterprise templates',
        detail: 'Reduces manual data entry for in-house land techs, though examiners still complete heirship and final ownership sign-off.',
      },
      savesMoney: {
        verdict: 'Enterprise-only — Inaccessible for solo contractors & small brokerages',
        detail: 'Custom Oracle/on-prem engagement scoping carries enterprise setup overhead unsuitable for single-tract assignments.',
      },
      costVsGainSummary:
        'Strong fit for large multi-state operators needing private-cloud RPA harvesting; overkill and inaccessible for independent Texas landmen who can run Title-Desk or Artificial Landman immediately at $249/run.',
    },
    usability: {
      easeOfUseScore: 7.5,
      effectiveComplexity: 'High (Enterprise Deployment)',
      complexityDetail:
        'End-user spreadsheet outputs match client templates cleanly, but standing up an engagement involves IT/cloud scoping, county source mapping, and workflow configuration.',
      lciScore: 64,
      lciBand: 'Specialist / Analyst Ramp',
      timeToProficiency: '1 – 3 weeks (including engagement onboarding)',
    },
    sources: [
      { label: 'Landman.ai Platform & Coverage Specification', url: 'https://landman.ai/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'echo-title-intelligence',
    rank: 6,
    rankDisplay: '#6',
    isTiedLeader: false,
    name: 'Echo Title Intelligence',
    shortName: 'Echo Title',
    vendor: 'Echo Prime Technologies',
    website: 'https://echo-ept.com/title-intelligence',
    category: 'Texas Automated Grantor-Grantee Chain & Intestacy Analysis Tool',
    tierGroup: 'tier1-ai-title',
    compositeScore: 77.0,
    subscores: {
      chainDepth: 79,
      mathAndProof: 82,
      unitEconomics: 72,
      usabilityAndLci: 76,
      texasFit: 83,
      practiceOps: 66,
    },
    pricingSummary: 'Conflicting vendor pages: $200–$500/search on product page vs. $99 Analyst / $399 Enterprise monthly in blog (14-day trial)',
    pricingDetail:
      'Product page lists a 14-day free trial and AI search cost of $200–$500 per search; a March 26, 2026 company blog post lists a Free tier, Analyst $99/mo, and Enterprise $399/mo.',
    publicPricing: true,
    startingPriceNumeric: 99,
    texasCoverage:
      'Texas-specific, though vendor pages conflict on exact footprint: product page states 98 TX counties (16M+ records, Permian focus) while March 2026 blog cites 33–80 counties',
    whoUsesIt:
      'Texas mineral rights analysts, tech-forward brokerage researchers, and developers integrating JSON/webhook chain outputs.',
    exactWorkTypes: [
      'Automated grantor-grantee mineral chain construction in indexed Texas counties (2–8 hours turnaround per tract)',
      'Texas Estates Code Ch. 201 intestate succession modeling and exact rational fraction math',
      'Severity-scored flagging of chain gaps, over-conveyances, and orphan instruments via HTML/DOCX/JSON',
    ],
    overview:
      'Echo Title Intelligence focuses specifically on Texas mineral rights, advertising 59 instrument classifications, exact rational arithmetic, Texas Estates Code Chapter 201 intestacy logic, and per-link confidence scores exported as HTML, DOCX, or API JSON. While its technical focus on Texas mineral rules is noteworthy, prospective buyers face conflicting pricing and county-count figures across its own live pages ($200–$500/search vs. $99–$399/mo; 33 vs. 80 vs. 98 counties), 2–8 hour single-tract processing windows (24–48 hours on batches), no four-sheet Excel client deliverable standard, and no local offline desktop workstation.',
    desktopProgramNote: 'Cloud SaaS and JSON/webhook API only; no desktop workstation.',
    pros: [
      'Built specifically around Texas mineral conventions, including rational arithmetic and Tex. Estates Code Ch. 201 intestacy rules',
      'Assigns per-link confidence scores and severity ratings to gaps, over-conveyances, and orphan instruments',
      'Offers developer API / webhook JSON output alongside HTML and DOCX exports',
    ],
    cons: [
      'Material inconsistencies across live vendor pages on both pricing ($99–$399/mo vs. $200–$500/search) and county coverage (33 vs. 80 vs. 98 TX counties)',
      'Covers under 40% of Texas\'s 254 counties at maximum stated count, leaving most East, Central, and Gulf Coast counties uncovered',
      '2–8 hour single-tract runtime (24–48 hours for batches) and exports HTML/DOCX/JSON rather than formula-linked client Excel MOR/runsheet workbooks',
      'No multi-model cross-family page-image check or local desktop OCR application',
    ],
    unitEconomics: {
      model: 'Hybrid subscription ($99–$399/mo blog) or per-search fee ($200–$500/search product page)',
      effectiveCostPerAssignment: '$200–$500/search (at product-page per-search pricing)',
      savesTime: {
        verdict: 'Yes — Moderate-to-High in its covered Permian counties (2–8 hr automated turnaround)',
        detail: 'Automates initial grantor-grantee index walking where county records are pre-ingested.',
      },
      savesWork: {
        verdict: 'Partial — Computes rational fractions & flags gaps, but lacks Excel workbook & folder packaging',
        detail: 'Examiners must still convert HTML/DOCX outputs into operator-required Excel runsheet and ownership templates.',
      },
      savesMoney: {
        verdict: 'Moderate — Comparable or higher per-search cost ($200–$500) with narrower county coverage',
        detail: 'At $200–$500/search, pricing overlaps Title-Desk/Artificial Landman ($249) while covering ≤98 counties without 3-model verification or Excel deliverables.',
      },
      costVsGainSummary:
        'Intriguing API-friendly Texas engine if county and pricing discrepancies are clarified, but narrower county reach and lack of Excel client deliverables trail the #1 leaders.',
    },
    usability: {
      easeOfUseScore: 7.9,
      effectiveComplexity: 'Moderate',
      complexityDetail: 'Straightforward search initiation in supported counties, but reconciling orphan instruments and reformatting DOCX/HTML into client Excel templates adds downstream manual steps.',
      lciScore: 36,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '1 – 2 days',
    },
    sources: [
      { label: 'Echo Title Intelligence Product Specification', url: 'https://echo-ept.com/title-intelligence', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Echo Landman Software Blog Comparison (Mar 26, 2026)', url: 'https://echo-ept.com/blog/landman-software-comparison-2026', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'titlemind-ai',
    rank: 7,
    rankDisplay: '#7',
    isTiedLeader: false,
    name: 'TitleMind.AI (Nexus · Vara GIS · L.I.N.C.)',
    shortName: 'TitleMind.AI',
    vendor: 'TitleMind AI, LLC (Dallas, TX)',
    website: 'https://titlemind.ai/',
    category: 'Per-Job SMS/Chat Mineral Title Search Service on User Courthouse Accounts',
    tierGroup: 'tier1-ai-title',
    compositeScore: 75.5,
    subscores: {
      chainDepth: 76,
      mathAndProof: 84,
      unitEconomics: 71,
      usabilityAndLci: 80,
      texasFit: 82,
      practiceOps: 62,
    },
    pricingSummary: '$0 monthly fee; unpublished per-job quote via SMS/chat before start (+ user\'s own TexasFile/CourthouseDirect fees)',
    pricingDetail:
      'Per-job quoting ("text a tract -> price quote -> reply YES to start"; volume block pricing available, dollar rates unpublished). Runs directly on the customer\'s own TexasFile or CourthouseDirect credentials with zero record-fee markup.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage:
      'Texas (via customer\'s TexasFile/CourthouseDirect accounts), New Mexico, and 67 Oklahoma counties — 165 tested counties cited overall',
    whoUsesIt:
      'Field examiners at the courthouse, small title offices holding active TexasFile/CourthouseDirect accounts, and landmen needing ongoing tract filing/probate/lien monitoring.',
    exactWorkTypes: [
      'On-demand chain-of-title and mineral estate runsheets dispatched via SMS or ChatGPT/Claude OAuth connector (L.I.N.C.)',
      'Proof-logged courthouse searches saving "0-results" banners and flagging any uncited line',
      'Continuous county filing watches for new probates, liens, conveyances, and obituaries',
    ],
    overview:
      'Dallas-based TitleMind.AI operates as a hybrid AI-plus-examiner per-job service rather than self-serve workstation software. Users text a tract description (or connect ChatGPT/Claude via its 83-tool L.I.N.C. OAuth layer), receive a custom price quote, and reply YES to execute the search on their own TexasFile or CourthouseDirect account. Its strongest attribute is proof hygiene: every runsheet line cites Vol/Page or Document #, chains stopping short of sovereign patent explicitly state where they end, and zero-record searches archive the courthouse\'s 0-results banner inside a hash-chained audit trail. However, jobs are examiner-configured rather than instant self-serve software, per-job prices are unpublished, and you cannot drop in your own offline scanned deed archive for local OCR and exact-fraction NMA workbooks.',
    desktopProgramNote: 'SMS/web service + ChatGPT/Claude OAuth toolset (L.I.N.C.) + Vara GIS web map; no standalone desktop app.',
    pros: [
      'Admirable proof discipline: book/page citations on every line, saved 0-results banners, and hash-chained audit logs',
      '$0 monthly retainer and zero markup on courthouse copy fees (bills directly to your TexasFile/CourthouseDirect account)',
      'Includes ongoing courthouse watch alerts (probate, liens, obituaries) and Vara GIS survey polygon visualization',
    ],
    cons: [
      'Service-dispatched per-job model rather than self-serve software — examiner setup required per job and per-job dollar rates are unpublished',
      'Cannot ingest and OCR an arbitrary local folder of client-supplied PDFs/TIFFs offline',
      'No published deterministic BigInt ownership-fraction balance ledger, lease clause abstraction, or time/billing suite',
    ],
    unitEconomics: {
      model: '$0/mo retainer + unpublished custom quote per dispatched job + direct courthouse portal pass-through',
      effectiveCostPerAssignment: 'Unpublished per-job quote + direct TexasFile ($1/pp) or CourthouseDirect fees',
      savesTime: {
        verdict: 'Yes — High on delegated index runs (vendor claims 2.7× faster completion)',
        detail: 'Offloads initial TexasFile/CourthouseDirect index walking while a landman is in the field.',
      },
      savesWork: {
        verdict: 'Moderate — Delivers cited runsheets & KMZ/PDF/CSV exports, but stops short of full NMA & client workbook assembly',
        detail: 'Examiner still computes complex fractional mineral ownership and builds final operator deliverables.',
      },
      savesMoney: {
        verdict: 'Hard to benchmark pre-quote — $0 monthly burn avoids idle waste, per-job fees vary',
        detail: 'Pass-through courthouse billing prevents copy markups, though per-job service quotes lack Title-Desk/Artificial Landman\'s fixed $249 predictability.',
      },
      costVsGainSummary:
        'Zero fixed overhead makes it a handy field-dispatch utility for TexasFile holders, though unpublished per-job pricing and service-queue setup make it less predictable than $249 self-serve runs.',
    },
    usability: {
      easeOfUseScore: 8.5,
      effectiveComplexity: 'Low-Moderate',
      complexityDetail: 'Texting a tract to start a quote is effortless; configuring L.I.N.C. OAuth tools inside Claude/ChatGPT and linking courthouse accounts requires light setup.',
      lciScore: 26,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '1 – 2 hours',
    },
    sources: [
      { label: 'TitleMind.AI Home & SMS Workflow', url: 'https://titlemind.ai/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'TitleMind Proof & Audit Discipline Page', url: 'https://titlemind.ai/proof/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Vara GIS Interface Overview', url: 'https://vara-gis.pages.dev/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'rowland',
    rank: 8,
    rankDisplay: '#8',
    isTiedLeader: false,
    name: 'Rowland',
    shortName: 'Rowland',
    vendor: 'Rowland (AAPL Affinity Vendor)',
    website: 'https://rowland.ai/',
    category: 'AI Land Document Reader, Citation Q&A & Chartered Workflow Assistant',
    tierGroup: 'tier1-ai-title',
    compositeScore: 74.0,
    subscores: {
      chainDepth: 64,
      mathAndProof: 76,
      unitEconomics: 86,
      usabilityAndLci: 89,
      texasFit: 70,
      practiceOps: 68,
    },
    pricingSummary: 'Read $99/mo (100 credits) · Work $199/mo (200 credits, Row Bots) · Enterprise custom (AAPL discount available)',
    pricingDetail:
      'Published credit-based tiers: Read $99/mo (100 monthly credits, expire monthly), Work $199/mo (200 credits, includes Row Bots), Organization/Enterprise custom (10,000+ credits, API). Every task previews credit cost prior to execution.',
    publicPricing: true,
    startingPriceNumeric: 99,
    texasCoverage:
      'Geography-agnostic document upload tool (no built-in Texas county courthouse retrieval or title plant)',
    whoUsesIt:
      'In-house land analysts, right-of-way (ROW) agents, renewable/utility siting teams, and landmen reading dense lease packets, division orders, and prior title opinions.',
    exactWorkTypes: [
      'Multi-format OCR and clause extraction across 45+ document types (leases, assignments, ROW easements, division orders)',
      'Page-cited conversational Q&A over uploaded lease and title opinion folders',
      'Division-order decimal reconciliation and assistive curative drafting under human approval gates',
    ],
    overview:
      'Rowland (an AAPL Affinity Vendor since June 2025 with SOC 2 Type 2 compliance) offers the lowest published entry price ($99/mo) among credible AI land startups and enforces admirable safety hygiene: every extracted clause links to a source page, credit cost is displayed before a run starts, and its "Row Bots" (Owen for chains/runsheets, Lane for deadlines, Nora for owner relations, Drew for curative) operate under written charters that never post to a system of record without human approval. It ranks #8 rather than higher because it is fundamentally a credit-metered document assistant rather than a dedicated Texas mineral-title engine: monthly credits expire, several core multi-step bots and GIS mapping have been rolling out from beta/"coming soon" stages, there is no courthouse record retrieval, and it lacks Title-Desk\'s deterministic BigInt fraction ledger and offline zero-fee OCR.',
    desktopProgramNote: 'Cloud browser SaaS (MCP/Claude Code/Codex connectors listed as coming soon); no local offline app.',
    pros: [
      'Lowest published starting price ($99/mo Read, $199/mo Work) with AAPL member discount and upfront credit previews',
      'Strong enterprise trust posture: SOC 2 Type 2 certified, page-level citations, and approval-gated bot charters',
      'Versatile across oil & gas leases, ROW easements, division orders, and title opinion review (45+ file types)',
    ],
    cons: [
      'Credit-metered model where unused monthly credits expire — heavy 400-page historical deed chains burn credits rapidly',
      'No Texas county clerk / TexasFile / CourthouseDirect record retrieval built in; GIS legal-description mapping remains in beta',
      'Generalist document-chat & bot architecture rather than a 3-model verified, BigInt balance-checked Texas mineral ownership engine',
    ],
    unitEconomics: {
      model: '$99/mo (100 credits) or $199/mo (200 credits) + add-on credit packs',
      effectiveCostPerAssignment: 'Low ($10–$35 in credits) for short lease/DO reviews; scales higher on multi-hundred-page deed chains',
      savesTime: {
        verdict: 'Yes — High on lease & title-opinion reading (vendor claims 10× faster document review)',
        detail: 'Cuts hours spent ctrl-F searching scanned PDF leases for Pugh, depth-severance, shut-in, and consent-to-assign clauses.',
      },
      savesWork: {
        verdict: 'Moderate — Strong on clause extraction & Q&A; lighter on full sovereign chain & client MOR packaging',
        detail: 'Assists analysts drafting summaries and checking DO decimals, while full patent-to-present runsheets require heavier lifting.',
      },
      savesMoney: {
        verdict: 'Yes — Easy $99/mo entry point for lease analysts & ROW agents',
        detail: 'Pays for itself in 2 hours of saved lease reading, though expiring credits penalize uneven monthly workloads.',
      },
      costVsGainSummary:
        'Best budget secondary assistant ($99/mo) for reading leases, ROW agreements, and prior title opinions; pair with Title-Desk or Artificial Landman when constructing full sovereign mineral chains and exact-fraction NMA workbooks.',
    },
    usability: {
      easeOfUseScore: 9.1,
      effectiveComplexity: 'Low',
      complexityDetail: 'Clean drag-and-drop upload and cited chat interface familiar to anyone who has used modern AI document workspaces.',
      lciScore: 20,
      lciBand: 'Immediate Mastery',
      timeToProficiency: '30 – 60 minutes',
    },
    sources: [
      { label: 'Rowland Product, Pricing & Row Bots Charter Page', url: 'https://rowland.ai/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'titlemine',
    rank: 9,
    rankDisplay: '#9',
    isTiedLeader: false,
    name: 'TitleMine',
    shortName: 'TitleMine',
    vendor: 'TitleMine',
    website: 'https://titlemine.com/',
    category: 'Manual-Assisted Cloud Mineral Title Toolkit & Abstract Splitter',
    tierGroup: 'tier1-ai-title',
    compositeScore: 71.5,
    subscores: {
      chainDepth: 68,
      mathAndProof: 74,
      unitEconomics: 75,
      usabilityAndLci: 77,
      texasFit: 72,
      practiceOps: 65,
    },
    pricingSummary: 'Runsheet Package: $169/mo (Landman) / $299/mo (Attorney) · MOR Package: $289/mo (Landman) / $489/mo (Attorney) + volume Abstract Breaker',
    pricingDetail:
      'Published role-tiered monthly subscriptions: Runsheet Package $169/mo for Landman/Support, $299/mo for Title Attorney; MOR Package $289/mo for Landman/Support, $489/mo for Title Attorney. Abstract Breaker PDF splitting priced separately by volume; no free tier.',
    publicPricing: true,
    startingPriceNumeric: 169,
    texasCoverage:
      'State-agnostic cloud workspace (no built-in Texas county record search or retrieval)',
    whoUsesIt:
      'Mineral title attorneys and traditional abstractors who want structured cloud forms for splitting PDF abstracts, entering runsheet rows, and auditing conveyance calculations by hand.',
    exactWorkTypes: [
      'Splitting giant multi-hundred-page compiled PDF abstracts into individual Vol/Page-named instruments (Abstract Breaker)',
      'Structured examiner-entered runsheet building, entity tracking, and conveyance calculator worksheets',
      'Pre-opinion title work auditing between landmen and examining title attorneys',
    ],
    overview:
      'TitleMine earns credit for transparent, published per-seat pricing ($169–$489/mo) and a grounded professional ethos ("Gemini and ChatGPT won\'t be signing reports or opinions anytime soon"). Its live toolkit includes Abstract Breaker (for slicing giant PDF abstracts by Vol/Page), Runsheet Builder, Document Investigator, Title Work Auditor, and a Conveyance Calculator. However, it is a manual-input toolkit rather than an automated examination pipeline: it does not pull county records, does not perform local free OCR + multi-model AI deed extraction on raw courthouse scans, prices Abstract Breaker separately by volume, and lists several marquee modules (Flowchart Builder, full MOR automation, Drilling Opinion drafting) as "COMING SOON."',
    desktopProgramNote: 'Cloud browser SaaS only; no offline desktop client.',
    pros: [
      'Second-most-transparent published seat pricing in the category ($169–$489/mo) with dedicated Title Attorney review views',
      'Abstract Breaker solves a genuine pain point when working legacy 800-page scanned abstract books',
      'Healthy human-in-the-loop audit structure linking entities, instruments, and runsheet rows',
    ],
    cons: [
      'Title Attorneys pay $299–$489/seat/mo (plus volume fees for Abstract Breaker) while Flowchart Builder, full MOR, and Drilling Opinions remain marked "COMING SOON"',
      'No automated courthouse retrieval and no local zero-cost OCR / multi-model deed extraction pipeline — you still read and key in the chain manually',
      'At $289/mo for a Landman MOR seat, costs $90/mo MORE than Title-Desk Agent ($199/mo) while automating far less of the chain',
    ],
    unitEconomics: {
      model: 'Role-based monthly SaaS ($169–$489/seat/mo) + volume-metered Abstract Breaker',
      effectiveCostPerAssignment: '$16.90–$48.90/assignment software overhead at 10 tracts/mo + full manual landman reading/entry hours',
      savesTime: {
        verdict: 'Low-to-Moderate — Speeds PDF splitting & structured entry, not deed reading',
        detail: 'Saves 30–60 minutes slicing compiled abstract PDFs and organizing rows, but manual instrument reading time remains largely unchanged.',
      },
      savesWork: {
        verdict: 'Partial — Replaces messy Excel formulas with structured web forms',
        detail: 'Reduces broken spreadsheet cell references, though examiners still key instrument data manually.',
      },
      savesMoney: {
        verdict: 'Limited — Higher seat price ($289–$489 MOR) than Title-Desk Agent ($199) without AI extraction savings',
        detail: 'Role-based surcharges penalize examining attorneys ($489/mo) relative to flat-rate workstations.',
      },
      costVsGainSummary:
        'Useful PDF abstract-splitting and structured worksheet aid, but Title-Desk Agent ($199/mo) delivers local OCR, AI extraction, BigInt math, courthouse connectors, and custom deliverables for $90–$290/mo less per seat.',
    },
    usability: {
      easeOfUseScore: 8.0,
      effectiveComplexity: 'Moderate',
      complexityDetail: 'Structured forms are clean, but because data entry is largely manual, completing a 60-deed chain requires sustained clerical precision.',
      lciScore: 34,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '3 – 4 hours',
    },
    sources: [
      { label: 'TitleMine Modules & Published Role Pricing', url: 'https://titlemine.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'recordsonline-ai-suite',
    rank: 10,
    rankDisplay: '#10',
    isTiedLeader: false,
    name: 'RecordsOnline — AI Suite for Title',
    shortName: 'RecordsOnline AI',
    vendor: 'RecordsOnline',
    website: 'https://recordsonline.com/?p=1741',
    category: 'Texas Title-Plant + Human-Reviewed Surface/Commitment AI Suite',
    tierGroup: 'tier1-ai-title',
    compositeScore: 70.0,
    subscores: {
      chainDepth: 72,
      mathAndProof: 75,
      unitEconomics: 60,
      usabilityAndLci: 74,
      texasFit: 80,
      practiceOps: 64,
    },
    pricingSummary: 'Unpublished enterprise/agency demo quote',
    pricingDetail: 'No public pricing; licensed via demo to title agencies, underwriters, lenders, and energy/ROW teams.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: '94 licensable Texas geographic title-plant counties + CAD appraisal search across all 254 Texas counties',
    whoUsesIt:
      'Texas real-estate title insurance agencies, underwriters (using Qualia, SoftPro, RamQuest, ResWare), surface right-of-way agents, and surface-heavy energy lenders.',
    exactWorkTypes: [
      'Geographically indexed Texas title-plant chain assembly (ChainOfTitleAI) with mandatory human examiner review',
      'Surface title runsheets (RunsheetAI) and TLTA title insurance Commitment Schedules A, B & C (CommitmentAI)',
      '254-county Texas Central Appraisal District (CAD) surface parcel cross-referencing',
    ],
    overview:
      'Unveiled June 3, 2026 at the Texas Land Title Association (TLTA) conference, RecordsOnline\'s AI Suite for Title combines three staged engines — ChainOfTitleAI, RunsheetAI, and CommitmentAI — backed by 94 Texas geographic title plants and human examiner sign-off at every stage ("AI without an examiner is not a title product, it is a liability"). For commercial real-estate closings and surface title commitments integrated into SoftPro or Qualia, it is highly credible. For oil and gas mineral landmen, however, it ranks #10 because it is engineered around surface title insurance Schedules A/B/C rather than severed subsurface mineral chains, exact-fraction NMA/NRI ledgers, Duhig/double-fraction royalty math, or rural non-plant oil-patch counties.',
    desktopProgramNote: 'Web platform integrating with title-agency closing suites (Qualia, SoftPro, RamQuest, ResWare).',
    pros: [
      'Backed by 94 owned Texas geographic title plants plus 254-county CAD tax parcel search',
      'Mandatory human-examiner gate between ChainOfTitleAI, RunsheetAI, and CommitmentAI stages',
      'Turnkey integrations with standard Texas title-insurance production software',
    ],
    cons: [
      'Built primarily for surface real-estate title insurance commitments (Schedules A, B & C), not severed mineral NMA/NRI ownership math or heirship trees',
      'Leaves 160 rural Texas counties outside its 94 geographic title plants',
      'Unpublished demo-only pricing with no self-serve per-run option for independent petroleum landmen',
    ],
    unitEconomics: {
      model: 'Title-plant & agency subscription/order quote (unpublished)',
      effectiveCostPerAssignment: 'Unpublished; structured around title-agency closing economics',
      savesTime: {
        verdict: 'Yes — High for surface title commitments in its 94 TX plant counties',
        detail: 'Automates Schedule A/B/C drafting directly from geographic plant indexes.',
      },
      savesWork: {
        verdict: 'Low for mineral NMA math — High for surface closing agencies',
        detail: 'Does not replace petroleum landman mineral severance and royalty decimal takeoffs.',
      },
      savesMoney: {
        verdict: 'Strong for TLTA title agencies — Mismatched for upstream mineral brokers',
        detail: 'Upstream landmen would still need a mineral-estate engine to compute severed fractional ownership.',
      },
      costVsGainSummary:
        'Top-tier choice if you issue surface TLTA title insurance commitments in Texas metro/plant counties; not built to replace Title-Desk or Artificial Landman on subsurface mineral estates.',
    },
    usability: {
      easeOfUseScore: 7.7,
      effectiveComplexity: 'Moderate-High',
      complexityDetail: 'Designed around professional title-plant examination and SoftPro/Qualia closing workflows.',
      lciScore: 48,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '2 – 4 days',
    },
    sources: [
      { label: 'RecordsOnline AI Suite for Title Launch (June 3, 2026)', url: 'https://recordsonline.com/?p=1741', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'landspect',
    rank: 11,
    rankDisplay: '#11',
    isTiedLeader: false,
    name: 'Landspect (Beta)',
    shortName: 'Landspect',
    vendor: 'Landspect Tech LLC',
    website: 'https://www.landspect.com/',
    category: 'Beta Cloud Landman Workstation with GIS Legal Plotting',
    tierGroup: 'tier1-ai-title',
    compositeScore: 68.5,
    subscores: {
      chainDepth: 70,
      mathAndProof: 66,
      unitEconomics: 74,
      usabilityAndLci: 76,
      texasFit: 67,
      practiceOps: 62,
    },
    pricingSummary: '$249/seat/mo or $2,499/yr prepaid (7-day trial without card; downloads locked until paid subscription)',
    pricingDetail:
      'Public flat per-seat subscription: $249/seat/mo ($2,499/yr prepaid), all modules included. Free 7-day trial requires no card, though deliverable exports (PDF, KML, DXF, GeoJSON) unlock only after subscribing.',
    publicPricing: true,
    startingPriceNumeric: 249,
    texasCoverage:
      'Partial / uneven — vendor stats (Nov 16, 2026) list 2.08M parcels across 6 states and 2.28M wells across 16 states, with many counties marked "Not loaded"',
    whoUsesIt:
      'Early-adopter independent landmen wanting browser-based legal-description GIS plotting (KML/DXF/GeoJSON) alongside assistive single-deed extraction.',
    exactWorkTypes: [
      'Plotting metes-and-bounds and survey legal descriptions to KML, DXF, GeoJSON, and plat PDFs',
      'Assistive single-deed AI field extraction with manual confirmation into runsheets and flowcharts',
      'Preliminary surface parcel and well-spot visual reconnaissance in loaded counties',
    ],
    overview:
      'Landspect ("Built by landmen, for landmen") is an openly Beta cloud workstation priced at $249/seat/mo that bundles AI deed reading, runsheets, ownership flowcharts, MOR templates, and strong GIS export formats (KML, DXF, GeoJSON, plat PDFs), plus a manual-entry toggle for confidential files. While its transparent single-tier pricing and CAD/GIS exports are genuinely appealing, the platform candidly labels itself Beta with modules still being refined, many counties "Not loaded," parcel records reflecting surface tax owners rather than severed mineral owners, single-provider cloud AI rather than 3-model verification, and a $249/mo seat price that costs $50/mo more than the mature Title-Desk Agent ($199/mo).',
    desktopProgramNote: 'Browser SaaS only (read-only early-access API); no offline desktop app.',
    pros: [
      'Transparent $249/seat/mo all-inclusive pricing and 7-day no-card trial',
      'Strong CAD & GIS export support (DXF, KML, GeoJSON, plat PDF) directly from legal-description plotting',
      'Includes an explicit manual-entry mode when client policy forbids sending deed images to external AI',
    ],
    cons: [
      'Openly in Beta with incomplete county data ("Not loaded" across numerous counties) and parcel layers limited to surface tax rolls',
      'Costs $249/seat/mo ($50/mo more than Title-Desk Agent\'s $199/mo) without local free OCR, courthouse connectors, or BigInt balance proofs',
      'Deliverable downloads are blocked during the free trial, preventing end-to-end client workbook inspection before paying',
    ],
    unitEconomics: {
      model: 'Flat $249/seat/mo ($2,499/yr) cloud subscription',
      effectiveCostPerAssignment: '$24.90/assignment at 10 assignments/mo + external courthouse copy fees',
      savesTime: {
        verdict: 'Moderate — Helpful on DXF/KML tract plotting & single-deed field pulls',
        detail: 'Cuts manual deed-call plotting time, though examiners still assemble county packets and verify beta calculations.',
      },
      savesWork: {
        verdict: 'Moderate — Pre-fills deed fields one instrument at a time for user confirmation',
        detail: 'Reduces typing per instrument, without full batch 3-model chain synthesis.',
      },
      savesMoney: {
        verdict: 'Fair at high volume, outpriced by Title-Desk Agent ($199/mo)',
        detail: 'Title-Desk Agent saves $600/yr per seat while adding offline OCR, CountyRecords/CourthouseDirect/TexasFile connectors, and time/billing.',
      },
      costVsGainSummary:
        'Promising GIS-friendly beta to watch, especially for DXF/KML plotting, but less complete and $50/mo pricier per seat than Title-Desk Agent today.',
    },
    usability: {
      easeOfUseScore: 8.1,
      effectiveComplexity: 'Low-Moderate',
      complexityDetail: 'Clean single-workspace layout with confirmation prompts per deed; beta edges require extra output double-checking.',
      lciScore: 29,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '2 – 3 hours',
    },
    sources: [
      { label: 'Landspect Beta Workstation & Live County Metrics', url: 'https://www.landspect.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'tracts',
    rank: 12,
    rankDisplay: '#12',
    isTiedLeader: false,
    name: 'Tracts',
    shortName: 'Tracts',
    vendor: 'Tracts LLC',
    website: 'https://www.tracts.co/',
    category: 'Structured Title Notes & Automated Ownership Calculation Workspace',
    tierGroup: 'tier1-ai-title',
    compositeScore: 66.0,
    subscores: {
      chainDepth: 65,
      mathAndProof: 72,
      unitEconomics: 58,
      usabilityAndLci: 70,
      texasFit: 70,
      practiceOps: 60,
    },
    pricingSummary: 'Unpublished project scoping ("Scope My Project" quote only)',
    pricingDetail: 'No public pricing; sales-scoped engagements advertising a 2× efficiency guarantee and 2026 Enverus Permian abstract-plant early access.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Agnostic manual TitleNotes workspace + 2026 Enverus partnership feeding Permian abstract plants',
    whoUsesIt:
      'Operator land techs and mineral acquisition teams already invested in structured TitleNotes workflows or Enverus Permian partnerships.',
    exactWorkTypes: [
      'Converting condensed examiner "TitleNotes" into automated fractional ownership tables ("Zero Math")',
      'Cross-tract Common Title Finder reuse when chaining adjacent Permian sections',
    ],
    overview:
      'Tracts pioneered structured "TitleNotes" workflows (condensing deed conveyances into standardized ownership inputs for "Zero Math" calculation) and announced a 2026 Permian abstract-plant integration with Enverus. However, its public site shows dated 2021 copyright copy, discloses no AI OCR or multi-model extraction details on its public pages, hides all pricing behind "Scope My Project" calls, and traditionally requires human land techs to abstract deeds into TitleNotes syntax before the math engine takes over.',
    desktopProgramNote: 'Cloud web application; no desktop software.',
    pros: [
      'Structured TitleNotes methodology calculates downstream fractional ownership consistently once deeds are abstracted',
      'Common Title Finder prevents re-working shared sovereign-to-mid-century base chains across neighboring tracts',
      '2026 Enverus partnership connects Permian abstract-plant records for joint enterprise customers',
    ],
    cons: [
      'Unpublished "Scope My Project" pricing with no self-serve signup or per-run option',
      'Public site materials remain sparse/dated (2021 copyright footer) with little transparency on native AI OCR capabilities',
      'Learning proprietary TitleNotes abstraction conventions requires meaningful analyst ramp-up',
    ],
    unitEconomics: {
      model: 'Custom project/team quote (unpublished)',
      effectiveCostPerAssignment: 'Unpublished quote',
      savesTime: {
        verdict: 'Moderate — Reuses common base chains & automates post-abstraction math',
        detail: 'Biggest speed gain occurs when chaining 10+ contiguous tracts sharing identical base title.',
      },
      savesWork: {
        verdict: 'Partial — Automates spreadsheet arithmetic after structured TitleNotes entry',
        detail: 'Without automated 3-model deed reading, human analysts still read and encode instruments.',
      },
      savesMoney: {
        verdict: 'Opaque — Requires custom scoping call to evaluate against $199–$249 public benchmarks',
        detail: 'Best suited for multi-section contiguous unit builds rather than standalone tracts.',
      },
      costVsGainSummary:
        'Valuable when an Enverus-backed Permian team is chaining dozens of contiguous tracts with shared base title; less transparent and less automated on raw document reading than Title-Desk or Artificial Landman.',
    },
    usability: {
      easeOfUseScore: 7.2,
      effectiveComplexity: 'Moderate-High',
      complexityDetail: 'Encoding complex Texas reservations and depth severances accurately into structured TitleNotes syntax takes dedicated training.',
      lciScore: 52,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: '3 – 5 days',
    },
    sources: [
      { label: 'Tracts Platform Overview', url: 'https://www.tracts.co/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'Tracts & Enverus TitleNotes Partnership Report', url: 'https://energiesmedia.com/?p=60108', verifiedDate: '2026-11-17', sourceType: 'Press / Industry Report' },
    ],
  },
  {
    id: 'titletrackr',
    rank: 13,
    rankDisplay: '#13',
    isTiedLeader: false,
    name: 'TitleTrackr',
    shortName: 'TitleTrackr',
    vendor: 'TitleTrackr',
    website: 'https://titletrackr.com/',
    category: 'Real-Estate Abstracting & Title Commitment SaaS (Surface-Oriented)',
    tierGroup: 'tier1-ai-title',
    compositeScore: 63.5,
    subscores: {
      chainDepth: 62,
      mathAndProof: 55,
      unitEconomics: 58,
      usabilityAndLci: 76,
      texasFit: 58,
      practiceOps: 70,
    },
    pricingSummary: 'Custom quote gated behind 4-step questionnaire (no public pricing)',
    pricingDetail: 'Tailored sales quote only; no published per-seat or per-search rates.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'County coverage list not disclosed on public pages',
    whoUsesIt:
      'Residential and commercial surface title abstractors, independent surface searchers, and closing agencies generating Schedule A / Requirements & Exceptions.',
    exactWorkTypes: [
      'Surface abstract extraction and automated Title Commitment Schedule A drafting',
      'Order intake from Outlook/Gmail with invoicing and XML/Word/Excel/PDF exports',
      'Basic lease clause surfacing (Pugh, shut-in, royalty mentions) on uploaded files',
    ],
    overview:
      'TitleTrackr markets autonomous county "Search Agents," 1886-cursive OCR ("99%+ accuracy" vendor claim), and instant Title Commitments, while listing oil and gas landmen among target buyers. On close inspection, however, its core product is residential/commercial surface abstracting (Schedule A, Requirements & Exceptions, closing agency order tracking): it has no Net Mineral Acre or fractional conveyance calculator, no severed mineral/royalty estate ledger, no disclosed Texas county list, and gates pricing behind a sales questionnaire.',
    desktopProgramNote: 'Cloud web application (Cloudflare R2 storage); no desktop app.',
    pros: [
      'Built-in order management (Outlook/Gmail import), invoicing, and broad export formats (PDF, Word, Excel, CSV, XML)',
      'Explicit policy stating customer uploads are never used to train external AI models',
    ],
    cons: [
      'Surface title commitment tool lacking mineral-estate fraction math, NMA calculations, Duhig checks, or RRC well context',
      'Unverified "99%+ accuracy" marketing claim with zero published Texas county coverage map or public pricing',
      'Promotional blog self-ranks TitleTrackr #1 without disclosing mineral-title capability gaps',
    ],
    unitEconomics: {
      model: 'Quote-gated SaaS subscription',
      effectiveCostPerAssignment: 'Unpublished quote',
      savesTime: {
        verdict: 'Moderate for surface abstractors — Low for severed Texas mineral chains',
        detail: 'Speeds surface commitment schedules but leaves all mineral fraction and NMA work manual.',
      },
      savesWork: {
        verdict: 'Partial — Order tracking & OCR summaries only for O&G users',
        detail: 'Cannot produce a balanced Texas Mineral Ownership Report.',
      },
      savesMoney: {
        verdict: 'Unproven for petroleum landmen due to quote gate & missing mineral math',
        detail: 'Petroleum landmen would still pay for a true mineral examination engine alongside it.',
      },
      costVsGainSummary:
        'Relevant for surface real-estate abstractors; mismatched for upstream Texas oil and gas mineral title work.',
    },
    usability: {
      easeOfUseScore: 7.8,
      effectiveComplexity: 'Low-Moderate',
      complexityDetail: 'Simple order-management UI for surface searches; requires external spreadsheets for any mineral math.',
      lciScore: 30,
      lciBand: 'Same-Day Working Proficiency',
      timeToProficiency: '2 – 3 hours',
    },
    sources: [
      { label: 'TitleTrackr Product Overview', url: 'https://titletrackr.com/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
      { label: 'TitleTrackr Questionnaire Pricing Gate', url: 'https://titletrackr.com/pricing', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
  {
    id: 'landhorn',
    rank: 14,
    rankDisplay: '#14',
    isTiedLeader: false,
    name: 'Landhorn',
    shortName: 'Landhorn',
    vendor: 'Landhorn',
    website: 'https://landhorn.co/',
    category: 'Early-Stage Demo-Gated Courthouse OCR & Runsheet Tool',
    tierGroup: 'tier1-ai-title',
    compositeScore: 59.0,
    subscores: {
      chainDepth: 60,
      mathAndProof: 52,
      unitEconomics: 50,
      usabilityAndLci: 70,
      texasFit: 62,
      practiceOps: 54,
    },
    pricingSummary: 'Unpublished (30-minute sales demo booking only)',
    pricingDetail: 'No pricing, trial, or technical documentation published; single-page site funnels to a 30-minute demo calendar.',
    publicPricing: false,
    startingPriceNumeric: null,
    texasCoverage: 'Not stated on public site',
    whoUsesIt: 'Prospective land teams evaluating early-stage courthouse OCR demos.',
    exactWorkTypes: [
      'Courthouse image OCR and grantor-grantee field extraction',
      'Draft runsheets and GIS map previews (scope verifiable only via live demo)',
    ],
    overview:
      'Landhorn advertises courthouse OCR, grantor-grantee extraction, runsheets, GIS maps, and mineral reports, and even lists "title opinions" among outputs on its landing page without clarifying licensed attorney involvement or unauthorized-practice-of-law (UPL) boundaries. Because the site publishes zero pricing, zero county coverage figures, zero sample outputs, and zero architectural explanation of how mineral fractions are verified, it ranks #14 pending greater public transparency.',
    desktopProgramNote: 'Web demo only; no desktop application.',
    pros: [
      'Targets oil and gas grantor-grantee extraction and GIS mapping specifically rather than residential closings',
    ],
    cons: [
      'Zero published pricing, county coverage, sample workbooks, or verification methodology on public pages',
      'Lists "title opinions" as an output without explaining mandatory attorney review or UPL safeguards',
      'No self-serve trial — requires booking a 30-minute sales call to inspect basic functionality',
    ],
    unitEconomics: {
      model: 'Unpublished demo-gated quote',
      effectiveCostPerAssignment: 'Unknown (no public pricing)',
      savesTime: {
        verdict: 'Unverified publicly',
        detail: 'No benchmark or sample packet metrics published on vendor site.',
      },
      savesWork: {
        verdict: 'Unverified publicly',
        detail: 'Claims OCR and runsheet generation without documented fraction-math or citation gates.',
      },
      savesMoney: {
        verdict: 'Unverified publicly',
        detail: 'Cannot verify ROI without published pricing or sample runs.',
      },
      costVsGainSummary:
        'Insufficient public documentation and pricing transparency to recommend over proven, publicly priced platforms like Title-Desk ($249/run · $199/mo) and Artificial Landman ($249/run).',
    },
    usability: {
      easeOfUseScore: 7.0,
      effectiveComplexity: 'Moderate (Unverified)',
      complexityDetail: 'No public sandbox or documentation available outside a live sales call.',
      lciScore: 38,
      lciBand: 'Multi-Day Operational Ramp',
      timeToProficiency: 'Est. 1 – 2 days (demo-gated)',
    },
    sources: [
      { label: 'Landhorn Landing Page', url: 'https://landhorn.co/', verifiedDate: '2026-11-17', sourceType: 'Direct Vendor Page' },
    ],
  },
]);
