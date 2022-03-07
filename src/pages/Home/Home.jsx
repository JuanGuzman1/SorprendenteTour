import React, { useRef, useEffect } from "react";
import "./Home.scss";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import { Tourist } from "../../components/tourist/Tourist";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import { CountUp } from "countup.js";
import { Link } from "react-router-dom";

const tourists = [
  {
    name: "Melissa Nataly",
    message:
      "Exelentes recorridos y actividades en la huasteca, ademas que los horarios son muy flexibles y los guias super preparados.",
    imageURI: "assets/images/homepage/tourists/meli.jpeg",
  },
  {
    name: "Francisco Galvan",
    message:
      "Realice un tour por la husateca potosina, sin duda volveria a viajar.",
    imageURI: "assets/images/homepage/tourists/tourist2.jpeg",
  },
  {
    name: "Genaro Garcia",
    message:
      "Un trato amable para los turistas en todo momento, felicidades por el esmero y sus atenciones ",
    imageURI: "assets/images/homepage/tourists/tourist3.jpeg",
  },
];

const Home = () => {
  const count1 = useRef();
  const count2 = useRef();
  const count3 = useRef();
  const count4 = useRef();
  useEffect(() => {
    isScrolledIntoView();
  }, []);
  const isScrolledIntoView = () => {
    var observer = new IntersectionObserver(
      function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true)
          console.log("Element has just become visible in screen");
        var countUp1 = new CountUp(count1.current, 100000, {
          suffix: "+",
        });
        var countUp2 = new CountUp(count2.current, 30000, {
          suffix: "+",
        });
        var countUp3 = new CountUp(count3.current, 5000, {
          suffix: "+",
        });
        var countUp4 = new CountUp(count4.current, 3000, {
          suffix: "+",
        });
        countUp1.start();
        countUp2.start();
        countUp3.start();
        countUp4.start();
      },
      { threshold: [0] }
    );
    observer.observe(count1.current);
  };
  return (
    <div className="root">
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/D_lZyfIW_Pk?rel=0&version=3&controls=0&autoplay=1&mute=1&showinfo=0&playlist=D_lZyfIW_Pk&loop=1&start=191&end=251"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      {/* porque elegir nuestros paquetes */}
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
      {/* algunos de nuestros destinos */}
      <section className="section2 w-full mt-7">
        <div className="title flex justify-center align-middle">
          <h1 className="text-white font-bold text-center">
            Algunos de nuestros destinos
          </h1>
        </div>
        <div className="places flex flex-col md:flex-row md:justify-between items-center p-3">
          <section className="card1 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Xilitla
            </span>
          </section>
          <section className="card2 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Puente de dios
            </span>
          </section>
          <section className="card3 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Sotano de las golondrinas
            </span>
          </section>
          <section className="card4 bg-no-repeat bg-cover rounded-lg m-5 relative">
            <span class="absolute right-0 bg-cyan-300 text-white text-lg font-medium animate-pulse px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800">
              Cascadas de tamul
            </span>
          </section>
        </div>
      </section>
      {/* tours xilitla 4x4 */}
      <section className="section3 relative h-screen bg-cover bg-fixed bg-center">
        <div className="opacity-40 w-full h-full bg-black absolute" />
        <div className="w-full h-full flex flex-col justify-around items-center">
          <div className="z-10 m-5 text">
            <h1 className="text-center text-white font-bold animate-[bounce_5s_ease-in-out_infinite]">
              Vive una aventura en un RZR o cuatrimoto conoce de forma diferente
              los hermosos paisajes que nos rodean solo en{" "}
              <span className="text-[color:var(--blue-color)]">Xilitla</span>.
            </h1>
          </div>
          <Link
            to={"/tours4x4"}
            className="text-white z-10 bg-[color:var(--green-color)] p-3 rounded-md font-bold animate-pulse"
          >
            Conoce aquí
          </Link>
        </div>
      </section>
      {/* que dicen nuestros turistas */}
      <section className="section4 w-full mt-7">
        <div className="flex justify-center">
          <h1 className="text-[color:var(--green-color)] text-[40px] font-bold text-center">
            ¿Que dicen nuestros turistas?
          </h1>
        </div>
        <div className="flex md:flex-row flex-col m-3 justify-between">
          {tourists.map((tourist) => (
            <Tourist
              name={tourist.name}
              message={tourist.message}
              image={tourist.imageURI}
            />
          ))}
        </div>
      </section>
      <section className="section4 w-full mt-7 mb-7 flex md:flex-row flex-col justify-around items-center">
        <div className="mb-3 border-4 border-double border-[color:var(--green-color)] rounded-full w-48 h-48 flex flex-col justify-center items-center">
          <h3
            ref={count1}
            className="text-[20px] text-[color:var(--green-color)] font-bold"
          >
            100000+
          </h3>
          <h1 className="text-[20px] text-[color:var(--blue-color)] font-bold animate-[ping_4s_ease-in-out_infinite]">
            Turistas
          </h1>
        </div>
        <div className="mb-3 border-4 border-double border-[color:var(--green-color)] rounded-full w-48 h-48 flex flex-col justify-center items-center">
          <h3
            ref={count2}
            className="text-[20px] text-[color:var(--green-color)] font-bold"
          >
            30000+
          </h3>
          <h1 className="text-[20px] text-[color:var(--blue-color)] font-bold animate-[ping_4s_ease-in-out_infinite]">
            Facebook Follows
          </h1>
        </div>
        <div className="mb-3 border-4 border-double border-[color:var(--green-color)] rounded-full w-48 h-48 flex flex-col justify-center items-center">
          <h3
            ref={count3}
            className="text-[20px] text-[color:var(--green-color)] font-bold"
          >
            14000+
          </h3>
          <h1 className="text-[20px] text-[color:var(--blue-color)] font-bold animate-[ping_4s_ease-in-out_infinite]">
            Instagram Follows
          </h1>
        </div>
        <div className="mb-3 border-4 border-double border-[color:var(--green-color)] rounded-full w-48 h-48 flex flex-col justify-center items-center">
          <h3
            ref={count4}
            className="text-[20px] text-[color:var(--green-color)] font-bold"
          >
            3000+
          </h3>
          <h1 className="text-[20px] text-[color:var(--blue-color)] font-bold animate-[ping_4s_ease-in-out_infinite]">
            TikTok Follows
          </h1>
        </div>
      </section>
      {/* contacto */}
      <section className="bg-[color:var(--green-color)] w-full">
        <div className="flex md:flex-row flex-col w-full md:justify-between items-center p-5">
          <section className="flex flex-col m-2 md:w-1/2">
            <h1 className="text-white text-center text-[35px] font-bold">
              Sobre nosotros
            </h1>
            <p className="text-white text-center text-[25px]">
              En{" "}
              <span className="text-[color:var(--blue-color)]">
                Sorprendente tour
              </span>
              , amamos a la naturaleza y entendemos el cuidado de nuestra
              huasteca potosina, es por ello que le brindamos un servicio de
              calidad, contribuyendo al cuidado del medio ambiente.
            </p>
          </section>
          <section className="flex flex-col m-2 md:w-1/2">
            <h1 className="text-white text-center text-[35px] font-bold">
              Contacto directo
            </h1>
            <div className="ml-5">
              <p className="text-white text-center text-[20px] m-1">
                <LocationOnIcon />
                Miguel Hidalgo 203, zona centro, Xilitla 79900,México
              </p>
              <p className="text-white text-center text-[20px] m-1">
                <PhoneAndroidIcon />
                <a href="tel:+524441890212">4441890212</a>
              </p>
              <p className="text-white text-center text-[20px] m-1">
                <LocalPhoneIcon />
                <a href="tel:+524896880496">4896880496</a>
              </p>
              <p className="text-white text-center text-[20px] m-1">
                <EmailIcon />
                <a href="mail:sorprendentetour@gmail.com">
                  sorprendentetour@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
