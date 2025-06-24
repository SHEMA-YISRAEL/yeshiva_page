import Image, { StaticImageData } from "next/image";
import "aos/dist/aos.css";

type HeaderProps = {
  overlayImage: StaticImageData | string;
  overlayAlt?: string;
};

const Header = ({
  overlayImage,
  overlayAlt = "Decorativo"
}: HeaderProps) => (
  <div className="relative w-full h-[30vh] md:h-[70vh] flex items-stretch overflow-hidden">
    {/* Overlay (imagen decorativa derecha) */}
    <div className="absolute right-0 bottom-0 top-0 h-full w-full flex items-center justify-end z-20 pointer-events-none">
      <div className="relative h-full w-full max-w-[70vw]"
        data-aos="zoom-out"
        data-aos-duration="1800">
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
    <div className="relative z-30 h-full flex items-center md:items-end ml-center md:ml-0">
    <div className="px-4 ml-5 sm:px-8 md:pl-12 pb-10 md:pb-16 lg:ml-84 max-w-xl w-full md:mb-70">
        <h1 className="text-2xl md:text-6xl lg:text-8xl font-extrabold text-[#204378] tracking-tight uppercase leading-none drop-shadow-sm">
        EDUCACIÓN
        </h1>
        <h2 className="text-xs md:text-3xl lg:text-5xl font-semibold text-white mt-2 tracking-widest uppercase">
        CON PROPÓSITO
        </h2>
    </div>
    </div>
  </div>
);

export default Header;
