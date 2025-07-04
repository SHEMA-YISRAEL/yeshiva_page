import SectionTitle from "../commons/SectionTitle";
import Card from "../commons/Card";
import { GoArrowRight } from "react-icons/go";
import imageDoctor from '../../../public/img/medico.jpg';
import Link from 'next/link';



const newsData = [
  {
    title: 'Nuevo convenio con hospital regional',
    description: 'El instituto firmó un acuerdo con el hospital regional para prácticas profesionales.',
    image: imageDoctor,
    redirectPath: "/"
    
  },
  {
    title: "Nueva técnica reduce errores en medicación",
    description: "Un protocolo innovador disminuye en 30% los errores en enfermería.",
    image: imageDoctor,
    redirectPath: "/"
  },
  {
    title: "Urgencias colapsadas por aumento de pacientes",
    description: "Hospitales reportan esperas de hasta 12 horas por saturación.",
    image: imageDoctor,
    redirectPath: "/"
  },
  {
    title: "Descubren biomarcador para cáncer de páncreastulo",
    description: "Nueva proteína mejora la detección temprana de este cáncer.",
    image: imageDoctor,
    redirectPath: "/"
  },
  {
    title: "Aumentan enfermedades renales en el mundo",
    description: "Expertos alertan que 10% de la población sufre daño renal.",
    image: imageDoctor,
    redirectPath: "/"
  },
  {
    title: "Realidad virtual revoluciona anatomía patológica",
    description: "Simuladores 3D mejoran el estudio de tejidos y diagnósticos.",
    image: imageDoctor,
    redirectPath: "/"
  },
];

const News = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <SectionTitle size={2} title="NOTICIAS" linkTo="/notices"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? 'lg:col-span-2 row-span-1'
                : index === newsData.length - 1
                ? 'lg:col-span-2 row-span-1'
                : ''
            }`}
          >
            <Card
              cardTitle={news.title}
              carDescription={news.description}
              cardImage={news.image}
              variant="newsmainpage"
              redirectPath={news.redirectPath}
            />
          </div>
        ))}
      </div>

      <Link href="/notices">
        <div className="flex items-center mt-8 gap-4 cursor-pointer">
          <button className="bg-yellow-500 rounded-full p-3 text-2xl text-white hover:bg-yellow-600 transition">
            <GoArrowRight />
          </button>
          <h2 className="font-bold text-blue-900 text-lg">Ir al blog de noticias</h2>
        </div>
      </Link>
    </div>
  );
};

export default News;
