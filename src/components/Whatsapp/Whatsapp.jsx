import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Whatsapp.scss";

const Whatsapp = () => {

  function gtag_report_conversion(url) {
     let callback = function () { 
      if (typeof(url) != 'undefined') { 
        return url; 
      } 
        }; 
        window.gtag('event', 'conversion', { 'send_to': 'AW-834809898/3dnhCNClhqgYEKrgiI4D', 'event_callback': callback });
       return false;
      }

  return (
    <div>
      <button
        onClick={() => gtag_report_conversion("https://api.whatsapp.com/send?phone=+5214441890212&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tours%20.")}
        href="https://api.whatsapp.com/send?phone=+5214441890212&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tours%20."
        className="float"
        target="_blank"
       // rel="noreferrer"
      >
        <WhatsAppIcon fontSize="large" className="my-float" />
      </button>
    </div>
  );
};

export default Whatsapp;
