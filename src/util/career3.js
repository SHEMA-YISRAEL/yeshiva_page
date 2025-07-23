
import {enfermeria} from './relatedCarrers.js'

const careerData = {
    title: "Técnico Medio en Laboratorio Clínico",
    duration: "2 años",
    area: "Salud",
    level: "Técnico Medio",
    label: "LABORATORIO CLÍNICO",
    curriculum: 'https://drive.google.com/file/d/1lYMz2fT_lbzCvkvnXGAkE5hbVcmRsHxf/view?usp=sharing',
}

const whyStudyThis = [
  "El Técnico en Laboratorio Clínico es un profesional capacitado para realizar, procesar y analizar muestras biológicas, con el objetivo de apoyar el diagnóstico, control y prevención de enfermedades. Su trabajo es clave para que médicos y especialistas tomen decisiones informadas y precisas sobre la salud de los pacientes."
]

const workArea = [
  {
    title: "Hospitales y clínicas",
    // description: "Apoyan en las áreas de urgencias, brindando primeros auxilios y asistencia a pacientes en situaciones críticas bajo la supervisión de médicos.",
  },
  {
    title: "Laboratorios de análisis clínico privados o públicos",
    // description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },
  {
    title: "Centros de diagnóstico y bancos de sangre",
    // description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },
  
];
const carreras = [
  enfermeria
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