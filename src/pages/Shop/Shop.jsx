import React, { useEffect } from "react";
import "./Shop.scss";
import ShopListItem from "../../components/ShopListItem/ShopListItem";
import { useCartContext } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";
import { formatCurrency } from "../../utils/hooks";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";

function Shop() {
  const { cart } = useCartContext();
  const { user } = useAuthContext();

  const createOrder = () => {
    return fetch("/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        cart: [
          {
            id: "YOUR_PRODUCT_ID",
            quantity: "YOUR_PRODUCT_QUANTITY",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  return (
    <div>
      <div
        className={`header bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Checkout</h1>
      </div>
      <div className="flex justify-between mx-36 my-10">
        <div className="border-2 border-gray-300 flex-auto mx-14">
          <div className="bg-gray-300 p-5 flex items-center">
            <h1 className="text-2xl">Tu carrito de compras ({cart.length})</h1>
          </div>
          <div className="m-5 mx-10">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={item.name}>
                  <ShopListItem item={item} index={index} />
                </div>
              ))
            ) : (
              <h2 className="text-center">
                No hay tours agregados al carrito.
              </h2>
            )}
          </div>
        </div>
        <div className="p-10 flex-auto shadow-lg rounded-md">
          <h1 className="text-3xl py-5 font-semibold text-[color:var(--blue-color)]">
            Resumen
          </h1>
          <hr />
          <div className="flex justify-between py-2">
            <h2 className="text-lg">Subtotal</h2>
            <h2 className="text-lg">
              ${cart.length > 0 ? cart.reduce((x, y) => x + y.price, 0) : 0}
            </h2>
          </div>
          <hr />
          <div className="flex justify-between py-2">
            <h2 className="text-2xl font-medium">Total</h2>
            <h2 className="text-2xl font-medium">
              $
              {cart.length > 0
                ? formatCurrency(cart.reduce((x, y) => x + y.price, 0))
                : 0}
            </h2>
          </div>
          <hr />
          <div className="flex justify-center mt-10">
            {user ? (
              <PayPalButtons
                style={{ layout: "vertical" }}
                className="flex-1"
                //createOrder={createOrder}
              />
            ) : (
              <Link
                to={"/login"}
                className="bg-primary p-3 rounded-md text-white font-medium"
              >
                Inicia sesion
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
