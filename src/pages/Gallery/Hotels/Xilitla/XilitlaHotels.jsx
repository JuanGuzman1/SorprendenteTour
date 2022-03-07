import React from "react";
import ImageGallery from "../../../../components/Gallery/ImageGallery";
import {
  hotelCafeNaranja,
  hotelCaminoSurreal,
  hotelMagnolia,
  hotelRealDeLua,
  hotelSierraLinda,
  hotelZiyaketzas,
} from "../../../../data/images";
import "./XilitlaHotels.scss";

const XilitlaHotels = () => {
  return (
    <div className="xilitla-hotels">
      <div
        className={`header-gallery-xilitla bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white text-center font-bold text-[50px]">
          Hoteles en Xilitla
        </h1>
      </div>
      {/* hoteles xilitla */}
      <div className="flex flex-col items-center justify-center p-5">
        <div className="mt-5">
          <p className="text-[20px] text-center text-gray-400">
            Aqui tenemos unas opciones de hoteles para hospedarte en Xilitla,
            contactanos pregunta por el de tu preferencia y has tu reservacion.
          </p>
        </div>

        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL CAFE Y NARANJA</h1>
          <ImageGallery data={hotelCafeNaranja} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL CAMINO SURREAL</h1>
          <ImageGallery data={hotelCaminoSurreal} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL MAGNOLIA</h1>
          <ImageGallery data={hotelMagnolia} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL REAL DE LUA</h1>
          <ImageGallery data={hotelRealDeLua} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL SIERRA LINDA</h1>
          <ImageGallery data={hotelSierraLinda} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL ZIYAKETZAS</h1>
          <ImageGallery data={hotelZiyaketzas} />
        </div>
      </div>
    </div>
  );
};

export default XilitlaHotels;
