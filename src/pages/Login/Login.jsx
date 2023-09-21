import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

function SignIn({ setIsSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    try {
      await Auth.signIn({ username: email, password });
      toast.success("Sesion iniciada correctamente");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-14">
      <div className="shadow-md p-9 w-1/4 rounded-md">
        <h1 className="text-xl font-medium">
          Ingresa tus datos para iniciar sesión
        </h1>
        <div className="mt-7">
          <h2>Correo electrónico</h2>
          <input
            type="text"
            className="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <h2>Contraseña</h2>
          <input
            type="password"
            className="w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <button
            className="bg-primary p-3 rounded-md text-white font-medium"
            onClick={onSignIn}
          >
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

function SignUp({ setIsSignIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const navigate = useNavigate();

  const onSignUp = async () => {
    try {
      const response = await Auth.signUp({
        username: email,
        password,
        autoSignIn: false,
        attributes: {
          email,
          phone_number: phone,
          name,
        },
      });
      if (response) {
        navigate("/confirmar-registro", { state: { email } });
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-14">
      <div className="shadow-md p-9 w-1/4 rounded-md">
        <h1 className="text-xl">Ingresa tus datos para registrarte</h1>
        <div className="mt-4">
          <h2>Nombre completo (*)</h2>
          <input
            type="text"
            className="w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <h2>Telefono (*)</h2>
          <input
            type="text"
            className="w-full"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <h2>Correo electrónico (*)</h2>
          <input
            type="text"
            className="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <h2>Contraseña (*)</h2>
          <input
            type="password"
            className="w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <h2>Confirmar contraseña (*)</h2>
          <input
            type="password"
            className="w-full"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <button
            className="bg-primary p-3 rounded-md text-white font-medium"
            onClick={onSignUp}
          >
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
