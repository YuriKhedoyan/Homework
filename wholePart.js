function wholePart(number) {
  const arr = String(number).split("");
  let result = [];
  let array = [];

  for (let i = 0; i < arr.length; i++) {
      array = [];
      array.push(1);
      for (let j = 1; j <= i; j++) {
          array.push(0)
      }
      result.push(Number(array.join("")));
  }

  return result;
}