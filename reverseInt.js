const reverse = function(x) {
  const arrayNumbers = String(x).split("");
  const index = arrayNumbers.findIndex((el, i) => el === "-");
  let result;

  if (index === -1) {
      result = Number(arrayNumbers.reverse().join(""));
  } else {
      result = Number("-" + arrayNumbers.slice(index + 1).reverse().join(""));
  }

  if (2147483647  > Math.abs(result)) {
      return result 
  } else {
      return 0
  }
};
