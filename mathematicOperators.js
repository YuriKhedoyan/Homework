const mathematicOperators = (arr, num) => {
  return arr.some((el, ind) => {
    return arr.slice(ind + 1).some((element, i) => {
      if (el + element === num || el - element === num || el / element === num || el * element === num) {
        return true
      }
    })
  })
} 