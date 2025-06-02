import Image from "next/image";
import paramedic from '../../../../public/img/paramedic.jpg';
import SectionTitle from "@/components/commons/SectionTitle";
import Card from '@/components/commons/Card';
import oferta1 from '../../../../public/academicOffers/academic.png';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Link from "next/link";


export default async function Page(
  // { params }: { params: Promise<{ slug: string }> }
) {
  // const { slug } = await params;

  const careerInfo = {
    title: "EMERGENCIAS Y URGENCIAS MÉDICAS",
    area: "Salud",
    level: "Técnico superior",
    duration: "3 años",
    system: "Anual sistema modular",
    schedules: ["Mañana", "Tarde", "Noche"],
    titleLabel: "Técnico superior en emergencias y urgencias médicas",
    curriculum: '/pdfs/malla-emergencias.pdf',
  };

const whyStudyThis = [
  "Estudiar la carrera de Emergencias y Urgencias Médicas es una decisión que no solo abre las puertas a una profesión desafiante, sino también profundamente gratificante. Los técnicos en emergencias médicas juegan un rol crucial en la atención sanitaria de urgencia, siendo los primeros en intervenir en situaciones críticas y de emergencia, como accidentes, desastres naturales y otras crisis que ponen en peligro la vida.",
  "El técnico en emergencias médicas está capacitado para proporcionar atención inmediata y eficaz en momentos en los que cada segundo cuenta. Esta habilidad es vital tanto en ambulancias como en hospitales o en el mismo lugar de los hechos. La capacidad de diagnosticar, estabilizar y brindar tratamiento básico o avanzado a los pacientes en estos momentos decisivos puede marcar la diferencia entre la vida y la muerte.",
  "Uno de los aspectos más destacados de esta carrera es su carácter dinámico y diverso. Las situaciones que enfrenta un técnico en emergencias médicas son únicas y requieren de un alto nivel de preparación, adaptabilidad y habilidad para trabajar bajo presión. Cada día presenta nuevos desafíos que requieren de conocimientos actualizados sobre técnicas de reanimación, atención prehospitalaria, manejo de trauma, y mucho más.",  
  "Además, el trabajo en emergencias médicas no solo requiere conocimientos técnicos, sino también habilidades humanas esenciales, como la empatía, el trabajo en equipo y la toma de decisiones rápidas y efectivas. En este sentido, esta carrera también fomenta el desarrollo personal, ya que los profesionales deben ser capaces de manejar situaciones emocionalmente intensas, con respeto y sensibilidad hacia las víctimas y sus familias.",
  "Estudiar Emergencias y Urgencias Médicas es una forma de contribuir activamente a la salud y el bienestar de la comunidad, con el respaldo de una formación integral que combina la teoría y la práctica en entornos reales. Esta formación, que incluye la capacitación en primeros auxilios, manejo de equipos de emergencia y técnicas avanzadas de atención, prepara a los estudiantes para afrontar los retos de un sector en constante evolución."
];

  const workArea = [
  {
    title: "Servicios de ambulancia",
    description:
      "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales.",
  },
  {
    title: "Hospitales y clínicas de urgencias",
    description:
      "Apoyan en las áreas de urgencias, brindando primeros auxilios y asistencia a pacientes en situaciones críticas bajo la supervisión de médicos.",
  },
  {
    title: "Servicios de rescate y atención prehospitalaria",
    description:
      "Algunas compañías privadas de salud contratan técnicos para cubrir eventos, deportes o situaciones laborales de alto riesgo, ofreciendo atención inmediata en caso de emergencia.",
  },
  {
    title: "Instituciones educativas y deportivas",
    description:
      "Trabajan en instituciones educativas, universidades o en eventos deportivos, brindando primeros auxilios en situaciones de emergencia.",
  },
  {
    title: "Industrias de transporte y aviación",
    description:
      "POfrecen atención médica a bordo de aviones, barcos o trenes, asegurándose de que los pasajeros reciban atención en caso de emergencias durante el viaje.",
  },
  {
    title: "Asistencia en eventos masivos o conciertos",
    description:
      "Ofrecen atención médica inmediata en grandes conciertos, festivales o eventos públicos, donde puede haber incidentes que requieran primeros auxilios.",
  },
  {
    title: "Organizaciones humanitarias y ONGs",
    description:
      "Pueden formar parte de brigadas de ayuda en zonas de conflicto, regiones afectadas por desastres naturales o áreas rurales, aportando su experiencia en situaciones de emergencia médica.",
  },
];
const carreras = [
  {
    cardTitle: 'Técnico Superior en Enfermería',
    carDescription: 'Formación profesional con prácticas clínicas en hospitales.',
    cardImage: oferta1,
  },
  {
    cardTitle: 'Técnico Superior en Fisioterapia',
    carDescription: 'Estudios en rehabilitación y terapia física avanzada.',
    cardImage: oferta1,
  },
];

  return (
        
    <>
      {/* Imagen de portada */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          className="w-full h-full object-cover brightness-50"
          alt="Portada"
          src={paramedic}
        />
      </div>

      {/* Contenido principal en 2 columnas */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        {/* Columna izquierda */}
        <div className="lg:w-2/3">
          <Link href="/#oferta-academica">
            <div className="flex items-center text-slate-500 font-bold text-xl cursor-pointer mb-6 hover:text-slate-700 transition">
              <MdKeyboardDoubleArrowLeft className="mr-2" />
              Volver a la oferta académica
            </div>
          </Link>
          {/* Info general */}
          <SectionTitle title={careerInfo.title} size={4} />
          <div className="mt-5 space-y-2 text-gray-800">
            <p><span className="font-bold">Área de formación:</span> {careerInfo.area}</p>
            <p><span className="font-bold">Nivel de formación:</span> {careerInfo.level}</p>
            <p><span className="font-bold">Duración:</span> {careerInfo.duration}</p>
            <p><span className="font-bold">Régimen de estudio:</span> {careerInfo.system}</p>
            <p><span className="font-bold">Horarios:</span> {careerInfo.schedules.join(', ')}</p>
            <p><span className="font-bold">Título profesional:</span> {careerInfo.titleLabel}</p>
            <p>
              <span className="font-bold">Malla curricular:</span>{' '}
              <a href={careerInfo.curriculum} target="_blank" className="text-blue-600 underline">Ver PDF</a>
            </p>
          </div>

          {/* Por qué estudiar */}
          <div className="mt-10">
            <SectionTitle title="¿Por qué estudiar esta carrera?" size={4} />
            <div className="mt-6 space-y-4 text-justify text-gray-700">
              {whyStudyThis.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </div>

          {/* Área laboral */}
          <div className="mt-10">
            <SectionTitle title="ÁREA DE TRABAJO" size={4} />
            <ul className="list-disc list-inside mt-4 space-y-4 text-gray-800">
              {workArea.map((item, i) => (
                <li key={i}>
                  <span className="font-bold">{item.title}:</span> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="lg:w-1/3 space-y-10">
          {/* Carreras relacionadas */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Carreras relacionadas</h2>
            {/* Aquí puedes mapear otras carreras si las tienes */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-4">
              {carreras.map((item, index) => (
                <Card
                  key={index}
                  cardTitle={item.cardTitle}
                  carDescription={item.carDescription}
                  cardImage={item.cardImage}
                  variant='beca'
                />
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Estadísticas de interés</h2>
            <div className="bg-neutral-100 p-6 rounded-2xl space-y-6">
              {[
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
              ].map((stat, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-neutral-400 rounded-full" />
                  <div>
                    <p className="font-bold">{stat.title}</p>
                    <p>{stat.value}</p>
                    {stat.source && <p className="text-sm text-gray-500">{stat.source}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
