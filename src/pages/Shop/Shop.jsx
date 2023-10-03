import React, { useEffect, useState } from "react";
import "./Shop.scss";
import ShopListItem from "../../components/ShopListItem/ShopListItem";
import { useCartContext } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";
import { formatCurrency } from "../../utils/hooks";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import {
  createPaymentIntent,
  capturePayment,
  createOrder as createOrderMutate,
} from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import toast from "react-hot-toast";
import VerifiedIcon from "@mui/icons-material/Verified";

function Shop() {
  const { cart, setCart } = useCartContext();
  const { user } = useAuthContext();
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const paymentIntent = async () => {
    const amount = cart.reduce((x, y) => x + y.price, 0);
    try {
      const response = await API.graphql(
        graphqlOperation(createPaymentIntent, { amount })
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const paymentCapture = async (orderId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(capturePayment, { orderId })
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const createOrderDB = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(createOrderMutate, {
          input: {
            cart: JSON.stringify(cart),
            total: cart.reduce((x, y) => x + y.price, 0),
            status: "APPROVED",
            orderUserId: user.attributes.sub,
          },
        })
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = () => {
    return paymentIntent()
      .then((response) => response.data.createPaymentIntent)
      .then((order) => order.id);
  };

  const onApprove = (data) => {
    return paymentCapture(data.orderID)
      .then((response) => JSON.parse(response.data.capturePayment.data))
      .then((orderData) => {
        if (orderData.status === "COMPLETED") {
          createOrderDB().then((response) => {
            setCart([]);
            setIsPaymentSuccess(true);
          });

          const name = orderData.payer.name.given_name;
          toast.success(`Transaction completed by ${name}`);
        }
      });
  };

  return (
    <div>
      <div
        className={`header bg-cover bg-center rounded-br-3xl flex justify-center items-center`}
      >
        <h1 className="text-white font-bold text-[50px]">Checkout</h1>
      </div>
      {!isPaymentSuccess ? (
        <div className="flex justify-between mx-36 my-10">
          <div className="border-2 border-gray-300 flex-auto mx-14">
            <div className="bg-gray-300 p-5 flex items-center">
              <h1 className="text-2xl">
                Tu carrito de compras ({cart.length})
              </h1>
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
                <div className="flex flex-col flex-1">
                  {cart.length > 0 && (
                    <>
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        className="flex-1"
                        createOrder={createOrder}
                        onApprove={onApprove}
                      />
                      <p className="text-xl text-center font-normal">
                        O tambien:
                      </p>
                      <Link
                        to={"/contacto"}
                        className="bg-primary p-3 rounded-md text-white font-medium text-center mt-3"
                      >
                        Contactanos
                      </Link>
                    </>
                  )}
                </div>
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
      ) : (
        <div className="mt-10">
          <div className="self-center text-center">
            <VerifiedIcon className="text-primary" style={{ fontSize: 100 }} />
            <h1 className="text-3xl">Tu pago ha sido aprobado!</h1>
            <Link to={"/reservaciones"}>
              <button className="mt-12 bg-primary p-3 rounded-md text-white font-semibold">
                Ir a mis reservaciones
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
