import React, { useCallback, useEffect, useState } from "react";
import "./CiudadValles.scss";
import TourIcon from "@mui/icons-material/Tour";
import Tours from "./Tours";
import { Link } from "react-router-dom";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { bundlesIDs } from "../../../data/bundlesIDs";
import { API, graphqlOperation } from "aws-amplify";
import { getBundle } from "../../../graphql/queries";
import PriceCard from "../../../components/PriceCard/PriceCard";

const CiudadValles = () => {
  const [tour, setTour] = useState(1);
  const [bundleData, setBundleData] = useState();

  const fetchBundle = useCallback(async () => {
    let bundleID;
    switch (tour) {
      case 1:
        bundleID = bundlesIDs.bundle1;
        break;
      case 2:
        bundleID = bundlesIDs.bundle2;
        break;
      case 3:
        bundleID = bundlesIDs.bundle3;
        break;
      case 4:
        bundleID = bundlesIDs.bundle4;
        break;
      case 5:
        bundleID = bundlesIDs.bundle5;
        break;
      case 6:
        bundleID = bundlesIDs.bundle6;
        break;
      default:
        break;
    }
    const { data } = await API.graphql(
      graphqlOperation(getBundle, {
        id: bundleID,
      })
    );
    const newBundleData = {
      name: data.getBundle.name,
      p2price: data.getBundle.p2pValles,
      p3price: data.getBundle.p3pValles,
      p4price: data.getBundle.p4pValles,
      p5price: data.getBundle.p5pValles,
    };
    setBundleData(newBundleData);
  }, [tour]);

  useEffect(() => {
    fetchBundle();
  }, [fetchBundle]);

  return (
    <div>
      <div
        className={`header-valles bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Ciudad Valles</h1>
      </div>
      {/* tours */}
      <div className="flex md:flex-row justify-between flex-col">
        <aside class="w-64 m-5" aria-label="Sidebar">
          <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2">
              <li>
                <button
                  onClick={() => setTour(1)}
                  class={`${
                    tour === 1 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="ml-3">1 Tour y 2 Noches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTour(2)}
                  class={`${
                    tour === 2 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    2 Tours y 3 Noches
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTour(3)}
                  class={`${
                    tour === 3 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    3 Tour y 4 Noches
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTour(4)}
                  class={`${
                    tour === 4 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    4 Tours y 5 Noches
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTour(5)}
                  class={`${
                    tour === 5 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    5 Tours y 6 Noches
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTour(6)}
                  class={`${
                    tour === 6 ? "bg-green-300" : ""
                  } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-200 dark:hover:bg-gray-700`}
                >
                  <TourIcon />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    6 Tours y 7 Noches
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <div>
          <section className="m-5">
            <Tours tour={tour} />
          </section>
        </div>
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          {bundleData && <PriceCard bundle={bundleData} />}
        </div>
      </div>
      {/* instruciones */}
      <section className="bg-[color:var(--green-color)] flex flex-col justify-center p-5">
        <h1 className="text-white text-[40px] font-bold text-center">
          Instrucciones
        </h1>
        <p className="text-white text-center text-[20px]">
          PARA TOMAR EL PAQUETE, HAY QUE LLEGAR A CIUDAD VALLES A LA HORA QUE
          PUEDA PARA EL DIA SIGUIENTE TOMAR EL TOUR. NOTA: SI REQUIERE TRASLADO
          DE AEROPUERTO DE S.L.P., QUERETARO, TAMPICO O MEXICO A LA HUASTECA
          FAVOR DE SOLICITAR INFORMACION POR WHATSAPP{" "}
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
      {/* Cotizacion */}
      <section className="bg-[color:var(--green-color)] flex flex-col justify-center p-5">
        <h1 className="text-white text-[40px] font-bold text-center">
          Cotizar
        </h1>
        <div className="justify-center flex md:flex-row flex-col gap-3 m-3">
          <div className="items-center justify-center flex flex-row bg-slate-300 p-5 rounded-xl">
            <ChatBubbleIcon style={{ color: "white" }} />
            <a
              href="https://my.artibot.ai/gssyysqb"
              target="_blank"
              className="text-[20px] text-center text-white font-bold"
              rel="noreferrer"
            >
              Chat en linea
            </a>
          </div>
          <div className="items-center justify-center flex flex-row bg-green-300 p-5 rounded-xl">
            <WhatsAppIcon style={{ color: "white" }} />
            <a
              href="https://api.whatsapp.com/send?phone=+5214441890212&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20paquetes%20saliendo%20de%20valles%20."
              target="_blank"
              className="text-[20px] text-center text-white font-bold"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="items-center justify-center flex flex-row bg-cyan-300 p-5 rounded-xl">
            <LibraryBooksIcon style={{ color: "white" }} />
            <Link
              to={"/contacto"}
              className="text-[20px] text-center text-white font-bold"
            >
              Formulario
            </Link>
          </div>
        </div>
        <p className="text-white text-center text-[20px]">
          SELECCIONA UN MEDIO PARA COTIZAR TU PAQUETE.
        </p>
      </section>
      {/* hoteles */}
      <section className="hoteles-valles relative h-screen bg-cover bg-fixed bg-center flex flex-col justify-around items-center">
        <div className="opacity-40 w-full h-full bg-black absolute" />
        <h1 className="text-white font-bold text-[40px] z-10">
          ¿Buscas Hospedaje?
        </h1>
        <Link
          to={"/galeria/hoteles"}
          className="text-white z-10 bg-[color:var(--green-color)] p-3 rounded-md font-bold animate-pulse"
        >
          Conoce Aqui
        </Link>
      </section>
    </div>
  );
};

export default CiudadValles;
