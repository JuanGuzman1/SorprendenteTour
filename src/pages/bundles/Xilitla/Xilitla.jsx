import React, { useState } from "react";
import "./Xilitla.scss";
import TourIcon from "@mui/icons-material/Tour";
import Tours from "./Tours";

const Xilitla = () => {
  const [tour, setTour] = useState(1);
  return (
    <div>
      <div
        className={`header-xilitla bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Xilitla</h1>
      </div>

      <div className="flex md:flex-row flex-col">
        <aside class="w-64 m-5" aria-label="Sidebar">
          <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2">
              <li>
                <a
                  onClick={() => setTour(1)}
                  class={`${
                    tour === 1 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="ml-3">1 Tour y 2 Noches</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTour(2)}
                  class={`${
                    tour === 2 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    2 Tours y 3 Noches
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTour(3)}
                  class={`${
                    tour === 3 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    3 Tour y 4 Noches
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTour(4)}
                  class={`${
                    tour === 4 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    4 Tours y 5 Noches
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTour(5)}
                  class={`${
                    tour === 5 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    5 Tours y 6 Noches
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTour(6)}
                  class={`${
                    tour === 6 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    6 Tours y 7 Noches
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div>
          <section className="m-5">
            <Tours tour={tour} />
          </section>
        </div>
      </div>
      {/* instruciones */}
      <section className="bg-[color:var(--green-color)] flex flex-col justify-center p-5">
        <h1 className="text-white text-[40px] font-bold text-center">
          Instrucciones
        </h1>
        <p className="text-white text-center text-[20px]">
          PARA TOMAR EL PAQUETE, HAY QUE LLEGAR A XILITLA A LA HORA QUE PUEDA
          PARA EL DIA SIGUIENTE TOMAR EL TOUR. EN CASO DE QUE LLEGUE ANTES DE
          LAS 10 AM PODRIA TOMAR UN TOUR Y ASI ELEGIR OTRO TOUR ADICIONAL PARA
          EL DIA SIGUIENTE, O EN CASO DE LLEGAR DESPUES DE LAS 11 AM DIA
          PODRIAMOS AÑADIR UN TOURS DE COMO SON EN CUATRIMOTO O TIROLESAS O
          RAPPEL EN CASCADA O CUEVA ESTO SERIA CON COSTO EXTRA Y OPCIONAL. NOTA:
          SI REQUIERE TRASLADO DE AEROPUERTO DE S.L.P., QUERETARO, TAMPICO O
          MEXICO A LA HUASTECA FAVOR DE SOLICITAR INFORMACION POR WHATSAPP{" "}
          <span className="text-[color:var(--blue-color)]">4441890212</span>{" "}
          PARA PROPORCIONARLE OPCIONES.
        </p>
      </section>
      {/* recomendaciones */}
      <section className="flex flex-col justify-center p-5">
        <h1 className="text-[color:var(--green-color)] text-[40px] font-bold text-center">
          Recomendaciones
        </h1>
        <p className="text-center text-[20px]">
          TRAER TOALLA, TRAJE DE BAÑO O ROPA ACUATICA, ZAPATOS ACUATICOS
          (ACUASHOES), TENIS ANTIDERRAPANTES, ROPA LIJERA PARA CAMINAR PANS,
          SHORTS, PLAYERA, GORRA, SOMBRERO, LENTES, BLOQUEADOR SOLAR, REPELENTE
          DE MOSQUITOS Y TODA LA PILA PARA DISFRUTAR DE LA HUASTECA POTOSINA.
        </p>
      </section>
      {/* hoteles */}
      <section className="hoteles-xilitla relative h-screen bg-cover bg-fixed bg-center flex flex-col justify-around items-center">
        <div className="opacity-40 w-full h-full bg-black absolute" />
        <h1 className="text-white font-bold text-[40px] z-10">
          ¿Buscas Hospedaje?
        </h1>
        <button className="text-white z-10 bg-[color:var(--green-color)] p-3 rounded-md font-bold animate-pulse">
          Conoce Aqui
        </button>
      </section>
    </div>
  );
};

export default Xilitla;
