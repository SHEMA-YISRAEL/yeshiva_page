"use client";
import { useEffect } from "react";
import SectionTitle from '@/components/commons/SectionTitle';
import Image from "next/image";
import imageClassRoom from '../../../public/sobreYeshivaBg.svg';
import AOS from "aos";
import "aos/dist/aos.css";

const History = () => (
  <section className="mb-12 space-y-4" data-aos="fade-up" data-aos-duration="900">
    <SectionTitle size={2} title="HISTORIA" />
    {[
      "Yeshiva es un instituto de formación tecnológica que nace con el propósito de ofrecer educación de excelencia en diversas áreas del conocimiento. No es solo un centro de aprendizaje, sino un espacio donde los estudiantes pueden desarrollar todo su potencial, fortaleciendo sus habilidades y preparándose para un futuro de éxito.",
      "Formamos parte de SHEMAYISRRAEL S.R.L., un grupo empresarial con una identidad sólida y principios bien definidos. Gracias a esto, contamos con el respaldo de unidades productivas estratégicas, como un centro médico privado, que servirá de apoyo práctico para ciertas áreas de estudio, permitiendo a nuestros estudiantes aplicar sus conocimientos en un entorno real.",
      "El nombre 'Yeshiva' proviene del contexto judío, donde tradicionalmente hace referencia a academias dedicadas al estudio profundo y estructurado del conocimiento. Esta esencia inspira nuestra metodología, en la que combinamos rigor académico, aprendizaje práctico y un ambiente de mentoría, promoviendo la formación de profesionales altamente capacitados.",
      "Nuestros espacios están diseñados para optimizar la experiencia educativa: desde un salón de estudios multifuncional, con biblioteca especializada y áreas colaborativas, hasta laboratorios equipados con tecnología avanzada. Todo en Yeshiva está pensado para motivar, desafiar y preparar a nuestros estudiantes para enfrentar los retos del mundo profesional.",
      "En Yeshiva, la educación no es solo una meta, sino el camino hacia nuevas oportunidades. Nuestro lema, 'Impulsando sueños, creando oportunidades', refleja nuestro compromiso con cada estudiante, acompañándolos en su crecimiento personal y profesional. Aquí, no solo se adquiere conocimiento, se construye un futuro."
    ].map((paragraph, index) => (
      <p key={index} className="leading-relaxed text-justify">{paragraph}</p>
    ))}
  </section>
);

const MisionVision = () => (
  <section className="mb-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
    <div className="flex flex-col md:flex-row gap-8">
      {[
        {
          title: 'MISIÓN',
          text: "Formar profesionales altamente capacitados con una sólida formación teórica práctica que les permita alcanzar sus sueños y desarrollar habilidades que les conecten con oportunidades reales."
        },
        {
          title: 'VISIÓN',
          text: "Ser el instituto referente de formación técnica en salud a nivel nacional e internacional, con un enfoque práctico, que permita a nuestros estudiantes acceder a carreras profesionales de alta demanda, garantizando su inserción exitosa en el mercado laboral."
        }
      ].map(({ title, text }, i) => (
        <div key={title} className="w-full md:w-1/2 flex justify-center" data-aos="fade-up" data-aos-delay={i * 200 + 200} data-aos-duration="900">
          <div className="max-w-prose">
            <SectionTitle size={2} title={title} />
            <p className="leading-relaxed mt-4 text-justify">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Values = () => {
  const values = [
    {
      name: "Respeto",
      desc: "Valoramos la dignidad de cada persona.",
      img: "/values/respet.svg"
    },
    {
      name: "Compromiso",
      desc: "Asumimos nuestras responsabilidades con seriedad, constancia y entrega.",
      img: "/values/commitment.svg"
    },
    {
      name: "Pasión",
      desc: "Nos impulsa el entusiasmo por aprender, enseñar y transformar vidas.",
      img: "/values/pasion.svg"
    },
    {
      name: "Integridad",
      desc: "Actuamos con honestidad, coherencia y ética.",
      img: "/values/integrity.svg"
    },
    {
      name: "Competencia",
      desc: "Buscamos la excelencia en el desarrollo de habilidades y conocimientos.",
      img: "/values/competence.svg"
    },
    {
      name: "Humanidad",
      desc: "Ponemos al ser humano en el centro, cultivando la empatía y la solidaridad.",
      img: "/values/humanity.svg"
    }
  ];

  return (
    <section className="mb-12" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
      <SectionTitle size={2} title="VALORES" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {values.map((value, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={100 * index}
            data-aos-duration="800"
            className="flex flex-col items-center text-center space-y-4"
          >
            <img
              src={value.img}
              alt={value.name}
              className="w-24 h-24 object-contain"
            />
            <h3 className="text-lg font-semibold text-blue-900">{value.name}</h3>
            <p className="px-2">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera */}
      <div className="relative w-full h-[30vh] md:h-[50vh]" data-aos="fade-in">
        <Image
          alt="Portada"
          src={imageClassRoom}
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <History />
        <MisionVision />
        <Values />
      </div>
    </main>
  );
};

export default AboutPage;
