import React from "react";
import "./PlaceTours.scss";
import { Link, useParams } from "react-router-dom";

const PlaceTours = () => {
  const { place } = useParams();

  return (
    <div className="xilitla-tours">
      <div
        className={`${
          place === "ciudad-valles" ? "header-valles" : "header-xilitla"
        } bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">
          {place === "ciudad-valles" ? "Ciudad Valles" : "Xilitla"}
        </h1>
      </div>
      <div className="cards md:grid md:grid-cols-3 flex flex-col justify-center items-center">
        {/* zacahuil */}
        <Link to="zacahuil">
          <section className="zacahuil-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
            <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Tour Zacahuil
            </span>
          </section>
        </Link>

        {/* bocoles */}
        <Link to="bocoles">
          <section className="bocoles-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
            <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Tour Bocoles
            </span>
          </section>
        </Link>

        {/* enchiladas */}
        <Link to="enchiladas">
          <section className="enchiladas-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
            <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Tour Enchiladas
            </span>
          </section>
        </Link>

        {/* acamayas */}
        <Link to="acamayas">
          <section className="acamayas-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
            <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Tour Acamayas
            </span>
          </section>
        </Link>

        {/* mojarras */}
        <Link to="mojarras">
          <section className="mojarras-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
            <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Tour Mojarras
            </span>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default PlaceTours;
