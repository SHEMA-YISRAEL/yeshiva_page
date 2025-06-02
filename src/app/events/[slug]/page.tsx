import Image from "next/image";
import SectionTitle from "@/components/commons/SectionTitle";
import eventBanner from '../../../../public/img/eventBanner.png';
import Card from "@/components/commons/Card";
import eventPicture from '../../../../public/img/eventPicture.jpg';

import imageInfo from '../../../../public/eventBg.svg'; // por ejemplo

export default async function Page(
  // { params }: { params: { slug: string } }
) {
  // const { slug } = await params;

  const linkEvents = [
    { label: "Seminarios", link: '' },
    { label: "Exposiciones", link: '' },
    { label: "Encuentros", link: '' },
    { label: "Ferias", link: '' },
  ];

  const signLinks = [
    { label: 'INSCRIBIRME', link: '' },
    { label: 'CALENDARIO', link: '' },
  ];

  const eventData = {
    title: "CURSO PRÁCTICO DE INYECTABLES Y VENOCLISIS",
    dateDesc: "14 y 21 de marzo",
    schedules: [
      { groupLabel: 'Grupo 1', initialHour: '9:00', finalHour: '13:00' },
      { groupLabel: 'Grupo 2', initialHour: '14:00', finalHour: '18:00' }
    ],
    location: 'Av. América #839 entre Pando y Melchor Urquidi, Edif. Torre América Norte (lado ICE NORTE), planta baja - of.2',
    cost: 150,
    addressedTo: 'Estudiantes de salud y público mayor de 21 años.',
    organization: 'YESHIVA • Instituto Tecnológico Alianza',
    contact: [{
      name: 'Alejandra Maldonado',
      phoneNumber: '76420527',
      email: 'administracion@shemayisrael.com'
    }],
    relatedEvents: [
      {
        eventTitle: 'Curso práctico de suturas',
        evenImage: eventPicture,
        eventLinkPath: ''
      }
    ]
  };

  const classForLabel = `font-bold pr-5 align-top`;
  const classForSlugData = `pb-4 align-top`;
  const classForTableSpacing = `w-full mb-2 border-separate border-spacing-y-3`;

  return (
    <>
    {/* Imagen de cabecera (PORTADA) */}
    <div className="relative w-full h-[30vh] md:h-[50vh]">
          <Image
            alt="Portada"
            src={imageInfo}
            fill
            className="object-cover brightness-50"
          />
    </div>
    <div className="max-w-5xl mx-auto px-4 pb-8 py-8">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main event info */}
        <div className="w-full lg:w-2/3">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row md:justify-between text-xs mb-4 gap-2">
            <a className="font-bold content-center cursor-pointer mb-2 md:mb-0">
              Volver a la lista de eventos
            </a>
            <div className="flex flex-wrap gap-2">
              {linkEvents.map((elem, ind) => (
                <button
                  key={ind}
                  className="px-3 py-1 font-bold text-blue-950 bg-white border-2 border-blue-950 rounded-lg hover:bg-blue-900 hover:text-white transition text-xs"
                >
                  {elem.label}
                </button>
              ))}
            </div>
          </div>

          {/* Event Title & Info */}
          <div className="pt-4">
            <SectionTitle title={eventData.title} size={4} />
            <table className={classForTableSpacing}>
              <tbody>
                <tr className={classForSlugData}>
                  <td className={classForLabel}>Fecha:</td>
                  <td>{eventData.dateDesc}</td>
                </tr>
                <tr className={classForSlugData}>
                  <td className={classForLabel}>Hora:</td>
                  <td>
                    {eventData.schedules.map((el, ind) => (
                      <p key={ind}>
                        {el.groupLabel} - {el.initialHour} • {el.finalHour}
                      </p>
                    ))}
                  </td>
                </tr>
                <tr className={classForSlugData}>
                  <td className={classForLabel}>Lugar:</td>
                  <td>{eventData.location}</td>
                </tr>
                <tr className={classForSlugData}>
                  <td className={classForLabel}>Inversión:</td>
                  <td>Bs.- {eventData.cost}</td>
                </tr>
                <tr className={classForSlugData}>
                  <td className={classForLabel}>Dirigido a:</td>
                  <td>{eventData.addressedTo}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {signLinks.map((el, ind) => (
              <button
                key={ind}
                className="px-4 py-2 text-sm font-bold cursor-pointer text-blue-950 bg-white border-2 border-blue-950 rounded-lg hover:bg-blue-900 hover:text-white transition"
              >
                {el.label}
              </button>
            ))}
          </div>

          {/* Banner */}
          <div className="my-6 overflow-hidden">
            <Image
              alt="Banner del evento"
              src={eventBanner}
              className="md:w-2xl object-cover mx-auto"
              priority
            />
          </div>

          {/* Organización y Contacto */}
          <table className={classForTableSpacing}>
            <tbody>
              <tr className={classForSlugData}>
                <td className={classForLabel}>Organiza:</td>
                <td>{eventData.organization}</td>
              </tr>
              <tr className={classForSlugData}>
                <td className={classForLabel}>Contacto:</td>
                <td>
                  {eventData.contact.map((el, ind) => (
                    <div key={ind} className="mb-2">
                      <div>{el.name}</div>
                      <div>{el.phoneNumber}</div>
                      <div>{el.email}</div>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Related events */}
        <aside className="w-full lg:w-1/3 p-0 lg:p-4">
          <div>
            <h2 className="font-bold text-lg mb-3">Eventos relacionados</h2>
            <div className="grid gap-4">
              {eventData.relatedEvents.map((el, ind) => (
                <Card
                  key={ind}
                  cardTitle={el.eventTitle}
                  carDescription={''}
                  cardImage={el.evenImage}
                  variant="event"
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}
