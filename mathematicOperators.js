const mathematicOperators = (arr, num) => {
  return arr.some((el, i) => {
    if (el + arr[i + 1] === num) {
      return true;
    } else if (el - arr[i + 1] === num) {
      return true;
    } else if (el * arr[i + 1] === num) {
      return true;
    } else if (el / arr[i + 1] === num) {
      return true;
    }
  })
}