import React from "react";
import "./Tours.scss";

const Tours = () => {
  return (
    <div>
      <div
        className={`header-tour bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Tours</h1>
      </div>
      <div className="flex flex-1 md:flex-row flex-col justify-center items-center mt-10 mb-10">
        <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
          <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Xilitla
          </span>
        </section>
        <section className="card2 bg-no-repeat bg-cover rounded-lg m-5 relative">
          <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
            Ciudad Valles
          </span>
        </section>
      </div>
    </div>
  );
};

export default Tours;
