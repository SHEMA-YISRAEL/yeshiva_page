import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { geistMono, roboto, robotoSerif } from "@/app/services/fonts";

export const metadata: Metadata = {
  title: "Yeshiva - Shema Yisrael",
  description: "Instituto Tecnológico Alianza",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`
          relative min-h-screen antialiased
          bg-neutral-200
          ${roboto.variable} ${geistMono.variable} ${robotoSerif.variable}
        `}
      >
        <Navbar />
        <main className="flex flex-col min-h-[70vh]">{children}</main>
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <Link
          href="https://wa.me/59176420527?text=Hola%2C%20quisiera%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-6 md:right-14 z-50 bg-yellow-400 hover:text-yellow-200 hover:bg-yellow-400 text-blue-950 p-4 rounded-full shadow-lg transition-all duration-300 animate-float"
          aria-label="Contáctanos por WhatsApp"
        >
          <FaWhatsapp size={28} />
        </Link>
      </body>
    </html>
  );
}
