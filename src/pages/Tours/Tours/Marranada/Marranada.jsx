import React, { useEffect, useState, useCallback } from "react";
import "./Marranada.scss";
import { useParams } from "react-router-dom";
import PriceCard from "../../../../components/PriceCard/PriceCard";
import { API, graphqlOperation } from "aws-amplify";
import { getTour } from "../../../../graphql/queries";
import { toursIDs } from "../../../../data/toursIDs";
import { dataTourFormat } from "../../../../utils/helpers";

const Marranada = () => {
  const { place } = useParams();
  const [tourData, setTourData] = useState();

  const fetchTour = useCallback(async () => {
    const response = await API.graphql(
      graphqlOperation(getTour, {
        id: toursIDs.tourMarranada,
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
    <div className="marranada">
      <div
        className={`header-marranada bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tour Marranada</h1>
      </div>
      <div className="md:mx-48 flex md:flex-row flex-col">
        <div className="flex justify-center items-center m-5 flex-col">
          {/* Información */}
          <div className="flex md:flex-row flex-col m-7">
            <div className="self-center m-3">
              <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
                La media luna
              </p>
              <p className="text-[20px] text-center">
                La media luna es un nacimiento de agua natural con agua
                semitermal gracias a que existe actividad volcánica en el
                subsuelo en esta zona se puede practicar el buseo recreativo
                este tendría un costo adicional y lo puede contratar al llegar
                el tour le ofrece actividades acuáticas así como equipo para
                meterse a nadar en estas aguas cristalinas.
              </p>
            </div>
            <img
              src="assets/images/tours/marranada/image3.jpg"
              alt=""
              className="h-72 w-2/3 rounded-2xl self-center"
            />
          </div>
          {/* acordeon de info */}
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-full"
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Información del tour</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              aria-labelledby="accordion-collapse-heading-1"
              className="w-full"
            >
              <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0 w-full">
                <p class="mb-2 text-gray-500 dark:text-gray-400 w-full">
                  La laguna de la Media Luna es una pequeña Laguna natural
                  localizada en el municipio de Río Verde en San Luis Potosí,
                  México. El nombre de Media Luna se debe a que la laguna tiene
                  forma de medialuna. Es de gran importancia turística,
                  arqueológica y agrícola. La Media Luna es ideal practicar la
                  natación y el buceo, contando además, con una extensa área
                  para acampar.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>¿Que te ofrece el Tour?</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  🥘Desayuno de platillos típicos de la Región.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  🔖Entradas a los parques.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  🧗‍♂️Guía especializado.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  🚌Transporte de su hospedaje.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  🦺Equipo de seguridad requerido.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  🙋‍♂️Recorrido guiado y actividades acuáticas.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  ⛑️Botiquín de P. A.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  📸fotografías y videos.
                  <span className="font-bold">
                    😎mucha diversión garantizada...
                  </span>
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>Vestimenta y recomendaciones</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Bloqueador solar.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">Repelente.</p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Liga para el pelo en caso de pelo largo.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">Ropa comoda</p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Una gorra para el sol si gustas también.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lycras o playeras comodad, todo lo que no sea algodón de
                  preferencia.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Zapato para el agua o Sandalias ajustables.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Shord o lycra de igual manera.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span>Itinerario</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
                {/* <img
                  src="assets/images/tours/acamayas/itinerario-xilitla.jpeg"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
          {/* ruta */}
          {place === "xilitla" && (
            <section className="m-5">
              {/* <h1 className="text-[40px] text-[color:var(--green-color)] text-center text-bold">
                Mapa de ruta
              </h1>
              <img
                src="assets/images/tours/acamayas/ruta-xilitla.png"
                alt=""
                className="rounded-xl animate-pulse"
              /> */}
            </section>
          )}
        </div>
        {tourData && <PriceCard tour={tourData} />}
      </div>
    </div>
  );
};

export default Marranada;
