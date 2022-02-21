import React from "react";
import "./Tours.scss";
import { Link } from "react-router-dom";

const Tours = () => {
  return (
    <div>
      <div
        className={`header-tour bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tours</h1>
      </div>
      <div className="flex flex-1 md:flex-row flex-col justify-center items-center mt-10 mb-10">
        <Link to="xilitla">
          <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Saliendo de Xilitla
            </span>
          </section>
        </Link>

        <Link to="ciudad-valles">
          <section className="card2 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Saliendo de Ciudad Valles
            </span>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default Tours;
