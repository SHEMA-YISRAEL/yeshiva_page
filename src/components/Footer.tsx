import Image from 'next/image';
import Link from 'next/link';
import yeshivaLogo from '../../public/img/yeshivaLogoColor.svg'; 

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

// --- Constantes para links y redes ---
const SERVICES_LINKS = [
  { label: 'Eventos', href: '/events' },
  { label: 'Noticias', href: '/notices' },
  { label: 'Contáctanos', href: '/info' },
];

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/yeshivaisraelcochabamba', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/yeshivaisraelcochabamba', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@yeshivaisraelcochabamba', label: 'TikTok' },
];

const CONTACTS = [
  {
    icon: FaPhoneAlt,
    label: 'WhatsApp',
    value: '76420527',
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
];

const ADDRESS = {
  icon: FaMapMarkerAlt,
  label: 'Dirección',
  value: (
    <>
      Torres América Norte, planta baja, of. 2<br />
      Av. América entre Av. Pando y Av. M. Urquidi
    </>
  ),
};

// --- Componente principal ---
const Footer = () => (
  <footer className="bg-blue-950 text-white mt-12">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Logo */}
      <div className="flex items-start justify-start">
        <Link href="/" aria-label="Inicio">
          <Image
            src={yeshivaLogo}
            alt="Logo del Instituto Yeshivá"
            width={180}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Servicios */}
      <nav aria-label="Servicios">
        <h3 className="text-lg font-bold uppercase mb-6">Servicios</h3>
        <ul className="space-y-3 text-sm text-amber-300">
          {SERVICES_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contacto y redes sociales */}
      <div>
        <h3 className="text-lg font-bold uppercase mb-6">Contáctanos</h3>
        <ul className="space-y-4 text-sm">
          {CONTACTS.map(({ icon: Icon, label, value, href, isLink }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon size={16} className="text-white" aria-hidden="true" />
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
          <li className="flex items-start gap-3">
            <ADDRESS.icon size={18} className="text-white mt-1" aria-hidden="true" />
            <span>{ADDRESS.value}</span>
          </li>
        </ul>

        {/* Redes Sociales */}
        <div className="flex space-x-4 mt-6">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-blue-950 border border-yellow-400 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition shadow-md"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Línea divisora */}
    <hr className="border-gray-600 w-[90%] mx-auto my-6" />

    {/* Derechos reservados */}
    <div className="text-center text-sm text-gray-300 pb-6">
      &copy; {new Date().getFullYear()} Instituto Yeshivá. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
