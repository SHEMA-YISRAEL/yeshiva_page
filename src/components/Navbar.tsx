'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import yeshivaLogo from '../../public/img/yeshivaLogoColor.svg'; 

import Header from './main/Header';
//import imageStudent from '../../public/student_portait.png';
import studentsGroup from '../../public/students.png';
import bgNavbar from '../../public/papelBg.svg';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Yeshiva', href: '/about' },
  { name: 'Oferta Académica', href: '/academic' },
  // { name: 'Noticias', href: '/notices' },
  { name: 'Información', href: '/info' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md relative">
      <Image
        src={bgNavbar}
        alt="Footer Background" 
        className="absolute object-cover bg-[#EEB90A] h-full w-full -z-2"
      />
      <div className="max-w-7xl mx-auto flex px-6 py-7 justify-between items-center z-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src={yeshivaLogo}
            alt="Logo del Instituto"
            className="h-17 w-full"
          />
        </Link>
        {/* Botón para abrir/cerrar menú móvil */}
        <button
          className="md:hidden text-[#1B3863] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 text-xl font-medium text-white items-center">
          {navItems.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                href={href}
                className={`${
                  pathname === href ? 'font-bold text-[#204378]' : 'text-[#1B3863]'
                } hover:text-yellow-200 transition-colors duration-200`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil deslizante desde la derecha */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-[#1B3863] text-white  duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0 mb-500' : 'translate-x-full'
        } md:hidden shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ×
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-6 text-lg font-medium">
          {navItems.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  pathname === href ? 'text-yellow-300' : 'text-white'
                } hover:text-yellow-200 transition-colors duration-200`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    <Header
        overlayImage={studentsGroup}
        overlayAlt="Estudiante repasando"
      />  
    </nav>
  );
}