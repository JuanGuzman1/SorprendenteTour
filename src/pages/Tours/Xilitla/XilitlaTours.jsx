import React from "react";
import "./XilitlaTours.scss";

const XilitlaTours = () => {
  return (
    <div className="xilitla-tours">
      <div
        className={`header-xilitla bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Xilitla</h1>
      </div>
      <div className="cards md:grid md:grid-cols-3 flex flex-col justify-center items-center">
        <section className="zacahuil-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
          <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Tour Zacahuil
          </span>
        </section>

        <section className="bocoles-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
          <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Tour Bocoles
          </span>
        </section>

        <section className="enchiladas-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
          <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Tour Enchiladas
          </span>
        </section>

        <section className="acamayas-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
          <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Tour Acamayas
          </span>
        </section>

        <section className="mojarras-card bg-no-repeat bg-cover bg-center rounded-lg m-5 relative">
          <span class="absolute right-0 bg-green-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Tour Mojarras
          </span>
        </section>
      </div>
    </div>
  );
};

export default XilitlaTours;
