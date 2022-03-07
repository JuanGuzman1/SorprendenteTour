import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      <div
        className={`header-gallery bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Galería</h1>
      </div>
      <div className="flex flex-1 md:flex-row flex-col justify-center items-center mt-10 mb-10">
        <Link to="tours">
          <section className="card1-gallery bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Fotos de tours
            </span>
          </section>
        </Link>

        <Link to="hoteles">
          <section className="card2-gallery bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Fotos de hoteles
            </span>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
