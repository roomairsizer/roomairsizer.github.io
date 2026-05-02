/* ==========================================================================
   The Battle for Better Air — V2 calculator
   Vanilla JS. No deps. No build.
   ========================================================================== */

(function () {
  'use strict';

  const CONCERN_COPY = {
    allergies: 'For a {area} ft² room with allergy concerns, look for a True HEPA purifier rated {cadr} CADR or higher. Run it in the bedroom 24/7 — concentrated breathing time matters most.',
    smoke:     'Wildfire and smoke particles are tiny (PM2.5) and persistent. For a {area} ft² room, target {cadr} CADR or higher with True HEPA. Bump ACH to 6+ during smoke events.',
    pets:      'Pet dander is heavier than smoke but constantly replenished. For a {area} ft² room, look for {cadr} CADR with a washable pre-filter to extend HEPA life.',
    dust:      'For a {area} ft² room with general dust concerns, {cadr} CADR with True HEPA handles airborne particles. Pair with regular vacuuming for sediment dust.',
    vocs:      'VOCs (paint, off-gassing, cooking) need activated carbon, not just HEPA. For a {area} ft² room, look for {cadr} CADR with a substantial (>2 lb) carbon stage.',
    asthma:    'Asthma and reactive airways respond to higher air-change rates. For a {area} ft² room, target {cadr} CADR and run at 5–6 ACH. True HEPA is non-negotiable.'
  };

  const AMAZON_TAG = 'roomairsizer-20';

  const PRODUCTS = [
    {
      asin: 'B07VVK39F7',
      name: 'Levoit Core 300',
      cadr: 141,
      priceTier: '$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'A quiet, compact workhorse for small bedrooms. True HEPA handles dust and dander without breaking the bank.'
    },
    {
      asin: 'B08F22Q2TJ',
      name: 'Levoit Core 400S',
      cadr: 260,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Smart features meet solid performance. Quiet enough for sleep, powerful enough for standard bedrooms.'
    },
    {
      asin: 'B09GTRNJNN',
      name: 'Levoit Core 600S',
      cadr: 410,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs', 'asthma'],
      description: 'Serious airflow for large spaces. Clears wildfire smoke and heavy dander rapidly.'
    },
    {
      asin: 'B01728NLRG',
      name: 'Coway Airmega AP-1512HH',
      cadr: 246,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'The industry standard. Proven reliability, affordable filters, and an eco-mode that actually works.'
    },
    {
      asin: 'B01C9RIACG',
      name: 'Coway Airmega 400',
      cadr: 350,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs', 'asthma'],
      description: 'Dual-filter design pulls air from two sides. Ideal for open-plan living areas and high-ceiling rooms.'
    },
    {
      asin: 'B01D8DAYII',
      name: 'Winix 5500-2',
      cadr: 243,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Features a washable AOC carbon filter that genuinely helps with odors, unlike standard thin carbon sheets.'
    },
    {
      asin: 'B0BP2F4BGB',
      name: 'Blueair Blue Pure 411a Max',
      cadr: 141,
      priceTier: '$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'Minimalist design with a washable fabric pre-filter. Blends into the room while quietly doing its job.'
    },
    {
      asin: 'B0BP2GBV3J',
      name: 'Blueair Blue Pure 311i Max',
      cadr: 250,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'Exceptionally quiet operation. A great balance of CADR and noise levels for primary bedrooms.'
    },
    {
      asin: 'B0BP2CS717',
      name: 'Blueair Blue Pure 211i Max',
      cadr: 410,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'asthma'],
      description: 'Massive clean air delivery with a Scandinavian aesthetic. Tackles large living rooms efficiently.'
    },
    {
      asin: 'B00BWYO53G',
      name: 'Honeywell HPA300',
      cadr: 300,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'Utilitarian and loud on high, but moves an impressive amount of air for the price point.'
    },
    {
      asin: 'B08F91R8S9',
      name: 'Medify MA-40',
      cadr: 380,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'Medical-grade H13 HEPA. Excellent for strict allergen control, backed by a lifetime warranty.'
    },
    {
      asin: 'B08S2X6SBC',
      name: 'Medify MA-50',
      cadr: 500,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'asthma'],
      description: 'Commercial-grade airflow in a residential chassis. When you need air cleared fast, this is the tool.'
    },
    {
      asin: 'B00021XL2U',
      name: 'Austin Air HealthMate HM400',
      cadr: 400,
      priceTier: '$$$',
      concerns: ['vocs', 'smoke', 'allergies', 'asthma'],
      description: 'Packs 15 lbs of activated carbon and zeolite. The undisputed champion for heavy VOCs and chemical odors.'
    },
    {
      asin: 'B002VXDCHW',
      name: 'IQAir HealthPro Plus',
      cadr: 300,
      priceTier: '$$$',
      concerns: ['vocs', 'smoke', 'allergies', 'asthma'],
      description: 'HyperHEPA filtration down to 0.003 microns. Professional-grade tool for severe asthma and allergies.'
    },
    {
      asin: 'B07M6TMWX8',
      name: 'Alen BreatheSmart 75i',
      cadr: 347,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Premium build with customizable panels. Exceptionally quiet for its high CADR output.'
    },
    {
      asin: 'B0B1MGG312',
      name: 'Coway Airmega 250',
      cadr: 249,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'A modern, boxy redesign of the classic AP-1512HH with a convenient slide-out washable pre-filter.'
    },
    {
      asin: 'B004VGIGVY',
      name: 'GermGuardian AC4825',
      cadr: 118,
      priceTier: '$',
      concerns: ['allergies', 'dust', 'pets'],
      description: 'An entry-level tower model. Best suited for very small rooms, bathrooms, or tight dorm spaces.'
    }
  ];

  const fmtInt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  function init() {
    const form    = document.getElementById('sizer-form');
    if (!form) return;

    const lengthEl  = document.getElementById('length');
    const widthEl   = document.getElementById('width');
    const heightEl  = document.getElementById('height');
    const concernEl = document.getElementById('concern');
    const achEl     = document.getElementById('ach');
    const achOut    = document.getElementById('ach-out');

    const cadrEl   = document.getElementById('cadr');
    const volumeEl = document.getElementById('volume');
    const areaEl   = document.getElementById('area');
    const cfmEl    = document.getElementById('cfm');
    const recEl    = document.getElementById('recommendation');

    function compute() {
      const L = parseFloat(lengthEl.value);
      const W = parseFloat(widthEl.value);
      const H = parseFloat(heightEl.value);
      const ach = parseFloat(achEl.value);
      const concern = concernEl.value;

      const valid = [L, W, H, ach].every(v => Number.isFinite(v) && v > 0);
      if (!valid) {
        cadrEl.textContent = '—';
        volumeEl.textContent = '— ft³';
        areaEl.textContent = '— ft²';
        cfmEl.textContent = '—';
        recEl.textContent = 'Enter your room dimensions to get a recommendation.';
        const grid = document.querySelector('.picks__grid');
        if (grid) grid.innerHTML = '';
        return;
      }

      const volume = L * W * H;
      const area   = L * W;
      const cfm    = (volume * ach) / 60;
      const cadr   = cfm * 1.55;

      cadrEl.textContent   = fmtInt.format(Math.round(cadr));
      volumeEl.textContent = fmtInt.format(Math.round(volume)) + ' ft³';
      areaEl.textContent   = fmtInt.format(Math.round(area)) + ' ft²';
      cfmEl.textContent    = fmtInt.format(Math.round(cfm));

      const template = CONCERN_COPY[concern] || CONCERN_COPY.allergies;
      recEl.textContent = template
        .replace('{area}', fmtInt.format(Math.round(area)))
        .replace('{cadr}', fmtInt.format(Math.round(cadr)));

      updateRecommendations(cadr, concern);
    }

    function updateRecommendations(requiredCadr, concern) {
      const grid = document.querySelector('.picks__grid');
      const picksNote = document.querySelector('.picks__note');
      if (!grid) return;

      if (picksNote) {
        picksNote.textContent = 'Based on your dimensions and primary concern, here are the top picks for your space.';
      }

      let matches = PRODUCTS.filter(p => p.concerns.includes(concern));
      if (matches.length === 0) matches = [...PRODUCTS];

      let sizeMatches = matches.filter(p => p.cadr >= requiredCadr);
      sizeMatches.sort((a, b) => a.cadr - b.cadr);

      let top3 = sizeMatches.slice(0, 3);

      if (top3.length < 3) {
        let remaining = matches.filter(p => !top3.includes(p));
        remaining.sort((a, b) => b.cadr - a.cadr);
        
        while (top3.length < 3 && remaining.length > 0) {
          top3.push(remaining.shift());
        }
      }

      grid.innerHTML = top3.map((product, idx) => {
        let tag = 'Top Pick';
        if (idx === 1) tag = 'Great Alternative';
        if (idx === 2) tag = 'Also Consider';
        
        if (product.cadr < requiredCadr) {
          tag = 'Highest Available';
        }

        const link = `https://www.amazon.com/dp/${product.asin}/ref=nosim?tag=${AMAZON_TAG}`;
        
        return `
          <article class="pick">
            <p class="pick__tag">${tag}</p>
            <h4 class="pick__name">${product.name}</h4>
            <p class="pick__meta">CADR: ${product.cadr} &nbsp;|&nbsp; Price: ${product.priceTier}</p>
            <p class="pick__copy">${product.description}</p>
            <a class="btn btn--secondary" href="${link}" target="_blank" rel="noopener sponsored" aria-label="View ${product.name} on Amazon">View on Amazon</a>
          </article>
        `;
      }).join('');
    }

    function updateAchVisuals() {
      const v   = parseFloat(achEl.value);
      const min = parseFloat(achEl.min) || 2;
      const max = parseFloat(achEl.max) || 8;
      const pct = ((v - min) / (max - min)) * 100;
      achEl.style.setProperty('--ach-pct', pct + '%');
      if (achOut) achOut.textContent = Number.isInteger(v) ? String(v) : v.toFixed(1);
    }

    form.addEventListener('input', e => {
      if (e.target === achEl) updateAchVisuals();
      compute();
    });
    form.addEventListener('change', compute);

    updateAchVisuals();
    compute();
  }

  function initTooltips() {
    const helps = document.querySelectorAll('.field__help');
    if (!helps.length) return;

    function closeAll(except) {
      helps.forEach(h => {
        if (h !== except) h.setAttribute('aria-expanded', 'false');
      });
    }

    helps.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = btn.getAttribute('aria-expanded') === 'true';
        closeAll(btn);
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });

    document.addEventListener('click', () => closeAll(null));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAll(null);
    });
  }

  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 16) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initReducedMotion() {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      const video = document.querySelector('.hero__video');
      if (mq.matches) {
        document.body.classList.add('reduced-motion');
        if (video) { try { video.pause(); } catch (_) {} }
      } else {
        document.body.classList.remove('reduced-motion');
        if (video) { try { video.play(); } catch (_) {} }
      }
    };
    apply();
    if (mq.addEventListener) mq.addEventListener('change', apply);
    else if (mq.addListener) mq.addListener(apply);
  }

  function initEmailForm() {
    const form = document.querySelector('.soon__form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn   = form.querySelector('button');
      if (!input || !input.value || !input.checkValidity()) {
        input && input.focus();
        return;
      }
      const wrap = document.createElement('p');
      wrap.className = 'soon__thanks';
      wrap.style.cssText = 'margin-top:1rem;color:var(--accent);font-weight:500;';
      wrap.textContent = 'Thanks — we’ll let you know when the next tool launches.';
      form.replaceWith(wrap);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init(); initTooltips(); initNavScroll(); initReducedMotion(); initEmailForm();
    });
  } else {
    init(); initTooltips(); initNavScroll(); initReducedMotion(); initEmailForm();
  }
})();
