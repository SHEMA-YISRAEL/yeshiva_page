
import oferta1 from '../../public/academicOffers/academic.png';

const careerData = {
    title: "Técnico Medio en Nutrición",
    duration: "2 años",
    area: "Salud",
    level: "Técnico superior",
    system: "Anual sistema modular",
    label: "NUTRICIÓN Y DIETÉTICA",
    schedules: ["Mañana", "Tarde", "Noche"],  
    curriculum: '/pdfs/malla-emergencias.pdf', //TODO: change to drive 
}

const whyStudyThis = [
  "El profesional Técnico en Nutrición es un profesional capacitado para fomentar hábitos de alimentación saludable, contribuir a la prevención de enfermedades relacionadas con la nutrición y brindar apoyo en tratamientos nutricionales.",

  "Cuenta con sólidos conocimientos en anatomía, fisiología, bioquímica de los alimentos, dietética y educación nutricional, lo que le permite desempeñarse de manera eficaz en distintos entornos del área de la salud y el bienestar."
]

const workArea = [
  {
    title: "Centros de salud públicos y privados",
    description:
      "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },
  {
    title: "Hospitales y clínicas",
    description:
      "Apoyan en las áreas de urgencias, brindando primeros auxilios y asistencia a pacientes en situaciones críticas bajo la supervisión de médicos.",
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