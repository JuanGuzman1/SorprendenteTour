import React from "react";
import "./Tours4x4.scss";
import { Link } from "react-router-dom";

const Tours4X4 = () => {
  return (
    <div className="tours4x4">
      <div
        className={`header-tour4x4 bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tours 4x4</h1>
      </div>
      <div className="cards-tours flex justify-center">
        <div className="md:grid md:grid-cols-2 mt-10 mb-10">
          <Link to="trinidad">
            <section className="trinidad-card bg-no-repeat bg-cover rounded-lg m-5 relative">
              <span class="absolute right-0 bg-red-500 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
                Ruta Trinidad
              </span>
            </section>
          </Link>

          <Link to="surrealista">
            <section className="surrealista-card bg-no-repeat bg-cover rounded-lg m-5 relative">
              <span class="absolute right-0 bg-red-500 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
                Tour Surrealista
              </span>
            </section>
          </Link>

          <Link to="nacimiento">
            <section className="nacimiento-card bg-no-repeat bg-cover rounded-lg m-5 relative">
              <span class="absolute right-0 bg-red-500 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
                Nacimiento Off Road
              </span>
            </section>
          </Link>

          <Link to="miradores">
            <section className="miradores-card bg-no-repeat bg-cover rounded-lg m-5 relative">
              <span class="absolute right-0 bg-red-500 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
                Tour Miradores
              </span>
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tours4X4;
