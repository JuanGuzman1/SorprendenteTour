import React from "react";
import "./ToursGallery.scss";

const ToursGallery = () => {
  return (
    <div className="tours-gallery">
      <div
        className={`header-tours-gallery bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Galería de Tours</h1>
      </div>
    </div>
  );
};

export default ToursGallery;
