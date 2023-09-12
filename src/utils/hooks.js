export const NumbersOption = () => {
    const numbers = [];

    for (let i = 0; i < 13; i++){
        numbers.push(i);
    }

    return numbers;
}


export const formatCurrency = (value) => {
    let val = (value / 1).toFixed(2);
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

