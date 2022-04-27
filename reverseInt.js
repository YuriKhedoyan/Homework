const reverse = function (x) {
  const arrayNumbers = String(x).split("");
  let result;

  if (arrayNumbers[0] === "-") {
    result = -Number(arrayNumbers.slice(1).reverse().join(""));
  } else {
    result = Number(arrayNumbers.reverse().join(""));
  }
  
  if (2 ** 31 < Math.abs(result)) {
    return 0
  } else {
    return result
  }
};