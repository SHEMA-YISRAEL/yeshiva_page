
import oferta1 from '../../public/academicOffers/academic.png';

const careerData = {
    title: "Técnico superior en emergencias y urgencias médicas",
    duration: "3 años",
    area: "Salud",
    level: "Técnico superior",
    system: "Anual sistema modular",
    label: "EMERGENCIAS Y URGENCIAS MÉDICAS",
    schedules: ["Mañana", "Tarde", "Noche"],  
    curriculum: 'https://drive.google.com/file/d/1eMb4QaN1Vv0UeNIJuaMoY7DJhjLxwxjZ/view?usp=sharing',
    redirectPath: '/1'
}

const whyStudyThis = [
  "El Técnico en Urgencias y Emergencias en Salud es un profesional capacitado para responder con rapidez ante situaciones críticas que comprometen la vida y la salud de las personas.",
  "Los profesionales de esta área están preparados para brindar atención pre-hospitalaria, asistir en emergencias médicas, estabilizar al paciente y trasladarlo a un centro hospitalario."
]

const workArea = [
  {
    title: "Servicios de ambulancia",
    // description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },
  {
    title: "Hospitales y clínicas de urgencias",
    // description: "Apoyan en las áreas de urgencias, brindando primeros auxilios y asistencia a pacientes en situaciones críticas bajo la supervisión de médicos.",
  },
  {
    title: "Servicios de rescate y atención prehospitalaria",
    // description: "Algunas compañías privadas de salud contratan técnicos para cubrir eventos, deportes o situaciones laborales de alto riesgo, ofreciendo atención inmediata en caso de emergencia.",
  },
  {
    title: "Instituciones educativas y deportivas",
    // description: "Trabajan en instituciones educativas, universidades o en eventos deportivos, brindando primeros auxilios en situaciones de emergencia.",
  },
  {
    title: "Industrias de transporte y aviación",
    // description: "Ofrecen atención médica a bordo de aviones, barcos o trenes, asegurándose de que los pasajeros reciban atención en caso de emergencias durante el viaje.",
  },
  {
    title: "Asistencia en eventos masivos o conciertos",
    // description: "Ofrecen atención médica inmediata en grandes conciertos, festivales o eventos públicos, donde puede haber incidentes que requieran primeros auxilios.",
  },
  {
    title: "Organizaciones humanitarias y ONGs",
    // description: "Pueden formar parte de brigadas de ayuda en zonas de conflicto, regiones afectadas por desastres naturales o áreas rurales, aportando su experiencia en situaciones de emergencia médica.",
  },
];

const carreras = [
  {
    cardTitle: 'Enfermería',
    carDescription: 'Formación profesional con prácticas clínicas en hospitales.',
    cardImage: oferta1,
    redirectPath: '/'
  },
  
];

const statistics = [
  {
    title: "Crecimiento del empleo",
    value: "6% (2021-2031)",
    source: "Según la Oficina de Estadísticas Laborales de EE.UU.",
  },
  {
    title: "Demanda en España",
    value: "Alta demanda",
    source: "Fuente: Ministerio de Sanidad de España",
  },
  {
    title: "Demanda en el sector",
    value: "Una de las más altas",
  },          
]

export { whyStudyThis, careerData, workArea, carreras, statistics}