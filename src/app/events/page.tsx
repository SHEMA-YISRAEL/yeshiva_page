import React from 'react';
import SectionTitle from '@/components/commons/SectionTitle';
import Card from '@/components/commons/Card';
import evento1 from '../../../public/events/ImgEv.png';

import Image from "next/image";
import imageInfo from '../../../public/eventsBg.svg'

const eventos = [
  {
    cardTitle: 'Curso práctico de inyectables',
    carDescription: 'Prácticas del uso de inyectables en pacientes',
    cardImage: evento1,
  },
  {
    cardTitle: 'Rueda de negocios ICAM',
    carDescription: 'Un taller intensivo para aprender fundamentos.',
    cardImage: evento1,
  },
  {
    cardTitle: 'Actividad del Día del Peatón',
    carDescription: 'Paseo en bicicleta por el Día del Peatón.',
    cardImage: evento1,
  },
];

const filtros = ['Fecha', 'Tipo', 'Área'];

const EventosPage = () => {
  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera */}
      <div className="relative w-full h-[30vh] md:h-[50vh]">
        <Image
          alt="Portada"
          src={imageInfo}
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* Título y filtros */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <SectionTitle size={2} title="PRÓXIMOS EVENTOS" />
          <div className="flex flex-wrap gap-2">
            {filtros.map((filtro) => (
              <button
                key={filtro}
                className="px-4 py-1 text-sm font-bold text-blue-950 bg-white border-2 border-blue-950 rounded-lg hover:bg-blue-900 hover:text-white transition"
              >
                {filtro}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjetas de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventos.map((evento, index) => (
            <Card
              key={index}
              cardTitle={evento.cardTitle}
              carDescription={evento.carDescription}
              cardImage={evento.cardImage}
              date='09/05/2025'
              variant='event'
              redirectPath=''
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventosPage;
