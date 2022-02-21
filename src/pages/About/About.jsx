import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div
        className={`header bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Nosotros</h1>
      </div>
      {/* nosotros */}
      <div className="flex md:flex-row flex-col m-7">
        <p className="text-[20px] m-3 text-center">
          Mucho más que guías turistas
          <span className="text-[color:var(--green-color)] font-bold">
            “Sorprendente Tour”
          </span>
          se preocupa por el medio ambiente, motivando a sus turistas en el
          cuidado y protección de nuestra naturaleza. Fundado en el 2015,
          Sorprendente Tour cuenta con una gran variedad de paquetes y
          comodidades que se ajustan a tus necesidades, nuestro objetivo es que
          tengas una gran experiencia visitando sitios y lugares más bellos de
          nuestra Huasteca Potosína, acompañado de guías locales que te apoyaran
          y te brindaran información histórica de cada uno de estos, realizando
          actividades, recorridos y dinámicas muy divertidas. No olvide
          informarse de todas nuestras ofertas y promociones a través de nuestra
          Página en Facebook. Y por supuesto, si desea saber más sobre nuestros
          paquetes, transporte, comida, hospedaje, etc. Consúltanos mediante
          correo electrónico o contacto directamente vía telefónica.
        </p>
        <img
          src="assets/images/about/guias.jpeg"
          alt=""
          className="h-1/2 w-1/2 rounded-2xl animate-pulse self-center"
        />
      </div>
      {/* mision */}
      <div className="flex md:flex-row flex-col m-7">
        <img
          src="assets/images/about/guias2.jpeg"
          alt=""
          className="h-1/2 w-1/2 rounded-2xl animate-pulse self-center"
        />

        <div className="self-center m-3">
          <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
            Mision
          </p>
          <p className="text-[20px] text-center">
            Brindarles a todos los clientes el mejor servicio y la mejor
            experiencia de Turismo en la Huasteca Potosina, a través de una
            buena atención, rápida, precisa y eficiente por parte de nuestro
            personal capacitado y comprometido, ofreciéndoles viajes
            inolvidables, únicos, imperdibles y accesibles, todo esto cuidando
            la naturaleza y generando una satisfacción completa.
          </p>
        </div>
      </div>
      {/* vision */}
      <div className="flex md:flex-row flex-col m-7">
        <div className="self-center m-3">
          <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
            Vision
          </p>
          <p className="text-[20px] text-center">
            Convertirnos en la Agencia de Turismo más grande en San Luis Potosí
            de manera sustentable y con una buena organización basada en la
            calidad, la innovación y las metodologías de optimización más
            profesionales. Ser por siempre una empresa que genere actividad
            turística de manera sustentable a la región, asegurándonos de
            mantener nuestros estándares.
          </p>
        </div>
        <img
          src="assets/images/about/guias3.jpeg"
          alt=""
          className="h-1/4 w-1/2 rounded-2xl animate-pulse self-center"
        />
      </div>
      {/* nuestros valores */}
      <div className="flex md:flex-row flex-col m-7">
        <img
          src="assets/images/about/guias4.jpeg"
          alt=""
          className="inline-block h-2/3 w-1/2 rounded-2xl animate-pulse self-center"
        />

        <div className="self-center m-3">
          <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
            Nuestros valores
          </p>
          <p className="text-[20px] text-center">
            Amabilidad, Puntualidad, Sinceridad, Honestidad, Trabajo en equipo,
            Innovación, Colaboración, Fidelidad, Empatía, Optimismo, Paciencia,
            Perseverancia, Responsabilidad, Voluntad, Respeto, Tolerancia.
          </p>
        </div>
      </div>
      {/* fundador */}
      <div className="flex md:flex-row flex-col m-7">
        <div className="self-center m-3 w-1/2">
          <p className="text-center font-bold text-[color:var(--green-color)] text-[30px]">
            Nuestro equipo
          </p>
          <p className="text-[20px] text-center">
            <span className="text-[color:var(--blue-color)] font-bold">
              Martin Velasco
            </span>{" "}
            - Fundador y director general.
          </p>
          <p className="text-[20px] text-center">
            <span className="text-[color:var(--blue-color)] font-bold">
              Alejandro Tafolla
            </span>{" "}
            - Fundador y colaborador.
          </p>
        </div>
        <img
          src="assets/images/about/guias5.jpeg"
          alt=""
          className="h-1/2 w-1/2 rounded-2xl animate-pulse self-center"
        />
      </div>
    </div>
  );
};

export default About;
