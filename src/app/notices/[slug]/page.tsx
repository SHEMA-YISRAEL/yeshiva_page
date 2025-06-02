import Image from "next/image";
// import SectionTitle from "@/components/commons/SectionTitle";
// import Card from "@/components/commons/Card";
import articleImage from "../../../../public/img/artNotice.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Link from "next/link";

import imageArtNotice from '../../../../public/artNoticeBg.svg'

export default function ArticlePage() {
  const article = {
    title: "YESHIVA: Futuros Médicos y Enfermeros Maestros en Sutura",
    publishedAt: new Date(2024, 2, 14),
    content: `Cochabamba, Bolivia – El pasado 28 de febrero, el Instituto Tecnológico Alianza YESHIVA se convirtió en el epicentro del aprendizaje práctico para estudiantes de medicina y enfermería, al llevar a cabo la primera edición de su esperado curso de suturas.

Bajo la experta guía del Doctor Eduardo Gamboa y la Doctora Vinna Park, los participantes se sumergieron en una jornada intensiva de 4 horas académicas, dividida en dos turnos para garantizar una experiencia personalizada. El objetivo: dominar las técnicas de sutura, un pilar fundamental en la práctica médica.

El ambiente estaba cargado de expectación y entusiasmo. Los estudiantes, equipados con hilos, agujas y simuladores de última generación, practicaron cada puntada bajo la atenta mirada de los instructores. Desde los conceptos básicos de la sutura hasta los protocolos de asepsia y los cuidados postoperatorios, ningún detalle quedó sin explorar.

"Fue una experiencia invaluable", comentó María López, estudiante de medicina. "La claridad con la que los doctores explicaron cada paso y la oportunidad de practicar en un entorno controlado nos dio la confianza que necesitábamos".

La valoración del curso no pudo ser más positiva. Los asistentes destacaron el enfoque práctico y la claridad de los expositores, resaltando la importancia de este tipo de formación en su preparación para enfrentar los desafíos del mundo real.

"En YESHIVA, creemos firmemente en la educación práctica", afirmó el Director del Instituto. "Por eso, continuaremos ofreciendo cursos que fortalezcan las habilidades de nuestros estudiantes en áreas clave de la salud".

Desde el manejo de inyectables hasta los primeros auxilios y la electrocardiografía básica, YESHIVA se compromete a brindar a sus estudiantes las herramientas necesarias para destacar en sus futuras carreras.

Con este curso de suturas, YESHIVA reafirma su compromiso con la excelencia en la educación médica y se consolida como un referente en la formación de profesionales de la salud altamente capacitados.
`,
    image: articleImage,
    authorText: "Brenda Torres Mendoza",
    authorPhoto: "Jose Luis Aguilera Sarmiento",
  };

  // Procesa los párrafos usando split por doble salto de línea
  // const paragraphs = article.content.split(/\n\s*\n/);

  return (
    <>
      {/* Imagen de cabecera en ancho completo */}
        <div className="relative w-full h-[30vh] md:h-[50vh]">
          <Image
            alt="Portada"
            src={imageArtNotice}
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
          
        {/* Columna principal: Artículo */}
        <div className="lg:w-2/3">
            <Link href="/notices">
              <div className="flex items-center text-slate-500 font-bold  text-xl cursor-pointer mb-6">
                <MdKeyboardDoubleArrowLeft className="mr-2" />
                Volver a Noticias
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-left my-2">
            {article.title}
            </h1>

            <p className="text-sm text-gray-500 mb-4 mt-2">
            Publicado el{" "}
            {article.publishedAt.toLocaleDateString("es-BO", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
            </p>

            <div className="prose prose-lg max-w-none mb-6 text-justify whitespace-pre-line">
            {article.content}
            </div>

            <Image
            src={article.image}
            alt="Imagen del artículo"
            className="my-6 w-auto rounded-lg"
            />

            {/* Autores */}
            <div className="text-sm text-gray-700 mb-5 flex flex-col md:flex-row md:justify-between gap-4 border-t border-gray-300 pt-6">
            <p>
                <span className="font-semibold">Texto:</span> {article.authorText}
            </p>
            <p>
                <span className="font-semibold">Fotografía:</span> {article.authorPhoto}
            </p>
            </div>

            <CommentForm />
        </div>

        {/* Columna secundaria: Noticias relacionados */}
        <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4 mt-8 ml-20">Noticias relacionadas</h2>
            {/* Aquí puedes mapear tus artículos relacionados 
            {relatedArticles.map((item, idx) => (
            <Card
                key={idx}
                cardTitle={item.title}
                carDescription={item.description}
                cardImage={item.image}
                variant="otherNotices"
            />
            ))}*/}
        </div>
</div>

    </>
  );
}

//Subcomponente para el formulario de comentarios
function CommentForm() {
  return (
    <form className="space-y-2 border-t border-gray-300 pt-6">
      <h3 className="text-lg font-semibold">Deja un comentario</h3>

      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Correo electrónico</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Comentario</label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-sm font-bold text-white bg-blue-900 rounded-lg hover:bg-blue-800"
      >
        Enviar comentario
      </button>
    </form>
  );
}
