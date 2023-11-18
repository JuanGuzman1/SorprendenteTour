export const NumbersOption = () => {
  const numbers = [];

  for (let i = 0; i < 13; i++) {
    numbers.push(i);
  }

  return numbers;
};

export const VehicleOption = [
  {
    name: "Cuatrimoto",
    id: 1,
  },
  {
    name: "Unidad 2 personas",
    id: 2,
  },
  {
    name: "Rzr 900",
    id: 3,
  },
  {
    name: "Maverick X3",
    id: 4,
  },
  {
    name: "Defender",
    id: 5,
  },
];

export const formatCurrency = (value) => {
  let val = (value / 1).toFixed(2);
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
