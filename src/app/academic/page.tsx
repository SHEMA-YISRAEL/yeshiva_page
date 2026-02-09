"use client";

import SectionTitle from "@/components/commons/SectionTitle";
import Card from "@/components/commons/Card";

import imageUrgencias from "../../../public/urgencias.png";
// import imageLaboratorio from '../../../public/laboratorio.png';
// import imageNutricion from '../../../public/nutricion.png';
import imageEnfermeria from "../../../public/enfermeria.png";
import imageClinicLab from "../../../public/img/careers/clinicLab.webp";

import becaSocial from "../../../public/img/becas/becaSocial.png";
//import becaTrabajo from "../../../public/img/becas/becaTrabajo.png";
import becaExcelencia from "../../../public/img/becas/becaExcelenciaAcademica.png";

import { robotoSerif } from "../../util/fonts";

import "aos/dist/aos.css";

const tecnicosSuperiores = [
  {
    cardTitle: "Urgencias y\nEmergencias en Salud",
    carDescription:
      "Formación profesional con prácticas clínicas en hospitales.",
    cardImage: imageUrgencias,
    redirectPath: "/academic/1",
  },
  // {
  //   cardTitle: 'Técnico Superior Laboratorio de Anatomía Patológica',
  //   carDescription: 'Ayuda en el diagnóstico de enfermedades.',
  //   cardImage: imageLaboratorio,
  //   redirectPath: "/academic/2"
  // },
];

const tecnicosMedios = [
  {
    cardTitle: "Laboratorio Clínico",
    carDescription:
      "Brinda apoyo en el diagnóstico, control y prevención de enfermedades",
    cardImage: imageClinicLab,
    redirectPath: "/academic/3",
  },
  {
    cardTitle: "Enfermería",
    carDescription:
      "Prepárate para brindar atención integral a los pacientes, participando en la prevención, recuperación y rehabilitación.",
    cardImage: imageEnfermeria,
    redirectPath: "/academic/4",
  },
];

const becas = [
  {
    cardTitle: "Beca\nColaborativa",
    rearFaceText:
      "Valoramos tus habilidades, por ello, esta beca reduce tu mensualidad a cambio de colaborar en tareas del instituto como apoyo administrativo, atención al cliente, imagen institucional o eventos.",
    cardImage: becaSocial,
    redirectPath: "/info",
  },
  {
    cardTitle: "Beca\nExcelencia",
    rearFaceText:
      "Reconocemos tu esfuerzo, por ello, esta beca premia a estudiantes con promedio igual o superior al 90% y que tengan todas las materias aprobadas; cubriendo hasta el 50% de las mensualidades como incentivo al alto rendimiento académico.",
    cardImage: becaExcelencia,
    redirectPath: "/info",
  },
  /*{
    cardTitle: "Beca\nFundador",
    rearFaceText:
      "Se uno de nuestros fundadores y recibe un descuento especial en tus matrículas mensuales hasta finalizar la carrera.",
    cardImage: becaTrabajo,
    redirectPath: "/",
  },*/
  {
    cardTitle: "Beca\nFamiliar",
    rearFaceText:
      "Comparte tu crecimiento con tus familiares, a través de esta beca se accede a un descuento especial en la mensualidad de tus seres queridos.",
    cardImage: becaSocial,
    redirectPath: "/info",
  },
];

const introParagraph =
  "Nos comprometemos a formarte como un profesional técnico listo para el mundo real, con habilidades prácticas, valores sólidos y la actitud para marcar la diferencia. Aquí, tu talento y tus ganas de aprender se combinan con una formación de calidad que une teoría y práctica, ayudándote a crecer rápido y construir tu propio futuro.";

const OfertaAcademicaPage = () => {
  return (
    <main className="text-gray-700">
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <p className={`px-10 ${robotoSerif.className}`}>{introParagraph}</p>
        {/* Técnico Superior */}
        <section className="mb-12" data-aos="fade-up" data-aos-duration="900">
          <SectionTitle size={7} title="TÉCNICO SUPERIOR" />
          <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {tecnicosSuperiores.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                data-aos-duration="800"
              >
                <Card
                  cardTitle={item.cardTitle}
                  carDescription={item.carDescription}
                  cardImage={item.cardImage}
                  variant="news"
                  redirectPath={item.redirectPath}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Técnico Medio */}
        <section>
          <SectionTitle
            size={7}
            title="TÉCNICO MEDIO"
            data-aos-delay="100"
            data-aos-duration="900"
          />
          <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {tecnicosMedios.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                data-aos-duration="800"
              >
                <Card
                  cardTitle={item.cardTitle}
                  carDescription={item.carDescription}
                  cardImage={item.cardImage}
                  variant="news"
                  redirectPath={item.redirectPath}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Becas */}
        <section
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <SectionTitle size={2} title="ACCEDE A NUESTRAS BECAS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4">
            {becas.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                data-aos-duration="800"
              >
                <Card
                  cardTitle={item.cardTitle}
                  rearFaceText={item.rearFaceText}
                  cardImage={item.cardImage}
                  variant="beca"
                  redirectPath={item.redirectPath}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OfertaAcademicaPage;
