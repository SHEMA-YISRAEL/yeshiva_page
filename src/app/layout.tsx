import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { geistSans, geistMono, roboto, robotoSerif, } from "@/app/services/fonts";

export const metadata: Metadata = {
  title: "Yeshiva - Shema Yisrael",
  description: "Instituto Tecnológico Alianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative bg-neutral-200 min-h-screen ${roboto.variable} ${geistMono.variable} ${robotoSerif.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        {/* Botón flotante de WhatsApp */}
        <Link
          href="https://wa.me/59176420527?text=Hola%2C%20quisiera%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-30 right-10 md:right-21 md:bottom-15  z-50 bg-yellow-500 hover:text-yellow-200 hover:bg-yellow-400 text-blue-950 p-4 rounded-full shadow-lg transition-all duration-300 animate-float"
        >
          <FaWhatsapp size={28} />
        </Link>
      </body>
    </html>
  );
}