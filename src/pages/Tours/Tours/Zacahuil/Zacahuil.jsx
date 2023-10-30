import React, { useEffect, useState, useCallback } from "react";
import "./Zacahuil.scss";
import { useParams } from "react-router-dom";
import PriceCard from "../../../../components/PriceCard/PriceCard";
import { API, graphqlOperation } from "aws-amplify";
import { getTour } from "../../../../graphql/queries";
import { toursIDs } from "../../../../data/toursIDs";
import { dataTourFormat } from "../../../../utils/helpers";

const Zacahuil = () => {
  const { place } = useParams();
  const [tourData, setTourData] = useState();

  const fetchTour = useCallback(async () => {
    const response = await API.graphql(
      graphqlOperation(getTour, {
        id: toursIDs.tourZacahuil,
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
    <div className="zacahuil">
      <div
        className={`header-zacahuil bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tour Zacahuil</h1>
      </div>

      <div className="md:mx-40 flex md:flex-row md:justify-between flex-col">
        <div className="flex m-5 flex-col">
          {/* Información */}
          <div className="flex flex-col m-7">
            <div className="mt-3">
              <p className="text-[20px] text-left text-white">
                Nuestro primer punto por visitar es el jardin surrealista de
                Edward James, el lugar mas surrealista de Mexico, vive una
                experiencia como en un cuento de hadas y maravillate con la
                interesante historia de su creacion es un conjunto de
                estructuras arquitectonicas de concreto y rutas fantasticas que
                conforman un jardin escultorico por un rio con cascadas y
                rodeado por la selva potosina en un extenso terreno. Posterior
                es el castillo de Beto Ramon un lugar de sabiduria, herbolaria,
                limpias, masajes y sanacion. Por ultimo visitamos el nacimiento
                de xilitla donde nadaremos en el rio cristalino, asi como
                apreciar la naturaleza cueva de quilas lugar donde se forman
                figuras de animales en las rocas.
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <img
                src="assets/images/tours/zacahuil/image1.jpg"
                alt=""
                className="h-3/2 w-1/4 rounded-2xl m-4"
              />
              <img
                src="assets/images/tours/zacahuil/image2.jpg"
                alt=""
                className="h-3/2 w-1/4 rounded-2xl m-4"
              />
              <img
                src="assets/images/tours/zacahuil/image3.jpeg"
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
              src="assets/images/tours/zacahuil/banner1.jpeg"
              alt=""
              className="w-full md:h-[400px] h-[200px]"
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
              src="assets/images/tours/zacahuil/banner2.jpeg"
              alt=""
              className="w-full md:h-[400px] h-[200px]"
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
          {/* itinerario */}
          <div className="mt-3">
            <img
              src="assets/images/tours/zacahuil/banner3.jpeg"
              alt=""
              className="w-full md:h-[400px] h-[200px]"
            />
            <div className="mt-8">
              <h1 className="text-white text-3xl font-semibold">
                Itinerario del dia
              </h1>
              <div className="text-white text-xl mt-3">
                <p>8:00 am a 8:30 am Punto de reunion o traslado de su hotel</p>
                <p>8:30 am a 9:30 am Desayuno.</p>
                <p>
                  10:00 am a 12:00 pm Jardin surrealista (Podria cambiar el
                  horario por cuestion de accessos al jardin).
                </p>
                <p>12:00 pm a 12:30 pm Trayecto al castillo de la salud.</p>
                <p>12:30 pm a 2:00 pm Recorrido en el castillo de la salud.</p>
                <p>
                  2:00 pm a 2:30 pm Trayecto al nacimiento y cueva de quillas.
                </p>
                <p>2:30 pm a 3:00 pm Recorrido en cueva de quillas.</p>
                <p>
                  3:00 pm a 4:00 pm Actividad en el nacimiento (actividad
                  acuatica).
                </p>
                <p>4:20 pm a 5:30 pm Comida</p>
                <p>5:30 pm Regreso a CD Valles o Xilitla</p>
              </div>
            </div>
          </div>
          {/* precio */}
          <div className="mt-3">
            <img
              src="assets/images/tours/zacahuil/banner4.jpeg"
              alt=""
              className="w-full md:h-[400px] h-[200px]"
            />
            <div className="mt-8">
              <h1 className="text-white text-3xl font-semibold">Precio</h1>
              <div className="text-white text-xl mt-4 md:mt-0 md:flex-row flex md:justify-between flex-col md:items-center">
                <div>
                  <h2 className="text-3xl font-bold">Xilitla</h2>
                  <h3 className="text-2xl">$1,200 por persona</h3>
                </div>
                <div className="h-40 w-36 bg-lime-600 flex justify-center items-center rounded-2xl my-5 md:my-0">
                  <p className="text-center text-black font-semibold">
                    Pregunta por nuestros paquetes Todo Incluido!
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Cd. Valles</h2>
                  <h3 className="text-2xl">$1,600 por persona</h3>
                </div>
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
                src="assets/images/tours/zacahuil/ruta-xilitla.png"
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

export default Zacahuil;
