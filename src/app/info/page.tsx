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
    title: 'Blanco galindo',
    address: 'Av. Sexta s/n casi esquina Av. Blanco Galindo Km 5,5 (zona Coña Coña)',
  },
];

/*const officeHours = [
  'Lunes a Viernes: 08:30 - 12:30 / 14:00 - 19:30 hrs',
  'Sábados: 08:00 - 12:30 hrs',
];*/

const InformacionPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <main className="text-gray-700">
      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Dirección */}
          <div className="mb-5" data-aos="fade-left" data-aos-duration="1200"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" data-aos="fade-left" data-aos-duration="1200">
            {/* Columna izquierda: Información */}
            <div>
              <section data-aos="fade-up" data-aos-duration="1200">
                <div className='mb-5'><SectionTitle size={2} title="Contacto" /></div>
                <p className="text-justify leading-relaxed">Administración</p>
                <ul className="list-disc list-inside mt-4 mb-8 space-y-2">
                  <li><strong>Teléfono:</strong> {contactInfo.phone}</li>
                  <li><strong>Email:</strong> {contactInfo.email}</li>
                </ul>
              </section>
              <div className='mb-5'><SectionTitle size={2} title="Ubicación" /></div>
              {locations.map(({ title, address }, index) => (
                <div key={index} className="mb-6">
                  <p className="font-bold leading-relaxed mb-2">{title}:</p>
                  <p className="font-medium">{address}</p>
                </div>
              ))}
            </div>

            {/* Columna derecha: Mapa */}
            <div data-aos="flip-left" data-aos-duration="900">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d524.1311354462092!2d-66.20773421008533!3d-17.39291645822974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1753194106299!5m2!1ses!2sbo" width="600" height="450" loading="lazy" ></iframe> 
            </div>
          </div>
        {/* Horarios 
        <section data-aos="flip-up" data-aos-duration="1200">
          <div className='mb-5'><SectionTitle size={2} title="Horarios de atención" /></div>
          <ul className="list-disc list-inside space-y-1">
            {officeHours.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </section>*/}
      </div>
    </main>
  );
};

export default InformacionPage;
