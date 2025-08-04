import Image from 'next/image';
import Link from 'next/link';

import bgFooter from '../../public/bg-footer.svg';
import logoFooter from '../../public/footer/logoFooter.png'

import {
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram
} from 'react-icons/fa';

// --- Constantes para links y redes ---
const SERVICES_LINKS = [
  { label: 'Contáctanos', href: '/info' },
  { label: 'Eventos', href: '/' },
  { label: 'Noticias', href: '/' },
];

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61572773797188&locale=es_LA', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/yeshiva.cochabamba?utm_source=ig_web_button_share_sheet&igsh=MmppNWFyczRyN3Vn', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@yeshiva.cochabamba?_t=ZM-8xdkhusjRGq&_r=1', label: 'TikTok' },
  //{ icon: FaLinkedinIn, href: 'https://www.linkedin.com/feed/', label: 'Linkedin' },
];

const CONTACTS = [
  {
    icon: FaPhoneAlt,
    label: 'WhatsApp',
    value: '+591 76420527',
    href: 'https://wa.me/59176420527',
    isLink: true,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'administración@shemayisrael.com',
    href: 'mailto:administración@shemayisrael.com',
    isLink: true,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Dirección',
    value: (
      <>
        Av. Sexta s/n casi esquina Av. Blanco Galindo Km 5,5 (zona Coña Coña)
      </>
    ),
    href: 'https://maps.app.goo.gl/THNj8FsY6HqvtwTB8',
    isLink: true,
  }
];

// --- Componente principal ---
const Footer = () => (
  <div className="relative w-full text-[#1B3863] ">      
      <Image
        src={bgFooter}
        alt="Footer Background" 
        className="absolute object-cover h-full w-full z-0"
      />      
      <div className="absolute inset-0 bg-opacity-60 z-10"></div>      
      <div className='relative z-10'>
        <div className="flex justify-center">
          <Image
            src={logoFooter}
            alt='Logo Yeshiva'
            //width={100}
            className='w-2/3 sm:w-2/3 md:w-1/3 mt-25 md:mt-20 xl:mt-15'
          />
          {/* <h2 className="text-6xl sm:text-5xl md:text-8xl lg:text-8xl font-bold text-center uppercase mb-6 leading-tight">
            Yeshiva
          </h2>
          <p className="text-center text-3xl  uppercase">
            Instituto Tecnológico
          </p>  */}
        </div>
        <hr className="border-gray-600 w-[90%] mx-auto my-6" />
        <div className="text-[#1B3863] max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
    
          {/* Servicios */}
          <nav aria-label="Servicios">
            <ul className="space-y-3 font-medium text-lg">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Redes Sociales */}
            <div className="">
              <h3 className="font-medium text-lg">Síguenos en:</h3>
              <div className="flex space-x-4 mt-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#EEB90A] bg-[#1B3863] rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition shadow-md"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div> 
          {/* Contacto y redes sociales */}
          <div>
            <ul className="space-y-4 text-sm">
              {CONTACTS.map(({ icon: Icon, label, value, href, isLink }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon size={16}  aria-hidden="true" />
                  {isLink ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      aria-label={label}
                    >
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    
  </div>
      
);
export default Footer;
