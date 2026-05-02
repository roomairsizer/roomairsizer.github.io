/* ==========================================================================
   The Battle for Better Air — Chatbot Knowledge Base
   ========================================================================== */

window.AIRBOT_KB = {
  concepts: [
    {
      id: 'what-is-cadr',
      triggers: ['cadr', 'clean air delivery rate', 'how is air measured', 'cadr rating'],
      question: 'What is CADR (Clean Air Delivery Rate)?',
      answer: 'CADR is the industry-standard measurement of how much filtered air an air purifier delivers per minute. It is verified by AHAM and measured for three types of pollutants: smoke, pollen, and dust. A higher CADR means the unit cleans air faster in a given space.',
      followUp: 'Would you like me to calculate the CADR you need for your room?',
      internalLinks: [{text: 'CADR vs Square Feet', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'what-is-hepa',
      triggers: ['hepa', 'true hepa', 'hepa filter', 'high efficiency particulate air'],
      question: 'What is a True HEPA filter?',
      answer: 'True HEPA (High-Efficiency Particulate Air) is a medical-grade filtration standard that must capture 99.97% of particles as small as 0.3 microns. This includes pollen, dust mites, pet dander, and most smoke particles. Avoid "HEPA-type" or "HEPA-like" filters, as they do not meet this rigorous performance threshold.',
      followUp: 'Want to see how HEPA compares to carbon filters?',
      internalLinks: [{text: 'HEPA vs Carbon Filters', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'hepa-13-vs-14',
      triggers: ['hepa 13', 'hepa 14', 'h13', 'h14', 'medical grade hepa'],
      question: 'What is the difference between HEPA-13 and HEPA-14?',
      answer: 'H13 and H14 are "medical-grade" HEPA ratings. H13 captures 99.95% of particles, while H14 captures 99.995%. For most residential homes, H13 provides more than enough filtration for allergies and smoke, while H14 is typically reserved for specialized healthcare environments.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'activated-carbon',
      triggers: ['carbon', 'activated carbon', 'charcoal filter', 'odors', 'smells', 'vocs'],
      question: 'What is activated carbon and why does it matter?',
      answer: 'Activated carbon is a porous material designed to absorb gases, odors, and VOCs that HEPA filters cannot catch. For effective odor removal, look for purifiers with actual carbon pellets rather than thin carbon-coated sponges. It is essential for neutralizing cooking smells, pet odors, and chemical off-gassing.',
      followUp: 'Are you dealing with heavy odors or just dust?',
      internalLinks: [{text: 'HEPA vs Carbon', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'what-is-ach',
      triggers: ['ach', 'air changes per hour', 'how many air changes'],
      question: 'What is ACH (Air Changes per Hour)?',
      answer: 'ACH measures how many times the total volume of air in a room is completely cycled through the purifier every hour. For general use, 4 ACH is the standard, while allergy and asthma sufferers often require 5 to 8 ACH for maximum relief.',
      followUp: 'Should I help you figure out the ACH for your room?',
      internalLinks: [{text: 'ACH Explained', href: 'air-changes-per-hour-explained.html'}]
    },
    {
      id: 'what-is-pm25',
      triggers: ['pm2.5', 'fine particles', 'particulate matter', 'smoke particles'],
      question: 'What is PM2.5?',
      answer: 'PM2.5 refers to fine particulate matter that is 2.5 microns or smaller in diameter—about 30 times thinner than a human hair. These particles are dangerous because they can travel deep into the lungs and even enter the bloodstream. Wildfire smoke and vehicle exhaust are primary sources of PM2.5.',
      internalLinks: [{text: 'Smoke Guide', href: 'air-purifier-for-smoke.html'}]
    },
    {
      id: 'ionizers',
      triggers: ['ionizer', 'ionic', 'negative ions', 'plasmawave', 'bipolar ionization'],
      question: 'What is an ionizer and should I use one?',
      answer: 'Ionizers charge airborne particles so they clump together and fall out of the air or stick to surfaces. While effective, some ionizers produce trace amounts of ozone, which can irritate lungs. Most modern purifiers allow you to turn the ionizer feature off if you have respiratory sensitivities.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'ozone-safety',
      triggers: ['ozone', 'is ozone dangerous', 'o3'],
      question: 'What is ozone in air purifiers?',
      answer: 'Ozone is a gas that can be an effective deodorizer but is a known lung irritant at ground level. You should only use purifiers that are CARB-certified (California Air Resources Board) to meet strict ozone emission standards of less than 0.05 ppm. Avoid "ozone generators" for occupied residential spaces.',
      internalLinks: [{text: 'About Our Standards', href: 'about.html'}]
    },
    {
      id: 'uv-c-light',
      triggers: ['uv-c', 'uv light', 'germicidal', 'kill germs', 'bacteria', 'viruses'],
      question: 'What is UV-C light in air purifiers?',
      answer: 'UV-C light is used in some purifiers to kill bacteria and viruses by damaging their DNA. However, for a UV-C light to be effective in a purifier, the air must be exposed to the light for a significant amount of time, which is difficult at high fan speeds. HEPA filtration is generally more effective for removing airborne pathogens.',
      internalLinks: [{text: 'HEPA Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'aham-verified',
      triggers: ['aham', 'aham verified', 'clean air delivery rate certification'],
      question: 'What does AHAM Verified mean?',
      answer: 'The Association of Home Appliance Manufacturers (AHAM) is an independent body that verifies the CADR ratings claimed by manufacturers. An "AHAM Verified" seal means the purifier has been tested in a controlled laboratory setting and its performance data is accurate and reliable.',
      internalLinks: [{text: 'CADR Guide', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'purifier-vs-humidifier',
      triggers: ['purifier vs humidifier', 'do i need a humidifier', 'dry air'],
      question: 'What is the difference between a purifier and a humidifier?',
      answer: 'Air purifiers remove pollutants like dust and smoke from the air, while humidifiers add moisture to the air to combat dryness. They perform completely different functions, though they can be used together to improve overall indoor comfort and air quality.',
      internalLinks: [{text: 'Sizing Guide', href: 'air-purifier-sizing-guide.html'}]
    },
    {
      id: 'purifier-vs-dehumidifier',
      triggers: ['purifier vs dehumidifier', 'mold', 'humidity', 'damp'],
      question: 'What is the difference between a purifier and a dehumidifier?',
      answer: 'Air purifiers clean the air of particles and allergens, while dehumidifiers remove excess moisture to prevent mold growth and musty odors. In damp environments like basements, using both is often the best strategy for healthy air.',
      internalLinks: [{text: 'Basement Guide', href: 'basement-air-purifier-guide.html'}]
    }
  ],
  concerns: [
    {
      id: 'allergy-management',
      triggers: ['allergies', 'pollen', 'dust mites', 'sneezing', 'hay fever'],
      question: 'How do air purifiers help with allergies?',
      answer: 'Air purifiers with True HEPA filters capture 99.97% of airborne allergens like pollen and dust mite debris before they settle on surfaces or enter your nasal passages. For allergy relief, we recommend running the purifier in your bedroom 24/7 at a minimum of 5 air changes per hour.',
      followUp: 'Are your allergies worse in the spring or year-round?',
      internalLinks: [{text: 'Allergy Guide', href: 'air-purifier-for-allergies.html'}]
    },
    {
      id: 'pet-concerns',
      triggers: ['pets', 'cats', 'dogs', 'pet dander', 'pet hair', 'pet odors'],
      question: 'Can purifiers handle pet dander and odors?',
      answer: 'Yes, but you need a two-pronged approach. HEPA filters trap the dander (skin flakes) that triggers allergies, while activated carbon is required to neutralize the odors. Look for units with a washable pre-filter to catch floating pet hair before it clogs the main filters.',
      followUp: 'Do you have a specific pet-related allergy or just want to reduce smells?',
      internalLinks: [{text: 'Pet Owner Guide', href: 'air-purifier-for-pets.html'}]
    },
    {
      id: 'wildfire-smoke',
      triggers: ['wildfire', 'smoke', 'pm2.5', 'pollution', 'outside air'],
      question: 'What is the best purifier for wildfire smoke?',
      answer: 'Wildfire smoke requires a high CADR for PM2.5 particles and a significant amount of activated carbon for toxic gases and odors. During heavy smoke events, you should aim for 6 to 8 air changes per hour and keep all windows and doors tightly sealed.',
      followUp: 'Are you currently experiencing a smoke event?',
      internalLinks: [{text: 'Smoke Survival Guide', href: 'air-purifier-for-smoke.html'}]
    },
    {
      id: 'cooking-smoke',
      triggers: ['cooking smoke', 'burnt food', 'kitchen smells', 'cigarette smoke'],
      question: 'How do I remove cigarette or cooking smoke?',
      answer: 'Persistent smoke odors from cigarettes or cooking require heavy-duty activated carbon (ideally several pounds of granular carbon). While HEPA handles the visible smoke particles, only carbon can chemically bond with and remove the lingering odors from the air.',
      internalLinks: [{text: 'Kitchen Guide', href: 'kitchen-air-purifier-guide.html'}]
    },
    {
      id: 'mold-mildew',
      triggers: ['mold', 'mildew', 'spores', 'musty', 'damp air'],
      question: 'Can an air purifier stop mold?',
      answer: 'Air purifiers can capture airborne mold spores, preventing them from spreading, but they cannot kill mold that is already growing on surfaces. To stop mold, you must also address the source of moisture, often by using a dehumidifier in conjunction with the purifier.',
      internalLinks: [{text: 'Basement Sizing', href: 'basement-air-purifier-guide.html'}]
    },
    {
      id: 'voc-offgassing',
      triggers: ['vocs', 'chemicals', 'new furniture', 'paint smell', 'off-gassing'],
      question: 'What are VOCs and how do I remove them?',
      answer: 'Volatile Organic Compounds (VOCs) are gases emitted from paints, cleaning supplies, and new furniture. Standard HEPA filters cannot trap them; you must use a purifier with a high-quality activated carbon filter specifically designed for gas and chemical adsorption.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'asthma-relief',
      triggers: ['asthma', 'breathing difficulty', 'reactive airways', 'asthma triggers'],
      question: 'How should I use an air purifier for asthma?',
      answer: 'For asthma management, choose a pure mechanical HEPA purifier that is 100% ozone-free. Run the unit at a high air-change rate (6+ ACH) to ensure triggers like dust and dander are removed as quickly as possible. Consult with your doctor to identify your specific environmental triggers.',
      internalLinks: [{text: 'Sizing for Asthma', href: 'air-purifier-sizing-guide.html'}]
    },
    {
      id: 'baby-air-quality',
      triggers: ['baby', 'newborn', 'nursery', 'infant', 'child safety'],
      question: 'What is the best air quality for a newborn baby?',
      answer: "Babies have developing lungs and are more sensitive to pollutants. A quiet, True HEPA air purifier in the nursery can reduce exposure to dust and VOCs from new nursery furniture. Ensure the unit is placed safely away from the crib and that any ionizer features are turned off.",
      followUp: 'Would you like to see a nursery sizing example?',
      internalLinks: [{text: 'Nursery Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'pregnancy-air',
      triggers: ['pregnancy', 'pregnant', 'maternity', 'prenatal air'],
      question: 'Should I use an air purifier during pregnancy?',
      answer: 'Reducing exposure to PM2.5 and VOCs during pregnancy is a proactive way to support prenatal health. A high-quality air purifier can help lower the total toxic load in your home, especially if you live near busy roads or in areas prone to seasonal wildfire smoke.',
      internalLinks: [{text: 'About Better Air', href: 'about.html'}]
    },
    {
      id: 'covid-viral',
      triggers: ['covid', 'virus', 'bacteria', 'germs', 'flu', 'sickness'],
      question: 'Can air purifiers capture COVID and other viruses?',
      answer: 'True HEPA filters are capable of capturing particles in the size range of viruses (including SARS-CoV-2). While a purifier can reduce the concentration of viral particles in the air, it should be used as part of a broader safety strategy including ventilation and other public health measures.',
      internalLinks: [{text: 'HEPA Standards', href: 'hepa-vs-carbon-filters.html'}]
    }
  ],
  sizing: [
    {
      id: 'small-bedroom-size',
      triggers: ['small bedroom', 'dorm', 'tiny room', 'under 200 sqft'],
      question: 'What size purifier do I need for a small bedroom?',
      answer: 'For a room under 200 sq. ft., a compact purifier with a CADR of 100-150 is usually sufficient. These units are often designed to be extra quiet, making them ideal for nightstands.',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'standard-bedroom-size',
      triggers: ['standard bedroom', 'guest room', '200-300 sqft'],
      question: 'What size purifier do I need for a standard bedroom?',
      answer: 'A standard bedroom (approx. 250 sq. ft.) requires a CADR of at least 175-200 to achieve the recommended 4 air changes per hour. This ensures the air stays fresh throughout the night.',
      internalLinks: [{text: 'Bedroom Sizing', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'primary-bedroom-size',
      triggers: ['primary bedroom', 'master bedroom', 'large bedroom', '300-500 sqft'],
      question: 'What size purifier do I need for a primary bedroom?',
      answer: 'Large primary bedrooms often have en-suite bathrooms or walk-in closets, increasing the air volume. Look for a unit with a CADR of 250-350 to maintain high air quality in these larger footprints.',
      internalLinks: [{text: 'Bedroom Guide', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'living-room-size',
      triggers: ['living room', 'family room', 'den', '300-500 sqft'],
      question: 'What size purifier do I need for a living room?',
      answer: 'Living rooms are high-traffic areas with more dust and outdoor air exchange. A CADR of 300+ is recommended to handle the higher particulate load and larger volume of air.',
      internalLinks: [{text: 'Living Room Guide', href: 'living-room-air-purifier-guide.html'}]
    },
    {
      id: 'open-floor-plan',
      triggers: ['open floor plan', 'great room', 'large space', '500-1000 sqft'],
      question: 'How do I size a purifier for an open floor plan?',
      answer: 'For large open spaces, a single high-CADR unit (400+) or two medium-sized units placed at opposite ends of the room is the best strategy. This ensures consistent air circulation and prevents "dead spots" where air remains stagnant.',
      internalLinks: [{text: 'CADR Guide', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'basement-sizing',
      triggers: ['basement', 'cellar', 'lower level'],
      question: 'What is the best way to size a basement air purifier?',
      answer: 'Basements often have damp air and higher levels of dust and mold spores. Size your purifier based on the total open area and consider a model with a robust pre-filter and a dehumidifier to help manage humidity.',
      internalLinks: [{text: 'Basement Guide', href: 'basement-air-purifier-guide.html'}]
    },
    {
      id: 'baby-nursery-size',
      triggers: ['nursery size', 'baby room size'],
      question: 'What size purifier is best for a baby nursery?',
      answer: 'Since nurseries are usually smaller rooms, a quiet unit with a CADR of 100-150 is perfect. Focus on "noise per CADR" to ensure the purifier doesn\'t wake the baby while running on an effective setting.',
      internalLinks: [{text: 'Nursery Tips', href: 'bedroom-air-purifier-guide.html'}]
    },
    {
      id: 'home-office-size',
      triggers: ['home office', 'study', 'work room'],
      question: 'What size purifier do I need for a home office?',
      answer: 'A home office typically needs 4 air changes per hour. If you have office equipment that produces ozone or heat, or if the room is small, a CADR of 150 is usually adequate for maintaining focus and clean air.',
      internalLinks: [{text: 'Sizing Guide', href: 'air-purifier-sizing-guide.html'}]
    }
  ],
  misconceptions: [
    {
      id: 'bigger-is-better-myth',
      triggers: ['is bigger better', 'oversized purifier', 'giant purifier'],
      question: 'Is a bigger air purifier always better?',
      answer: 'Not necessarily. An oversized unit costs more to buy and maintain, and can be excessively loud. A "right-sized" unit running on a medium, quiet speed is often more effective and pleasant than a massive unit running on a low, ineffective setting.',
      internalLinks: [{text: 'Why Sizing Matters', href: 'index.html#why'}]
    },
    {
      id: 'square-footage-myth',
      triggers: ['square footage on box', 'room size rating', 'is the box accurate'],
      question: 'Is the square footage on the box reliable?',
      answer: 'Marketing "room size" ratings are often based on only 1 or 2 air changes per hour, which is insufficient for real air cleaning. Always look for the CADR rating instead, as it is a verified measurement of actual performance.',
      internalLinks: [{text: 'CADR vs Sq Ft', href: 'cadr-vs-square-feet.html'}]
    },
    {
      id: 'whole-house-myth',
      triggers: ['whole house purifier', 'one purifier for whole house', 'central air purifier'],
      question: 'Is one whole-house purifier enough?',
      answer: 'A single purifier cannot effectively clean an entire house because walls and doors block airflow. It is much more effective to have smaller purifiers in the individual rooms where you spend the most time, like bedrooms and living rooms.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'hepa-odors-myth',
      triggers: ['does hepa remove smells', 'hepa for odors', 'hepa for vocs'],
      question: 'Do HEPA filters remove odors and gases?',
      answer: 'No. HEPA filters are designed to capture solid particles like dust and pollen. To remove odors, smoke smells, and chemical gases (VOCs), you must have a purifier with a dedicated activated carbon filter.',
      internalLinks: [{text: 'Filter Comparison', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'allergy-cure-myth',
      triggers: ['cure allergies', 'stop allergies', 'allergy cure'],
      question: 'Do air purifiers cure allergies?',
      answer: 'Air purifiers do not cure allergies, but they significantly reduce the "allergen load" in your environment. By removing triggers from the air, they can help manage symptoms and improve your quality of sleep and life.',
      internalLinks: [{text: 'Allergy Guide', href: 'air-purifier-for-allergies.html'}]
    },
    {
      id: 'cheap-filters-myth',
      triggers: ['cheap filters', 'generic filters', 'off brand filters', 'are generic filters good'],
      question: 'Are cheap generic filters just as good as brand-name ones?',
      answer: 'While some high-quality generics exist, many cheap filters have poor fitment or lower-grade HEPA media, which allows unfiltered air to bypass the system. We recommend using original manufacturer filters or highly-rated, verified third-party alternatives to maintain your purifier\'s performance.',
      internalLinks: [{text: 'About Our Reviews', href: 'about.html'}]
    }
  ],
  comparisons: [
    {
      id: 'hepa-vs-carbon',
      triggers: ['hepa vs carbon', 'particle vs gas', 'which filter do i need'],
      question: 'What is the difference between HEPA and activated carbon?',
      answer: 'HEPA filters capture physical particles (dust, pollen, dander), while activated carbon absorbs gases and odors (smoke smell, VOCs). Most high-quality air purifiers use a combination of both to provide complete air cleaning.',
      internalLinks: [{text: 'HEPA vs Carbon', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'true-hepa-vs-type',
      triggers: ['true hepa vs hepa type', 'hepa like', 'is hepa type good'],
      question: 'What is the difference between True HEPA and HEPA-type?',
      answer: 'True HEPA is a certified standard (99.97% efficiency), while "HEPA-type" is a marketing term for filters that look like HEPA but often perform much worse, capturing as little as 85-90% of particles. For real health benefits, always insist on True HEPA.',
      internalLinks: [{text: 'Filter Standards', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'tower-vs-box',
      triggers: ['tower vs box', 'purifier styles', 'best purifier shape'],
      question: 'What is the difference between tower and box style purifiers?',
      answer: 'Tower purifiers save floor space and often have a smaller footprint, while box or console style purifiers often have larger filters and move more air (higher CADR). Choose based on your room size and available space.',
      internalLinks: [{text: 'Placement Guide', href: 'where-to-place-air-purifier.html'}]
    },
    {
      id: 'washable-vs-disposable',
      triggers: ['washable filter vs disposable', 'permanent filter', 'reusable filter'],
      question: 'Should I get a permanent washable filter or disposable ones?',
      answer: 'Disposable HEPA filters are generally more effective at capturing fine particles over time. While washable pre-filters are great for catching large dust and pet hair, "permanent" main filters often lose efficiency after a few washes and are rarely True HEPA grade.',
      internalLinks: [{text: 'Filter Guide', href: 'hepa-vs-carbon-filters.html'}]
    },
    {
      id: 'purifier-vs-windows',
      triggers: ['purifier vs opening windows', 'fresh air', 'outside air'],
      question: 'Is an air purifier better than just opening the windows?',
      answer: 'Opening windows provides fresh air and reduces CO2, but it also lets in pollen, dust, and outdoor pollution. An air purifier allows you to keep your indoor air clean even when outdoor air quality is poor, such as during allergy season or wildfire smoke events.',
      internalLinks: [{text: 'Smoke Guide', href: 'air-purifier-for-smoke.html'}]
    }
  ]
};
