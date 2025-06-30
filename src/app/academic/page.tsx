"use client";
import { useEffect } from "react";
import SectionTitle from '@/components/commons/SectionTitle';
import Card from '@/components/commons/Card';
import imageUrgencias from '../../../public/urgencias.png';
import imageLaboratorio from '../../../public/laboratorio.png';
import imageNutricion from '../../../public/nutricion.png';
import imageEnfermeria from '../../../public/enfermeria.png';
import oferta1 from '../../../public/academicOffers/academic.png';

import "aos/dist/aos.css";

const tecnicosSuperiores = [
  {
    cardTitle: 'Técnico superior en emergencias y urgencias',
    carDescription: 'Formación profesional con prácticas clínicas en hospitales.',
    cardImage: imageUrgencias,
  },
  {
    cardTitle: 'Técnico Superior Laboratorio de Anatomía Patológica',
    carDescription: 'Ayuda en el diagnóstico de enfermedades.',
    cardImage: imageLaboratorio,
  },
];

const tecnicosMedios = [
  {
    cardTitle: 'Técnico Medio Nutrición y Dietética',
    carDescription: 'Brinda apoyo en tratamientos nutricionales con buenos hábitos alimenticios. ',
    cardImage: imageNutricion,
  },
  {
    cardTitle: 'Técnico Medio Enfermería',
    carDescription: 'Prepárate para brindar atención integral a los pacientes, participando en la prevención, recuperación y rehabilitación.',
    cardImage: imageEnfermeria,
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
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* Técnico Superior */}
        <section className="mb-12" data-aos="fade-up" data-aos-duration="900">
          <SectionTitle size={2} title="TÉCNICO SUPERIOR" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
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
