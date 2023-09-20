import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import toast from "react-hot-toast";

function ConfirmationCode() {
  const { state } = useLocation();
  const email = state?.email;
  const [code, setCode] = useState();
  const navigate = useNavigate();

  const onConfirmCode = async () => {
    try {
      const response = await Auth.confirmSignUp(email, code);
      if (response === "SUCCESS") {
        toast.success("Correo confirmado con éxito.");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className={`header bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Confirmar registro</h1>
      </div>
      <div className="flex justify-center items-center mt-20 ">
        <div className="shadow-lg p-9 w-1/2">
          <h1 className="text-2xl font-semibold">
            Confirma tu correo electronico
          </h1>
          <h3 className="text-lg">
            hemos enviado un codigo de confirmacion a tu correo electronico{" "}
            <span className="font-semibold">{email}</span>, por favor ingresa el
            codigo y completa el proceso de registro.
          </h3>
          <div className="mt-6">
            <h2 className="font-medium">Codigo de confirmacion (*)</h2>
            <input
              type="text"
              className="w-1/2 mt-2"
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button
            className="bg-primary p-3 rounded-md text-white font-medium mt-4"
            onClick={onConfirmCode}
          >
            Confirmar registro
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationCode;
