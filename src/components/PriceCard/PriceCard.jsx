import React, {  useEffect, useState } from "react";
import { NumbersOption, formatCurrency } from "../../utils/hooks";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function PriceCard() {
  const [options, setOptions] = useState([]);
  const [pricePerPerson] = useState(100);
  const [price, setPrice] = useState(100);
  const [breakfast, setBreakfast] = useState("no");
  const [numPeople, setNumPeople] = useState(1);

  const addToShopCar = () => {
    return null
  };

  useEffect(() => {
    const opts = NumbersOption();
    setOptions(opts);
  }, []);

  useEffect(() => {
    if (breakfast === "si") {
      setPrice(pricePerPerson * numPeople + 50);
    } else if (breakfast === "no") {
      setPrice(pricePerPerson * numPeople);
    }
  }, [breakfast, numPeople, pricePerPerson]);

  return (
    <div className="w-3/4">
      <div className="shadow-lg rounded-md  p-5 mt-32 ">
        <div>
          <h1 className="text-3xl font-semibold text-[color:var(--blue-color)]">
            Reservar Tour
          </h1>
          <h1 className="text-6xl leading-relaxed text-[color:var(--green-color)] font-medium">
            ${formatCurrency(price)}
          </h1>
          <p className="mt-3">No. personas</p>
          <select
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            className="rounded-md"
          >
            {options.map(
              (number) =>
                number > 0 && (
                  <option key={number} value={number}>
                    {number}
                  </option>
                )
            )}
          </select>
          <p className="mt-3">Con desayuno</p>
          <select
            onChange={(e) => setBreakfast(e.target.value)}
            className="rounded-md"
            value={breakfast}
          >
            <option value={"si"}>si</option>
            <option value={"no"}>no</option>
          </select>
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
