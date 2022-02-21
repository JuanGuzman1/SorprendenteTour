import React from "react";
import "./Mojarras.scss";

const Mojarras = () => {
  return (
    <div className="mojarras">
      <div
        className={`header-mojarras bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tour Mojarras</h1>
      </div>
      <div className="flex justify-center items-center m-5 flex-col">
        {/* Información */}
        <div className="flex md:flex-row flex-col m-7">
          <div className="self-center m-3">
            <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
              Tamasopo
            </p>
            <p className="text-[20px] text-center">
              En las Cascadas de Tamasopo predomina la tranquilidad y belleza
              común de la Huasteca Potosina, uno puede admirar las magníficas y
              diversas caídas de agua, además de un antiguo acueducto que ha
              sido devorado por la selva. En Puente de Dios usted podrá observar
              pozas de agua cristalina y azul, con diversas caídas de agua por
              los lados, además de una cueva oculta entre las pequeñas cascadas.
            </p>
            <p className="text-[20px] text-center">
              Con matices azules y verdes acuarelosos en sus ríos, con pozas,
              nacimientos y cuevas, Tamasopo cuenta con un espectáculo de
              lugares hermosos, viaje con nosotros y conózcalos a fondo.
            </p>
          </div>
          <img
            src="assets/images/tours/mojarras/image1.jpeg"
            alt=""
            className="h-1/4 w-1/2 rounded-2xl animate-pulse self-center"
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
                Iniciamos el tour pasando por ustedes al hotel que nos indiquen,
                visitamos los parajes de Puente de Dios lugar donde tendremos
                actividades acuáticas: nadar en rio y entre cascadas, pasar por
                cueva iluminada con los rayos del sol, hacer algunos saltos
                opcional Cascadas de Tamasopo, en este lugar realizaremos
                actividades acuáticas, como son nadar en el rio, saltar de
                trampolines colgarse en la cuerda escuchar la historia de la ex
                hacienda.
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
              <img
                src="assets/images/tours/mojarras/itinerario-xilitla.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* ruta */}
        <section className="m-5">
          <h1 className="text-[40px] text-[color:var(--green-color)] text-center text-bold">
            Mapa de ruta
          </h1>
          <img
            src="assets/images/tours/mojarras/ruta-xilitla.png"
            alt=""
            className="rounded-xl animate-pulse"
          />
        </section>
      </div>
    </div>
  );
};

export default Mojarras;
