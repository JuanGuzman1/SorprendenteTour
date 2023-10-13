import React from "react";
import "./Trinidad.scss";

const Trinidad = () => {
  return (
    <div className="trinidad">
      <div
        className={`header-trinidad bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Ruta Trinidad</h1>
      </div>
      <div className="flex justify-center items-center m-5 flex-col">
        {/* Información */}
        <div className="flex md:flex-row flex-col m-7">
          <div className="self-center m-3">
            <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
              Trinidad
            </p>
            <p className="text-[20px] text-center">
              Visitamos el bosque endémico de niebla en la sierra de xilitla,
              para llegar a el antes pasamos a un mirador donde se ve todo
              xilitla, a un lugar como los alpes suizos, a varias comunidades, y
              en general a lugares maravillosos con vistas hermosos, esta
              aventura dura aprox 5 horas y te incluye comida, entradas a los
              parajes, equipo de seguridad, guía fotos, video unidad, y guía
              especializado
            </p>
          </div>
          <img
            src="assets/images/tours4x4/trinidad-1.jpg"
            alt=""
            className="h-1/4 w-1/2 rounded-2xl self-center"
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
              <span>Recorridos</span>
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
                Camino antiguo a las pozas
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Mirador Xilitla
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Aguayo (como los alpes suizos)
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Mirador de la trinidad
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Miramar</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Bosque de niebla
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Paseo por la trinidad
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Parque creativo
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
              <p class="mb-2 text-gray-500 dark:text-gray-400">Vehiculo 4x4</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Equipo de seguridad
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Fotografías y videos
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Accesos</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Botiquín</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Guía</p>
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
              <span>Duración</span>
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
              <p class="mb-2 text-gray-500 dark:text-gray-400">4 a 5 horas</p>
            </div>
          </div>
        </div>
        {/* ruta */}
        <section className="m-5">
          <h1 className="text-[40px] text-[color:var(--green-color)] text-center text-bold">
            Mapa de ruta
          </h1>
          <img
            src="assets/images/tours4x4/ruta-trinidad.jpeg"
            alt=""
            className="rounded-xl animate-pulse"
          />
        </section>
      </div>
    </div>
  );
};

export default Trinidad;
