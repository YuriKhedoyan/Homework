const reverse = function (x) {
  const arrayNumbers = String(x).split("");
  let result;

  if (arrayNumbers[0] === "-") {
    result = -Number(arrayNumbers.slice(1).reverse().join(""));
  } else {
    result = Number(arrayNumbers.reverse().join(""));
  }
  console.log(result < 2 ** 32)
  if (2 ** 32 < Math.abs(result)) {
    return 0
  } else {
    return result
  }
};