import React from "react";
import "./Terms.scss";

const Terms = () => {
  return (
    <div className="terms">
      <div
        className={`header-terms bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">
          Términos y Condiciones
        </h1>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-5">
        <section className="m-5">
          <h1 className="text-center text-[40px] text-[color:var(--green-color)]">
            Condiciones del servicio
          </h1>
          <p className="text-center text-[20px]">
            Sorprendente Tour se reserva el derecho de modificar itinerarios e
            incluso cancelar actividades por causas fuera de nuestro control
            (factores climatológicos, problemas políticos, etc.). En estos casos
            el costo del servicio no es reembolsable, sin embargo, es posible
            cambiar la actividad siempre y cuando existan las condiciones
            necesarias. El orden de las actividades puede variar por cuestiones
            de logística.
          </p>
        </section>
        <section className="m-5">
          <h1 className="text-center text-[40px] text-[color:var(--green-color)]">
            Condiciones de Reservación
          </h1>
          <p className="text-center text-[20px]">
            Una vez hecho el anticipo del 30% de su paquete el restante 70% se
            tendrá que cubrir el día del primer tour, ya sea en efectivo,
            transferencia o pago con tarjeta. En caso de haber cubierto el 100%
            de su paquete y quiera cancelar actividades 24 horas antes por
            motivos personales o laborales o de algún otra índole que no sean de
            fuerza mayor, no existe reembolso.
          </p>
        </section>
        <section className="m-5">
          <h1 className="text-center text-[40px] text-[color:var(--green-color)]">
            Políticas de Cancelación
          </h1>
          <p className="text-center text-[20px]">
            En caso de que un cliente desee cancelar algún servicio contratado,
            deberá sujetarse a las siguientes condiciones: Cancelaciones 8 días
            o más antes de su viaje aplicará un cargo del 25 % del depósito
            realizado con opción a transferirlo a otra persona o posponer el
            viaje en un lapso no mayor a 1 año. Si su cancelación es 7 días o
            menos antes del viaje, no existe reembolso. Si el participante por
            razones ajenas a la empresa, no se presenta el día de su actividad a
            la hora indicada, se considera “NO SHOW” y el costo no será
            reembolsable.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
