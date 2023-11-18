import React from "react";
import "./Nacimiento.scss";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Nacimiento = () => {
  return (
    <div className="nacimiento">
      <div className="w-3/4 relative">
        <div
          className={`header-nacimiento w-full bg-cover bg-center rounded-br-full flex justify-center items-center`}
        />
        <img
          className="md:w-48 md:h-48 w-20 h-20 rounded-full absolute md:bottom-[-9rem] bottom-[-3rem] md:left-36 left-3 border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/nacimiento/circle-1.jpg"
          alt="unknown"
        />
        <img
          className="md:w-56 md:h-56 w-36 h-36 rounded-full absolute md:bottom-[-7rem] bottom-[-3rem] md:left-[35rem] left-[7rem] border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/nacimiento/circle-2.jpg"
          alt="unknown"
        />
        <img
          className="md:w-64 md:h-64 w-48 h-48 rounded-full absolute md:bottom-2 bottom-20 md:right-52 right-[-2rem] border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/nacimiento/circle-3.jpg"
          alt="unknown"
        />
        <img
          className="md:w-80 md:h-80 w-72 h-72 rounded-full absolute top-8 right-[-7rem] border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/nacimiento/circle-4.jpg"
          alt="unknown"
        />
      </div>

      <div className="flex m-5 flex-col">
        {/* Información */}
        <div className="flex md:flex-row flex-col m-7">
          <div className="self-center m-3">
            <h1 className="font-bold text-[50px] text-[#502610]">
              Ruta Nacimiento
            </h1>
            <br />
            <p className="text-[20px] text-[#f37810] font-bold">
              Una experiencia unica en un OFF ROAD puede ser cuatrimoto, CAN AM
              O RZR, la que elijas tenlo por seguro que te la pasaras padrisimo
              son 5 horas de tour, actividades acuaticas, terraceria y mucha
              diversion garantizada.
              <br />
              <br />
              Duracion: 5:00 HRS Aprox
            </p>
          </div>
          <div className=" bg-[#f47a2d] md:w-[800px] md:h-[500px] w-[420px] h-[420px] rounded-full flex items-center flex-col justify-center">
            <h1 className="text-[#d6382c] md:text-4xl text-2xl font-bold">
              Xilitla 4x4
            </h1>
            <h3 className="text-white text-xl">Lugares a visitar</h3>
            <ul className="text-white md:mb-2 mb-0 font-semibold text-sm">
              <li>🔘Nacimiento Xilitla y Huichihuayan</li>
              <li>🔘Camino antiguo a Xilitla</li>
              <li>🔘Jardin Surrealista por fuera</li>
              <li>🔘Xilitla pueblo magico centro</li>
              <li>🔘Tunel de Tlahuilapa</li>
              <li>🔘Cueva de las Quilas</li>
            </ul>
            <h1 className="md:text-4xl text-2xl text-[#502610] font-bold">
              COTIZA Y RESERVA
            </h1>
            <div className="flex">
              <div className="text-white mr-2 md:text-sm text-xs">
                <p>
                  <LocalPhoneRoundedIcon />
                  444-189-0212
                </p>
                <p>
                  <LocalPhoneRoundedIcon />
                  444-119-4889
                </p>
                <p>
                  <LocalPhoneRoundedIcon />
                  489-688-0496
                </p>
              </div>
              <div className="text-white ml-2 md:text-sm text-xs">
                <p>
                  <EmailRoundedIcon />
                  sorprendentetour@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ruta */}
        <section className="m-5">
          <h1 className="text-[40px] text-[#502610] font-bold">Mapa de ruta</h1>
          <img
            src="assets/images/tours4x4/nacimiento/ruta-nacimiento.jpeg"
            alt=""
            className="rounded-xl"
          />
        </section>
      </div>
    </div>
  );
};

export default Nacimiento;
