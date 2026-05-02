/* ==========================================================================
   The Battle for Better Air — V1 calculator
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
