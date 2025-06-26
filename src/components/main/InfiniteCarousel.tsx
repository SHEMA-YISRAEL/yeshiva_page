'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '../commons/Card';
import imageDoctor from '../../../public/img/medico.jpg';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const baseCards = [
  {
    careerName: 'Enfermería',
    description: 'Licenciatura en auxiliar de enfermería',
    image: imageDoctor,
  },
  {
    careerName: 'Emergencias médicas',
    description: 'Técnico superior en emergencias y urgencias',
    image: imageDoctor,
  },
  {
    careerName: 'Terapia Física',
    description: 'Licenciatura en rehabilitación y fisioterapia',
    image: imageDoctor,
  },
  {
    careerName: 'Nutrición',
    description: 'Técnico superior en nutrición y dietética',
    image: imageDoctor,
  },
];

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Responsive visible cards
  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    return 3;
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards());
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Infinite effect
  const cards = [...baseCards, ...baseCards.slice(0, visibleCards)];
  const totalSlides = baseCards.length-1;

  // Elimina el auto-avance para solo manual (si quieres auto, descomenta este bloque)
  
  /*useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCards, currentSlide]);
  */
  //loop carrusel infinito

  // Reset para loop infinito
  useEffect(() => {
    if (currentSlide === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide, totalSlides]);



  // Función para slide manual
  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  return (
    <div className="w-full overflow-hidden my-5 relative">
      {/* Flecha Izquierda */}
      <button
        className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 rounded-full shadow p-2 text-3xl text-blue-900 transition"
        onClick={prevSlide}
        aria-label="Anterior"
        style={{ left: 8 }}
      >
        <IoChevronBack />
      </button>

      {/* Carrusel */}
      <div className="relative">
        <div
          ref={containerRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            width: `${(cards.length / visibleCards) * 100}%`,
            transform: `translateX(-${(100 / cards.length) * currentSlide * visibleCards}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                width: `${100 / cards.length}%`,
              }}
              className="flex-shrink-0 px-2"
            >
              <Card
                cardTitle={card.careerName}
                carDescription={card.description}
                cardImage={card.image}
                variant='news'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Flecha Derecha */}
      <button
        className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 rounded-full shadow p-2 text-3xl text-blue-900 transition"
        onClick={nextSlide}
        aria-label="Siguiente"
        style={{ right: 8 }}
      >
        <IoChevronForward />
      </button>

      {/* Indicadores clickeables */}
      <div className="flex justify-center mt-4 space-x-2">
        {baseCards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide % totalSlides ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
