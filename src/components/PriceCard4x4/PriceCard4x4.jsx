import React, { useEffect, useState } from "react";
import {
  NumbersOption,
  formatCurrency,
  VehicleOption,
} from "../../utils/hooks";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function PriceCard4x4({ tour }) {
  const [options, setOptions] = useState([]);
  const [unitOptions, setUnitOptions] = useState([]);
  const [pricePerUnit, setPricePerUnit] = useState();
  const [price, setPrice] = useState();
  const [numUnits, setNumUnits] = useState(1);
  const [unit, setUnit] = useState(1);
  const navigate = useNavigate();
  const { cart, setCart } = useCartContext();

  const addToShopCar = () => {
    let newData = cart;
    let data = {
      name: tour.name,
      price,
      unit,
      numUnits,
    };
    newData.push(data);
    setCart(newData);
    navigate("/checkout");
  };

  useEffect(() => {
    if (tour) {
      switch (unit) {
        case 1:
          setPricePerUnit(tour.quad);
          break;
        case 2:
          setPricePerUnit(tour.u2p);
          break;
        case 3:
          setPricePerUnit(tour.rzr900);
          break;
        case 4:
          setPricePerUnit(tour.maverickX3);
          break;
        case 5:
          setPricePerUnit(tour.defender);
          break;
        default:
          setPricePerUnit(tour.quad);
          break;
      }
    }
  }, [tour, unit]);

  useEffect(() => {
    setPrice(pricePerUnit * numUnits);
  }, [numUnits, pricePerUnit]);

  useEffect(() => {
    const opts = NumbersOption();
    setOptions(opts);
  }, []);

  useEffect(() => {
    setUnitOptions(VehicleOption);
  }, []);

  return (
    <div className="md:w-1/5 w-3/4 self-center md:self-start sticky md:fixed top-10 right-0">
      <div className="shadow-lg rounded-md p-5 md:mt-28 bg-[color:#f47a2d]">
        <div>
          <h1 className="text-3xl font-bold text-[#d6382c]">Reservar Tour</h1>
          <h1 className="text-6xl leading-relaxed text-white font-medium">
            ${formatCurrency(price)}
          </h1>
          <p className="mt-3">Vehiculo</p>
          <select
            value={unit}
            onChange={(e) => setUnit(parseInt(e.target.value))}
            className="rounded-md"
          >
            {unitOptions.map((vehicle) => (
              <option key={vehicle} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>

          <p className="mt-3">No. unidades</p>
          <select
            value={numUnits}
            onChange={(e) => setNumUnits(parseInt(e.target.value))}
            className="rounded-md"
          >
            {options.map(
              (number) =>
                number >= 1 && (
                  <option key={number} value={number}>
                    {number}
                  </option>
                )
            )}
          </select>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={addToShopCar}
            className="bg-primary p-3 rounded-xl text-white font-semibold"
          >
            <AddShoppingCartIcon className="mr-2" />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceCard4x4;
