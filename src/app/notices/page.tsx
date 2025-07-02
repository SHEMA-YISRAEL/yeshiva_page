'use client';
import React, { useState } from 'react';
import SectionTitle from '@/components/commons/SectionTitle';
import Card from '@/components/commons/Card';
import noticiaImg from '../../../public/notices/news.png';
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";

import Image from "next/image";
import imageNotices from '../../../public/newsBg.svg'

// import AOS from "aos";
import "aos/dist/aos.css";

const loMasReciente = [
  {
    cardTitle: 'Nuevo convenio con hospital regional',
    carDescription: 'El instituto firmó un acuerdo con el hospital regional para prácticas profesionales.',
    cardImage: noticiaImg,
    redirectPath: '/'
  },
  {
    cardTitle: 'Reconocimiento del Ministerio de Educación',
    carDescription: 'ICAM recibió reconocimiento por su labor educativa en el área de salud.',
    cardImage: noticiaImg,
    redirectPath: '/'
  },
  {
    cardTitle: 'Semana del Estudiante',
    carDescription: 'Actividades recreativas, deportivas y académicas para celebrar a nuestros estudiantes.',
    cardImage: noticiaImg,
    redirectPath: '/',
  },
];

const otrasNoticias = [
    {
      cardTitle: 'Nuevo diplomado en enfermería pediátrica',
      carDescription: 'ICAM lanza un programa de especialización para atención infantil avanzada.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Estudiantes destacan en olimpiadas científicas',
      carDescription: 'Nuestros alumnos obtuvieron los primeros puestos a nivel nacional.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Taller de primeros auxilios abierto al público',
      carDescription: 'Aprende técnicas básicas de atención en emergencias.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'ICAM recibe visita de embajada canadiense',
      carDescription: 'Buscan establecer convenios de intercambio académico.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Exposición de proyectos de investigación 2025',
      carDescription: 'Los estudiantes presentaron avances significativos en salud pública.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Nueva biblioteca digital en ICAM',
      carDescription: 'Miles de libros disponibles para estudiantes y docentes.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Campaña de donación de sangre',
      carDescription: 'Se recolectaron más de 150 unidades en colaboración con hospitales locales.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'ICAM participa en simulacro nacional de sismo',
      carDescription: 'Capacitación práctica para actuar ante desastres naturales.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Programa de becas ampliado para 2025',
      carDescription: 'Nuevas oportunidades para estudiantes destacados de bajos recursos.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Inauguración del laboratorio de microbiología',
      carDescription: 'Espacio equipado para análisis clínicos y formación científica.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Jornada de salud comunitaria en barrios periféricos',
      carDescription: 'Estudiantes brindan atención gratuita en zonas vulnerables.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Concurso de ensayos sobre salud mental',
      carDescription: 'Fomento a la reflexión crítica y propuestas de mejora.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Seminario sobre liderazgo en enfermería',
      carDescription: 'Profesionales comparten experiencias para guiar a nuevas generaciones.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Convenio con universidad brasileña',
      carDescription: 'Facilitará el intercambio de estudiantes de medicina.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Proyecto de reciclaje en el campus',
      carDescription: 'Compromiso institucional con el medio ambiente.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Curso intensivo de lengua de señas',
      carDescription: 'Capacitación inclusiva para atención a personas con discapacidad auditiva.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Maratón ICAM 10K',
      carDescription: 'Actividad deportiva que promueve la salud y el compañerismo.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'ICAM colabora con campañas de vacunación infantil',
      carDescription: 'Apoyo a programas nacionales de inmunización.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Ciclo de cine y salud pública',
      carDescription: 'Reflexiones a través del arte sobre desafíos sanitarios.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
    {
      cardTitle: 'Curso gratuito de nutrición comunitaria',
      carDescription: 'Enseñanza práctica para mejorar la alimentación en sectores rurales.',
      cardImage: noticiaImg,
      redirectPath: '/'
    },
  ];  

const ITEMS_PER_PAGE = 8;

const NoticiasPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(otrasNoticias.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNoticias = otrasNoticias.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera */}
      <div className="relative w-full h-[30vh] md:h-[50vh]">
        <Image
          alt="Portada"
          src={imageNotices}
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* Lo Más Reciente */}
        <section className="mb-12" data-aos="fade-up" data-aos-duration="1200" >
          <SectionTitle size={2} title="LO MÁS RECIENTE" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {loMasReciente.map((item, index) => (
              <Card
                key={index}
                cardTitle={item.cardTitle}
                carDescription={item.carDescription}
                cardImage={item.cardImage}
                variant="news"
                redirectPath={item.redirectPath}
              />
            ))}
          </div>
        </section>

        {/* Otras Noticias con Paginación */}
        <section data-aos="zoom-in" data-aos-duration="1200">
          <SectionTitle size={2} title="OTRAS NOTICIAS"/>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
            {currentNoticias.map((item, index) => (
              <Card
                key={index}
                cardTitle={item.cardTitle}
                cardImage={item.cardImage}
                variant="otherNotices"
                redirectPath={item.redirectPath}
              />
            ))}
          </div>

        {/* Controles de paginación */}
        <div className="flex justify-center mt-6 space-x-2">
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-blue-900 text-blue-900 rounded-l-lg hover:bg-blue-900 hover:text-white disabled:opacity-50 flex items-center justify-center"
            >
                <TfiControlBackward />
            </button>
        {Array.from({ length: totalPages }, (_, i) => (
            <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                ? 'bg-blue-900 text-white rounded-lg'
                : 'border-blue-900 text-blue-900 hover:bg-blue-100 rounded-lg'
            }`}
            >
            {i + 1}
            </button>
        ))}
            <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-blue-900 text-blue-900 rounded-r-lg hover:bg-blue-900 hover:text-white disabled:opacity-50 flex items-center justify-center"
            >
                <TfiControlForward />
            </button>
        </div>
        </section>
      </div>
    </main>
  );
};

export default NoticiasPage;
