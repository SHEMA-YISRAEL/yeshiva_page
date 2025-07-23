'use client'

import SectionTitle from "../commons/SectionTitle";
import InfiniteCarousel from "./InfiniteCarousel";

const AcademicOffer = () => {
  const academicOffer = [''];

  return (
    <div className="px-3 sm:px-3 lg:px-5">
      <SectionTitle size={4} title="OFERTA ACADÉMICA" linkTo="/academic" />

      {/* <div className="mt-8 mb-6 space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
        {academicOffer.map((el, id) => (
          <div key={id} className="relative inline-block mr-3 sm:mr-6">
            <h2 className="text-slate-900 text-xl sm:text-2xl font-bold">{el}</h2>
            <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
          </div>
        ))}
      </div> */}

      {/* Línea divisoria decorativa
      <div className="h-0.5 bg-neutral-300 rounded-full mb-8" />
      */}
      

      {/* Carrusel responsivo */}
        <InfiniteCarousel />
    </div>
  );
};

export default AcademicOffer;
