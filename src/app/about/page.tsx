"use client";
import { useEffect } from "react";
import SectionTitle from '@/components/commons/SectionTitle';
import Image from "next/image";
// import historyImage from '../../../public/img/historyImage.png';
import instituto from '../../../public/insti.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

import valueRespect from '../../../public/img/values/respeto.png';
import valueCommitment from '../../../public/img/values/compromiso.png';
import valuePassion from '../../../public/img/values/pasion.png';
import valueIntegrity from '../../../public/img/values/integridad.png';
import valueExcelence from '../../../public/img/values/excelencia.png';

import pastor from '../../../public/img/pastor.png';
import { robotoSerif } from '@/util/fonts';

const sizeTitle = 5
const paragraphsHistory= [
  "Yeshiva es un instituto de formación tecnológica que nace con el propósito de ofrecer educación de excelencia en diversas áreas del conocimiento. No es solo un centro de aprendizaje, sino un espacio donde los estudiantes pueden desarrollar todo su potencial, fortaleciendo sus habilidades y preparándose para un futuro de éxito.",
  "Formamos parte de SHEMAYISRRAEL S.R.L., un grupo empresarial con una identidad sólida y principios bien definidos. Gracias a esto, contamos con el respaldo de unidades productivas estratégicas, como un centro médico privado, que servirá de apoyo práctico para ciertas áreas de estudio, permitiendo a nuestros estudiantes aplicar sus conocimientos en un entorno real.",

  "El nombre 'Yeshiva' proviene del contexto judío, donde tradicionalmente hace referencia a academias dedicadas al estudio profundo y estructurado del conocimiento. Esta esencia inspira nuestra metodología, en la que combinamos rigor académico, aprendizaje práctico y un ambiente de mentoría, promoviendo la formación de profesionales altamente capacitados.",

  "Nuestros espacios están diseñados para optimizar la experiencia educativa: desde un salón de estudios multifuncional, con biblioteca especializada y áreas colaborativas, hasta laboratorios equipados con tecnología avanzada. Todo en Yeshiva está pensado para motivar, desafiar y preparar a nuestros estudiantes para enfrentar los retos del mundo profesional.",

  "En Yeshiva, la educación no es solo una meta, sino el camino hacia nuevas oportunidades. Nuestro lema, 'Impulsando sueños, creando oportunidades', refleja nuestro compromiso con cada estudiante, acompañándolos en su crecimiento personal y profesional. Aquí, no solo se adquiere conocimiento, se construye un futuro."
]

const paragraphMision = [
  "Formar profesionales altamente capacitados con una sólida formación teórica práctica que les permita alcanzar sus sueños y desarrollar habilidades que les conecten con oportunidades reales."
];

const paragraphVision = [
  "Ser el instituto referente de formación técnica en salud a nivel nacional e internacional, con un enfoque práctico, que permita a nuestros estudiantes acceder a carreras profesionales de alta demanda, garantizando su inserción exitosa en el mercado laboral."
]

const values = [
  {
    name: "Respeto",
    desc: "Valoramos la dignidad de cada persona.",
    img: valueRespect
  },
  {
    name: "Compromiso",
    desc: "Asumimos nuestras responsabilidades con seriedad, constancia y entrega.",
    img: valueCommitment
  },
  {
    name: "Pasión",
    desc: "Nos impulsa el entusiasmo por aprender, enseñar y transformar vidas.",
    img: valuePassion
  },
  {
    name: "Integridad",
    desc: "Actuamos con honestidad, coherencia y ética.",
    img: valueIntegrity
  },
  {
    name: "Excelencia",
    desc: "Buscamos la excelencia en el desarrollo de habilidades y conocimientos.",
    img: valueExcelence
  },
  // {
  //   name: "Humanidad",
  //   desc: "Ponemos al ser humano en el centro, cultivando la empatía y la solidaridad.",
  //   img: "/values/humanity.svg"
  // }
];

interface ParagraphWithTitleProps {
  title: string;
  paragraph: string[];
}

const Paragraph : React.FC<ParagraphWithTitleProps> = ({title='', paragraph = []}) => (
  <section className = {`space-y-4`}>
    {
      title && <SectionTitle size={sizeTitle} title={title} />
    }
    {paragraph.map((paragraph, index) => (
      <p 
        key={index} 
        className={`${robotoSerif.className} leading-relaxed text-justify mb-6 mt-6` }
        data-aos="fade-up" 
        data-aos-delay={`${index * 200}`} 
        data-aos-duration="900">
        {paragraph}
      </p>
    ))}
  </section>
);

const History = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <SectionTitle size={sizeTitle} title="HISTORIA"  />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Paragraph title ="" paragraph={paragraphsHistory} />
        <div className="flex justify-center" >
          <Image
            alt="Portada"
            src={instituto}
            // fill
            // data-aos="fade-in"
            className="object-cover h-3/4 mt-10 brightness-90 rounded-4xl"
          />
        </div>
      </div>  
    </>
    
  );
}



const Values = () => {
  return (
    <section className="mb-10" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
      <SectionTitle size={sizeTitle} title="VALORES" />
      <div className="relative left-20 my-5 md:my-15 sm:my-5">
        <div 
          className="flex justify-center mt-8"
        >
          {
            values.map((element, index)=>{
              
              return <Image
                key={index}
                src={element.img}
                alt={element.name}
                className={`object-contain relative w-32 md:w-50 right-${index*10} sm:w-30`}
                data-aos="zoom-in"
                data-aos-delay={400 * index}
                data-aos-duration="500"
              />    
            })
          }
        </div>
      </div>
    </section>
  );
};

const InternationalSupport = () => {
  const paragraphs = [
    "El camino que hoy abrimos junto a ti, nace de un compromiso real por brindarte una formación de calidad.",
    "Gracias al valioso respaldo de SEED INTERNATIONAL, nuestro instituto cuenta con apoyo técnico y administrativo especializado que nos permite implementar procesos modernos, mejorar continuamente la enseñanza y ofrecerte una educación accesible y  alineada con estándares internacionales.",
    "Hoy, el Dr. PhD. Seok-Jong Hong, como Rector del Instituto, lidera este proyecto con dedicación, integridad y la firme convicción de que, con las oportunidades adecuadas, cada joven tiene el potencial de transformar su vida."
  ];

  return (<>
    <SectionTitle size={sizeTitle} title="APOYO INTERNACIONAL" />
    {
      <Paragraph title="" paragraph={paragraphs} />
    }
    {/* "text-center mb-12 border-l-4 border-blue-500 pl-4 italic text-sm" */}
    <div className="flex justify-center">
      <div className='w-3/4 border-1 border-[#366AAC] shadow-2xl text-center border-solid rounded-xl italic text-sm p-5' data-aos="fade-up" data-aos-duration="900">
        <p className="text-gray-800 text-sm">
          “Porque yo sé los planes que tengo para ustedes -dice Hashem-. Son planes de bien y no de desastre, para darles un futuro y una esperanza”
        </p>
        <p className="text-sm  mt-2">Jeremias 29:11</p>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <Image
        src={pastor}
        alt="Apoyo Internacional"
        // width={500}
        // height={300}
        
        className="object-contain w-full"
      />
    </div>

    <div 
      className="text-center mt-4 text-sm text-gray-600 border-t-4 border-b-4 border-[#B3B3B3] p-4 italic" 
      // data-aos="fade-up" data-aos-duration="900"
    >
      <span className="font-bold">Imagen: </span>
      <span>Dr. PhD. Seok Jong Hong</span>
    </div>
  </>)
}

const AboutPage = () => {
  
  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera */}
      {/* <div className="relative w-full h-[30vh] md:h-[50vh]" data-aos="fade-in">
        <Image
          alt="Portada"
          src={imageClassRoom}
          fill
          className="object-cover brightness-50"
        />
      </div> */}

      {/* Contenido */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        
        <History/>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8" 
        // data-aos="fade-in"
        >
          <Paragraph  title="MISIÓN" paragraph={paragraphMision} />
          <Paragraph  title="VISIÓN" paragraph={paragraphVision} />
        </div>
        <Values />
        <InternationalSupport/>
      

      </div>
    </main>
  );
};

export default AboutPage;
