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
    name: "Unidad 2 personas (UTV, RZR, CAN-AM)",
    id: 2,
  },
  {
    name: "Rzr 900 (3 a 4 personas)",
    id: 3,
  },
  {
    name: "Maverick X3 (2 a 4 personas)",
    id: 4,
  },
  {
    name: "Defender (2 a 6 personas)",
    id: 5,
  },
];

export const formatCurrency = (value) => {
  let val = (value / 1).toFixed(2);
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
