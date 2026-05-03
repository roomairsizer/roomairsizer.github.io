/* ==========================================================================
   The Battle for Better Air — Chatbot Knowledge Base (Expanded)
   ========================================================================== */

window.AIRBOT_KB = {
  concepts: [
    {
      id: 'what-is-cadr',
      triggers: ['cadr', 'clean air delivery rate', 'how is air measured', 'cadr rating', 'what does cadr stand for', 'cadr meaning'],
      question: 'What is CADR (Clean Air Delivery Rate)?',
      answer: 'CADR stands for Clean Air Delivery Rate. It is the industry-standard measurement of how much filtered air an air purifier delivers per minute. It is verified by AHAM and measured for three types of pollutants: smoke, pollen, and dust. A higher CADR means the unit cleans air faster in a given space.',
      followUp: 'Would you like me to calculate the CADR you need for your room?',
      internalLinks: [{text: 'CADR vs Square Feet', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'what-is-hepa',
      triggers: ['hepa', 'true hepa', 'hepa filter', 'high efficiency particulate air', 'what does hepa stand for', 'hepa meaning'],
      question: 'What is a True HEPA filter?',
      answer: 'True HEPA (High-Efficiency Particulate Air) is a medical-grade filtration standard that must capture 99.97% of particles as small as 0.3 microns. This includes pollen, dust mites, pet dander, and most smoke particles. Avoid "HEPA-type" or "HEPA-like" filters, as they do not meet this rigorous performance threshold.',
      followUp: 'Want to see how HEPA compares to carbon filters?',
      internalLinks: [{text: 'HEPA vs Carbon Filters', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'hepa-13-vs-14',
      triggers: ['hepa 13', 'hepa 14', 'h13', 'h14', 'medical grade hepa', 'h13 vs h14', 'hospital grade'],
      question: 'What is the difference between HEPA-13 and HEPA-14?',
      answer: 'H13 and H14 are "medical-grade" HEPA ratings. H13 captures 99.95% of particles, while H14 captures 99.995%. For most residential homes, H13 provides more than enough filtration for allergies and smoke, while H14 is typically reserved for specialized healthcare environments or cleanrooms.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'activated-carbon',
      triggers: ['carbon', 'activated carbon', 'charcoal filter', 'charcoal', 'what is carbon', 'how does carbon work'],
      question: 'What is activated carbon and why does it matter?',
      answer: 'Activated carbon is a highly porous material designed to absorb gases, odors, and VOCs that HEPA filters cannot catch. For effective odor removal, look for purifiers with actual carbon pellets rather than thin carbon-coated sponges. It is essential for neutralizing cooking smells, pet odors, and chemical off-gassing.',
      followUp: 'Are you dealing with heavy odors or just dust?',
      internalLinks: [{text: 'HEPA vs Carbon', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'what-is-ach',
      triggers: ['ach', 'air changes per hour', 'how many air changes', 'what is ach', 'ach meaning', 'turnover rate'],
      question: 'What is ACH (Air Changes per Hour)?',
      answer: 'ACH measures how many times the total volume of air in a room is completely cycled through the purifier every hour. For general use, 4 ACH is the standard, while allergy and asthma sufferers often require 5 to 8 ACH for maximum relief.',
      followUp: 'Should I help you figure out the ACH for your room?',
      internalLinks: [{text: 'ACH Explained', href: 'air-changes-per-hour-explained.html'}]
    },
    {
      id: 'what-is-pm25',
      triggers: ['pm2.5', 'fine particles', 'particulate matter', 'pm25', 'pm 2.5', 'what is pm', 'pm10'],
      question: 'What is PM2.5?',
      answer: 'PM2.5 refers to fine particulate matter that is 2.5 microns or smaller in diameter—about 30 times thinner than a human hair. These particles are dangerous because they can travel deep into the lungs and even enter the bloodstream. Wildfire smoke and vehicle exhaust are primary sources of PM2.5.',
      internalLinks: [{text: 'Smoke Guide', href: 'air-purifier-for-smoke.html'}]
    },
    {
      id: 'ionizers',
      triggers: ['ionizer', 'ionic', 'negative ions', 'plasmawave', 'bipolar ionization', 'what is an ionizer', 'do i need an ionizer'],
      question: 'What is an ionizer and should I use one?',
      answer: 'Ionizers charge airborne particles so they clump together and fall out of the air or stick to surfaces. While effective, some ionizers produce trace amounts of ozone, which can irritate lungs. Most modern purifiers allow you to turn the ionizer feature off if you have respiratory sensitivities.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'ozone-safety',
      triggers: ['ozone', 'is ozone dangerous', 'o3', 'ozone generator', 'does it make ozone', 'carb certified'],
      question: 'What is ozone in air purifiers?',
      answer: 'Ozone is a gas that can be an effective deodorizer but is a known lung irritant at ground level. You should only use purifiers that are CARB-certified (California Air Resources Board) to meet strict ozone emission standards of less than 0.05 ppm. Avoid "ozone generators" for occupied residential spaces.',
      internalLinks: [{text: 'About Our Standards', href: 'about.html'}]
    },
    {
      id: 'uv-c-light',
      triggers: ['uv-c', 'uv light', 'germicidal', 'kill germs', 'ultraviolet', 'does uv work', 'uvc'],
      question: 'What is UV-C light in air purifiers?',
      answer: 'UV-C light is used in some purifiers to kill bacteria and viruses by damaging their DNA. However, for a UV-C light to be effective in a purifier, the air must be exposed to the light for a significant amount of time, which is difficult at high fan speeds. HEPA filtration is generally more effective and safer for removing airborne pathogens.',
      internalLinks: [{text: 'HEPA Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'aham-verified',
      triggers: ['aham', 'aham verified', 'clean air delivery rate certification', 'who tests purifiers', 'is it certified'],
      question: 'What does AHAM Verified mean?',
      answer: 'The Association of Home Appliance Manufacturers (AHAM) is an independent body that verifies the CADR ratings claimed by manufacturers. An "AHAM Verified" seal means the purifier has been tested in a controlled laboratory setting and its performance data is accurate and reliable.',
      internalLinks: [{text: 'CADR Guide', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'what-is-merv',
      triggers: ['merv', 'merv rating', 'hvac filter', 'merv 13', 'merv 14', 'furnace filter'],
      question: 'What is a MERV rating?',
      answer: 'MERV stands for Minimum Efficiency Reporting Value. It is a rating scale (1-16+) used for whole-house HVAC filters. Higher MERV ratings catch smaller particles. A MERV 13+ filter in your HVAC system provides great whole-house baseline filtration, but standalone HEPA purifiers (which exceed MERV 16) are still needed for localized heavy cleaning.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'pre-filter-concept',
      triggers: ['prefilter', 'pre-filter', 'first filter', 'washable filter concept'],
      question: 'What is a pre-filter?',
      answer: 'A pre-filter is the first line of defense in an air purifier. It catches large particles like pet hair, dust bunnies, and lint. By catching the big stuff, it significantly extends the life of the expensive HEPA and Carbon filters inside. Always look for a purifier with a washable pre-filter.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'what-is-cfm',
      triggers: ['cfm', 'cubic feet per minute', 'airflow', 'fan speed measurement'],
      question: 'What is CFM?',
      answer: 'CFM stands for Cubic Feet per Minute. It measures the raw volume of air the fan can move. While important, CADR is a better metric than CFM because CADR measures the volume of *clean* air, accounting for the resistance and efficiency of the filters.',
      internalLinks: [{text: 'CADR Guide', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'smart-sensors',
      triggers: ['smart sensor', 'auto mode', 'air quality indicator', 'laser sensor', 'pm2.5 sensor'],
      question: 'How do smart sensors and Auto Modes work?',
      answer: 'Smart purifiers use onboard laser or infrared sensors to detect PM2.5 levels in real-time. In Auto Mode, the purifier automatically increases its fan speed when it detects poor air quality (like smoke from cooking) and lowers the speed once the air is clean, saving energy and reducing noise.',
      internalLinks: [{text: 'Living Room Guide', href: 'living-room-air-purifier-guide.html'}]
    },
    {
      id: 'dici-db-noise',
      triggers: ['decibels', 'db', 'dba', 'noise level', 'how loud', 'sound rating'],
      question: 'How is air purifier noise measured?',
      answer: 'Noise is measured in decibels (dB or dBA). For sleeping, you want a purifier that operates under 30 dB on low speed. At maximum speed, most high-CADR purifiers will reach 50-60 dB, which sounds like a normal conversation or a standard box fan.',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    }
  ],
  concerns: [
    {
      id: 'allergy-management',
      triggers: ['allergies', 'pollen', 'dust mites', 'sneezing', 'hay fever', 'seasonal allergies', 'congestion'],
      question: 'How do air purifiers help with allergies?',
      answer: 'Air purifiers with True HEPA filters capture 99.97% of airborne allergens like pollen, mold spores, and dust mite debris before they settle on surfaces or enter your nasal passages. For severe allergy relief, run the purifier in your bedroom 24/7 at a minimum of 5 air changes per hour.',
      followUp: 'Are your allergies worse in the spring or year-round?',
      internalLinks: [{text: 'Allergy Guide', href: 'air-purifier-for-allergies.html'}]
    },
    {
      id: 'pet-concerns',
      triggers: ['pets', 'cats', 'dogs', 'pet dander', 'pet hair', 'pet odors', 'litter box', 'bird dander', 'allergic to cats'],
      question: 'Can purifiers handle pet dander and odors?',
      answer: 'Absolutely. HEPA filters trap the microscopic dander (skin flakes) that triggers allergies, while an activated carbon filter neutralizes pet odors. Look for units with a washable pre-filter to catch floating pet hair before it clogs the expensive HEPA filter.',
      followUp: 'Do you have a specific pet-related allergy or just want to reduce smells?',
      internalLinks: [{text: 'Pet Owner Guide', href: 'air-purifier-for-pets.html'}]
    },
    {
      id: 'wildfire-smoke',
      triggers: ['wildfire', 'smoke', 'pollution', 'outside air', 'forest fire', 'smog', 'camp fire', 'ash'],
      question: 'What is the best purifier for wildfire smoke?',
      answer: 'Wildfire smoke requires a high CADR for PM2.5 particles and a significant amount of activated carbon for toxic gases and wood-burning odors. During heavy smoke events, you should aim for 6 to 8 air changes per hour and keep all windows and doors tightly sealed.',
      followUp: 'Are you currently experiencing a smoke event?',
      internalLinks: [{text: 'Smoke Survival Guide', href: 'air-purifier-for-smoke.html'}]
    },
    {
      id: 'cooking-smoke',
      triggers: ['cooking smoke', 'burnt food', 'kitchen smells', 'frying smells', 'bacon smell', 'spices smell'],
      question: 'How do I remove cooking smoke and odors?',
      answer: 'Persistent smoke odors from cooking require heavy-duty activated carbon (ideally several pounds of granular carbon, not just a thin sheet). While the HEPA filter handles the visible smoke particles from burnt food, only carbon can chemically bond with and remove the lingering odors.',
      internalLinks: [{text: 'Kitchen Guide', href: 'kitchen-air-purifier-guide.html'}]
    },
    {
      id: 'cigarette-cigar-weed-smoke',
      triggers: ['cigarette', 'cigar', 'weed', 'marijuana', 'tobacco', 'secondhand smoke', 'vape'],
      question: 'Can an air purifier remove cigarette or weed smoke?',
      answer: 'Yes, but it is one of the hardest tasks for a purifier. You need a premium unit with pounds of granular activated carbon to absorb the tar, nicotine, and complex VOCs, plus a high-CADR HEPA filter for the ash particles. Thin carbon sponge filters will saturate and fail within days in a smoking environment.',
      internalLinks: [{text: 'Smoke Guide', href: 'air-purifier-for-smoke.html'}]
    },
    {
      id: 'mold-mildew',
      triggers: ['mold', 'mildew', 'spores', 'musty', 'damp air', 'fungus', 'black mold'],
      question: 'Can an air purifier stop mold?',
      answer: 'Air purifiers can capture airborne mold spores, preventing them from spreading or being inhaled, but they cannot kill mold that is already growing on walls or surfaces. To stop mold at the source, you must fix the moisture issue, often by using a dehumidifier alongside your purifier.',
      internalLinks: [{text: 'Basement Guide', href: 'basement-air-purifier-guide.html'}]
    },
    {
      id: 'voc-offgassing',
      triggers: ['vocs', 'chemicals', 'new furniture', 'paint smell', 'off-gassing', 'new carpet', 'formaldehyde'],
      question: 'What are VOCs and how do I remove them?',
      answer: 'Volatile Organic Compounds (VOCs) are toxic gases emitted from paints, cleaning supplies, new carpets, and pressed-wood furniture (formaldehyde). Standard HEPA filters cannot trap them; you must use a purifier with a high-quality, heavy activated carbon filter designed for gas adsorption.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'asthma-relief',
      triggers: ['asthma', 'breathing difficulty', 'reactive airways', 'asthma triggers', 'inhaler', 'wheezing'],
      question: 'How should I use an air purifier for asthma?',
      answer: 'For asthma management, choose a pure mechanical True HEPA purifier that is 100% ozone-free (avoid ionizers and UV-C). Run the unit at a high air-change rate (6 to 8 ACH) to ensure triggers like dust and dander are removed instantly. Always consult your doctor for medical advice.',
      internalLinks: [{text: 'Sizing Guide', href: 'air-purifier-sizing-guide.html'}]
    },
    {
      id: 'baby-nursery-quality',
      triggers: ['baby', 'newborn', 'nursery', 'infant', 'child safety', 'toddler', 'nursery smells'],
      question: 'Is an air purifier safe for a newborn baby?',
      answer: 'Yes! Babies have developing lungs and are highly sensitive to pollutants. A quiet, True HEPA air purifier in the nursery reduces exposure to dust and VOCs off-gassing from new cribs or paint. Ensure the unit is 100% ozone-free and placed safely away from the crib.',
      followUp: 'Would you like to see a nursery sizing example?',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'pregnancy-air',
      triggers: ['pregnancy', 'pregnant', 'maternity', 'prenatal air', 'expecting'],
      question: 'Should I use an air purifier during pregnancy?',
      answer: 'Reducing exposure to PM2.5 and VOCs during pregnancy is a great way to support prenatal health. A high-quality air purifier helps lower the total toxic load in your home, which is especially important if you live near busy roads or in areas prone to seasonal wildfire smoke.',
      internalLinks: [{text: 'About Better Air', href: 'about.html'}]
    },
    {
      id: 'covid-viral',
      triggers: ['covid', 'virus', 'bacteria', 'germs', 'flu', 'sickness', 'cold', 'airborne pathogens'],
      question: 'Can air purifiers capture COVID and other viruses?',
      answer: 'Yes, True HEPA filters capture particles in the size range of viruses (including the aerosols that carry SARS-CoV-2) with very high efficiency. While it reduces the concentration of viral particles in the air, a purifier should be used alongside other safety measures like ventilation and masks.',
      internalLinks: [{text: 'HEPA Standards', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'dust-removal',
      triggers: ['dust', 'dusty', 'lots of dust', 'dusting', 'house dust', 'white dust'],
      question: 'Will an air purifier reduce the amount of dusting I have to do?',
      answer: 'Yes, significantly! A high-CADR air purifier acts like a constant vacuum for the air, pulling in floating dust before it has a chance to settle on your furniture and floors. You will notice a drastic reduction in how often you need to dust your home.',
      internalLinks: [{text: 'Living Room Guide', href: 'living-room-air-purifier-guide.html'}]
    },
    {
      id: 'sleep-quality',
      triggers: ['sleep', 'snoring', 'waking up congested', 'dry nose', 'morning allergies', 'insomnia'],
      question: 'Can an air purifier improve sleep?',
      answer: 'Absolutely. Many people wake up congested due to inhaling dust mites or pollen all night. A HEPA purifier running continuously in the bedroom removes these triggers, leading to clearer breathing and deeper sleep. Plus, the gentle white noise from the fan helps drown out disruptive outside sounds.',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'odor-removal',
      triggers: ['smells', 'bad odor', 'stink', 'garbage smell', 'neighbor smoking', 'musty smell'],
      question: 'How do I get rid of bad smells in my house?',
      answer: 'To remove smells, you need an air purifier with a thick, pellet-based activated carbon filter. HEPA filters do absolutely nothing for smells. The carbon physically absorbs the odor-causing gas molecules. Be prepared to change carbon filters regularly, as they eventually fill up and stop absorbing.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'radon-gas',
      triggers: ['radon', 'radioactive gas', 'basement radon'],
      question: 'Can an air purifier remove radon gas?',
      answer: 'No. Standard air purifiers, even those with heavy carbon, cannot effectively or safely mitigate radon gas. Radon mitigation requires specialized ventilation systems that actively vent the gas from under your foundation to the outside. Please contact a professional radon mitigation specialist.',
      internalLinks: [{text: 'Basement Guide', href: 'basement-air-purifier-guide.html'}]
    }
  ],
  sizing: [
    {
      id: 'small-bedroom-size',
      triggers: ['small bedroom', 'dorm', 'tiny room', 'under 200', '100 sqft', '150 sqft'],
      question: 'What size purifier do I need for a small bedroom?',
      answer: 'For a room under 200 sq. ft., a compact purifier with a CADR of 100-150 is usually sufficient. These units are often designed to be extra quiet, making them ideal for nightstands.',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'standard-bedroom-size',
      triggers: ['standard bedroom', 'guest room', '200 sqft', '250 sqft', '300 sqft'],
      question: 'What size purifier do I need for a standard bedroom?',
      answer: 'A standard bedroom (approx. 250 sq. ft.) requires a CADR of at least 175-200 to achieve the recommended 4 air changes per hour. This ensures the air stays fresh throughout the night.',
      internalLinks: [{text: 'Bedroom Sizing', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'primary-bedroom-size',
      triggers: ['primary bedroom', 'master bedroom', 'large bedroom', '400 sqft', '500 sqft'],
      question: 'What size purifier do I need for a primary bedroom?',
      answer: 'Large primary bedrooms often have en-suite bathrooms, high ceilings, or walk-in closets, increasing the air volume. Look for a unit with a CADR of 250-350 to maintain high air quality in these larger footprints.',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'living-room-size',
      triggers: ['living room', 'family room', 'den', 'front room', 'lounge'],
      question: 'What size purifier do I need for a living room?',
      answer: 'Living rooms are high-traffic areas with more dust, pet activity, and outdoor air exchange from doors. A CADR of 300+ is highly recommended to handle the higher particulate load and larger volume of air.',
      internalLinks: [{text: 'Living Room Guide', href: 'living-room-air-purifier-guide.html'}]
    },
    {
      id: 'open-floor-plan',
      triggers: ['open floor plan', 'great room', 'large space', '600 sqft', '800 sqft', '1000 sqft', 'whole floor'],
      question: 'How do I size a purifier for an open floor plan?',
      answer: 'For large open spaces (600+ sq. ft.), a single high-CADR unit (400+) or two medium-sized units placed at opposite ends of the room is the best strategy. Two units are often better because they ensure consistent air circulation and prevent "dead spots".',
      internalLinks: [{text: 'CADR Guide', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'basement-sizing',
      triggers: ['basement', 'cellar', 'lower level', 'unfinished basement'],
      question: 'What is the best way to size a basement air purifier?',
      answer: 'Basements often have damp air, higher levels of dust, and mold spores. Size your purifier based on the total open area. Since basements are often large and undivided, you usually need a very high CADR unit (350+). Consider adding a dehumidifier as well.',
      internalLinks: [{text: 'Basement Guide', href: 'basement-air-purifier-guide.html'}]
    },
    {
      id: 'high-ceilings',
      triggers: ['high ceilings', 'vaulted ceilings', 'tall ceilings', 'cathedral ceilings'],
      question: 'How do high ceilings affect air purifier sizing?',
      answer: 'CADR and square footage recommendations assume standard 8-foot ceilings. If you have 10-foot or 12-foot vaulted ceilings, your room has significantly more air volume. You must increase your target CADR by 25% to 50% to compensate and maintain 4 air changes per hour.',
      internalLinks: [{text: 'CADR Guide', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'whole-house-sizing',
      triggers: ['whole house sizing', 'entire home', 'all rooms', 'hvac sizing'],
      question: 'How do I size purifiers for my entire house?',
      answer: 'You cannot use one giant purifier for an entire house because walls and doors block airflow. Instead, buy a separate purifier for each enclosed room where you spend significant time. Start with the bedrooms (where you sleep) and the main living area.',
      internalLinks: [{text: 'Sizing Guide', href: 'air-purifier-sizing-guide.html'}]
    },
    {
      id: 'office-sizing',
      triggers: ['office', 'cubicle', 'workspace', 'home office', 'study'],
      question: 'What size purifier do I need for an office?',
      answer: 'For a home office, a CADR of 150-200 is usually perfect. If you are in a shared commercial office or cubicle, you may want a small desktop unit pointing directly at your face to create a "clean air bubble," though this won\'t clean the whole room.',
      internalLinks: [{text: 'Living Room Guide', href: 'living-room-air-purifier-guide.html'}]
    },
    {
      id: 'kitchen-sizing',
      triggers: ['kitchen', 'cooking area', 'kitchen exhaust'],
      question: 'How do I size a purifier for the kitchen?',
      answer: 'Kitchens require purifiers that focus on smoke and odors. Look for a unit with a high CADR for smoke (250+) and a heavy activated carbon filter. Keep it away from direct grease splatter and moisture, and always use your stove\'s exhaust hood first.',
      internalLinks: [{text: 'Kitchen Guide', href: 'kitchen-air-purifier-guide.html'}]
    }
  ],
  misconceptions: [
    {
      id: 'bigger-is-better-myth',
      triggers: ['is bigger better', 'oversized purifier', 'giant purifier', 'too big'],
      question: 'Is a bigger air purifier always better?',
      answer: 'Not necessarily. While a larger unit can clean air faster on lower, quieter speeds, it also costs more upfront, takes up floor space, and has more expensive replacement filters. A "right-sized" unit running on a medium speed is the most cost-effective balance.',
      internalLinks: [{text: 'Why Sizing Matters', href: 'index.html#why'}]
    },
    {
      id: 'square-footage-myth',
      triggers: ['square footage on box', 'room size rating', 'is the box accurate', 'marketing lies', 'exaggerated size'],
      question: 'Is the square footage on the box reliable?',
      answer: 'No! Marketing "room size" ratings are notoriously misleading. Manufacturers often base their square footage claims on only 1 or 2 air changes per hour (ACH). For allergies or smoke, you need 4 to 5 ACH. Always ignore the square footage claim and calculate using the CADR rating instead.',
      internalLinks: [{text: 'CADR vs Sq Ft', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'whole-house-myth',
      triggers: ['whole house purifier', 'one purifier for whole house', 'central air purifier', 'clean the whole house with one'],
      question: 'Can one large purifier clean my entire house?',
      answer: 'No. Air purifiers rely on air circulation. Walls, hallways, and closed doors block air from returning to the purifier. It is physically impossible for a single standalone unit to effectively clean multiple closed rooms. You must use multiple smaller units.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'hepa-odors-myth',
      triggers: ['does hepa remove smells', 'hepa for odors', 'hepa for vocs', 'why does it still smell'],
      question: 'Do HEPA filters remove odors and gases?',
      answer: 'No. HEPA filters are essentially very fine sieves that capture solid physical particles (dust, pollen, ash). Odors and VOCs are gases, which pass right through HEPA material. To remove smells, you must have a dedicated activated carbon filter.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'allergy-cure-myth',
      triggers: ['cure allergies', 'stop allergies', 'allergy cure', 'will i stop sneezing'],
      question: 'Will an air purifier completely cure my allergies?',
      answer: 'Air purifiers do not "cure" allergies, but they drastically reduce the "allergen load" in your environment. By removing triggers from the air, your immune system isn\'t constantly bombarded, which significantly manages and reduces symptoms.',
      internalLinks: [{text: 'Allergy Guide', href: 'air-purifier-for-allergies.html'}]
    },
    {
      id: 'cheap-filters-myth',
      triggers: ['cheap filters', 'generic filters', 'off brand filters', 'are generic filters good', 'amazon filters'],
      question: 'Are cheap generic filters just as good as brand-name ones?',
      answer: 'Usually not. While some high-quality generics exist, many cheap knock-off filters have poor fitment (causing air to bypass the filter entirely) or use lower-grade HEPA media. We recommend using original manufacturer filters to guarantee the CADR performance you paid for.',
      internalLinks: [{text: 'About Our Reviews', href: 'about.html'}]
    },
    {
      id: 'plants-vs-purifiers',
      triggers: ['house plants', 'plants clean air', 'spider plant', 'nasa plant study'],
      question: 'Are house plants better than air purifiers?',
      answer: 'No. This is a persistent myth based on a misinterpreted NASA study. While plants can absorb trace amounts of VOCs in sealed laboratory chambers, in a real home with normal airflow, you would need hundreds of plants in a single room to equal the cleaning power of a small mechanical air purifier.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'furnace-filter-myth',
      triggers: ['furnace filter', 'hvac filter', 'ac filter', 'central air filter'],
      question: 'Does my HVAC furnace filter clean the air enough?',
      answer: 'Standard 1-inch HVAC filters are only designed to protect your furnace motor from large dust and hair, not to clean the air you breathe. While you can upgrade to a MERV 13 filter, your HVAC fan does not run constantly, making standalone purifiers far more effective for continuous cleaning.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'open-window-myth',
      triggers: ['open window', 'fresh air', 'run with windows open'],
      question: 'Should I run my purifier with the windows open?',
      answer: 'Running a purifier with the window wide open is like running your air conditioner with the door open—you are trying to clean the entire outdoors. If outside air is dirty (pollen, smoke), close the windows. If outside air is pristine, turn the purifier off and enjoy the breeze!',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'fan-speed-myth',
      triggers: ['low speed', 'quiet mode', 'does low speed work', 'sleep mode effectiveness'],
      question: 'Does the purifier work just as well on low speed?',
      answer: 'No. The CADR rating advertised on the box is ONLY achieved when the machine is running on its absolute maximum, loudest speed. On low or sleep mode, the CADR drops significantly (often by 70% or more). This is why sizing up is recommended, so you can run a larger unit on a quieter medium speed.',
      internalLinks: [{text: 'Sizing Guide', href: 'air-purifier-sizing-guide.html'}]
    }
  ],
  comparisons: [
    {
      id: 'hepa-vs-carbon',
      triggers: ['hepa vs carbon', 'particle vs gas', 'which filter do i need'],
      question: 'What is the difference between HEPA and activated carbon?',
      answer: 'HEPA filters capture physical solid particles (dust, pollen, dander, smoke ash). Activated carbon absorbs chemical gases and odors (smoke smell, VOCs, pet odors). Most high-quality air purifiers use a combination of both to provide complete air cleaning.',
      internalLinks: [{text: 'HEPA vs Carbon', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'true-hepa-vs-type',
      triggers: ['true hepa vs hepa type', 'hepa like', 'is hepa type good', 'hepa grade'],
      question: 'What is the difference between True HEPA and HEPA-type?',
      answer: 'True HEPA is a certified standard requiring 99.97% efficiency at 0.3 microns. "HEPA-type" or "HEPA-like" is a meaningless marketing term for filters that look like HEPA but perform much worse, sometimes capturing only 85-90% of particles. Always insist on True HEPA.',
      internalLinks: [{text: 'Filter Standards', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'tower-vs-box',
      triggers: ['tower vs box', 'purifier styles', 'best purifier shape', 'console vs tower'],
      question: 'What is the difference between tower and box style purifiers?',
      answer: 'Tower purifiers save floor space and look modern, but their cylindrical filters are sometimes smaller. Box or console style purifiers take up more wall space but often feature massive, flat filters that move more air (higher CADR) and last longer. Choose based on your room size and aesthetic preference.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'washable-vs-disposable',
      triggers: ['washable filter vs disposable', 'permanent filter', 'reusable filter', 'cleanable hepa'],
      question: 'Should I get a permanent washable filter or disposable ones?',
      answer: 'Always choose disposable HEPA filters. While washable pre-filters are great for catching large dust, washing a True HEPA filter destroys its delicate micro-fiber structure. "Permanent" main filters lose efficiency very quickly and are almost never True HEPA grade.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'purifier-vs-humidifier',
      triggers: ['purifier vs humidifier', 'do i need a humidifier', 'dry air', 'humidify'],
      question: 'What is the difference between an air purifier and a humidifier?',
      answer: 'Air purifiers remove pollutants (dust, smoke) from the air. Humidifiers add water vapor to the air to combat dryness. They perform completely different functions. You can use both in the same room, but keep them separated so the humidifier\'s mist doesn\'t ruin the purifier\'s HEPA filter.',
      internalLinks: [{text: 'Sizing Guide', href: 'air-purifier-sizing-guide.html'}]
    },
    {
      id: 'purifier-vs-dehumidifier',
      triggers: ['purifier vs dehumidifier', 'mold', 'humidity', 'damp', 'dehumidify'],
      question: 'What is the difference between an air purifier and a dehumidifier?',
      answer: 'Air purifiers clean the air of particles and allergens. Dehumidifiers remove excess water moisture from the air to prevent mold growth and musty odors. In damp environments like basements, using both is often the best strategy for a healthy environment.',
      internalLinks: [{text: 'Basement Guide', href: 'basement-air-purifier-guide.html'}]
    },
    {
      id: 'ionizer-vs-hepa',
      triggers: ['ionizer vs hepa', 'ionic vs hepa', 'filterless purifier'],
      question: 'Are ionizers better than HEPA filters?',
      answer: 'No. True HEPA filters safely and physically trap particles inside the machine. Ionizers charge particles so they stick to your walls, floors, and lungs, rather than removing them from the room. Ionizers can also produce harmful ozone gas. Stick to HEPA filtration.',
      internalLinks: [{text: 'HEPA Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'hepa-vs-uv',
      triggers: ['hepa vs uv', 'uvc vs hepa', 'killing germs vs trapping germs'],
      question: 'Is UV-C light better than HEPA for viruses?',
      answer: 'HEPA is generally better. HEPA filters physically trap viruses and bacteria immediately as air passes through. UV-C light requires extended exposure time to kill germs, which is difficult when air is rushing past at high speeds. UV-C is a nice bonus, but HEPA is the core necessity.',
      internalLinks: [{text: 'HEPA vs Carbon', href: 'hepa-vs-carbon-filters.html'}]
    }
  ],
  maintenance: [
    {
      id: 'when-to-change-filter',
      triggers: ['when to change filter', 'how often to change filter', 'filter lifespan', 'replace filter'],
      question: 'How often should I change my HEPA filter?',
      answer: 'Most True HEPA filters need replacing every 6 to 12 months, depending on usage and air quality. If you run it 24/7 or live in a highly polluted area (like during wildfire season), you may need to change it closer to the 6-month mark. If the filter looks dark gray or black, it is time to replace it.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'how-to-clean-prefilter',
      triggers: ['clean prefilter', 'wash prefilter', 'vacuum filter', 'cleaning the outside'],
      question: 'How do I clean the pre-filter?',
      answer: 'If your purifier has a fabric or mesh pre-filter, you should vacuum it or rinse it in the sink every 2 to 4 weeks. Keeping the pre-filter clear of thick dust and pet hair drastically improves airflow and extends the life of the expensive HEPA filter inside. Ensure it is 100% dry before reinstalling.',
      internalLinks: [{text: 'Filter Maintenance', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'smell-from-purifier',
      triggers: ['purifier smells bad', 'sour smell', 'sweet smell', 'wet dog smell', 'weird odor'],
      question: 'Why does my air purifier smell bad?',
      answer: 'A sour, sweet, or "wet dog" smell usually means the activated carbon filter is fully saturated with VOCs and moisture, and is now releasing those odors back into the room. It means it is time to immediately throw away and replace the carbon filter. A dusty smell might mean the HEPA filter needs replacing.',
      internalLinks: [{text: 'Carbon Filters', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'leave-on-247',
      triggers: ['leave on 24/7', 'turn off at night', 'run constantly', 'always on', 'electricity usage'],
      question: 'Should I leave my air purifier on all the time?',
      answer: 'Yes! Air purifiers are designed to run 24/7. Indoor air pollution is constantly generated by dust, pets, and off-gassing. If you turn it off, pollution levels rise immediately. Most purifiers use very little electricity (similar to an LED light bulb), so it is cost-effective to leave them on.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'reset-filter-light',
      triggers: ['red light', 'filter light won\'t turn off', 'how to reset', 'blinking light'],
      question: 'I replaced the filter, but the red light is still on. How do I reset it?',
      answer: 'Most purifiers require you to manually reset the filter indicator light after a change. Usually, this involves pressing and holding the "Filter Reset" button (or the Power/Timer button) for 3 to 5 seconds until it beeps or the light turns off. Check your specific manual for the exact button combination.',
      internalLinks: [{text: 'Maintenance FAQ', href: 'about.html'}]
    },
    {
      id: 'vacuum-hepa',
      triggers: ['vacuum hepa', 'wash hepa', 'can i clean the hepa'],
      question: 'Can I vacuum or wash my HEPA filter to make it last longer?',
      answer: 'Do not wash a True HEPA filter; water destroys the tightly woven micro-fibers. You can lightly vacuum the surface of a HEPA filter to remove large visible debris, but this will not remove the microscopic particles clogging the pores inside. It will not restore the filter\'s performance.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'where-to-place',
      triggers: ['where to put', 'placement', 'best spot', 'corner', 'against wall'],
      question: 'Where is the best place in the room to put my air purifier?',
      answer: 'Place your purifier in a relatively open area, at least 12 to 18 inches away from walls or furniture to allow unrestricted airflow. Do not hide it behind a sofa or in a tight corner. In a bedroom, placing it near the bed is ideal for breathing the cleanest air while you sleep.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    }
  ]
};
