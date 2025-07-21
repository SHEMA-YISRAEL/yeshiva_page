
import oferta1 from '../../public/academicOffers/academic.png';

const careerData = {
    title: "Técnico Superior en Laboratorio de Anatomía Patológica",
    duration: "3 años",
    area: "Salud",
    level: "Técnico superior",
    system: "Anual sistema modular",
    label: "LABORATORIO DE ANATOMIA PATOLÓGICA",
    schedules: ["Mañana", "Tarde", "Noche"],  
    curriculum: 'https://drive.google.com/file/d/18TEnOJFRvn0a9qKAL5PvZchM1SFzypG_/view?usp=sharing',
}

const whyStudyThis = [
  "El Técnico en Laboratorio Clínico es un profesional capacitado para realizar, procesar y analizar muestras biológicas, con el objetivo de apoyar el diagnóstico, control y prevención de enfermedades. Su trabajo es clave para que médicos y especialistas tomen decisiones informadas y precisas sobre la salud de los pacientes.",
]

const workArea = [
  {
    title: "Hospitales y clínicas",
    // description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },

  {
    title: "Laboratorios de análisis clínico privados o públicos",
    // description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },

  {
    title: "Centros de diagnóstico y bancos de sangre",
    // description: "Hospitales y clínicas, laboratorios de análisis clínico privados o públicos, centros de diagnóstico y bancos de sangre.",
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