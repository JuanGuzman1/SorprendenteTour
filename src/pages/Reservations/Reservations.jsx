import React, { useEffect, useState, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listOrders } from "./queries";
import { useAuthContext } from "../../context/AuthContext";

function Reservations() {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState();

  const fetchUserOrders = useCallback(async () => {
    const response = await API.graphql(
      graphqlOperation(listOrders, {
        filter: {
          userOrderId: user.attributes.id,
        },
      })
    );
    setOrders(response.data.listOrders.items);
  }, [user]);

  const fetchOrders = useCallback(async () => {
    const response = await API.graphql(graphqlOperation(listOrders));
    setOrders(response.data.listOrders.items);
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (user.attributes.email === "info@sorprendentetour.com") {
      fetchOrders();
    } else {
      fetchUserOrders();
    }
  }, [fetchUserOrders, user, fetchOrders]);

  console.log(user);

  return (
    <div>
      <div
        className={`header bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Mis reservaciones</h1>
      </div>
      <div className="justify-center items-center flex mt-10">
        <table class="border-separate border border-slate-500 self-center">
          <thead>
            <tr>
              <th class="border border-slate-600">Fecha de compra</th>
              <th class="border border-slate-600">Detalles</th>
              <th class="border border-slate-600">Total</th>
              <th class="border border-slate-600">Status</th>
              {user?.attributes?.email === "info@sorprendentetour.com" && (
                <>
                  <th class="border border-slate-600">Nombre</th>
                  <th class="border border-slate-600">Correo</th>
                  <th class="border border-slate-600">Telefono</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                const cart = JSON.parse(order.cart);
                return (
                  <tr>
                    <td class="border border-slate-700 px-3">
                      {order.createdAt}
                    </td>
                    <td class="border border-slate-700 px-3">
                      {cart.map((c) => (
                        <div className="my-3">
                          <p>{c.name}</p>
                          <p>No. personas: {c.numPeople}</p>
                          <span>precio: {c.price}</span>
                          <p>Comida y/o desayuno: {c.breakfast}</p>
                        </div>
                      ))}
                    </td>
                    <td class="border border-slate-700 px-3">{order.total}</td>
                    <td class="border border-slate-700 px-3 text-primary font-bold">
                      {order.status === "APPROVED" && "Aprobado"}
                    </td>
                    {user?.attributes?.email ===
                      "info@sorprendentetour.com" && (
                      <>
                        <td class="border border-slate-700 px-3">
                          {order.User.name}
                        </td>
                        <td class="border border-slate-700 px-3">
                          {order.User.email}
                        </td>
                        <td class="border border-slate-700 px-3">
                          {order.User.phone}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reservations;
