import SectionTitle from "../commons/SectionTitle";

const Thoughts = () => {
  const thoughtsData = [
    {
      name: "María L.",
      opinion: "El curso fue muy completo y los docentes explicaron todo con claridad.",
    },
    {
      name: "Carlos M.",
      opinion: "Una experiencia excelente. Muy recomendable para estudiantes de enfermería.",
    },
    {
      name: "Lucía P.",
      opinion: "Me ayudó a mejorar mis habilidades prácticas, sobre todo en urgencias.",
    },
  ];

  return (
    <div className="px-3 sm:px-3 lg:px-5 mt-10 max-w-screen-xl mx-auto">
      <SectionTitle title="OPINIONES" size={2} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {thoughtsData.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-100 p-6 rounded-2xl shadow-md h-full flex flex-col justify-between"
          >
            <p className="text-gray-700 text-base mb-4 italic">“{item.opinion}”</p>
            <h4 className="text-blue-900 font-semibold text-sm">— {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
