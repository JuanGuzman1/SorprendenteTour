import React from "react";
import "./CiudadVallesHotels.scss";
import ImageGallery from "../../../../components/Gallery/ImageGallery";
import {
  hotelHotelValles,
  hotelHuaxtecaInn,
  hotelPopeye,
  hotelPiña,
  hotelGrannHotel,
} from "../../../../data/images";

const CiudadVallesHotels = () => {
  return (
    <div className="valles-hotels">
      <div
        className={`header-gallery-valles bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white text-center font-bold text-[50px]">
          Hoteles en Ciudad Valles
        </h1>
      </div>
      {/* hoteles ciudad valles */}
      <div className="flex flex-col items-center justify-center p-5">
        <div className="mt-5">
          <p className="text-[20px] text-center text-gray-400">
            Aqui tenemos unas opciones de hoteles para hospedarte en Ciudad
            Valles, contactanos pregunta por el de tu preferencia y has tu
            reservacion.
          </p>
        </div>

        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL VALLES</h1>
          <ImageGallery data={hotelHotelValles} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL HUAXTECA INN</h1>
          <ImageGallery data={hotelHuaxtecaInn} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL POPEYE</h1>
          <ImageGallery data={hotelPopeye} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">HOTEL PIÑA</h1>
          <ImageGallery data={hotelPiña} />
        </div>
        <div className="mt-5">
          <h1 className="text-[30px] text-center">GRANN HOTEL</h1>
          <ImageGallery data={hotelGrannHotel} />
        </div>
      </div>
    </div>
  );
};

export default CiudadVallesHotels;
