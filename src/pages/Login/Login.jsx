import React, { useState } from "react";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <div
        className={`header bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">
          {isSignIn ? "Inicia sesión" : "Registro"}
        </h1>
      </div>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <Register setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

function SignIn({ setIsSignIn }) {
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="shadow-md p-9 w-1/4 rounded-md">
        <h1 className="text-xl font-medium">
          Ingresa tus datos para iniciar sesión
        </h1>
        <div className="mt-7">
          <h2>Correo electronico</h2>
          <input type="text" className="w-full" />
        </div>
        <div className="mt-4">
          <h2>Contraseña</h2>
          <input type="password" className="w-full" />
        </div>
        <div className="mt-8">
          <button className="bg-primary p-3 rounded-md text-white font-medium">
            Ingresar
          </button>
        </div>
        <div className="mt-7">
          <h2 className="text-md">
            Aun no tienes una cuenta,{" "}
            <span
              onClick={() => setIsSignIn(false)}
              className="text-cyan-400 cursor-pointer"
            >
              Regístrate aquí.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

function Register({ setIsSignIn }) {
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="shadow-md p-9 w-1/4 rounded-md">
        <h1 className="text-xl">Ingresa tus datos para registrarte</h1>
        <div className="mt-4">
          <h2>Nombre completo (*)</h2>
          <input type="text" className="w-full" />
        </div>
        <div className="mt-4">
          <h2>Telefono (*)</h2>
          <input type="text" className="w-full" />
        </div>
        <div className="mt-4">
          <h2>Correo electronico (*)</h2>
          <input type="text" className="w-full" />
        </div>
        <div className="mt-4">
          <h2>Contraseña (*)</h2>
          <input type="password" className="w-full" />
        </div>
        <div className="mt-4">
          <h2>Confirmar contraseña (*)</h2>
          <input type="password" className="w-full" />
        </div>
        <div className="mt-8">
          <button className="bg-primary p-3 rounded-md text-white font-medium">
            Registrarse
          </button>
        </div>
        <div className="mt-7">
          <h2 className="text-md">
            Ya tienes una cuenta,{" "}
            <span
              onClick={() => setIsSignIn(true)}
              className="text-cyan-400 cursor-pointer"
            >
              Inicia sesión.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
