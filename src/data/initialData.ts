import { ServiceItem, TeamMember, TestimonialItem, BlogPost, Customer, ServiceRequest, Appointment } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'computer-diagnostics',
    title: 'Computer Diagnostics',
    shortDesc: 'OBD diagnostics, fault-code scanning, live sensor analysis, and electronic system troubleshooting.',
    fullDesc: 'Modern vehicles rely on dozens of interconnected Electronic Control Units (ECUs). When a warning light illuminates or performance drops, guessing leads to unnecessary parts replacement. We connect OEM-grade diagnostic scanners to read live sensor data, analyze waveform signals, and test bi-directional actuators to pinpoint the root cause before turning a wrench.',
    category: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'Check Engine, ABS, or Airbag warning lights illuminated',
      'Engine hesitation, rough idling, or misfiring',
      'Sudden drop in fuel economy',
      'Limp mode activation or transmission shift hesitation',
      'Intermittent electrical or sensor glitches'
    ],
    diagnosticApproach: [
      'Full vehicle system DTC (Diagnostic Trouble Code) health scan',
      'Freeze-frame data analysis to identify exact conditions during fault',
      'Live sensor data stream verification (O2 sensors, MAF, fuel trim, knock sensors)',
      'Oscilloscope waveform analysis on crank/cam position sensors and injectors',
      'Clear, written report detailing findings, root causes, and repair options'
    ],
    whatsIncluded: [
      'Comprehensive electronic module scan (Engine, Transmission, ABS, SRS, BCM)',
      'Live parameter logging and battery voltage load test',
      'Physical inspection of associated wiring harnesses and connectors',
      'Digital diagnostic summary with transparent cost estimate before repair'
    ],
    estimatedTime: '45 – 90 mins'
  },
  {
    id: 'general-repairs',
    title: 'General Mechanical Repairs',
    shortDesc: 'Brake systems, suspension, steering geometry, cooling systems and mechanical components.',
    fullDesc: 'From worn brake friction material to deteriorated suspension bushings suffering under local road conditions, our mechanical workshop restores your vehicle to factory handling and safety specifications using precision torque specs and quality replacement parts.',
    category: 'Mechanical',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'Squealing, grinding noises or vibrations when braking',
      'Knocking or clunking sounds over bumps and potholes',
      'Vehicle pulling to one side or uneven tire wear',
      'Coolant leaks, sweet odor, or rising temperature gauge',
      'Stiff or unresponsive steering wheel'
    ],
    diagnosticApproach: [
      'Micrometer measurement of brake rotor thickness and run-out',
      'Hydraulic suspension shaker test to identify worn ball joints, tie rods, and bushings',
      'Cooling system pressure test to locate pinhole radiator or hose leaks',
      'Power steering rack hydraulic pressure and fluid contamination check'
    ],
    whatsIncluded: [
      'Brake pad and disc rotor replacement with ceramic/semi-metallic options',
      'Control arms, ball joints, sway bar links, and shock absorber renewal',
      'Radiator, thermostat, water pump, and coolant hose replacement',
      'Torque-to-spec bolt fastening and post-repair road test'
    ],
    estimatedTime: '2 – 6 hours'
  },
  {
    id: 'engine-transmission',
    title: 'Engine & Transmission',
    shortDesc: 'Powertrain troubleshooting, timing systems, cylinder head repairs, and transmission diagnostics.',
    fullDesc: 'The powertrain is the heart of your vehicle. Whether dealing with timing belt/chain maintenance, oil leaks, valve train noise, or automatic transmission slipping, our certified technicians apply strict factory procedures to ensure long-term durability and smooth power delivery.',
    category: 'Powertrain',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'Metallic knocking, ticking, or excessive smoke from exhaust',
      'Delayed gear engagement, slipping between shifts, or harsh clunks',
      'Persistent oil or transmission fluid leaks under vehicle',
      'Loss of compression, overheating, or coolant mixed in oil',
      'Timing belt or chain rattling noise during cold starts'
    ],
    diagnosticApproach: [
      'Cylinder compression and cylinder leakage testing',
      'Borescope internal inspection of cylinder walls and valves',
      'Transmission line pressure testing and fluid degradation analysis',
      'Electronic solenoid actuation and valve body command testing'
    ],
    whatsIncluded: [
      'Timing belt and water pump kit replacement',
      'Automatic/CVT transmission fluid flushing with OEM-approved specs',
      'Cylinder head gasket replacement and precision machining',
      'Engine mount and transmission mount renewal'
    ],
    estimatedTime: '1 – 3 days depending on scope'
  },
  {
    id: 'electrical-diagnostics',
    title: 'Electrical Diagnostics',
    shortDesc: 'Battery, charging system, wiring harnesses, sensors, alternator, starter, and module diagnosis.',
    fullDesc: 'Modern automotive electrical faults can be notoriously difficult to locate without proper test instruments. We test parasitic drains, check voltage drops across grounds, inspect corroded harnesses, and diagnose starter/alternator systems without crude wire splicing.',
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'Dead battery after leaving car parked overnight (parasitic draw)',
      'Dim headlights or battery charging warning light on cluster',
      'Engine cranks slowly or clicks without starting',
      'Power windows, central locking, or infotainment failures',
      'Burning electrical smell or blown fuses'
    ],
    diagnosticApproach: [
      'Digital conductance battery health and cold cranking amp (CCA) test',
      'Alternator ripple voltage and charging current load evaluation',
      'Millivolt drop testing across fuses to pinpoint parasitic battery drain',
      'Wiring continuity, resistance, and terminal fretting inspection'
    ],
    whatsIncluded: [
      'Alternator and starter motor overhaul or replacement',
      'Harness repair and weather-sealed heat-shrink terminal renewal',
      'Body control module (BCM) and relay testing',
      'Clean grounding point restoration and battery terminal treatment'
    ],
    estimatedTime: '1 – 4 hours'
  },
  {
    id: 'air-conditioning',
    title: 'Air Conditioning & Climate Control',
    shortDesc: 'Automotive AC inspection, refrigerant leak detection, compressor servicing, and cooling performance.',
    fullDesc: 'Driving in the tropical climate of Ghana demands a reliable, high-performance air conditioning system. We utilize specialized recovery and evacuation equipment, UV dye leak detection, and manifold gauge diagnostics to ensure your cabin stays crisp and cool even in dense Accra traffic.',
    category: 'Climate',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'AC blows warm or humid air while driving',
      'Cool air only at high engine RPMs, warm at idle',
      'Unpleasant musty or mildew odor when AC is turned on',
      'Loud squealing or clicking noise when AC compressor engages',
      'Water leaking into the passenger footwell'
    ],
    diagnosticApproach: [
      'High-pressure and low-pressure manifold gauge performance test',
      'Electronic halogen sniffer and UV fluorescent dye leak inspection',
      'Cabin evaporator temperature drop calculation (ambient vs vent)',
      'Condenser cooling fan airflow and relay engagement check'
    ],
    whatsIncluded: [
      'Safe refrigerant recovery, system deep vacuum evacuation, and recharge',
      'PAG oil replenishment to protect compressor internals',
      'Cabin pollen/microfilter replacement and evaporator antibacterial treatment',
      'Condenser coil chemical degreasing for maximum heat dissipation'
    ],
    estimatedTime: '1 – 3 hours'
  },
  {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    shortDesc: 'Scheduled servicing, engine oil & filter changes, fluid flushes, belt inspections, and safety checks.',
    fullDesc: 'Regular maintenance is the single most effective way to prevent costly roadside breakdowns and extend the lifespan of your vehicle. Our scheduled maintenance packages follow manufacturer intervals tailored to driving in high ambient temperatures, dusty roads, and stop-and-go traffic.',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'Scheduled mileage milestone reached (5,000 km, 10,000 km, 20,000 km)',
      'Dark, dirty, or low engine oil level on dipstick',
      'Service reminder indicator illuminated on instrument cluster',
      'Vehicle hasn\'t been serviced in the past 6 months',
      'Preparation for long-distance travel across regions'
    ],
    diagnosticApproach: [
      'Comprehensive 45-point visual and mechanical safety inspection',
      'Brake fluid moisture percentage testing with digital tester',
      'Coolant pH balance and freeze/boil point hydrometer test',
      'Tire tread depth measurement and tire pressure adjustment'
    ],
    whatsIncluded: [
      'Premium synthetic engine oil replacement conforming to OEM viscosity',
      'OEM-spec oil filter, engine air filter, and cabin microfilter',
      'Top-up of washer fluid, power steering fluid, and brake fluid',
      'Underbody inspection for leaks, suspension play, and exhaust integrity'
    ],
    estimatedTime: '60 – 90 mins'
  },
  {
    id: 'vehicle-inspection',
    title: 'Independent Vehicle Inspection',
    shortDesc: 'Comprehensive 150+ point pre-purchase inspection for buyers considering a used vehicle.',
    fullDesc: 'Buying a used car in Ghana can be risky. Hidden accident damage, rolled-back odometers, flood history, and masked mechanical issues can cost you thousands. Our technicians conduct an unbiased, independent physical and electronic evaluation so you know exactly what you are purchasing before parting with your money.',
    category: 'Inspection',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'Considering purchasing a foreign-used (tokunbo/home-used) or locally registered car',
      'Seller claims the car is "accident-free" but you want verification',
      'Unsure if the transmission or engine is in good mechanical health',
      'Need an independent valuation and repair estimate for price negotiation',
      'Vehicle warranty expiring soon'
    ],
    diagnosticApproach: [
      'Paint depth digital gauge test on all panels to detect bondo and hidden accident repair',
      'Full electronic scan of all modules to identify cleared DTCs and emission readiness',
      'Structural chassis, frame rail, and subframe straightness inspection on lift',
      'Cold-start assessment, fluid contamination analysis, and comprehensive road test'
    ],
    whatsIncluded: [
      '150+ point checklist covering Engine, Transmission, Suspension, Brakes, Electronics & Body',
      'Digital inspection report with high-resolution photos and severity ratings',
      'Immediate itemized repair cost estimation for identified defects',
      'Phone debrief with the inspecting lead technician'
    ],
    estimatedTime: '2 – 3 hours'
  },
  {
    id: 'fleet-maintenance',
    title: 'Fleet Maintenance & Corporate Support',
    shortDesc: 'Structured maintenance planning, repair tracking, and downtime reduction for business fleets.',
    fullDesc: 'Vehicle downtime directly impacts your bottom line. TorqueWorks Auto partners with corporate organizations, transport firms, logistics providers, and delivery companies across Accra. We deliver scheduled preventive servicing, priority emergency turnaround, itemized monthly invoicing, and full digital maintenance records for every vehicle in your fleet.',
    category: 'Fleet',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80',
    symptoms: [
      'High vehicle downtime causing missed customer delivery deadlines',
      'Unpredictable fleet repair expenses and lack of cost transparency',
      'No centralized digital record of parts replaced or service history',
      'Drivers reporting recurring breakdowns on the same vehicles',
      'Multiple repair vendors delivering inconsistent workmanship'
    ],
    diagnosticApproach: [
      'Comprehensive baseline audit of every vehicle entering the fleet program',
      'Usage-based maintenance scheduling (kilometers driven vs engine operating hours)',
      'Pre-trip digital safety inspection protocols for corporate drivers',
      'Quarterly fleet health reports and preventive parts wear forecasts'
    ],
    whatsIncluded: [
      'Priority workshop bay allocation with guaranteed turnaround SLAs',
      'Dedicated Service Account Manager for fleet dispatch',
      'Itemized monthly invoicing with 30-day corporate credit terms for qualified businesses',
      'Secure digital access to service history, invoice archives, and upcoming reminders'
    ],
    estimatedTime: 'Custom SLA / Scheduled'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'kwame-boateng',
    name: 'Kwame Boateng',
    role: 'Workshop Operations Manager',
    bio: 'With over 17 years in automotive service management and certified training across German and Japanese brands, Kwame oversees workshop throughput, technician training, and strict quality control standards.',
    qualifications: ['BSc Mechanical Engineering (KNUST)', 'Certified Automotive Service Manager', 'Ex-Toyota Ghana Workshop Supervisor'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'samuel-appiah',
    name: 'Samuel Appiah',
    role: 'Lead Diagnostic Specialist',
    bio: 'Samuel specializes in electronic module communication, CAN-bus troubleshooting, ECU reflashing, and complex powertrain diagnostic algorithms with Bosch and Autel certified credentials.',
    qualifications: ['ASE Master Diagnostic Certified (A1-A8)', 'Bosch Automotive Electronics Specialist', '12+ Years Diagnostic Experience'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'emmanuel-mensah',
    name: 'Emmanuel Mensah',
    role: 'Senior Mechanical Technician',
    bio: 'Emmanuel brings 14 years of heavy mechanical expertise, specializing in precision engine rebuilds, cylinder head resurfacing, transmission overhaul, and suspension geometry setup.',
    qualifications: ['National Diploma in Mechanical Engineering', 'Powertrain Overhaul Certified', 'Chassis & Alignment Specialist'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'david-tagoe',
    name: 'David Tagoe',
    role: 'Auto Electrical & AC Specialist',
    bio: 'David is our expert on automotive electrical systems, charging circuits, electronic comfort modules, and climate control refrigeration systems engineered for harsh tropical conditions.',
    qualifications: ['Certified Mobile AC Technician (MAC)', 'Automotive Electrical Systems Diploma', '10+ Years Experience in Vehicle Wiring'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'abena-kwarteng',
    name: 'Abena Kwarteng',
    role: 'Senior Service Advisor',
    bio: 'Abena acts as the bridge between the customer and our workshop bays. She ensures transparent work estimates, explains technical findings in clear language, and keeps clients updated at every step.',
    qualifications: ['BA Customer Relationship Management', 'Automotive Service Advisory Certification', '6 Years Automotive Client Relations'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Kofi Asare',
    roleOrLocation: 'Private Owner, Airport Hills, Accra',
    vehicle: '2019 Mercedes-Benz E300',
    content: 'Two other workshops in Accra told me I needed to replace the entire steering rack for GH₵ 14,000. TorqueWorks did a proper diagnostic, found a corroded sensor connector wire, repaired it for a fraction of that cost, and explained everything clearly with photos.',
    date: 'August 2026'
  },
  {
    id: 't-2',
    author: 'Patricia Ofori-Atta',
    roleOrLocation: 'Business Owner, East Legon',
    vehicle: '2021 Toyota Prado TX-L',
    content: 'I appreciate the complete absence of guesswork. When I brought my Prado for overheating, they pressure-tested the system and showed me the hairline radiator crack before touching anything. The car was ready on time as promised.',
    date: 'July 2026'
  },
  {
    id: 't-3',
    author: 'Michael Danquah',
    roleOrLocation: 'Fleet Operations Lead, SwiftLog Ghana',
    vehicle: 'Fleet of 8 Toyota Hilux & HiAce',
    content: 'Managing a delivery fleet in Accra is tough on suspensions and clutches. TorqueWorks handles our scheduled maintenance with zero delays. Their digital service history reports make our accounting and asset tracking seamless.',
    date: 'September 2026'
  },
  {
    id: 't-4',
    author: 'Selorm Agbenu',
    roleOrLocation: 'First-time Car Buyer, Spintex Road',
    vehicle: '2018 Honda Accord (Pre-purchase Inspection)',
    content: 'Their pre-purchase inspection saved me from buying a flooded car that had been cosmetically patched up. The scan showed recurring CAN-bus communication faults and frame corrosion that the seller hid. Money well spent.',
    date: 'August 2026'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'engine-oil-tropical-climate',
    title: 'When Should You Change Your Engine Oil in Tropical Climates?',
    slug: 'engine-oil-tropical-climate',
    category: 'Maintenance',
    date: 'September 14, 2026',
    readTime: '5 min read',
    excerpt: 'Why manufacturer intervals from temperate regions don\'t hold up in the heat, dust, and heavy traffic of Accra.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
    content: [
      'Many modern vehicle manuals specify oil change intervals of 10,000 km or even 15,000 km. However, vehicle manufacturers add an important caveat in the fine print: "Severe Driving Conditions."',
      'In Ghana, almost all driving qualifies as severe. Extended idling in heavy traffic on the George Walker Bush Highway or Spintex Road means your engine is running and heating the oil without the odometer turning. Combined with high ambient temperatures above 30°C and airborne dust, engine oil shears and oxidizes significantly faster.',
      'For fully synthetic oil, we recommend a strict 7,500 km or 6-month interval. For conventional or semi-synthetic oils, 5,000 km should not be exceeded. Inspecting the dipstick regularly for color, viscosity, and fuel smell will protect your engine against sludge and timing chain wear.'
    ]
  },
  {
    id: 'battery-weakness-signs',
    title: '5 Signs Your Car Battery Is Getting Weak in Heavy Traffic',
    slug: 'battery-weakness-signs',
    category: 'Electrical',
    date: 'September 02, 2026',
    readTime: '4 min read',
    excerpt: 'Heat kills batteries faster than cold. Here is how to spot failure before you are stranded at an intersection.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    content: [
      'While motorists in temperate climates worry about winter cold, tropical heat is actually the leading cause of internal battery degradation. Heat accelerates the chemical reaction inside lead-acid batteries, causing internal grid corrosion and electrolyte evaporation.',
      '1. Slow Engine Crank: When starting, the starter motor sounds sluggish or labors longer than usual before firing up.',
      '2. Headlight Dimming at Idle: If your headlights visibly dim when you stop at a traffic light with the AC running and brighten when you accelerate, the charging circuit or battery capacity is compromised.',
      '3. Pungent Rotten Egg Odor: A battery that is overcharging due to a faulty voltage regulator will vent sulfur gas.',
      '4. White Crust on Terminals: Heavy sulfate build-up around the positive or negative posts restricts current transfer.',
      '5. Age Over 2 Years: Most automotive batteries in West Africa have a realistic lifespan of 24 to 36 months.'
    ]
  },
  {
    id: 'check-engine-light-meaning',
    title: 'What Does the Check Engine Light Mean? (Why You Shouldn\'t Just Clear the Code)',
    slug: 'check-engine-light-meaning',
    category: 'Diagnostics',
    date: 'August 24, 2026',
    readTime: '6 min read',
    excerpt: 'Clearing a fault code without repairing the cause does not fix your car. Here is how diagnostic troubleshooting actually works.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    content: [
      'When the amber Check Engine light illuminates on your dashboard, your engine control module (ECM) has detected a reading that falls outside established operating parameters.',
      'A common mistake among car owners is asking an roadside mechanic to "clear the light" with a cheap scanner. Clearing the code merely deletes the stored freeze-frame history. Within 20 to 50 kilometers, as soon as the drive cycle monitors run again, the light will return.',
      'More importantly, continuing to drive with an active fault code—such as an unaddressed cylinder misfire or rich fuel mixture—will quickly destroy expensive components like the catalytic converter. At TorqueWorks, we read the code, check live data, test the suspect component, and only clear the code once the underlying mechanical or electrical fault has been resolved.'
    ]
  },
  {
    id: 'prepare-car-long-trip',
    title: 'How to Prepare Your Car for a Long Trip Outside Accra',
    slug: 'prepare-car-long-trip',
    category: 'Maintenance',
    date: 'August 11, 2026',
    readTime: '5 min read',
    excerpt: 'Essential pre-journey checks for the Kumasi, Takoradi, or Cape Coast corridors to ensure a trouble-free round trip.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    content: [
      'Highway driving at sustained speeds of 90–120 km/h places completely different stresses on your car than urban commuting. Weak cooling hoses, marginal tires, or worn brake pads that survive city driving can fail catastrophically on the highway.',
      'Tire Pressure and Tread Depth: Check pressures in the morning when the rubber is cold. Don\'t forget to inspect and inflate the spare tire, and verify that your jack and wheel spanner are functional.',
      'Coolant Level and Condition: Never open a hot radiator. Ensure the reservoir is filled with proper 50/50 ethylene glycol coolant, not plain tap water, which boils at 100°C and causes internal corrosion.',
      'Brake Pad Thickness: Ensure you have at least 4mm of friction material remaining on both front and rear pads before embarking on trips involving heavy overtaking and mountain descents.'
    ]
  },
  {
    id: 'why-diagnostics-matter',
    title: 'Why Regular Vehicle Diagnostics Save You Thousands in the Long Run',
    slug: 'why-diagnostics-matter',
    category: 'Diagnostics',
    date: 'July 29, 2026',
    readTime: '4 min read',
    excerpt: 'How a 45-minute electronic diagnostic scan catches pending faults before they leave you stranded on the road.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    content: [
      'Modern vehicles are essentially computers on wheels. Long before an oxygen sensor completely fails or a transmission solenoid locks up, the computer records "pending codes" and sensor deviation trends.',
      'During a scheduled diagnostic inspection, technicians review fuel trim percentages, knock sensor activity, and battery voltage stability. Catching a failing alternator diode early prevents battery destruction; spotting an intake manifold vacuum leak early prevents burnt exhaust valves.',
      'Investing in routine diagnostics transforms vehicle ownership from stressful emergency repairs into predictable, scheduled maintenance.'
    ]
  }
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-1',
    name: 'Kwame Mensah',
    phone: '+233 24 458 9201',
    email: 'kwame.mensah@ghmail.com',
    address: 'Airport Residential Area, Accra',
    vehicles: [
      {
        id: 'veh-1',
        customerId: 'cust-1',
        make: 'Toyota',
        model: 'Corolla',
        year: 2018,
        registration: 'GW 4821 - 18',
        vin: 'JTDBR32E9J0192831',
        mileage: 84200,
        serviceHistory: [
          {
            id: 'rec-1',
            vehicleId: 'veh-1',
            date: '12 Sept 2026',
            service: 'Full Service & Inspection',
            technician: 'Emmanuel Mensah',
            workPerformed: 'Engine oil flush, oil filter, air filter, and cabin filter replacement. Multi-point suspension and brake check.',
            partsUsed: 'Total Quartz 9000 5W-30 (4.2L), OEM Toyota Oil Filter, OEM Air Filter',
            cost: 1850,
            status: 'Completed'
          },
          {
            id: 'rec-2',
            vehicleId: 'veh-1',
            date: '04 May 2026',
            service: 'Brake System Overhaul',
            technician: 'Emmanuel Mensah',
            workPerformed: 'Front brake pads replacement, brake rotor resurfacing, brake fluid flush and system bleeding.',
            partsUsed: 'Akebono Ceramic Front Pads, Dot 4 Brake Fluid (1L)',
            cost: 1420,
            status: 'Completed'
          }
        ]
      },
      {
        id: 'veh-2',
        customerId: 'cust-1',
        make: 'Mercedes-Benz',
        model: 'C200',
        year: 2020,
        registration: 'GN 9102 - 20',
        vin: 'WDD2050401F827102',
        mileage: 52400,
        serviceHistory: [
          {
            id: 'rec-3',
            vehicleId: 'veh-2',
            date: '18 Aug 2026',
            service: 'Computer Diagnostics & Transmission Service',
            technician: 'Samuel Appiah',
            workPerformed: 'Scanned for 2-3 gear hesitation code. Replaced transmission fluid and integrated filter pan. Performed adaptation drive.',
            partsUsed: 'Mercedes ATF 236.15 (9L), OEM Transmission Pan with Integrated Filter, Gasket',
            cost: 3950,
            status: 'Completed'
          }
        ]
      }
    ]
  },
  {
    id: 'cust-2',
    name: 'Nana Osei',
    phone: '+233 20 812 3456',
    email: 'nana.osei@logisticsgh.com',
    address: 'East Legon, Accra',
    company: 'Osei Logistics Ltd',
    vehicles: [
      {
        id: 'veh-3',
        customerId: 'cust-2',
        make: 'Toyota',
        model: 'Hilux D-4D',
        year: 2021,
        registration: 'GX 1240 - 21',
        vin: 'MROHA82G9L0119284',
        mileage: 118000,
        serviceHistory: [
          {
            id: 'rec-4',
            vehicleId: 'veh-3',
            date: '01 Sept 2026',
            service: 'Heavy Duty Suspension & PM',
            technician: 'Emmanuel Mensah',
            workPerformed: 'Replaced front heavy duty shock absorbers, sway bar bushings, diesel fuel filter and engine oil.',
            partsUsed: 'Bilstein B6 Heavy Duty Front Shocks, Heavy-Duty Polyurethane Bushings, Toyota D-4D Fuel Filter',
            cost: 5600,
            status: 'Completed'
          }
        ]
      }
    ]
  },
  {
    id: 'cust-3',
    name: 'Ama Addo',
    phone: '+233 55 930 4812',
    email: 'ama.addo@techgh.com',
    address: 'Cantonments, Accra',
    vehicles: [
      {
        id: 'veh-4',
        customerId: 'cust-3',
        make: 'Hyundai',
        model: 'Tucson',
        year: 2019,
        registration: 'GE 3012 - 19',
        vin: 'KM8J3CA25KU018274',
        mileage: 67800,
        serviceHistory: [
          {
            id: 'rec-5',
            vehicleId: 'veh-4',
            date: '25 Aug 2026',
            service: 'AC Diagnostics & Servicing',
            technician: 'David Tagoe',
            workPerformed: 'UV dye leak detection, replaced condenser O-rings, vacuum evacuated and recharged with R134a refrigerant.',
            partsUsed: 'R134a Refrigerant (600g), PAG 46 Compressor Oil, O-Ring Seal Kit',
            cost: 1650,
            status: 'Completed'
          }
        ]
      }
    ]
  }
];

export const INITIAL_SERVICE_REQUESTS: ServiceRequest[] = [
  {
    id: 'req-101',
    fullName: 'Kojo Antwi',
    phone: '+233 24 391 0022',
    email: 'kojo.antwi@gmail.com',
    vehicleMake: 'Toyota',
    vehicleModel: 'Camry',
    vehicleYear: 2019,
    vehicleReg: 'GW 3920 - 19',
    vin: '4T1B11HK5KU892019',
    serviceType: 'Computer Diagnostics',
    preferredDate: '2026-09-22',
    preferredTime: '09:00 AM',
    description: 'Check Engine light came on yesterday on my way home. The car feels sluggish when accelerating past 60 km/h and fuel consumption has increased.',
    status: 'New',
    createdAt: '2026-09-19 14:32'
  },
  {
    id: 'req-102',
    fullName: 'Sandra Frimpong',
    phone: '+233 27 749 2038',
    email: 'sandra.f@yahoo.com',
    vehicleMake: 'Honda',
    vehicleModel: 'CR-V',
    vehicleYear: 2020,
    vehicleReg: 'GT 5819 - 20',
    serviceType: 'Air Conditioning',
    preferredDate: '2026-09-21',
    preferredTime: '11:00 AM',
    description: 'AC blows warm air when car is idling in heavy traffic on the N1 highway. Starts cooling slightly once moving at higher speeds.',
    status: 'Contacted',
    assignedTechnician: 'David Tagoe',
    internalNotes: 'Contacted customer via WhatsApp. Suspect condenser fan motor failure or low refrigerant pressure.',
    createdAt: '2026-09-19 11:15'
  },
  {
    id: 'req-103',
    fullName: 'Kwame Mensah',
    phone: '+233 24 458 9201',
    email: 'kwame.mensah@ghmail.com',
    vehicleMake: 'Toyota',
    vehicleModel: 'Corolla',
    vehicleYear: 2018,
    vehicleReg: 'GW 4821 - 18',
    vin: 'JTDBR32E9J0192831',
    serviceType: 'Preventive Maintenance',
    preferredDate: '2026-09-23',
    preferredTime: '08:30 AM',
    description: 'Scheduled 85,000 km routine servicing: engine oil, filter, and general mechanical health inspection before family trip.',
    status: 'Scheduled',
    assignedTechnician: 'Emmanuel Mensah',
    appointmentDate: '2026-09-23',
    appointmentTime: '08:30 AM',
    internalNotes: 'Customer confirmed appointment. Total Quartz 9000 5W-30 allocated.',
    createdAt: '2026-09-18 16:40'
  },
  {
    id: 'req-104',
    fullName: 'Joseph Amankwah',
    phone: '+233 50 238 9911',
    email: 'j.amankwah@consultant.com',
    vehicleMake: 'Mercedes-Benz',
    vehicleModel: 'E300',
    vehicleYear: 2017,
    vehicleReg: 'GS 7712 - 17',
    serviceType: 'Electrical Diagnostics',
    preferredDate: '2026-09-20',
    preferredTime: '10:00 AM',
    description: 'Instrument cluster displays "Auxiliary Battery Malfunction" message. Stop/start system no longer working and keyless entry acts intermittently.',
    status: 'In Progress',
    assignedTechnician: 'Samuel Appiah',
    internalNotes: 'Vehicle in Bay 3. Voltage drop test on auxiliary capacitor module in progress.',
    createdAt: '2026-09-18 09:10'
  },
  {
    id: 'req-105',
    fullName: 'Nana Osei',
    phone: '+233 20 812 3456',
    email: 'nana.osei@logisticsgh.com',
    vehicleMake: 'Toyota',
    vehicleModel: 'Hilux D-4D',
    vehicleYear: 2021,
    vehicleReg: 'GX 1240 - 21',
    serviceType: 'Fleet Maintenance',
    preferredDate: '2026-09-15',
    preferredTime: '08:00 AM',
    description: 'Quarterly fleet inspection and front suspension renewal following heavy cargo operations.',
    status: 'Completed',
    assignedTechnician: 'Emmanuel Mensah',
    internalNotes: 'Completed on schedule. Invoice #TW-2026-0841 issued to Osei Logistics.',
    createdAt: '2026-09-14 10:00'
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-201',
    requestId: 'req-103',
    customerName: 'Kwame Mensah',
    customerPhone: '+233 24 458 9201',
    vehicle: '2018 Toyota Corolla (GW 4821 - 18)',
    service: 'Preventive Maintenance',
    technician: 'Emmanuel Mensah',
    date: '2026-09-23',
    time: '08:30 AM',
    status: 'Scheduled'
  },
  {
    id: 'apt-202',
    requestId: 'req-104',
    customerName: 'Joseph Amankwah',
    customerPhone: '+233 50 238 9911',
    vehicle: '2017 Mercedes-Benz E300 (GS 7712 - 17)',
    service: 'Electrical Diagnostics',
    technician: 'Samuel Appiah',
    date: '2026-09-20',
    time: '10:00 AM',
    status: 'In Progress'
  },
  {
    id: 'apt-203',
    customerName: 'David Mensah',
    customerPhone: '+233 24 991 4055',
    vehicle: '2019 Toyota Camry (GW 3920 - 19)',
    service: 'Vehicle Inspection',
    technician: 'Samuel Appiah',
    date: '2026-09-21',
    time: '01:30 PM',
    status: 'Scheduled'
  }
];

export const SAMPLE_INSPECTION_CAMRY = {
  vehicle: 'Toyota Camry',
  year: 2019,
  registration: 'GW 3920 - 19',
  odometer: '78,410 km',
  engine: '2.5L 4-Cylinder Dynamic Force',
  transmission: '8-Speed Direct Shift Automatic',
  inspectionDate: '18 September 2026',
  inspectionStatus: 'Completed',
  overallFindings: 'Needs Attention',
  summary: 'Overall sound powertrain and chassis structure. Vehicle has not suffered structural collision damage. However, immediate attention is required for front brake friction material wear and rear control arm bushing cracking, as well as one historical catalytic efficiency fault code stored in the ECM.',
  checklist: [
    {
      category: 'Diagnostic Fault Codes (OBD-II)',
      status: 'Needs Attention',
      items: [
        { name: 'Engine ECU Scan', status: 'Warning', note: 'Stored DTC P0420 (Catalyst System Efficiency Below Threshold - Bank 1). No active misfire.' },
        { name: 'Transmission Control Module', status: 'Pass', note: 'Zero fault codes; fluid temp and pressure telemetry normal.' },
        { name: 'ABS & Stability Control', status: 'Pass', note: 'All four wheel-speed sensors reporting synchronized RPM.' },
        { name: 'Airbag / SRS Module', status: 'Pass', note: 'Zero deployment history, all crash sensors active.' }
      ]
    },
    {
      category: 'Engine & Mechanical Systems',
      status: 'Pass',
      items: [
        { name: 'Cold Engine Start & Idle', status: 'Pass', note: 'Immediate start, smooth idle at 750 RPM, no abnormal valve tap.' },
        { name: 'Engine Oil Condition', status: 'Pass', note: 'Color amber-brown, normal viscosity, no fuel dilution.' },
        { name: 'Cooling System & Hoses', status: 'Pass', note: 'Passed 16 psi pressure test with zero pressure drop over 15 mins.' },
        { name: 'Drive Belts & Pulleys', status: 'Pass', note: 'Serpentine belt in good condition, no cracking or tensioner wobble.' }
      ]
    },
    {
      category: 'Brakes & Suspension',
      status: 'Needs Attention',
      items: [
        { name: 'Front Brake Pads', status: 'Warning', note: 'Remaining friction thickness 2.5mm (approx 15% life). Replacement advised.' },
        { name: 'Rear Brake Pads', status: 'Pass', note: 'Remaining thickness 6.0mm (approx 65% life).' },
        { name: 'Brake Disc Rotors', status: 'Pass', note: 'Front rotors 26.2mm (above 25.0mm discard limit), no excessive lip.' },
        { name: 'Front Struts & Springs', status: 'Pass', note: 'No hydraulic fluid leakage, rebound damping firm.' },
        { name: 'Rear Lower Control Arm Bushings', status: 'Warning', note: 'Visible rubber cracking and tearing on both rear trailing arm bushings.' }
      ]
    },
    {
      category: 'Electrical, AC & Fluids',
      status: 'Pass',
      items: [
        { name: 'Battery Health & CCA', status: 'Pass', note: 'Measured 540 CCA against 580 rated. State of health 93%.' },
        { name: 'Alternator Charging Voltage', status: 'Pass', note: '14.2V under full electrical load (AC, high beams, defogger on).' },
        { name: 'Air Conditioning Output', status: 'Pass', note: 'Center vent temperature 6.5°C at ambient 32°C. Excellent cooling.' },
        { name: 'Brake Fluid Moisture Content', status: 'Pass', note: 'Digital tester indicates 1.2% moisture (within safe <2% threshold).' }
      ]
    },
    {
      category: 'Body & Chassis Structure',
      status: 'Pass',
      items: [
        { name: 'Chassis Frame Rails', status: 'Pass', note: 'No clamp marks, straightening ripples or structural welding detected.' },
        { name: 'Panel Paint Depth Gauge', status: 'Pass', note: 'All metal panels measure between 105µm and 130µm. Original factory paint.' },
        { name: 'Underbody Flood / Rust Check', status: 'Pass', note: 'No silt or salt corrosion in rocker panels or undercarriage.' }
      ]
    }
  ],
  estimatedRepairsCostGHS: 2450
};
