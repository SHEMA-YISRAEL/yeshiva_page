import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "aos/dist/aos.css";

import { roboto } from "@/util/fonts";

type HeaderProps = {
  overlayImage: StaticImageData | string;
  overlayAlt?: string;
};

const phrases = [
  "CON PROPÓSITO",
  "CON VALORES",
  "CON EXCELENCIA"
];

const Header = ({
  overlayImage,
  overlayAlt = "Decorativo"
}: HeaderProps) => {
  // Frase animada
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30vh] md:h-[70vh] flex items-stretch overflow-hidden">
      {/* Overlay (imagen decorativa derecha) */}
      <div className="absolute right-0 bottom-0 top-0 h-full w-full flex items-center justify-end z-20 pointer-events-none">
        <div
          className="relative h-full w-full max-w-[70vw]"
          data-aos="zoom-out"
          data-aos-duration="1800"
        >
          <Image
            src={overlayImage}
            alt={overlayAlt}
            fill
            className="object-contain md:ml-12 ml-7"
            draggable={false}
            priority
          />
        </div>
      </div>

      {/* Mensaje a la izquierda */}
      <div className={`relative z-30 h-full flex items-start md:items-end ${roboto.className}`}>
        <div className="px-4 ml-5 sm:px-8 md:pl-1 pb-10 md:pb-16 lg:ml-84 max-w-xl w-full md:mb-70">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#204378] tracking-tight uppercase leading-none drop-shadow-sm">
            EDUCACIÓN
          </h1>
          <div className="relative h-[2.4em] mt-2">
            <AnimatePresence mode="wait">
              <motion.h3
                key={phrases[index]}
                className="absolute left-0 top-0 w-full text-2xl sm:text-xs md:text-2xl lg:text-5xl font-semibold text-white tracking-tight uppercase"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 36 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[index]}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
