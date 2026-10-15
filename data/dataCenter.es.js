// Spanish version of the data center pages (translated from data/dataCenter.js).
// Same shape as the English file minus the SEO fields: metadata and JSON-LD stay
// English because the URL is shared across languages. Keep in sync with the EN copy.

export const UI = {
  requestTalent: 'Solicitar Personal',
  faqHeading: 'Preguntas frecuentes',
  moreHeading: 'Más sobre personal para centros de datos',
  overview: 'Resumen de personal para centros de datos',
  contact: 'Contáctenos',
}

const PAGES = {
  hub: {
    breadcrumb: 'Personal para Centros de Datos',
    eyebrow: 'Personal para Centros de Datos',
    h1: 'Personal para Centros de Datos para los Equipos que Construyen la Infraestructura de IA y Nube',
    intro: [
      'La expansión de la IA y la nube ha creado más trabajo en centros de datos del que el mercado de mano de obra calificada puede cubrir. Pro-Tech Staffing Services ha suministrado talento para la industria ligera y la manufactura de electrónicos desde 1996. Ahora llevamos esa experiencia a ambos lados de la industria de centros de datos: los equipos que instalan y cablean las instalaciones, y los equipos de producción que fabrican el equipo que va dentro.',
    ],
    panelTitle: 'A quién contratamos',
    panel: [
      'Técnicos de fibra óptica y bajo voltaje',
      'Técnicos de integración de racks y box build',
      'Ensambladores y ensambladores eléctricos',
      'Técnicos de pruebas, diagnóstico y calidad',
      'Ingenieros de manufactura, pruebas y procesos',
    ],
    sections: [
      {
        h2: 'Dos formas en que apoyamos a la industria de centros de datos',
        blocks: [
          {
            links: [
              {
                href: '/data-center-staffing/low-voltage-fiber',
                title: 'Personal de bajo voltaje y fibra óptica.',
                body: 'Reclutamos, capacitamos y desplegamos técnicos de fibra óptica y cableado estructurado para proyectos de construcción, expansión y renovación de centros de datos. Nos encargamos del viaje y el hospedaje para que los equipos lleguen al sitio a tiempo.',
                cta: 'Más información sobre personal de fibra y bajo voltaje',
              },
              {
                href: '/data-center-staffing/equipment-manufacturing',
                title: 'Personal para fabricantes de equipos para centros de datos.',
                body: 'Proveemos personal para líneas de producción que fabrican racks de servidores, tableros de distribución (switchgear), unidades de distribución de energía, sistemas de enfriamiento y ensambles de cable de fibra óptica, desde ensambladores hasta técnicos de calidad y diagnóstico.',
                cta: 'Más información sobre personal de manufactura',
              },
            ],
          },
        ],
      },
      {
        h2: 'Contratación de alto volumen y reclutamiento técnico especializado',
        blocks: [
          { p: 'Pro-Tech hace ambas cosas. Cubrimos necesidades de alto volumen, desde decenas hasta cientos de ensambladores, operadores e instaladores para una nueva línea o proyecto. También reclutamos para puestos especializados, como técnicos de pruebas y diagnóstico, técnicos de calidad, técnicos de fibra e ingenieros de manufactura, pruebas y procesos.' },
          { p: 'Hemos proporcionado personal a algunos de los fabricantes por contrato más grandes del mundo, y a empresas más pequeñas que han crecido rápidamente con el mercado de centros de datos. Sabemos lo rápido que se mueve esta industria y lo repentinamente que puede cambiar la demanda. Un nuevo programa de un cliente o una fecha límite adelantada puede duplicar un plan de contratación de la noche a la mañana. Siempre estamos listos para formar un equipo dedicado de reclutadores y coordinadores en sitio alrededor de su crecimiento.' },
        ],
      },
      {
        h2: 'Por qué las empresas de centros de datos eligen a Pro-Tech',
        blocks: [
          {
            ul: [
              'Capacitados antes del primer día. Los candidatos completan capacitación de habilidades según el puesto antes de llegar a su sitio o línea.',
              'Preparados para crecer. Aumentamos el personal rápidamente para nuevas líneas, nuevos edificios y picos de proyectos.',
              'Despliegue a nivel nacional. Nuestros reclutadores trabajan desde oficinas en Dallas-Fort Worth, Memphis, el norte de Kentucky (Cincinnati/CVG), St. Petersburg y San José, y enviamos equipos a proyectos en cualquier parte de EE. UU.',
              '30 años en personal técnico. El personal para la manufactura de electrónicos ha sido nuestro negocio principal desde 1996.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: '¿Qué es el personal para centros de datos?', a: 'Es el suministro de trabajadores calificados a las empresas que construyen centros de datos y el equipo que va dentro. Incluye técnicos de fibra óptica y bajo voltaje en obras de construcción, además de ensambladores, técnicos de pruebas e inspectores de calidad en plantas de manufactura.' },
      { q: '¿Proveen personal para proyectos de centros de datos fuera de Texas?', a: 'Sí. Reclutamos localmente donde tenemos oficinas y enviamos equipos capacitados a proyectos en todo el país.' },
      { q: '¿Con qué tipo de empresas trabajan?', a: 'Trabajamos con contratistas de centros de datos, instaladores de bajo voltaje y fibra, empresas de EF&I e integración, y fabricantes de hardware e infraestructura para centros de datos.' },
    ],
    cta: '¿Está construyendo un centro de datos o ampliando una línea de producción? Díganos los puestos, la cantidad de personal y la fecha de inicio, y formaremos su equipo.',
  },

  lowVoltageFiber: {
    breadcrumb: 'Personal de Bajo Voltaje y Fibra Óptica',
    eyebrow: 'Centros de Datos · Fibra y Bajo Voltaje',
    h1: 'Personal de Fibra Óptica y Bajo Voltaje para la Construcción de Centros de Datos',
    intro: [
      'Cada centro de datos funciona con miles de conexiones de fibra y cobre, y la falta de técnicos calificados es una de las mayores amenazas para el calendario de una obra. Pro-Tech recluta, capacita y despliega equipos de bajo voltaje y fibra óptica para proyectos de construcción, expansión, renovación y desmantelamiento de centros de datos. También coordinamos el viaje y el hospedaje, para que su equipo llegue al sitio listo para trabajar desde el primer día.',
    ],
    panelTitle: 'Equipos que desplegamos',
    panel: [
      'Técnicos de fibra óptica y empalme',
      'Técnicos de cableado estructurado',
      'Técnicos de pruebas de fibra',
      'Técnicos de EF&I, activación y pruebas',
      'Líderes de cuadrilla y capataces',
    ],
    sections: [
      {
        h2: 'Puestos de fibra y bajo voltaje que cubrimos',
        blocks: [
          {
            ul: [
              'Técnicos de fibra óptica: instalación, terminación y empalme por fusión y mecánico de fibra monomodo y multimodo',
              'Técnicos de cableado estructurado: instalación de cobre Cat6 y Cat6A y de fibra',
              'Instaladores de cable y canalizaciones: bandejas portacables, escalerillas y tubería conduit',
              'Técnicos de pruebas de fibra: OTDR, medidor de potencia y pruebas de certificación',
              'Instaladores de racks (rack and stack) y de hardware de red',
              'Técnicos de EF&I, activación y pruebas, y preparación (staging)',
              'Técnicos de desmantelamiento y desinstalación',
              'Líderes de cuadrilla y capataces',
            ],
          },
        ],
      },
      {
        h2: 'Capacitamos y desplegamos técnicos de fibra',
        blocks: [
          { p: 'La industria necesita más técnicos de fibra de los que tiene, así que nosotros los formamos. Pro-Tech recluta candidatos motivados y los prepara para el trabajo de instalación de fibra y bajo voltaje antes de que lleguen a su sitio. La capacitación incluye:' },
          {
            ul: [
              'Manejo, limpieza e inspección de fibra',
              'Fundamentos de terminación y empalme por fusión',
              'Pruebas y documentación de fibra y cobre',
              'Lectura de planos, elevaciones de racks y esquemas de etiquetado',
              'Manejo y organización de cables según los estándares de centros de datos',
              'Seguridad en la obra, incluido OSHA 10',
            ],
          },
          { p: 'Preparamos a los candidatos para credenciales de la industria como el Técnico Certificado en Fibra Óptica de la FOA (CFOT) y las certificaciones de Instalador de BICSI. Para proyectos que necesitan experiencia desde el primer día, también colocamos técnicos ya certificados.' },
        ],
      },
      {
        h2: 'Nos encargamos del viaje, el hospedaje y la coordinación en sitio',
        blocks: [
          { p: 'El trabajo en centros de datos se hace donde está la energía, que muchas veces queda lejos de donde vive la fuerza laboral. Pro-Tech se encarga de la logística por usted:' },
          {
            ul: [
              'Reservamos y gestionamos el viaje al sitio del proyecto.',
              'Organizamos y pagamos el hospedaje del equipo cerca del sitio.',
              'Confirmamos la llegada de cada técnico antes de su primer turno.',
              'Llevamos el control diario de asistencia y reemplazamos rápidamente a quienes no se presentan.',
            ],
          },
          { p: 'Usted tiene un equipo completo en sitio cuando el calendario lo requiere, sin tener que gestionar viajes, vivienda ni reportes.' },
        ],
      },
      {
        h2: 'A quién apoyamos',
        blocks: [
          {
            ul: [
              'Contratistas de bajo voltaje y cableado estructurado',
              'Empresas de EF&I e integración de Capa 1',
              'Contratistas generales en proyectos de centros de datos',
              'Contratistas de telecomunicaciones, fibra y planta externa (OSP)',
              'Desarrolladores y operadores de centros de datos',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: '¿Qué es el personal de fibra y bajo voltaje?', a: 'Es el suministro de técnicos capacitados que instalan, terminan, empalman y prueban cableado de fibra óptica y bajo voltaje en centros de datos y otras instalaciones.' },
      { q: '¿Pueden capacitar a nuevos técnicos para trabajo de fibra?', a: 'Sí. Los candidatos sin experiencia completan capacitación en fibra y seguridad antes de ser desplegados. También colocamos técnicos con experiencia y certificación.' },
      { q: '¿Se encargan del viaje y el hospedaje de los equipos que viajan?', a: 'Sí. Coordinamos el viaje, organizamos el hospedaje cerca del sitio y confirmamos que cada técnico esté en sitio antes de que empiece el turno.' },
      { q: '¿Pueden proveer personal para proyectos fuera de sus oficinas?', a: 'Sí. Desplegamos equipos de fibra y bajo voltaje a proyectos de centros de datos en todo EE. UU.' },
    ],
    cta: '¿Necesita un equipo de fibra en sitio? Díganos el alcance, la cantidad de personal, la ubicación y la fecha de inicio.',
  },

  equipmentManufacturing: {
    breadcrumb: 'Personal para Manufactura de Equipos',
    eyebrow: 'Centros de Datos · Manufactura de Equipos',
    h1: 'Personal para Empresas que Fabrican Equipos para Centros de Datos',
    intro: [
      '¿Su empresa fabrica racks, tableros de distribución (switchgear), unidades de distribución de energía o sistemas de enfriamiento para centros de datos? ¿Fabrica ensambles de cable de fibra óptica, conectores u otros productos de Capa 1? Pro-Tech es un socio de personal especializado para fabricantes de hardware e infraestructura para centros de datos. Abastecemos su planta de producción con personal, desde ensambladores hasta técnicos de calidad y diagnóstico.',
    ],
    panelTitle: 'Líneas que abastecemos',
    panel: [
      'Integración de racks de servidores e IA',
      'Switchgear, PDU y distribución de energía',
      'Infraestructura de energía modular',
      'Ensambles de enfriamiento líquido',
      'Ensambles de cable de fibra óptica',
    ],
    sections: [
      {
        h2: 'La confianza de fabricantes líderes de hardware e infraestructura',
        blocks: [
          { p: 'Pro-Tech ha provisto personal para líneas de producción de algunos de los fabricantes por contrato más grandes del mundo, y de empresas más pequeñas que han crecido rápidamente junto con la expansión de la IA y la nube. Nos enfocamos en contratación de alto volumen para aumentos de producción, y también reclutamos a los técnicos e ingenieros especializados de los que dependen esas líneas.' },
          { p: 'Sabemos lo rápido que crece este sector y lo repentinamente que puede cambiar la demanda. Cuando llega un programa nuevo o sube un pronóstico, estamos listos para formar un equipo dedicado de reclutadores y coordinadores en sitio alrededor de su crecimiento.' },
        ],
      },
      {
        h2: 'Equipos que nuestro personal ayuda a fabricar',
        blocks: [
          {
            ul: [
              'Integración de racks de servidores e IA: box build, integración de racks, racks de IA con enfriamiento líquido, servidores, almacenamiento y sistemas de red',
              'Distribución de energía: switchgear de baja y media tensión, tableros de distribución, unidades de distribución de energía (PDU), interruptores de transferencia automática (ATS), sistemas de barras colectoras y repisas de energía',
              'Infraestructura de energía modular: sistemas de energía modulares integrados, e-houses y skids de energía',
              'Enfriamiento: unidades de distribución de refrigerante (CDU), placas frías y ensambles de enfriamiento líquido',
              'Fibra y conectividad: ensambles de cable de fibra óptica a la medida, cables de parcheo, cables troncales, ensambles MPO/MTP, conectores y ensambles empalmados por fusión',
              'Preparación e integración de red: preconfiguración, preparación y pruebas de equipo de red antes de su instalación',
            ],
          },
        ],
      },
      {
        h2: 'Puestos que cubrimos',
        blocks: [
          {
            ul: [
              'Ensambladores de producción y de electrónicos',
              'Técnicos de box build e integración de racks',
              'Técnicos de arneses de cables y ensamble de cables',
              'Técnicos de ensamble, terminación y pulido de cable de fibra óptica',
              'Ensambladores eléctricos para switchgear y PDU',
              'Técnicos de pruebas, diagnóstico y conversión',
              'Inspectores de calidad y técnicos de control de calidad',
              'Manejadores de materiales y especialistas en control de inventario',
              'Técnicos de ingeniería industrial y de procesos',
              'Ingenieros de manufactura, pruebas, calidad y procesos',
            ],
          },
        ],
      },
      {
        h2: 'Capacitación para que el personal nuevo esté listo para la línea',
        blocks: [
          { p: 'Combinamos la evaluación de candidatos con capacitación práctica para que el personal nuevo sea productivo más pronto y permanezca más tiempo. Según el puesto, la capacitación incluye:' },
          {
            ul: [
              'Manejo de ESD y conceptos básicos de cuarto limpio',
              'Lectura de instrucciones de trabajo, planos y listas de materiales',
              'Torque, sujeción y ensamble mecánico',
              'Soldadura y conceptos básicos de mano de obra IPC',
              'Terminación, pulido e inspección de fibra',
              'Electricidad básica, equipo de pruebas y procedimientos de diagnóstico',
              'Inspección de calidad y documentación',
            ],
          },
        ],
      },
      {
        h2: 'Preparados para aumentos de producción',
        blocks: [
          { p: 'La demanda de equipos para centros de datos se mueve rápido, y las nuevas líneas necesitan cientos de personas con poco aviso. Pro-Tech apoya los aumentos de producción con reclutadores dedicados, coordinación en sitio, contratación por turnos y reportes semanales de asistencia y desempeño.' },
        ],
      },
      {
        h2: 'Dónde operamos',
        blocks: [
          { p: 'Proveemos personal a fabricantes desde oficinas en Dallas-Fort Worth, Memphis, el norte de Kentucky (Cincinnati/CVG), St. Petersburg y San José, y apoyamos aumentos de producción en nuevas plantas en todo EE. UU.' },
        ],
      },
    ],
    faq: [
      { q: '¿Qué puestos necesitan más los fabricantes de equipos para centros de datos?', a: 'Ensambladores, técnicos de integración de racks, técnicos de pruebas y diagnóstico, e inspectores de calidad son las necesidades más comunes durante los aumentos de producción.' },
      { q: '¿Pueden proveer personal para una nueva línea de producción desde cero?', a: 'Sí. Formamos equipos completos para nuevas líneas y nuevas plantas, incluidos líderes, técnicos y personal de calidad.' },
      { q: '¿Proveen personal a fabricantes de ensambles de cable de fibra óptica?', a: 'Sí. Colocamos técnicos de ensamble, terminación, pulido y pruebas de cable para fabricantes de conectividad de fibra óptica y cobre.' },
    ],
    cta: '¿Está ampliando una línea de equipos para centros de datos? Díganos los puestos, los turnos y la fecha de inicio.',
  },
}

export default PAGES
