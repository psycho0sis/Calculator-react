export const sliceResult = (number) => {
  const array = number.toString().split('.');
  if (number.toString().includes('.')) {
    const integer = array[0];
    const decimal = array[1];
    if (decimal.length > 3) {
      return `${integer}.${decimal.substring(0, 3)}`;
    }
    return `${integer}.${decimal}`;
  }
  return number;
};
