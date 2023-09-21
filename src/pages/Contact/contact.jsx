import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <div
        className={`header-contact bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Contacto</h1>
      </div>
      <section className="m-5 mx-40">
        <p className="text-[30px] text-center">
          Si desea cotizar alguno de nuestros paquetes o tour independientes por
          favor ponerse en contacto con nosotros, solo tiene que completar el
          siguiente formulario que se muestra a continuación y en la brevedad
          posible le estaremos brindando la información solicitada.
        </p>
        <p className="text-[25px] text-center">
          También puede comunicarse directamente con nosotros utilizando los
          siguientes medios:
        </p>
        <p className="text-[18px] text-center">
          <a href="mail:sorprendentetour@gmail.com">
            sorprendentetour@gmail.com
          </a>
        </p>

        <p className="text-[18px] text-center">
          Miguel Hidalgo 203, zona centro, Xilitla 79900,México
        </p>
        <p className="text-[18px] text-center">
          Celular: <a href="tel:+524441890212">+52 444 189 0212</a> o{" "}
          <a href="tel:+524831209382">+52 483 120 9382</a>+52 483 120 9382
        </p>
        <p className="text-[18px] text-center">
          Teléfono: <a href="tel:+524896880496">+52 489 688 0496 (Oficina) </a>
        </p>
      </section>
      <section className="form-contact bg-center">
        <div className="flex flex-col justify-center items-center p-5 mx-32">
          <h1 className="text-white text-[40px] text-center font-bold">
            Formulario de contacto
          </h1>
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Ingresa tu nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Ingresa tu correo electronico"
          />
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="# Telefono"
          />
          <select
            name="type"
            id="type"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
          >
            <option value="local">local</option>
            <option value="cel">celular</option>
          </select>
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Asunto"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Escribenos"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
          ></textarea>
          <button className="bg-[color:var(--green-color)] p-3 text-white font-bold rounded-md animate-pulse">
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
