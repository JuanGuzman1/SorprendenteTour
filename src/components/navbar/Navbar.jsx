import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../context/CartContext";
import PersonIcon from "@mui/icons-material/Person";
import { useAuthContext } from "../../context/AuthContext";
import { Auth } from "aws-amplify";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCartContext();
  const [dropOpen, setDropOpen] = useState(false);
  const { user } = useAuthContext();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const gtag_report_conversion = (url) => {
    let callback = function () {
      if (typeof url != "undefined") {
        return url;
      }
    };
    window.gtag("event", "conversion", {
      send_to: "AW-834809898/3dnhCNClhqgYEKrgiI4D",
      event_callback: callback,
    });
    return false;
  };

  const onSignOut = () => {
    Auth.signOut();
    toast("Sesion finalizada");
  };

  return (
    <nav
      class={`border-gray-200 px-2 sm:px-4 py-2.5 fixed top-0 z-[200] w-full ${
        isScrolled ? "navbar scrolled" : " navbar"
      }`}
    >
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex">
          <img
            width="200"
            src="assets/logo.png"
            class="hover:animate-bounce"
            alt="logo"
          />
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                onClick={() => gtag_report_conversion("/")}
                to="/"
                className="text-xl font-medium text-white block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0 dark:text-white"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => gtag_report_conversion("/nosotros")}
                to="/nosotros"
                class="text-xl font-medium text-white block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                ¿Quienes somos?
              </Link>
            </li>
            <li>
              <Link
                onClick={() => gtag_report_conversion("/paquetes")}
                to="/paquetes"
                class="text-xl font-medium block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Paquetes
              </Link>
            </li>
            <li>
              <Link
                onClick={() => gtag_report_conversion("/tours")}
                to="/tours"
                class="text-xl font-medium block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                onClick={() => gtag_report_conversion("/tours4x4")}
                to="/tours4x4"
                class="text-xl font-medium block py-2 pr-4 pl-3 text-red-500 animate-bounce border-b border-gray-100 hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tours Xilitla 4x4
              </Link>
            </li>
            <li>
              <Link
                onClick={() => gtag_report_conversion("/galeria")}
                to="/galeria"
                class="text-xl font-medium block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                onClick={() => gtag_report_conversion("/contacto")}
                to="/contacto"
                class="text-xl font-medium block py-2 pr-4 pl-3 text-white hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacto
              </Link>
            </li>
            <li className="relative">
              <Link
                onClick={() => gtag_report_conversion("/checkout")}
                to={"/checkout"}
                class="text-xl font-medium block py-2 pr-4 pl-3 text-white hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <ShoppingCartIcon />
              </Link>
              {cart.length > 0 && (
                <div className="absolute top-[-10px] right-[-10px] bg-red-600 w-5 h-5 rounded-full">
                  <p className="text-white text-center text-sm">
                    {cart.length}
                  </p>
                </div>
              )}
            </li>
            <li className="relative inline-block">
              <button
                class="text-xl font-medium block py-2 pr-4 pl-3 text-white hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => setDropOpen(!dropOpen)}
              >
                <PersonIcon />
              </button>
              {dropOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {!user ? (
                      <Link
                        to={"/login"}
                        class="text-gray-700 block px-4 py-2 text-sm"
                      >
                        Iniciar sesión
                      </Link>
                    ) : (
                      <>
                        <button class="text-gray-700 block px-4 py-2 text-sm">
                          Mis reservaciones
                        </button>
                        <button class="text-gray-700 block px-4 py-2 text-sm">
                          Perfil
                        </button>

                        <button
                          class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          onClick={onSignOut}
                        >
                          Cerrar sesion
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
