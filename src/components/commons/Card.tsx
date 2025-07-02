"use client";
import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

interface CardProps {
  cardTitle: string;
  carDescription?: string;
  rearFaceText?:string;
  cardImage?: StaticImageData | string;
  date?: string;
  variant: 'news' | 'otherNotices' | 'event' | 'beca' | 'newsmainpage' | "relatedCareer";
  redirectPath:string
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
  relatedCareer:{
    height: 'h-75',
    weight: 'w-full',
    titleSize: 'text-xl',
    showDescription: true,
    showDate: false,
    showButton: true,
    enableFlip: false,
  }
};

const Card: FC<CardProps> = ({
  cardTitle,
  carDescription,
  cardImage,
  rearFaceText,
  date,
  variant,
  redirectPath
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
      className={`relative  rounded-2xl shadow-1xl ${height} ${variant==="relatedCareer"? "" : ""} perspective`}
      onMouseEnter={() => enableFlip && setFlipped(true)}
      onMouseLeave={() => enableFlip && setFlipped(false)}
    >
      <div className={`flip-card-inner w-full h-full ${enableFlip && flipped ? "is-flipped" : ""}`}>
        {/* Cara frontal */}
        <div className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden">
          {cardImage && (
            <Image
              src={cardImage}
              alt="Card image"
              fill
              className="object-cover brightness-50"
            />
          )}
          <div className="w-4/5 absolute bottom-5 left-5 pr-9">
            <div className={`font-bold text-white ${titleSize}`}>{cardTitle}</div>
            {showDescription && (
              <div className="text-white text-sm">
                {showDate && date && <div className="text-yellow-400">{date}</div>}
                {carDescription}
              </div>
            )}
          </div>
          {showButton && (
            <button className="absolute  bottom-5 right-6 bg-yellow-500 rounded-full p-2 text-3xl cursor-pointer">
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
                <div className="mb-2 text-xl font-bold uppercase ">{cardTitle}</div>
                <div className='italic'>{rearFaceText}</div>
        
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
            <Link href={redirectPath}>
              <button 
                className="cursor:pointer mt-3 px-4 py-2 rounded bg-yellow-400 text-[#1B3863] font-bold"
                onClick={()=>(console.log(''))}
                >
                {variant === "beca" ? "Solicitar" : "Ver detalle"}
              </button>
            </Link>
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
