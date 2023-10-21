import React, { useEffect, useState, useCallback } from "react";
import "./Acamayas.scss";
import { useParams } from "react-router-dom";
import PriceCard from "../../../../components/PriceCard/PriceCard";
import { API, graphqlOperation } from "aws-amplify";
import { getTour } from "../../../../graphql/queries";
import { toursIDs } from "../../../../data/toursIDs";
import { dataTourFormat } from "../../../../utils/helpers";

const Acamayas = () => {
  const { place } = useParams();
  const [tourData, setTourData] = useState();

  const fetchTour = useCallback(async () => {
    const response = await API.graphql(
      graphqlOperation(getTour, {
        id: toursIDs.tourAcamayas,
      })
    );
    const data = dataTourFormat(response.data.getTour, place);

    setTourData(data);
  }, [place]);

  useEffect(() => {
    const evt = new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: false,
    });
    document.dispatchEvent(evt);
  });

  useEffect(() => {
    fetchTour();
  }, [fetchTour]);

  return (
    <div className="acamayas">
      <div
        className={`header-acamayas bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tour Acamayas</h1>
      </div>
      <div className="md:mx-48 flex md:flex-row flex-col">
        <div className="flex m-5 flex-col">
          {/* Información */}
          <div className="flex flex-col m-7">
            <div className="mt-3">
              <p className="text-[20px] text-left text-white">
                Visitaremos la cascada del meco, donde daremos un recorrido en
                canoa al pie de la cascada del meco y nos tomaremos unas fotos
                espectaculares, nadaremos por el rio (opcional hacer saltos de
                diferentes alturas) tambien tendremos la opcion de hacer tubbing
                o salto de cascadas con costos extras al igual tambien el
                mirador de la cascada del meco con una vista impresionante. Asi
                como tambien visitaremos la cascada del salto donde podremos
                disfrutar del agua y nadar en sus formaciones de albercas
                gigantes y realizar varios saltos.
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <img
                src="assets/images/tours/acamayas/image5.jpg"
                alt=""
                className="h-3/2 w-1/4 rounded-2xl m-4"
              />
              <img
                src="assets/images/tours/acamayas/image1.jpeg"
                alt=""
                className="h-3/2 w-1/4 rounded-2xl m-4"
              />
              <img
                src="assets/images/tours/acamayas/image6.jpg"
                alt=""
                className="h-3/2 w-1/4 rounded-2xl m-4"
              />
            </div>
          </div>
          {/* info */}
          <div className="mt-3">
            <h1 className="text-3xl text-white font-semibold">¿Que incluye?</h1>
            <div className="flex justify-between mt-3 text-white text-xl">
              <div className="leading-9">
                <p>🔘Desayuno o comida de platillos tipicos.</p>
                <p>🔘Transporte desde tu hospedaje.</p>
                <p>🔘Equipo de seguridad requerido</p>
              </div>
              <div className="leading-9">
                <p>🔘Entradas a los parques.</p>
                <p>🔘Paseo en canoa.</p>
                <p>🔘Guia especializado.</p>
              </div>
              <div className="leading-9">
                <p>🔘Fotografias.</p>
                <p>🔘Recorrido guiado.</p>
                <p>🔘Botiquin P.A.</p>
              </div>
            </div>
          </div>
          {/* que llevar */}
          <div className="mt-8 mb-0">
            <img
              src="assets/images/tours/acamayas/banner1.jpeg"
              alt=""
              className="w-full h-[400px]"
            />

            <div className="mt-8">
              <h1 className="text-white text-3xl font-semibold">
                ¿Que debes llevar?
              </h1>
              <div className="text-white text-xl leading-8 mt-3">
                <p>
                  🔶Acudir con ropa comoda para caminar puede ser pans, licra,
                  short pantalon de senderismo asi como ropa para meterse al
                  agua (traje de baño).
                </p>
                <p>🔶Zapato acuatico y tenis comodos antiderrapante.</p>
                <p>🔶Bloqueador solar (de preferencia biodegradable)</p>
                <p>🔶Repelente (biodegradable).</p>
                <p>🔶Toalla.</p>
                <p>🔶En caso de mareo Dramamine.</p>
                <p>🔶Cuidar nuestra Flora y Fauna</p>
                <p>🔶Respete las recomendaciones del guia.</p>
                <p>
                  🔶Respete a los de mas compañeros mantenimiento silencio
                  durante las explicaciones y contestando tu telefono lejos del
                  grupo si hacerlo puede interrumpir explicaciones.
                </p>
                <p>
                  🔶Respete los tiempos establecidos, estos estan pensafos para
                  hacer grata la experiencia para todos los participantes de la
                  actividad.
                </p>
                <p>
                  🔶Si va con niños recuerde que ellos son su responsabilidad.
                </p>
                <p className="pt-7 pb-0">
                  🔴LA BASURA NO VUELVE SOLA ES PARTE DE SU EQUIPAJE, LLEVELA
                  SIEMPRE CONSIGO HASTA LLEGAR CASA, NO ENSUCIE CAMINOS, RIOS,
                  BOSQUES, CUIDE LA NATURALEZA. 🌿🍃
                </p>
              </div>
            </div>
          </div>
          {/* importante */}
          <div className="mt-3">
            <img
              src="assets/images/tours/acamayas/banner2.jpeg"
              alt=""
              className="w-full h-[400px]"
            />
            <div className="mt-8">
              <h1 className="text-white text-3xl font-semibold">IMPORTANTE</h1>
              <div className="text-white text-xl mt-3">
                <p>
                  🔘Sorprendente Tour te proporciona un guia acreditado y todo
                  el equipo necesario para desarrollar cada una de las
                  actividades.
                </p>
                <p>
                  🔘La huasteca tiene ciclos metereologicos que hacen que los
                  niveles de agua en cada paraje pueden aumentar, nuestra
                  empresa no es responsable si algun paraje cierra sus puertas
                  al publico por los niveles de agua altos, mas sin embargo
                  compensaremos con alguna otra actividad.
                </p>
                <p>
                  🔘Algunos trayectos seran largos de 1 a 3 horas e incluso un
                  poco mas donde se le notificara para que tome ciertas medidas
                  en cuestiones personales (medicamentos, mareos, etc).
                </p>
                <p>
                  🔘Contar con algo de dinero en efectivo, ya que no hay bancos
                  ni cajeros automaticos en los lugares a visitar.
                </p>
              </div>
            </div>
          </div>
          {/* ruta */}
          {place === "xilitla" && (
            <section className="m-5">
              <h1 className="text-[40px] text-[color:var(--green-color)] text-left text-bold">
                Mapa de ruta
              </h1>
              <img
                src="assets/images/tours/acamayas/ruta-xilitla.png"
                alt=""
                className="rounded-xl"
              />
            </section>
          )}
        </div>
        {tourData && <PriceCard tour={tourData} />}
      </div>
    </div>
  );
};

export default Acamayas;
