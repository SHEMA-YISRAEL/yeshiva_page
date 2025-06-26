"use client";
// import { useEffect } from "react";
import SectionTitle from '@/components/commons/SectionTitle';
import Card from '@/components/commons/Card';
import oferta1 from '../../../public/academicOffers/academic.png';
// import Image from "next/image";
// import imageAcademic from '../../../public/academicBg.svg';
// import AOS from "aos";
import "aos/dist/aos.css";

const tecnicosSuperiores = [
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
  {
    cardTitle: 'Técnico Superior en Bioquímica',
    carDescription: 'Especialízate en análisis clínicos de laboratorio.',
    cardImage: oferta1,
  },
];

const tecnicosMedios = [
  {
    cardTitle: 'Técnico Medio en Farmacia',
    carDescription: 'Aprende sobre medicamentos, recetas y gestión farmacéutica.',
    cardImage: oferta1,
  },
  {
    cardTitle: 'Técnico Medio en Nutrición',
    carDescription: 'Formación básica sobre alimentación saludable y dietética.',
    cardImage: oferta1,
  },
  {
    cardTitle: 'Técnico Medio en Radiología',
    carDescription: 'Operación de equipos de imagen médica.',
    cardImage: oferta1,
  },
  {
    cardTitle: 'Técnico Medio en Bioquímica',
    carDescription: 'Especialízate en análisis clínicos',
    cardImage: oferta1,
  },
];

const becas = [
  {
    cardTitle: 'Beca de Excelencia Académica',
    carDescription: 'Para estudiantes con rendimiento destacado.',
    cardImage: oferta1,
  },
  {
    cardTitle: 'Beca Trabajo',
    carDescription: 'Dirigida a estudiantes con recursos económicos limitados.',
    cardImage: oferta1,
  },
  {
    cardTitle: 'Beca Social',
    carDescription: 'Apoyo a estudiantes con capacidades diferentes.',
    cardImage: oferta1,
  },
];

const OfertaAcademicaPage = () => {
  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera 
      <div className="relative w-full h-[30vh] md:h-[50vh]"data-aos="fade-in">
        <Image
          alt="Portada"
          src={imageAcademic}
          fill
          className="object-cover brightness-50"
        />
      </div>*/}

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* Técnico Superior */}
        <section className="mb-12" data-aos="fade-up" data-aos-duration="900">
          <SectionTitle size={2} title="TÉCNICO SUPERIOR" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
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
                  variant='news'
                />
              </div>
            ))}
          </div>
        </section>

        {/* Técnico Medio */}
        <section>
          <SectionTitle size={2} title="TÉCNICO MEDIO" data-aos-delay="100" data-aos-duration="900"/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
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
                  variant='news'
                />
              </div>
            ))}
          </div>
        </section>

        {/* Becas */}
        <section data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
          <SectionTitle size={2} title="ACCEDE A NUESTRAS BECAS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {becas.map((item, index) => (
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
                  variant='beca'
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
