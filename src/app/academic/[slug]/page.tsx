// import Image from "next/image";
// import paramedic from '../../../../public/img/paramedic.jpg';
import SectionTitle from "@/components/commons/SectionTitle";
import Card from '@/components/commons/Card';

// import oferta1 from '../../../../public/academicOffers/academic.png';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Link from "next/link";
import { CareerType, StatisticType } from "@/types/career";
import { robotoSerif } from "@/app/services/fonts";

export function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }, { slug: '4' }]
}

const CareerInfoComponent:React.FC<CareerType> = ( careerData ) => {
  return(
    <div className={`mt-5 space-y-2 text-gray-800 ${robotoSerif.className}`}>
      <p><span className="font-bold">Área de formación:</span> {careerData.area}</p>
      <p><span className="font-bold">Nivel de formación:</span> {careerData.level}</p>
      <p><span className="font-bold">Duración:</span> {careerData.duration}</p>
      <p><span className="font-bold">Régimen de estudio:</span> {careerData.system}</p>
      <p><span className="font-bold">Horarios:</span> {careerData.schedules.join(', ')}</p>
      <p><span className="font-bold">Título profesional:</span> {careerData.titleLabel}</p>
      <p>
        <span className="font-bold">Malla curricular:</span>{' '}
        <a href={careerData.curriculum} target="_blank" className=" underline text-[#4ECDC4] font-bold"> PDF </a>
      </p>
    </div>
  );
}

interface StatisticComponentInterface{
  data: StatisticType[]
  className?:string
}

const StatisticComponent:React.FC<StatisticComponentInterface> = ({className, data}) => {
  return(
    <div className={`${className}`}>
      <h2 className="text-xl font-bold text-gray-800 pb-4">Estadísticas de interés</h2>
      <div className="flex">
        <div className={`bg-neutral-100 p-6 rounded-2xl space-y-6 ${robotoSerif.className}`}>
          {data.map((stat: StatisticType, i:number) => (
            <div key={i} className="relative pl-6">
              <div className="absolute left-0 top-2 w-3 h-3 bg-neutral-400 rounded-full" />
              <div>
                <p className="font-bold">{stat.title}</p>
                <p>{stat.value}</p>
                {stat.source && <p className="text-sm text-gray-500">{stat.source}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function getCareerData(careerID: number){
  return import(`../../../util/career${careerID}.js`)
}

export default async function Page( { params }: { params: Promise<{ slug: string }> } ){
  const { slug } = await params;
  const careerID = parseInt(slug);

  const data = await getCareerData(careerID)

  return (      
    <div className="max-w-7xl mx-auto  px-10 lg:px-4 py-10 md:px-20 sm:px-10">
      {/* Imagen de portada */}
      {/* <div className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          className="w-full h-full object-cover brightness-50"
          alt="Portada"
          src={paramedic}
        />
      </div> */}
      
      <Link href="/academic">
        <div className="flex items-center text-slate-500 font-bold text-xl cursor-pointer mb-6 hover:text-slate-700 transition">
          <MdKeyboardDoubleArrowLeft className="mr-2" />
          Volver a la oferta académica
        </div>
      </Link>

      {/* Contenido principal en 2 columnas */}
      <div className=" flex flex-col lg:flex-row gap-10 ">  
        {/* Columna izquierda */}
        <div className="lg:w-2/3">

          {/* Info general */}
          <SectionTitle title={data.careerData.label} size={5} />
          <CareerInfoComponent 
            area={data.careerData.area} 
            level={data.careerData.level} 
            duration={data.careerData.duration} 
            system={data.careerData.system} 
            schedules={data.careerData.schedules} 
            titleLabel={data.careerData.title} 
            info={data.careerData.area} 
            curriculum={data.careerData.area} 
          />

          {/* Por qué estudiar */}
          <div className="mt-10">
            <SectionTitle title="¿POR QUÉ ESTUDIAR ESTA CARRERA?" size={5} />
            <div className={`mt-6 space-y-4 text-justify text-gray-700 ${robotoSerif.className}`}>
              {
                data.whyStudyThis.map((par:string, i:number) => (<p key={i}>{par}</p>))
              }
            </div>
          </div>

          {/* Área laboral */}
          <div className="mt-10">
            <SectionTitle title="ÁREA DE TRABAJO" size={5} />
            <ul className={`list-disc list-inside mt-4 space-y-4 text-gray-800 ${robotoSerif.className}`}>
              {data.workArea.map((item:any, i:number) => (
                <li key={i}>
                  <span className="font-bold">{item.title}:</span> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="lg:w-1/3 space-y-10">
          {/* Carreras relacionadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <div className="py-5 md:px-5 sm:py-5">
              <h2 className="text-xl font-bold text-gray-800 pb-4">Carreras relacionadas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {data.carreras.map((item:any, index:number) => (
                  <Card
                    key={index}
                    cardTitle={item.cardTitle}
                    carDescription={item.carDescription}
                    cardImage={item.cardImage}
                    variant='relatedCareer'
                    redirectPath={item.redirectPath}
                  />
                ))}
              </div>
            </div>
            {/* Estadísticas */}
            <StatisticComponent className="md:p-5 " data={data.statistics}/>
          </div>
        </div>
      </div>
    </div>
  );
}