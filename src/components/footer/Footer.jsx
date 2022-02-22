import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div class="flex flex-col md:flex-row md:justify-between items-center justify-center">
        <a
          href="https://sorprendentetour.com"
          target="_blank"
          class="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="assets/logo.png"
            class="ml-4 h-20"
            alt="Sorprendente Tour"
          />
        </a>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <Link
              to="/nosotros"
              class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/terminos-y-condiciones"
              class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Términos y condiciones
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              class="text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com" target="_blank" class="hover:underline">
          Sorprendente Tour
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
