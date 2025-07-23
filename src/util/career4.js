import {enfermeria} from './relatedCarrers.js'

const careerData = {
    title: "Técnico Medio en Enfermería",
    duration: "2 años",
    area: "Salud",
    level: "Técnico medio",

    label: "ENFERMERÍA",

    curriculum: 'https://drive.google.com/file/d/1sG9duDPIh5oKiaNHDI7nzLrDVvmNMySd/view?usp=sharing', 
}

const whyStudyThis = [
    "El Técnico en Enfermería es un profesional capacitado para brindar atención integral, segura y humanizada al paciente. Posee conocimientos técnicos y habilidades prácticas que le permiten participar en la prevención, recuperación y rehabilitación de la salud en diversos niveles de atención."
]


const workArea = [
  {
    title: "Hospitales y clínicas (públicas y privadas)",
    // description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },
  {
    title: "Centros de salud y postas",
    // description: "Apoyan en las áreas de urgencias, brindando primeros auxilios y asistencia a pacientes en situaciones críticas bajo la supervisión de médicos.",
  },
  {
    title: "Consultorios médicos ",
    // description: "Algunas compañías privadas de salud contratan técnicos para cubrir eventos, deportes o situaciones laborales de alto riesgo, ofreciendo atención inmediata en caso de emergencia.",
  },
  {
    title: "Residencias geriátricas y centros de rehabilitación",
    // description: "Trabajan en instituciones educativas, universidades o en eventos deportivos, brindando primeros auxilios en situaciones de emergencia.",
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