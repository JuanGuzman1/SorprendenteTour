import React, { useEffect, useState, useCallback } from "react";
import "./Bocoles.scss";
import { useParams } from "react-router-dom";
import PriceCard from "../../../../components/PriceCard/PriceCard";
import { API, graphqlOperation } from "aws-amplify";
import { getTour } from "../../../../graphql/queries";
import { toursIDs } from "../../../../data/toursIDs";
import { dataTourFormat } from "../../../../utils/helpers";

const Bocoles = () => {
  const { place } = useParams();
  const [tourData, setTourData] = useState();
  
  const fetchTour = useCallback(async () => {
    const response = await API.graphql(
      graphqlOperation(getTour, {
        id: toursIDs.tourBocoles,
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
    <div className="bocoles">
      <div
        className={`header-bocoles bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tour Bocoles</h1>
      </div>
      <div className="md:mx-48 flex md:flex-row flex-col ">
        <div className="flex justify-center items-center m-5 flex-col">
          {/* Información */}
          <div className="flex md:flex-row flex-col m-7">
            <div className="self-center m-3">
              <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
                Tambaca
              </p>
              <p className="text-[20px] text-center">
                Este es uno de los lugares más hermosos de la Huasteca Potosina,
                son un conjunto de pozas y cascadas de agua cristalina con un
                ambiente de tranquilidad absoluta.
              </p>
              <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
                Micos
              </p>
              <p className="text-[20px] text-center">
                Cuyo nombre era referido a los monos que habitaban la Zona es un
                conjunto de hermosas Cascadas a lo largo de 1 kilometro, estas
                cuentan con sus pozas y diferentes alturas.
              </p>
            </div>
            <img
              src="assets/images/tours/bocoles/image1.jpeg"
              alt=""
              className="h-1/2 w-2/3 rounded-2xl self-center"
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
            >
              <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Iniciamos el tour pasando por ustedes al hotel que nos
                  indiquen, visitamos parajes como el río Tambaque y las
                  espectaculares Cascadas de Micos, en estos lugares
                  realizaremos actividades acuáticas, como son nadar en el rio,
                  apreciar aguas cristalinas, así como disfrutar de las muchas y
                  grandes cascadas, realizar saltos de algunos puntos a pozas o
                  ríos lo cual viene siendo opcional. También tenemos la
                  actividad de Tirolesas y la famosa bicicleta aérea conocida en
                  ingles como skybike, estos 2 últimos puntos tienen un costo
                  adicional, pero lo valen por mucho. Terminamos explorando un
                  corredor de Artesanías donde puedes comprar bellos recuerdos.
                  Ven y deja atrás tus miedos.
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
                  -Se les incluye pago de entradas.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">-Desayuno.</p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  -Equipo de seguridad.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  -Fotografías en paquete basico y con gopro (gratis).
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  -Guía especializado en esta ruta.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  -Transporte acorde a la cantidad de personas todos de modelo
                  reciente, cómodo y seguro.{" "}
                  <span className="font-bold">
                    Una duración de tour de: aprox. 11 a 13 horas.
                  </span>
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  -Saltos de cascada son 7 de diferentes alturas que van de los
                  4 a los 10 metros podremos saltar de cada una opcionalmente,
                  tambien tendremos la opción de tirolesas donde se encuentra la
                  famosa bicicleta por encima de las cascadas estas tendrían un
                  costo extra.
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
                <p class="mb-2 text-gray-500 dark:text-gray-400">Toalla.</p>
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
                <img
                  src="assets/images/tours/bocoles/itinerario-xilitla.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* ruta */}
          {place === "xilitla" && (
            <section className="m-5">
              <h1 className="text-[40px] text-[color:var(--green-color)] text-center text-bold">
                Mapa de ruta
              </h1>
              <img
                src="assets/images/tours/bocoles/ruta-xilitla.png"
                alt=""
                className="rounded-xl animate-pulse"
              />
            </section>
          )}
        </div>
        {tourData && <PriceCard tour={tourData} />}
      </div>
    </div>
  );
};

export default Bocoles;
