import React, { useEffect, useState } from "react";
import { NumbersOption, formatCurrency } from "../../utils/hooks";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function PriceCard({ tour, bundle }) {
  const [options, setOptions] = useState([]);
  const [pricePerPerson, setPricePerPerson] = useState();
  const [price, setPrice] = useState();
  const [breakfast, setBreakfast] = useState(bundle ? "si" : "no");
  const [numPeople, setNumPeople] = useState(2);
  const navigate = useNavigate();
  const { cart, setCart } = useCartContext();

  const addToShopCar = () => {
    let newData = cart;
    let data = {
      name: tour ? tour.name : bundle.name,
      price,
      breakfast,
      numPeople,
    };
    newData.push(data);
    setCart(newData);
    navigate("/checkout");
  };

  useEffect(() => {
    if (tour) {
      setPricePerPerson(tour.price);
    }
    if (bundle) {
      switch (numPeople) {
        case 2:
          setPricePerPerson(bundle.p2price);
          break;
        case 3:
          setPricePerPerson(bundle.p3price);
          break;
        case 4:
          setPricePerPerson(bundle.p4price);
          break;
        case 5:
          setPricePerPerson(bundle.p5price);
          break;
        default:
          setPricePerPerson(bundle.p5price);
          break;
      }
    }
  }, [tour, bundle, numPeople]);

  useEffect(() => {
    const opts = NumbersOption();
    setOptions(opts);
  }, []);

  useEffect(() => {
    if (breakfast === "si") {
      setPrice(pricePerPerson * numPeople + 200 * numPeople);
    } else if (breakfast === "no") {
      setPrice(pricePerPerson * numPeople);
    }
  }, [breakfast, numPeople, pricePerPerson]);

  return (
    <div className="w-3/4 self-center md:self-start">
      <div className="shadow-lg rounded-md p-5 md:mt-28">
        <div>
          <h1 className="text-3xl font-semibold text-[color:var(--blue-color)]">
            Reservar {bundle ? "Paquete" : "Tour"}
          </h1>
          <h1 className="text-6xl leading-relaxed text-[color:var(--green-color)] font-medium">
            ${formatCurrency(price)}
          </h1>
          <p className="mt-3">No. personas</p>
          <select
            value={numPeople}
            onChange={(e) => setNumPeople(parseInt(e.target.value))}
            className="rounded-md"
          >
            {options.map(
              (number) =>
                number > 1 && (
                  <option key={number} value={number}>
                    {number}
                  </option>
                )
            )}
          </select>
          {tour && (
            <>
              <p className="mt-3">
                Con {bundle ? "desayuno y comida" : "comida"}{" "}
                <span className="text-primary">(+200 p/p)</span>
              </p>
              <select
                onChange={(e) => setBreakfast(e.target.value)}
                className="rounded-md"
                value={breakfast}
              >
                <option value={"si"}>si</option>
                <option value={"no"}>no</option>
              </select>{" "}
            </>
          )}
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={addToShopCar}
            className="bg-primary p-5 rounded-xl text-white font-semibold"
          >
            <AddShoppingCartIcon className="mr-2" />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
