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
      description: 'A quiet, compact workhorse for small bedrooms. True HEPA handles dust and dander without breaking the bank.',
      bestFor: 'Small bedrooms and budget-conscious buyers',
      strengths: ['Very affordable upfront cost', 'Compact footprint fits on nightstands', 'Quiet operation on low speeds'],
      tradeoff: 'Standard filters aren\'t suited for heavy VOCs; higher speeds are noticeably loud.',
      concernFit: {
        allergies: 'Selected because its True HEPA filter effectively captures pollen and dust mites in typical bedrooms where you sleep.',
        smoke: 'Selected because it can cycle enough air in small spaces to handle smoke when run on its highest setting.',
        pets: 'Selected for smaller rooms; its 3-stage filtration helps with dander, though it lacks a washable pre-filter.',
        dust: 'Selected because it provides enough airflow to reduce airborne dust before it settles on bedroom surfaces.',
        vocs: 'Selected with the caveat that while it has a light carbon sheet, heavy chemical odors require stronger carbon.',
        asthma: 'Selected for baseline particle filtration in small rooms; asthmatics should run it on higher speeds for better ACH.'
      }
    },
    {
      asin: 'B089K12H7R',
      name: 'Levoit Core 400S',
      cadr: 260,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Smart features meet solid performance. Quiet enough for sleep, powerful enough for standard bedrooms.',
      bestFor: 'Primary bedrooms and smart-home integration',
      strengths: ['Excellent CADR-to-noise ratio', 'Smart app integration with air quality tracking', 'Modern, unobtrusive cylindrical design'],
      tradeoff: 'The carbon filter is a coated sponge type, making it less effective for severe odors than pellet-based units.',
      concernFit: {
        allergies: 'Selected because it comfortably clears bedrooms of allergens while staying quiet enough for uninterrupted sleep.',
        smoke: 'Selected because it offers sufficient CADR to handle smoke particles, and its app alerts you to sudden PM2.5 spikes.',
        pets: 'Selected because it handles pet dander efficiently in medium rooms, though pet owners must replace the filter regularly.',
        dust: 'Selected because its 360-degree intake aggressively pulls in dust from all directions in medium-sized rooms.',
        vocs: 'Selected for light odors; however, for heavy VOCs like paint fumes, a unit with granular carbon is better.',
        asthma: 'Selected because the True HEPA filtration and strong CADR provide the 5+ air changes per hour asthma sufferers need.'
      }
    },
    {
      asin: 'B09BJMY8HL',
      name: 'Levoit Core 600S',
      cadr: 410,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs', 'asthma'],
      description: 'Serious airflow for large spaces. Clears wildfire smoke and heavy dander rapidly.',
      bestFor: 'Large living rooms and open floor plans',
      strengths: ['Massive airflow for large spaces', 'Laser particle sensor automatically adjusts fan speed', 'Energy efficient for its size'],
      tradeoff: 'Bulky footprint, and replacement filters are expensive due to their size.',
      concernFit: {
        allergies: 'Selected because it has the raw power to clear large, open living spaces of pollen and allergens quickly.',
        smoke: 'Selected because wildfire smoke requires heavy CADR headroom, and this unit can cycle large volumes of air rapidly.',
        pets: 'Selected because its high suction power easily pulls in floating pet hair and dander across large rooms.',
        dust: 'Selected because heavy airflow is the only way to manage dust in open-concept spaces before it settles.',
        vocs: 'Selected for its custom toxin-absorber filter option, though granular carbon units still outperform it for pure chemical odors.',
        asthma: 'Selected because it can maintain the high air-change rates required for asthma management even in larger rooms.'
      }
    },
    {
      asin: 'B01728NLRG',
      name: 'Coway Airmega AP-1512HH',
      cadr: 246,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'The industry standard. Proven reliability, affordable filters, and an eco-mode that actually works.',
      bestFor: 'All-around bedroom and office use',
      strengths: ['Industry-standard reliability', 'Affordable third-party replacement filters', 'Eco-mode actually saves energy by shutting off the fan'],
      tradeoff: 'The optional ionizer should be turned off for those sensitive to trace ozone.',
      concernFit: {
        allergies: 'Selected because it is a proven, reliable workhorse for keeping bedroom air free of allergens 24/7.',
        smoke: 'Selected because it provides robust True HEPA filtration that rapidly clears PM2.5 smoke particles.',
        pets: 'Selected because it features a permanent, washable pre-filter that catches pet hair before it clogs the HEPA filter.',
        dust: 'Selected because its front-intake and top-exhaust design efficiently circulates air to trap floating dust.',
        vocs: 'Selected for particulate removal; its thin carbon pad is only useful for very light household odors.',
        asthma: 'Selected because it delivers reliable, verified CADR. (Remember to turn the ionizer feature off for asthma).'
      }
    },
    {
      asin: 'B01C9RIACG',
      name: 'Coway Airmega 400',
      cadr: 350,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs', 'asthma'],
      description: 'Dual-filter design pulls air from two sides. Ideal for open-plan living areas and high-ceiling rooms.',
      bestFor: 'Open-plan living areas and high-ceiling rooms',
      strengths: ['Dual-filter design pulls air from two sides', 'Extremely quiet on low and medium settings', 'Washable pre-filters'],
      tradeoff: 'High upfront cost and requires purchasing two filters for every replacement cycle.',
      concernFit: {
        allergies: 'Selected because its dual-intake design rapidly scrubs large volumes of air, keeping living rooms allergen-free.',
        smoke: 'Selected because it provides massive CADR headroom, which is essential during heavy wildfire smoke events.',
        pets: 'Selected because its dual washable pre-filters catch a massive amount of pet hair, protecting the expensive HEPA media.',
        dust: 'Selected because it moves enough air to keep large, high-traffic areas noticeably less dusty.',
        vocs: 'Selected because its Max2 filters contain a decent amount of carbon, helping with moderate household odors and VOCs.',
        asthma: 'Selected because its high CADR allows it to maintain the 5-6 air changes per hour required for asthma in large spaces.'
      }
    },
    {
      asin: 'B01D8DAYII',
      name: 'Winix 5500-2',
      cadr: 243,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Features a washable AOC carbon filter that genuinely helps with odors, unlike standard thin carbon sheets.',
      bestFor: 'Odor control and pet owners on a budget',
      strengths: ['Washable AOC carbon filter genuinely absorbs odors', 'Excellent value for the CADR rating', 'Includes a washable pre-filter'],
      tradeoff: 'PlasmaWave feature defaults to \'on\' and must be manually disabled if you want to avoid trace ozone.',
      concernFit: {
        allergies: 'Selected because it pairs True HEPA filtration with high CADR, making it a fantastic budget choice for allergy relief.',
        smoke: 'Selected because its substantial carbon filter helps with smoke odor, while the HEPA filter handles the PM2.5 particles.',
        pets: 'Selected because the washable pre-filter catches hair, and the pellet-based carbon filter effectively neutralizes pet odors.',
        dust: 'Selected because it offers strong airflow to capture floating dust before it accumulates on surfaces.',
        vocs: 'Selected because unlike many purifiers in this price range, it uses real carbon pellets which actually absorb VOCs.',
        asthma: 'Selected for its strong CADR. (Asthma sufferers should disable the PlasmaWave feature to ensure zero ozone emissions).'
      }
    },
    {
      asin: 'B0BP2GBV3J',
      name: 'Blueair Blue Pure 311i Max',
      cadr: 250,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'Exceptionally quiet operation. A great balance of CADR and noise levels for primary bedrooms.',
      bestFor: 'Primary bedrooms requiring quiet operation',
      strengths: ['Exceptionally quiet on low settings', 'Washable fabric pre-filter looks great and catches hair', 'Energy Star rated'],
      tradeoff: 'Uses HEPASilent technology (mechanical + electrostatic), which isn\'t traditional True HEPA and produces trace ozone.',
      concernFit: {
        allergies: 'Selected because its HEPASilent tech captures allergens efficiently while remaining whisper-quiet for sleep.',
        smoke: 'Selected because it cycles room air quickly, though true mechanical HEPA is sometimes preferred for heavy smoke.',
        pets: 'Selected because the colorful fabric exterior acts as a washable pre-filter, making it great for trapping pet hair.',
        dust: 'Selected because its 360-degree intake provides excellent circulation to pull in airborne dust.',
        vocs: 'Selected for general use; its carbon mesh is quite light and not designed for heavy chemical off-gassing.',
        asthma: 'Selected with caution: it provides excellent CADR, but asthmatics highly sensitive to trace ozone should prefer pure mechanical HEPA.'
      }
    },
    {
      asin: 'B0BN2MGV5H',
      name: 'Blueair Blue Pure 211i Max',
      cadr: 410,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'asthma'],
      description: 'Massive clean air delivery with a Scandinavian aesthetic. Tackles large living rooms efficiently.',
      bestFor: 'Large living rooms with aesthetic requirements',
      strengths: ['Massive clean air delivery rate', 'Scandinavian aesthetic blends into modern homes', 'Easy one-button operation'],
      tradeoff: 'Filters are expensive, and the electrostatic filtration method isn\'t traditional mechanical HEPA.',
      concernFit: {
        allergies: 'Selected because it moves huge volumes of air quietly, keeping large spaces clear of pollen and dander.',
        smoke: 'Selected because its sheer CADR output can rapidly clear smoke from open living areas.',
        pets: 'Selected because the large fabric pre-filter catches pet hair before it reaches the main filter media.',
        dust: 'Selected because it provides the heavy air circulation needed to reduce dust in large, open rooms.',
        vocs: 'Selected primarily for particle capture; it is not a heavy-duty VOC or odor scrubber.',
        asthma: 'Selected for high CADR, though strict asthmatics often prefer pure mechanical filtration over electrostatic methods.'
      }
    },
    {
      asin: 'B00BWYO53G',
      name: 'Honeywell HPA300',
      cadr: 300,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'Utilitarian and loud on high, but moves an impressive amount of air for the price point.',
      bestFor: 'Utilitarian particle clearing',
      strengths: ['Moves an impressive amount of air for the price', 'Widely available generic replacement filters', 'Durable, robust build'],
      tradeoff: 'It is noticeably loud on medium and high settings, and the design is very industrial.',
      concernFit: {
        allergies: 'Selected because it is a brute-force True HEPA machine that aggressively clears allergens.',
        smoke: 'Selected because it is one of the most affordable ways to get the high CADR needed for severe smoke events.',
        pets: 'Selected because its powerful suction pulls in pet dander, though you must replace the black pre-filter frequently.',
        dust: 'Selected because its high airflow is excellent at pulling floating dust out of the air.',
        vocs: 'Selected for particle filtration; the carbon pre-filter is too thin to handle serious VOCs.',
        asthma: 'Selected because it easily achieves the high air-change rates asthma sufferers need, relying purely on mechanical HEPA.'
      }
    },
    {
      asin: 'B002VXDCHW',
      name: 'IQAir HealthPro Plus',
      cadr: 300,
      priceTier: '$$$',
      concerns: ['vocs', 'smoke', 'allergies', 'asthma'],
      description: 'HyperHEPA filtration down to 0.003 microns. Professional-grade tool for severe asthma and allergies.',
      bestFor: 'Severe asthma and medical-grade needs',
      strengths: ['HyperHEPA filtration down to 0.003 microns', 'Zero ozone production', 'V-5 Cell gas and odor filter is massive'],
      tradeoff: 'Very expensive upfront, heavy, and replacement filters are a significant ongoing cost.',
      concernFit: {
        allergies: 'Selected because it offers medical-grade filtration that traps ultrafine allergens standard HEPA might miss.',
        smoke: 'Selected because its combination of HyperHEPA and heavy carbon is the gold standard for toxic wildfire smoke.',
        pets: 'Selected because it completely eliminates pet dander and odors, though it is overkill for most pet owners.',
        dust: 'Selected because it provides absolute particle capture for the most sensitive individuals.',
        vocs: 'Selected because its V-5 Cell contains 5 lbs of dual-media gas/odor filtration, making it elite for VOCs.',
        asthma: 'Selected because it is the professional-grade standard for severe asthma, offering 100% ozone-free mechanical filtration.'
      }
    },
    {
      asin: 'B07FW2QQ4K',
      name: 'Alen BreatheSmart 75i',
      cadr: 347,
      priceTier: '$$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Premium build with customizable panels. Exceptionally quiet for its high CADR output.',
      bestFor: 'High-end quiet operation in large rooms',
      strengths: ['Premium build with customizable panels', 'Exceptionally quiet for its CADR output', 'Lifetime warranty (with filter subscription)'],
      tradeoff: 'High upfront premium for the aesthetics and quiet operation.',
      concernFit: {
        allergies: 'Selected because it clears massive spaces of allergens without disrupting conversation or sleep.',
        smoke: 'Selected because it provides the high CADR required for smoke while remaining surprisingly quiet.',
        pets: 'Selected because it offers specialized \'Fresh\' filters designed specifically for heavy pet odors and dander.',
        dust: 'Selected because it maintains strong airflow to capture dust without sounding like a jet engine.',
        vocs: 'Selected because it offers specialized heavy-carbon filter upgrades specifically for chemical off-gassing.',
        asthma: 'Selected because it can maintain the high air-change rates needed for asthma without intolerable noise levels.'
      }
    },
    {
      asin: 'B08H4DZ5MD',
      name: 'Coway Airmega 250',
      cadr: 249,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust'],
      description: 'A modern, boxy redesign of the classic AP-1512HH with a convenient slide-out washable pre-filter.',
      bestFor: 'Modern living spaces and easy maintenance',
      strengths: ['Slide-out washable pre-filter is incredibly easy to clean', 'Modern, boxy redesign fits tight against walls', 'Smart auto-mode'],
      tradeoff: 'More expensive than the visually similar AP-1512HH despite similar performance.',
      concernFit: {
        allergies: 'Selected because it provides consistent True HEPA protection with an easier maintenance routine.',
        smoke: 'Selected because it rapidly detects and clears PM2.5 smoke particles using its sensitive air quality monitor.',
        pets: 'Selected because the slide-out pre-filter makes washing off pet hair incredibly simple and mess-free.',
        dust: 'Selected because its powerful suction traps household dust efficiently.',
        vocs: 'Selected for its particle filtration; it is not designed for heavy VOCs.',
        asthma: 'Selected because it offers reliable mechanical True HEPA filtration without relying on ozone-producing technology.'
      }
    },
    {
      asin: 'B004VGIGVY',
      name: 'GermGuardian AC4825',
      cadr: 118,
      priceTier: '$',
      concerns: ['allergies', 'dust', 'pets'],
      description: 'An entry-level tower model. Best suited for very small rooms, bathrooms, or tight dorm spaces.',
      bestFor: 'Bathrooms, dorms, and very tight budgets',
      strengths: ['Very cheap upfront cost', 'Compact tower design fits in corners', 'Doubles as a white noise machine'],
      tradeoff: 'Low CADR makes it useless for anything larger than a tiny bedroom, and the UV-C light is mostly a gimmick.',
      concernFit: {
        allergies: 'Selected for very small spaces where a basic True HEPA filter is better than nothing.',
        smoke: 'Selected only for tiny rooms; it lacks the power to clear smoke from normal-sized living spaces.',
        pets: 'Selected for trapping dander in tight quarters, though the pre-filter requires frequent vacuuming.',
        dust: 'Selected for small footprint dust control in areas like walk-in closets or dorms.',
        vocs: 'Selected purely for particle capture; it has virtually zero VOC removal capability.',
        asthma: 'Selected with caution: asthmatics should turn off the UV-C light to avoid trace ozone and use this only in tiny rooms.'
      }
    },
    {
      asin: 'B0BGPF71Q6',
      name: 'Levoit Vital 200S-P',
      cadr: 245,
      priceTier: '$$',
      concerns: ['allergies', 'pets', 'dust'],
      description: 'Specifically designed for pet owners, featuring a washable pre-filter and high CADR for pet dander.',
      bestFor: 'Pet owners and high-dander environments',
      strengths: ['U-shaped air inlet prevents pet hair clogs', 'Washable pre-filter', 'Dedicated pet mode in the app'],
      tradeoff: 'Noticeably louder on high speeds compared to the Core series.',
      concernFit: {
        allergies: 'Selected because its design aggressively captures allergens and dander without clogging.',
        smoke: 'Selected because it provides solid CADR to handle smoke events in medium-sized rooms.',
        pets: 'Selected specifically for its pet-focused intake design and easy-to-wash pre-filter.',
        dust: 'Selected because the wide air inlet is highly effective at pulling in large dust bunnies and floating particles.',
        vocs: 'Selected for its custom pet-odor carbon filter, which helps more than standard sponge carbon.',
        asthma: 'Selected for its reliable True HEPA filtration, though you must tolerate higher noise levels to get asthma-grade ACH.'
      }
    },
    {
      asin: 'B07KQBNM7H',
      name: 'Winix AM90',
      cadr: 233,
      priceTier: '$$',
      concerns: ['allergies', 'smoke', 'pets', 'dust', 'vocs'],
      description: 'Smart Wi-Fi enabled purifier with PlasmaWave technology and True HEPA filtration.',
      bestFor: 'Smart-home users wanting real carbon',
      strengths: ['Wi-Fi enabled with smart app', 'Washable AOC carbon filter for real odor control', 'Aesthetic upgrade over the 5500-2'],
      tradeoff: 'The Wi-Fi setup can be finicky, and you must manually disable PlasmaWave if you wish to avoid trace ozone.',
      concernFit: {
        allergies: 'Selected because it pairs strong True HEPA performance with smart scheduling for 24/7 allergen control.',
        smoke: 'Selected because the combination of a real carbon filter and high CADR is highly effective against smoke.',
        pets: 'Selected because the AOC carbon filter actively absorbs pet odors, while the HEPA traps dander.',
        dust: 'Selected because it moves enough air to noticeably reduce airborne dust in medium-to-large rooms.',
        vocs: 'Selected because it features a granular carbon filter, which is rare at this price point and effective for VOCs.',
        asthma: 'Selected for its high CADR, but asthma sufferers should ensure the PlasmaWave feature is disabled.'
      }
    }
  ];

  const fmtInt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  function init() {
    const form    = document.getElementById('sizer-form');
    if (!form) {
      console.warn('Room Air Sizer: Form not found.');
      return;
    }

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

    if (!lengthEl || !widthEl || !heightEl || !cadrEl) {
      console.warn('Room Air Sizer: Required elements missing.');
      return;
    }

    let hasCalculated = false;

    function resetResults() {
      if (cadrEl) cadrEl.textContent = '—';
      if (volumeEl) volumeEl.textContent = '— ft³';
      if (areaEl) areaEl.textContent = '— ft²';
      if (cfmEl) cfmEl.textContent = '—';
      if (recEl) recEl.textContent = 'Enter your room dimensions, then click the button to get your recommendation.';
      const grid = document.querySelector('.picks__grid');
      if (grid) grid.innerHTML = '';
      const note = document.querySelector('.picks__note');
      if (note) note.textContent = '';
    }

    function compute() {
      if (!hasCalculated) {
        resetResults();
        return;
      }

      const L = parseFloat(lengthEl.value);
      const W = parseFloat(widthEl.value);
      const H = parseFloat(heightEl.value);
      const ach = parseFloat(achEl.value);
      const concern = concernEl ? concernEl.value : 'allergies';

      const valid = [L, W, H, ach].every(v => Number.isFinite(v) && v > 0);
      if (!valid) {
        resetResults();
        return;
      }

      const volume = L * W * H;
      const area   = L * W;
      const cfm    = (volume * ach) / 60;
      const cadr   = cfm * 1.55;

      if (cadrEl) cadrEl.textContent   = fmtInt.format(Math.round(cadr));
      if (volumeEl) volumeEl.textContent = fmtInt.format(Math.round(volume)) + ' ft³';
      if (areaEl) areaEl.textContent   = fmtInt.format(Math.round(area)) + ' ft²';
      if (cfmEl) cfmEl.textContent    = fmtInt.format(Math.round(cfm));

      if (recEl) {
        const template = CONCERN_COPY[concern] || CONCERN_COPY.allergies;
        recEl.textContent = template
          .replace('{area}', fmtInt.format(Math.round(area)))
          .replace('{cadr}', fmtInt.format(Math.round(cadr)));
      }

      updateRecommendations(cadr, concern);
    }

    function updateRecommendations(requiredCadr, concern) {
      const grid = document.querySelector('.picks__grid');
      const picksNote = document.querySelector('.picks__note');
      
      if (picksNote) {
        picksNote.textContent = 'These picks are ranked by required CADR, selected concern, and how efficiently each purifier covers the room without unnecessary oversizing.';
      }

      if (!grid) return;

      try {
        let matches = PRODUCTS.filter(p => p.concerns && p.concerns.includes(concern));
        if (matches.length === 0) matches = [...PRODUCTS];

        let sizeMatches = matches.filter(p => p.cadr >= requiredCadr);
        
        sizeMatches.sort((a, b) => {
          let scoreA = a.cadr;
          let scoreB = b.cadr;
          
          if (concern === 'vocs') {
              if (a.tradeoff && a.tradeoff.includes('not intended for heavy chemical')) scoreA += 50;
              if (b.tradeoff && b.tradeoff.includes('not intended for heavy chemical')) scoreB += 50;
              if (a.tradeoff && a.tradeoff.includes('thin carbon')) scoreA += 50;
              if (b.tradeoff && b.tradeoff.includes('thin carbon')) scoreB += 50;
          }
          
          return scoreA - scoreB;
        });

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
          
          let headroom = product.cadr - requiredCadr;
          let pct = requiredCadr > 0 ? Math.round((headroom / requiredCadr) * 100) : 0;
          let status = '';
          let whyCopy = '';

          const fitCopy = (product.concernFit && product.concernFit[concern]) ? product.concernFit[concern] : 'Selected for its overall performance and value.';

          if (product.cadr >= requiredCadr) {
             if (pct < 30) {
                status = 'Efficient Match';
             } else {
                status = 'High-Headroom Pick';
             }
             whyCopy = `Your room needs about ${Math.round(requiredCadr)} CADR. This model delivers ${product.cadr} CADR, giving you roughly ${pct}% extra clean-air capacity without unnecessary oversizing. ${fitCopy}`;
          } else {
             tag = 'Highest Available';
             status = 'Underpowered for Space';
             whyCopy = `This room needs about ${Math.round(requiredCadr)} CADR. This model is below that target, but it is one of the strongest available options in the current list. For a space this large, consider using two purifiers or reducing the target room zone. ${fitCopy}`;
          }

          const link = `https://www.amazon.com/dp/${product.asin}/ref=nosim?tag=${AMAZON_TAG}`;
          const strengthsHtml = product.strengths ? product.strengths.map(s => `<li>${s}</li>`).join('') : '';

          return `
            <article class="pick pick--authority">
              <p class="pick__tag">${tag}</p>
              <h4 class="pick__name">${product.name}</h4>
              <p class="pick__meta">CADR: ${product.cadr} &nbsp;|&nbsp; Price: ${product.priceTier} &nbsp;|&nbsp; <span class="pick__status">${status}</span></p>
              
              <div class="pick__why">
                <strong>Why this matched your room</strong>
                <p>${whyCopy}</p>
              </div>

              <p class="pick__best"><strong>Best for:</strong> ${product.bestFor || 'General use'}</p>

              <ul class="pick__strengths">
                ${strengthsHtml}
              </ul>

              <div class="pick__tradeoff">
                <strong>Know before buying</strong>
                <p>${product.tradeoff || 'No major tradeoffs.'}</p>
              </div>

              <a class="btn btn--secondary" href="${link}" target="_blank" rel="noopener sponsored nofollow" aria-label="View ${product.name} on Amazon">View on Amazon</a>
            </article>
          `;
        }).join('');
      } catch (e) {
        console.error('Error updating recommendations:', e);
      }
    }

    function updateAchVisuals() {
      if (!achEl) return;
      const v   = parseFloat(achEl.value);
      const min = parseFloat(achEl.min) || 2;
      const max = parseFloat(achEl.max) || 8;
      const pct = ((v - min) / (max - min)) * 100;
      achEl.style.setProperty('--ach-pct', pct + '%');
      if (achOut) achOut.textContent = Number.isInteger(v) ? String(v) : v.toFixed(1);
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      hasCalculated = true;
      compute();
    });

    form.addEventListener('input', e => {
      if (e.target === achEl) updateAchVisuals();
      if (hasCalculated) compute();
    });
    
    form.addEventListener('change', e => {
      if (hasCalculated) compute();
    });

    updateAchVisuals();
    resetResults();
    
    console.info('Room Air Sizer calculator initialized.');
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
