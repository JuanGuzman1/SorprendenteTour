import React from "react";
import "./Surrealista.scss";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Surrealista = () => {
  return (
    <div className="surrealista">
      <div className="w-3/4 relative">
        <div
          className={`header-surrealista w-full bg-cover bg-center rounded-br-full flex justify-center items-center`}
        />
        <img
          className="md:w-48 md:h-48 w-20 h-20 rounded-full absolute md:bottom-[-9rem] bottom-[-3rem] md:left-36 left-3 border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/surrealista/circle-1.jpg"
          alt="unknown"
        />
        <img
          className="md:w-56 md:h-56 w-36 h-36 rounded-full absolute md:bottom-[-7rem] bottom-[-3rem] md:left-[35rem] left-[7rem] border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/surrealista/circle-2.jpg"
          alt="unknown"
        />
        <img
          className="md:w-64 md:h-64 w-48 h-48 rounded-full absolute md:bottom-2 bottom-20 md:right-52 right-[-2rem] border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/surrealista/circle-3.jpg"
          alt="unknown"
        />
        <img
          className="md:w-80 md:h-80 w-72 h-72 rounded-full absolute top-8 right-[-7rem] border-8 border-white object-cover"
          src="../../../../../../assets/images/tours4x4/surrealista/circle-4.jpg"
          alt="unknown"
        />
      </div>
      <div className="flex m-5 flex-col">
        {/* Información */}
        <div className="flex md:flex-row flex-col m-7">
          <div className="self-center m-3">
            <h1 className="font-bold text-[50px] text-[#502610]">
              Ruta Surrealista
            </h1>
            <br />
            <p className="text-[20px] text-[#f37810] font-bold">
              Este tour es para que no te pierdas de manejar y sacarte la foto
              en un RZR o cuatrimoto en lugares muy bonitos en Xilitla, vive una
              experiencia unica que pocas veces se puede repetir.
              <br />
              <br />
              Duracion: 1:20 HRS Aprox
            </p>
          </div>
          <div className=" bg-[#f47a2d] md:w-[800px] md:h-[500px] w-[420px] h-[420px] rounded-full flex items-center flex-col justify-center">
            <h1 className="text-[#d6382c] md:text-4xl text-2xl font-bold">
              Xilitla 4x4
            </h1>
            <h3 className="text-white text-xl">Lugares a visitar</h3>
            <ul className="text-white md:mb-2 mb-0 font-semibold text-sm">
              <li>🔘Camino antiguo a las pozas</li>
              <li>🔘Mirador Xilitla</li>
              <li>🔘Tunel de Tlahuilapa</li>
              <li>🔘Fuera del Jardin Surrealista</li>
              <li>🔘Xilitla pueblo magico</li>
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
            src="assets/images/tours4x4/surrealista/ruta-surrealista.jpeg"
            alt=""
            className="rounded-xl"
          />
        </section>
      </div>
    </div>
  );
};

export default Surrealista;
