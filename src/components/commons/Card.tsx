"use client";
import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GoArrowRight } from 'react-icons/go';

interface CardProps {
  cardTitle: string;
  carDescription?: string;
  cardImage?: StaticImageData | string;
  date?: string;
  variant: 'news' | 'otherNotices' | 'event' | 'beca' | 'newsmainpage';
}

const variantStyles = {
  news: {
    height: 'h-100',
    titleSize: 'text-2xl',
    showDescription: true,
    showDate: false,
    showButton: true,
    enableFlip: true,
  },
  event: {
    height: 'h-75',
    titleSize: 'text-2xl',
    showDescription: true,
    showDate: true,
    showButton: true,
    enableFlip: false,
  },
  otherNotices: {
    height: 'aspect-square',
    titleSize: 'text-base',
    showDescription: false,
    showDate: false,
    showButton: false,
    enableFlip: false,
  },
  beca: {
    height: 'aspect-square',
    titleSize: 'text-2xl',
    showDescription: false,
    showDate: false,
    showButton: true,
    enableFlip: false,
  },
  newsmainpage: {
    height: 'h-75',
    weight: 'w-150',
    titleSize: 'text-xl',
    showDescription: true,
    showDate: false,
    showButton: true,
    enableFlip: false,
  },
};

const Card: FC<CardProps> = ({
  cardTitle,
  carDescription,
  cardImage,
  date,
  variant,
}) => {
  const {
    height,
    titleSize,
    showDescription,
    showDate,
    showButton,
    enableFlip,
  } = variantStyles[variant];

  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative p-3 m-2 rounded-2xl overflow-hidden shadow-1xl ${height} perspective`}
      onMouseEnter={() => enableFlip && setFlipped(true)}
      onMouseLeave={() => enableFlip && setFlipped(false)}
    >
      <div className={`flip-card-inner w-full h-full ${enableFlip && flipped ? "is-flipped" : ""}`}>
        {/* Cara frontal */}
        <div className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden shadow-xl">
          {cardImage && (
            <Image
              src={cardImage}
              alt="Card image"
              fill
              className="object-cover brightness-50"
            />
          )}
          <div className="absolute bottom-5 left-5 pr-9">
            <div className={`font-bold text-white ${titleSize}`}>{cardTitle}</div>
            {showDescription && (
              <div className="text-white text-sm">
                {showDate && date && <div className="text-yellow-400">{date}</div>}
                {carDescription}
              </div>
            )}
          </div>
          {showButton && (
            <button className="absolute bottom-5 right-5 bg-yellow-500 rounded-full p-2 text-3xl">
              <GoArrowRight />
            </button>
          )}
        </div>
        {/* Cara trasera */}
        <div className="flip-card-back absolute w-full h-full rounded-2xl overflow-hidden bg-[#1B3863] flex flex-col items-center justify-center text-amber-50 p-6">
          {/* Aquí puedes personalizar la info del reverso según variante */}
          <div className="font-bold text-xl mb-2 text-center">
            {variant === "beca" ? "¡Aprovecha tu oportunidad!" : ""}
          </div>
          <div className="text-base text-center mb-2">
            {/* Ejemplo de info diferente */}
            {variant === "news" && (
              <>
                <div className="mb-2 text-xl  font-bold ">{cardTitle}</div>
                <div>{carDescription}</div>
              </>
            )}
            {variant === "event" && (
              <>
                <div className="mb-1">{cardTitle}</div>
                <div>{date && <div className="text-yellow-800 font-semibold mb-1">{date}</div>}</div>
                <div>{carDescription}</div>
              </>
            )}
            {variant === "beca" && (
              <div>Solicita tu beca exclusiva en Yeshiva hoy mismo.</div>
            )}
            {/* Puedes personalizar para otros variants */}
          </div>
          {showButton && (
            <button className="mt-3 px-4 py-2 rounded bg-yellow-400 text-[#1B3863] font-bold">
              {variant === "beca" ? "Solicitar" : "Ver detalle"}
            </button>
          )}
        </div>
      </div>
      {/* CSS para el flip */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1);
          transform-style: preserve-3d;
        }
        .is-flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Card;
