import React from "react";

const Tours = (props) => {
  const { tour } = props;
  return (
    <>
      <div>
        {/* tours */}
        <div className="grid grid-cols-3 gap-3">
          {/* enchiladas */}
          {tour <= 6 && (
            <div className="bg-slate-200 rounded-md p-3">
              <h1 className="text-[color:var(--green-color)] text-bold text-[20px]">
                Tour Enchiladas
              </h1>
              <p>SOTANO DE GOLONDRINAS Y QUILAS</p>
              <p>PASEO EN CANOA SOBRE EL RIO TAMPAON</p>
              <p>CASCADA DE TAMUL</p>
              <p>GRUTA CON CENOTE CUEVA DEL AGUA</p>
            </div>
          )}
          {/* zacahuil */}
          {tour >= 2 && (
            <div className="bg-slate-200 rounded-md p-3">
              <h1 className="text-[color:var(--green-color)] text-bold text-[20px]">
                Tour Zacahuil
              </h1>
              <p>JARDIN SURREALISTA DE EDWARD JAMES</p>
              <p>CASCADA DEL GENERAL</p>
              <p>POZAS DE XILITLA</p>
              <p>NACIMIENTO HUICHIHUAYAN</p>
              <p>CAVERNA DE LAS QUILAS</p>
              <p>CASTILLO DE LA SALUD “BETO RAMON”</p>
            </div>
          )}
          {/* mojarras */}
          {tour >= 3 && (
            <div className="bg-slate-200 rounded-md p-3">
              <h1 className="text-[color:var(--green-color)] text-bold text-[20px]">
                Tour Mojarras
              </h1>
              <p>PUENTE DE DIOS</p>
              <p>CASCADAS DE TAMBACA</p>
              <p>CASCADAS DE TAMASOPO (OPCIONAL, COSTO EXTRA)</p>
            </div>
          )}
          {/* bocoles */}
          {tour >= 4 && (
            <div className="bg-slate-200 rounded-md p-3">
              <h1 className="text-[color:var(--green-color)] text-bold text-[20px]">
                Tour Bocoles
              </h1>
              <p>CASCADAS DE MINAS VIEJAS</p>
              <p>CASCADAS DE MICOS</p>
              <p>PARAJE PAGO PAGO</p>
              <p>PASEO EN CANOA</p>
              <p>SELVA TENEEK (RECORRIDO DE FELINOS)</p>
              <p>TIROLESAS, PUENTE COLGANTE, SKYBIKE (COSTO ADICIONAL)</p>
            </div>
          )}
          {/* pollo jacalon */}
          {tour >= 5 && (
            <div className="bg-slate-200 rounded-md p-3">
              <h1 className="text-[color:var(--green-color)] text-bold text-[20px]">
                Tour Pollo Jacalon
              </h1>
              <p>ZONA ARQUEOLOGICA DE TAMTOC</p>
              <p>ZONA ARQUEOLOGICA DE TAMOHI</p>
              <p>NACIMIENTO TANINUL</p>
            </div>
          )}
          {/* acamayas */}
          {tour >= 6 && (
            <div className="bg-slate-200 rounded-md p-3">
              <h1 className="text-[color:var(--green-color)] text-bold text-[20px]">
                Tour Acamayas
              </h1>
              <p>CASCADA DEL MECO</p>
              <p>MIRADOR DE LA CASCADA DEL MECO</p>
              <p>CASCADA DEL SALTO</p>
              <p>PASEO EN CANOA A PIE DE CASCADA</p>
              <p>SALTO DE CASCADAS EN EL RIO DEL NARANJO (COSTO EXTRA)</p>
              <p>TUBING (COSTO EXTRA)</p>
            </div>
          )}
        </div>
        {/* table */}
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="min-w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Incluye
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        No Incluye
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Math.floor(tour) <= 3 &&
                          `${Math.floor(
                            tour + 1
                          )} NOCHES EN HOTEL DE XILITLA DE SU ELECCION`}
                        {tour === 4 &&
                          "4 NOCHES EN XILITLA / 1 NOCHE EN VALLES EN HOTEL DE SU ELECCION"}
                        {tour === 5 &&
                          "4 NOCHES EN XILITLA / 2 NOCHES EN VALLES EN HOTEL DE SU ELECCION"}
                        {tour === 6 &&
                          "4 NOCHES EN XILITLA / 3 NOCHES EN VALLES EN HOTEL DE SU ELECCION"}
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        CENA
                      </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        TRANSPORTE AL TOUR SALIENDO DE SU HOSPEDAJE
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        PROPINAS
                      </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Math.floor(tour)} DESAYUNOS TRADICIONALES
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        NINGUNO NO ESPECIFICADO EN LO QUE INCLUYE
                      </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {Math.floor(tour)} COMIDA TRADICIONAL
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        FOTOGRAFIAS (PAQUETE BASICO)
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        GUIA ESPECIALIZADO EN LA RUTA
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        TICKETS DE ACCESO A LOS PARAJES
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        EQUIPO NECESARIO PARA LA EXCURSION
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        RECORRIDOS GUIADOS.
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
