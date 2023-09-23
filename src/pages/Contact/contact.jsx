import React, { useState } from "react";
import "./Contact.scss";
import { createContactForm } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("LOCAL");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(createContactForm, {
          input: {
            name,
            email,
            phone,
            phoneType,
            subject,
            message,
          },
        })
      );
      if (response) {
        toast.success("Mensaje enviado!, nos pondremos en contacto contigo.", {
          duration: 5000,
        });
        cleanFields();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cleanFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

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
        <div className="flex flex-col justify-center items-center p-5 mx-40">
          <h1 className="text-white text-[40px] text-center font-bold">
            Formulario de contacto
          </h1>
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Ingresa tu correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
          />
          <select
            name="type"
            id="type"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="LOCAL">local</option>
            <option value="CELULAR">celular</option>
          </select>
          <input
            type="text"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            placeholder="Asunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="Escribenos"
            className="rounded-xl m-2 md:w-1/2 flex flex-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="bg-[color:var(--green-color)] p-3 text-white font-bold rounded-md animate-pulse w-60"
            onClick={onFormSubmit}
          >
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
