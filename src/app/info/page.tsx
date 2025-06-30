"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import SectionTitle from '@/components/commons/SectionTitle';


const contactInfo = {
  phone: '+591 77418638',
  email: 'administración@shemayisrael.com',
};

const locations = [
  {
    title: 'Zona norte',
    address: 'Av. América #839 entre Pando y Melchor Urquidi, Edif. Torres América Norte (Lado Ic Norte)',
  },
  {
    title: 'Blanco galindo',
    address: 'Av. Sexta s/n casi esquina Av. Blanco Galindo Km 5,5 (zona Coña Coña)',
  },
];

const officeHours = [
  'Lunes a Viernes: 08:30 - 12:30 / 14:00 - 19:30 hrs',
  'Sábados: 08:00 - 12:30 hrs',
];

const InformacionPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <main className="text-gray-700">
      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* Contacto */}
        <section data-aos="fade-up" data-aos-duration="1200">
          <div className='mb-5'><SectionTitle size={2} title="Contacto" /></div>
          <p className="text-justify leading-relaxed">Administración</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Teléfono:</strong> {contactInfo.phone}</li>
            <li><strong>Email:</strong> {contactInfo.email}</li>
          </ul>
        </section>

        {/* Dirección */}
        <section>
          <div className="mb-5" data-aos="fade-left" data-aos-duration="1200">
            <SectionTitle size={2} title="Dirección" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" data-aos="fade-left" data-aos-duration="1200">
            {/* Columna izquierda: Información */}
            <div>
              {locations.map(({ title, address }, index) => (
                <div key={index} className="mb-6">
                  <p className="font-bold leading-relaxed mb-2">{title}:</p>
                  <p className="font-medium">{address}</p>
                </div>
              ))}
            </div>

            {/* Columna derecha: Mapa */}
            <div data-aos="flip-left" data-aos-duration="900">
              <iframe
                title="Ubicación Yeshiva"
                src="https://www.google.com/maps/d/embed?mid=1psC2DX3hfy8NBiEZSM-P7bBdnmrhAiE&ehbc=2E312F"
                width="100%"
                height="100%"
                className="w-full rounded-lg shadow aspect-square"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Horarios */}
        <section data-aos="flip-up" data-aos-duration="1200">
          <div className='mb-5'><SectionTitle size={2} title="Horarios de atención" /></div>
          <ul className="list-disc list-inside space-y-1">
            {officeHours.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default InformacionPage;
