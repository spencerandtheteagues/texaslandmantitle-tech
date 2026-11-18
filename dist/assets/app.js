// Progressive enhancement for Texas Landman & Title Tech:
// 1. Live Unit Economics & Break-Even Calculator (/unit-economics/ & /)
// 2. Live Rankings Search, Tier & LCI Filter (/rankings/)
// 3. Interactive Side-by-Side Tool Comparator (/compare/)
// 4. Live Events Region & Category Filter (/events/)

(function () {
  function fmtUsd(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  // 1. Unit Economics Calculator
  const calcRoot = document.getElementById('roi-calculator');
  if (calcRoot) {
    const runsInput = document.getElementById('calc-runs');
    const pagesInput = document.getElementById('calc-pages');
    const dayRateInput = document.getElementById('calc-dayrate');
    const portalSelect = document.getElementById('calc-portal');

    const runsOut = document.getElementById('calc-runs-val');
    const pagesOut = document.getElementById('calc-pages-val');
    const dayRateOut = document.getElementById('calc-dayrate-val');

    const manualTotalEl = document.getElementById('res-manual-total');
    const manualPerRunEl = document.getElementById('res-manual-per-run');
    const hostedTotalEl = document.getElementById('res-hosted-total');
    const hostedPlanEl = document.getElementById('res-hosted-plan');
    const hostedSavingsEl = document.getElementById('res-hosted-savings');
    const desktopTotalEl = document.getElementById('res-desktop-total');
    const desktopSavingsEl = document.getElementById('res-desktop-savings');
    const hoursSavedEl = document.getElementById('res-hours-saved');

    function cheapestHosted(runs, pages) {
      const extraBlocks = Math.max(0, Math.ceil((pages - 400) / 200));
      const extraPageFee = extraBlocks * 40;
      const options = [
        { name: 'Pay-Per-Run ($249/run)', cost: runs * (249 + extraPageFee) },
        { name: 'Solo Plan ($1,299/mo · 8 runs)', cost: 1299 + Math.max(0, runs - 8) * 219 + runs * extraPageFee },
        { name: 'Pro Plan ($3,899/mo · 25 runs)', cost: 3899 + Math.max(0, runs - 25) * 199 + runs * extraPageFee },
        { name: 'Enterprise Plan ($9,999/mo · 70 runs)', cost: 9999 + Math.max(0, runs - 70) * 179 + runs * extraPageFee },
      ];
      options.sort((a, b) => a.cost - b.cost);
      return options[0];
    }

    function portalCostPerRun(mode, pages) {
      const docs = Math.max(8, Math.round(pages / 5.8));
      if (mode === 'optimized') return Math.round(20 + docs * 1.35); // FileViewer + TVP/CountyRecords mix
      if (mode === 'texasfile') return pages * 1.0;
      return 0; // client-supplied packet
    }

    function recalc() {
      const runs = Number(runsInput.value || 8);
      const pages = Number(pagesInput.value || 260);
      const dayRate = Number(dayRateInput.value || 600);
      const portalMode = portalSelect ? portalSelect.value : 'client';

      runsOut.textContent = runs + (runs === 1 ? ' assignment / mo' : ' assignments / mo');
      pagesOut.textContent = pages + ' pages / chain';
      dayRateOut.textContent = fmtUsd(dayRate) + ' / day (' + fmtUsd(dayRate / 8) + '/hr)';

      const hourly = dayRate / 8;
      const scale = pages / 260;
      const manualHoursPerRun = 6.5 + 12.8 * scale;
      const reviewHoursHosted = 1.2 + 1.0 * scale;
      const reviewHoursDesktop = 1.6 + 1.2 * scale;
      const copyFee = portalCostPerRun(portalMode, pages);

      const manualTotal = runs * (manualHoursPerRun * hourly + copyFee);
      const bestHosted = cheapestHosted(runs, pages);
      const hostedTotal = bestHosted.cost + runs * (reviewHoursHosted * hourly + copyFee);

      const seatsNeeded = Math.max(1, Math.ceil(runs / 18));
      const desktopSoftware = seatsNeeded * 199 + runs * Math.round(6 * scale);
      const desktopTotal = desktopSoftware + runs * (reviewHoursDesktop * hourly + copyFee);

      const hoursSaved = Math.max(0, Math.round(runs * (manualHoursPerRun - reviewHoursHosted)));

      manualTotalEl.textContent = fmtUsd(manualTotal) + '/mo';
      manualPerRunEl.textContent = fmtUsd(manualTotal / runs) + ' per assignment (' + manualHoursPerRun.toFixed(1) + ' hrs manual)';

      hostedTotalEl.textContent = fmtUsd(hostedTotal) + '/mo';
      hostedPlanEl.textContent = bestHosted.name + ' · ' + fmtUsd(hostedTotal / runs) + '/assignment all-in';
      hostedSavingsEl.textContent = fmtUsd(Math.max(0, manualTotal - hostedTotal)) + '/mo net gain';

      desktopTotalEl.textContent = fmtUsd(desktopTotal) + '/mo';
      desktopSavingsEl.textContent =
        fmtUsd(Math.max(0, manualTotal - desktopTotal)) +
        '/mo net gain (' +
        seatsNeeded +
        (seatsNeeded === 1 ? ' seat @ $199)' : ' seats @ $199)');

      if (hoursSavedEl) {
        hoursSavedEl.textContent = hoursSaved.toLocaleString('en-US') + ' CPL/examiner hours reclaimed per month';
      }
    }

    [runsInput, pagesInput, dayRateInput, portalSelect].forEach((el) => {
      if (el) el.addEventListener('input', recalc);
      if (el) el.addEventListener('change', recalc);
    });
    recalc();
  }

  // 2. Rankings Dossier Filter
  const searchInput = document.getElementById('tool-filter-search');
  const tierSelect = document.getElementById('tool-filter-tier');
  const pricingSelect = document.getElementById('tool-filter-pricing');
  const countLabel = document.getElementById('tool-filter-count');
  if (searchInput || tierSelect || pricingSelect) {
    const cards = Array.from(document.querySelectorAll('[data-tool-card]'));
    function filterTools() {
      const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const tier = tierSelect ? tierSelect.value : 'all';
      const pub = pricingSelect ? pricingSelect.value : 'all';
      let shown = 0;
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const cardTier = card.getAttribute('data-tier') || '';
        const cardPub = card.getAttribute('data-public-pricing') || '';
        const okQ = !q || text.includes(q);
        const okTier = tier === 'all' || cardTier === tier;
        const okPub = pub === 'all' || cardPub === pub;
        const visible = okQ && okTier && okPub;
        card.style.display = visible ? '' : 'none';
        if (visible) shown++;
      });
      if (countLabel) countLabel.textContent = 'Showing ' + shown + ' of ' + cards.length + ' benchmarked tools';
    }
    [searchInput, tierSelect, pricingSelect].forEach((el) => {
      if (el) el.addEventListener('input', filterTools);
      if (el) el.addEventListener('change', filterTools);
    });
  }

  // 3. Side-by-Side Comparator (/compare/)
  const compDataTag = document.getElementById('comparator-dataset');
  const compLeft = document.getElementById('comp-select-a');
  const compRight = document.getElementById('comp-select-b');
  const compBody = document.getElementById('comp-live-body');
  if (compDataTag && compLeft && compRight && compBody) {
    let tools = [];
    try {
      tools = JSON.parse(compDataTag.textContent);
    } catch (_) {
      tools = [];
    }
    function esc(s) {
      return String(s ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
    function renderCompare() {
      const a = tools.find((t) => t.id === compLeft.value) || tools[0];
      const b = tools.find((t) => t.id === compRight.value) || tools[2] || tools[1];
      if (!a || !b) return;
      const rows = [
        ['Benchmark Rank & Score', a.rankDisplay + ' (' + a.compositeScore + '/100)', b.rankDisplay + ' (' + b.compositeScore + '/100)'],
        ['Primary Category', a.category, b.category],
        ['Published Pricing', a.pricingSummary, b.pricingSummary],
        ['Texas Coverage', a.texasCoverage, b.texasCoverage],
        ['Effective Cost / Assignment', a.unitEconomics.effectiveCostPerAssignment, b.unitEconomics.effectiveCostPerAssignment],
        ['Saves Time?', a.unitEconomics.savesTime.verdict, b.unitEconomics.savesTime.verdict],
        ['Saves Manual Work?', a.unitEconomics.savesWork.verdict, b.unitEconomics.savesWork.verdict],
        ['Saves Money?', a.unitEconomics.savesMoney.verdict, b.unitEconomics.savesMoney.verdict],
        ['Ease of Use (1–10)', a.usability.easeOfUseScore + ' / 10', b.usability.easeOfUseScore + ' / 10'],
        ['Effective Complexity', a.usability.effectiveComplexity, b.usability.effectiveComplexity],
        ['Learning Curve Index (Lower = Faster)', 'LCI ' + a.usability.lciScore + '/100 (' + a.usability.timeToProficiency + ')', 'LCI ' + b.usability.lciScore + '/100 (' + b.usability.timeToProficiency + ')'],
        ['Primary Users', a.whoUsesIt, b.whoUsesIt],
      ];
      document.getElementById('comp-col-a').textContent = a.name;
      document.getElementById('comp-col-b').textContent = b.name;
      compBody.innerHTML = rows
        .map(
          (r) =>
            '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'
        )
        .join('');
    }
    compLeft.addEventListener('change', renderCompare);
    compRight.addEventListener('change', renderCompare);
    renderCompare();
  }

  // 4. Events Region & Category Filter
  const evRegion = document.getElementById('event-filter-region');
  const evCat = document.getElementById('event-filter-cat');
  if (evRegion || evCat) {
    const evCards = Array.from(document.querySelectorAll('[data-event-card]'));
    function filterEvents() {
      const r = evRegion ? evRegion.value : 'all';
      const c = evCat ? evCat.value : 'all';
      evCards.forEach((el) => {
        const okR = r === 'all' || el.getAttribute('data-region') === r;
        const okC = c === 'all' || el.getAttribute('data-category') === c;
        el.style.display = okR && okC ? '' : 'none';
      });
    }
    if (evRegion) evRegion.addEventListener('change', filterEvents);
    if (evCat) evCat.addEventListener('change', filterEvents);
  }
})();
