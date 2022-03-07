import React from "react";
import "./ToursGallery.scss";
import ImageGallery from "../../../components/Gallery/ImageGallery";
import { tours } from "../../../data/images";

const ToursGallery = () => {
  return (
    <div className="tours-gallery">
      <div
        className={`header-tours-gallery bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Galería de Tours</h1>
      </div>
      {/* hoteles xilitla */}
      <div className="flex flex-col items-center justify-center p-5">
        <div className="mt-5">
          <p className="text-[20px] text-center text-gray-400">
            Ven y disfruta una experiencia unica en la huasteca potosina.
          </p>
        </div>

        <div className="mt-5">
          <h1 className="text-[30px] text-center">
            FOTOS DE NUESTROS TOURS Y PARAJES
          </h1>
          <ImageGallery data={tours} />
        </div>
      </div>
    </div>
  );
};

export default ToursGallery;
