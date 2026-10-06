// Data center staffing pages — copy supplied by Eric Yan (President), Oct 2, 2026.
// Headings and copy are used as written; edit here, not in the page files.
// English only for now: these pages are not in the i18n locale files.
//
// Block types: { p }, { ul: [...] }, { links: [{ href, title, body, cta }] }
// To add a photo to a page, put a keyword-named file in public/data-center/
// (e.g. fiber-optic-technician-data-center.jpg) and set `image` on that page.

export const HUB_PATH = '/data-center-staffing'

const DATA_CENTER_PAGES = {
  hub: {
    path: '/data-center-staffing',
    breadcrumb: 'Data Center Staffing',
    metaTitle: 'Data Center Staffing Agency | Fiber, Low Voltage and Manufacturing | Pro-Tech',
    metaDescription:
      'Pro-Tech staffs data center buildouts and the factories that build data center hardware. Trained fiber and low voltage crews, assemblers, and quality and diagnostic technicians.',
    eyebrow: 'Data Center Staffing',
    h1: 'Data Center Staffing for the Teams Building AI and Cloud Infrastructure',
    intro: [
      'The AI and cloud buildout has created more data center work than the skilled labor market can fill. Pro-Tech Staffing Services has supplied light industrial and electronics manufacturing talent since 1996. We now bring that experience to both sides of the data center industry: the crews that install and cable the facility, and the production teams that manufacture the equipment inside it.',
    ],
    panelTitle: 'Who we staff',
    panel: [
      'Fiber optic and low voltage technicians',
      'Rack integration and box build technicians',
      'Assemblers and electrical assemblers',
      'Test, diagnostic and quality technicians',
      'Manufacturing, test and process engineers',
    ],
    sections: [
      {
        h2: 'Two ways we support the data center industry',
        blocks: [
          {
            links: [
              {
                href: '/data-center-staffing/low-voltage-fiber',
                title: 'Low voltage and fiber optic staffing.',
                body: 'We recruit, train and deploy fiber optic and structured cabling technicians for data center construction, expansion and refresh projects. We handle travel and lodging so crews arrive on site, on schedule.',
                cta: 'Learn more about fiber and low voltage staffing',
              },
              {
                href: '/data-center-staffing/equipment-manufacturing',
                title: 'Staffing for data center equipment manufacturers.',
                body: 'We staff production lines that build server racks, switchgear, power distribution units, cooling systems and fiber optic cable assemblies, from assembly through quality and diagnostic technicians.',
                cta: 'Learn more about manufacturing staffing',
              },
            ],
          },
        ],
      },
      {
        h2: 'High-volume staffing and specialized technical hiring',
        blocks: [
          { p: 'Pro-Tech does both. We fill high-volume needs, from dozens to hundreds of assemblers, operators and installers for a new line or project. We also recruit for specialized roles, including test and diagnostic technicians, quality technicians, fiber technicians, and manufacturing, test and process engineers.' },
          { p: 'We have staffed for some of the largest contract manufacturers in the world, and for smaller companies that have grown rapidly with the data center market. We know how quickly this industry moves and how suddenly demand can change. A new customer program or a pulled-in deadline can double a headcount plan overnight. We are always ready to stand up a dedicated team of recruiters and onsite coordinators built around your ramp.' },
        ],
      },
      {
        h2: 'Why data center companies choose Pro-Tech',
        blocks: [
          {
            ul: [
              'Trained before day one. Candidates complete skills training matched to the role before they reach your site or line.',
              'Built for ramp-ups. We scale headcount quickly for new lines, new buildings and project surges.',
              'Nationwide deployment. Our recruiters work from offices in Dallas-Fort Worth, Memphis, Northern Kentucky (Cincinnati/CVG), St. Petersburg and San Jose, and we travel crews to project sites anywhere in the US.',
              '30 years in technical staffing. Electronics manufacturing staffing has been our core business since 1996.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is data center staffing?', a: 'Data center staffing supplies skilled workers to the companies that build data centers and the equipment inside them. That includes fiber optic and low voltage technicians on construction sites, plus assemblers, test technicians and quality inspectors in manufacturing plants.' },
      { q: 'Do you staff data center projects outside Texas?', a: 'Yes. We recruit locally where we have offices and travel trained crews to project sites across the country.' },
      { q: 'What types of companies do you work with?', a: 'We work with data center contractors, low voltage and fiber installers, EF&I and integration firms, and manufacturers of data center hardware and infrastructure.' },
    ],
    cta: 'Building a data center or ramping a production line? Tell us the roles, headcount and start date, and we will build your team.',
  },

  lowVoltageFiber: {
    path: '/data-center-staffing/low-voltage-fiber',
    breadcrumb: 'Low Voltage and Fiber Optic Staffing',
    metaTitle: 'Fiber Optic and Low Voltage Staffing for Data Centers | Pro-Tech',
    metaDescription:
      'Trained fiber optic, structured cabling and Layer 1 technicians for data center builds. Pro-Tech recruits, trains and travels crews nationwide, with lodging handled.',
    eyebrow: 'Data Center Staffing · Fiber & Low Voltage',
    h1: 'Fiber Optic and Low Voltage Staffing for Data Center Buildouts',
    intro: [
      'Every data center runs on thousands of fiber and copper connections, and a shortage of qualified technicians is one of the biggest threats to a build schedule. Pro-Tech recruits, trains and deploys low voltage and fiber optic crews for data center construction, expansion, refresh and decommissioning projects. We also coordinate travel and lodging, so your crew arrives on site ready to work on day one.',
    ],
    panelTitle: 'Crews we deploy',
    panel: [
      'Fiber optic and splicing technicians',
      'Structured cabling technicians',
      'Fiber test technicians',
      'EF&I, turn-up and test technicians',
      'Crew leads and foremen',
    ],
    sections: [
      {
        h2: 'Fiber and low voltage roles we staff',
        blocks: [
          {
            ul: [
              'Fiber optic technicians: installation, termination, and fusion and mechanical splicing of single-mode and multimode fiber',
              'Structured cabling technicians: Cat6 and Cat6A copper and fiber installation',
              'Cable pullers and pathway installers: cable tray, ladder rack and conduit',
              'Fiber test technicians: OTDR, power meter and certification testing',
              'Rack and stack and network hardware installers',
              'EF&I, turn-up and test, and staging technicians',
              'Decommissioning and de-install technicians',
              'Crew leads and foremen',
            ],
          },
        ],
      },
      {
        h2: 'We train and deploy fiber technicians',
        blocks: [
          { p: 'The industry needs more fiber technicians than it has, so we build them. Pro-Tech recruits motivated candidates and prepares them for low voltage and fiber buildout work before they reach your site. Training covers:' },
          {
            ul: [
              'Fiber handling, cleaning and inspection',
              'Termination and fusion splicing fundamentals',
              'Fiber and copper testing and documentation',
              'Reading blueprints, rack elevations and labeling schemes',
              'Cable management and dressing to data center standards',
              'Jobsite safety, including OSHA 10',
            ],
          },
          { p: 'We prepare candidates for industry credentials such as the FOA Certified Fiber Optic Technician (CFOT) and BICSI Installer certifications. For projects that need experience on day one, we also place already certified technicians.' },
        ],
      },
      {
        h2: 'Travel, lodging and on-site coordination handled',
        blocks: [
          { p: 'Data center work happens where the power is, which is often far from where the workforce lives. Pro-Tech takes the logistics off your plate:' },
          {
            ul: [
              'We book and manage travel to the project site.',
              'We arrange and pay for crew lodging near the site.',
              'We confirm every technician’s arrival before their first shift.',
              'We track daily attendance and replace no-shows quickly.',
            ],
          },
          { p: 'You get a full crew on site when the schedule calls for it, without managing travel, housing or reporting.' },
        ],
      },
      {
        h2: 'Who we support',
        blocks: [
          {
            ul: [
              'Low voltage and structured cabling contractors',
              'EF&I and Layer 1 integration firms',
              'General contractors on data center projects',
              'Telecom, fiber and outside plant (OSP) contractors',
              'Data center developers and operators',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is low voltage fiber staffing?', a: 'It is the supply of trained technicians who install, terminate, splice and test fiber optic and low voltage cabling in data centers and other facilities.' },
      { q: 'Can you train new technicians for fiber work?', a: 'Yes. Entry-level candidates complete fiber and safety training before deployment. We also place experienced, certified technicians.' },
      { q: 'Do you handle travel and lodging for traveling crews?', a: 'Yes. We coordinate travel, arrange lodging near the site, and confirm each technician is on site before the shift starts.' },
      { q: 'Can you staff projects outside your office locations?', a: 'Yes. We deploy fiber and low voltage crews to data center projects across the US.' },
    ],
    cta: 'Need a fiber crew on site? Tell us the scope, headcount, location and start date.',
  },

  equipmentManufacturing: {
    path: '/data-center-staffing/equipment-manufacturing',
    breadcrumb: 'Equipment Manufacturing Staffing',
    metaTitle: 'Staffing for Data Center Equipment Manufacturers | Racks, Switchgear, PDUs | Pro-Tech',
    metaDescription:
      'Assemblers, test and diagnostic technicians, and quality inspectors for companies building server racks, switchgear, PDUs, cooling systems and fiber cable assemblies.',
    eyebrow: 'Data Center Staffing · Equipment Manufacturing',
    h1: 'Staffing for Companies That Build Data Center Equipment',
    intro: [
      'Does your company build data center racks, switchgear, power distribution units or cooling systems? Do you manufacture fiber optic cable assemblies, connectors or other Layer 1 products? Pro-Tech is a specialized staffing partner for data center hardware and infrastructure manufacturers. We supply your production floor with people from assembly through quality and diagnostic technicians.',
    ],
    panelTitle: 'Lines we staff',
    panel: [
      'Server and AI rack integration',
      'Switchgear, PDUs and power distribution',
      'Modular power infrastructure',
      'Liquid cooling assemblies',
      'Fiber optic cable assemblies',
    ],
    sections: [
      {
        h2: 'Trusted by leading hardware and infrastructure manufacturers',
        blocks: [
          { p: 'Pro-Tech has staffed production lines for some of the largest contract manufacturers in the world, and for smaller companies that have grown rapidly alongside the AI and cloud buildout. We focus on high-volume staffing for production ramps, and we also recruit the specialized technicians and engineers those lines depend on.' },
          { p: 'We know how quickly this space grows and how suddenly demand can change. When a program lands or a forecast jumps, we are ready to build a dedicated team of recruiters and onsite coordinators around your ramp.' },
        ],
      },
      {
        h2: 'Equipment our workforce helps build',
        blocks: [
          {
            ul: [
              'Server and AI rack integration: box build, rack integration, liquid-cooled AI racks, servers, storage and networking systems',
              'Power distribution: low and medium voltage switchgear, switchboards, power distribution units (PDUs), automatic transfer switches (ATS), busbar systems and power shelves',
              'Modular power infrastructure: integrated modular power systems, e-houses and power skids',
              'Cooling: coolant distribution units (CDUs), cold plates and liquid cooling assemblies',
              'Fiber and connectivity: custom fiber optic cable assemblies, patch cords, trunk cables, MPO/MTP assemblies, connectors and fusion-spliced assemblies',
              'Network staging and integration: pre-configuration, staging and test of network equipment before deployment',
            ],
          },
        ],
      },
      {
        h2: 'Roles we staff',
        blocks: [
          {
            ul: [
              'Production and electronics assemblers',
              'Box build and rack integration technicians',
              'Wire harness and cable assembly technicians',
              'Fiber optic cable assembly, termination and polishing technicians',
              'Electrical assemblers for switchgear and PDUs',
              'Test, diagnostic and conversion technicians',
              'Quality inspectors and QC technicians',
              'Material handlers and inventory control specialists',
              'Industrial engineering and process technicians',
              'Manufacturing, test, quality and process engineers',
            ],
          },
        ],
      },
      {
        h2: 'Training that makes new hires line-ready',
        blocks: [
          { p: 'We combine screening and hands-on skills training so new hires are productive sooner and stay longer. Depending on the role, training covers:' },
          {
            ul: [
              'ESD handling and cleanroom basics',
              'Reading work instructions, drawings and bills of materials',
              'Torque, fastening and mechanical assembly',
              'Soldering and IPC workmanship basics',
              'Fiber termination, polishing and inspection',
              'Basic electrical, test equipment and diagnostic procedures',
              'Quality inspection and documentation',
            ],
          },
        ],
      },
      {
        h2: 'Built for production ramps',
        blocks: [
          { p: 'Data center equipment demand moves fast, and new lines need hundreds of people on short notice. Pro-Tech supports ramps with dedicated recruiters, onsite coordination, shift-based hiring and weekly attendance and performance reporting.' },
        ],
      },
      {
        h2: 'Where we operate',
        blocks: [
          { p: 'We staff manufacturers from offices in Dallas-Fort Worth, Memphis, Northern Kentucky (Cincinnati/CVG), St. Petersburg and San Jose, and support ramps at new sites across the US.' },
        ],
      },
    ],
    faq: [
      { q: 'What roles do data center equipment manufacturers need most?', a: 'Assemblers, rack integration technicians, test and diagnostic technicians, and quality inspectors are the most common needs during production ramps.' },
      { q: 'Can you staff a new production line from zero?', a: 'Yes. We build full teams for new lines and new facilities, including leads, technicians and quality staff.' },
      { q: 'Do you staff fiber optic cable assembly manufacturers?', a: 'Yes. We place cable assembly, termination, polishing and test technicians for fiber optic and copper connectivity manufacturers.' },
    ],
    cta: 'Ramping a line for data center equipment? Tell us the roles, shifts and start date.',
  },
}

export default DATA_CENTER_PAGES
