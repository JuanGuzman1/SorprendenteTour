import React from "react";
import "./Home.scss";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";

const Home = () => {
  return (
    <div className="root">
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/D_lZyfIW_Pk?rel=0&version=3&controls=0&autoplay=1&mute=1&loop=1&showinfo=0&start=191&end=251&playlist=D_lZyfIW_Pk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <section className="section1">
        <div className="title">
          <h1 className="font-bold">¿Por qué elegir nuestros paquetes?</h1>
        </div>

        <div>
          <section>
            <BookOnlineRoundedIcon className="icon" />
            <h2>COTIZACIONES FLEXIBLES</h2>
            <p>
              Cotizar en sorprendente tour es tan fácil. Con solo un par de
              click podrás cotizar y comunicarte con nosotros muy rápidamente.
            </p>
          </section>
          <section>
            <GroupIcon className="icon" />
            <h2>CONTAMOS CON UNA AMPLIA EXPERIENCIA</h2>
            <p>
              En conjunto, nuestros equipo de guias turistas tienen suficiente
              experiencia y están listos para ponerlos a su disposición.
            </p>
          </section>
          <section>
            <EventIcon className="icon" />
            <h2>LOS HORARIOS MAS FLEXIBLES</h2>
            <p>
              Tenemos salidas y horarios que podrás disfrutar de nuestros
              paquetes y de cada recorrido perfectamente si perderte de nada.
            </p>
          </section>
        </div>
      </section>
      <section className="section2 w-full mt-7">
        <div className="title flex justify-center align-middle">
          <h1 className="text-white font-bold text-center">
            Algunos de nuestros destinos
          </h1>
        </div>
        <div className="places flex flex-col md:flex-row md:justify-between items-center p-3">
          <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium  animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Xilitla
            </span>
          </section>
          <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium  animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Xilitla
            </span>
          </section>
          <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium  animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Xilitla
            </span>
          </section>
          <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium  animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Xilitla
            </span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
