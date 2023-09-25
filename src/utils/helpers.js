export const dataTourFormat = (data, place) => {
  return {
    name: data.name,
    price: place === "xilitla" ? data.pppXilitla : data.pppValles,
  };
};
