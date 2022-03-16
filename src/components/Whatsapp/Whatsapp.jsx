import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Whatsapp.scss";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+5214441890212&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tours%20."
        className="float"
        target="_blank"
      >
        <WhatsAppIcon fontSize="large" className="my-float" />
      </a>
    </div>
  );
};

export default Whatsapp;
