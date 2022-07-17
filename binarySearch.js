const binarySearch = (numbers, searchNumber) => {
  const numbersClone = numbers;
  const high = numbers[numbers.length - 1];
  const low = numbers[0];

  while (high > low) {
    let mid = Math.floor(numbers.length / 2);

    if (searchNumber < numbers[mid]) {
      numbers = numbers.slice(0, mid);
    } else if (searchNumber > numbers[mid]) {
      numbers = numbers.slice(mid);
    } else {
      return numbersClone.findIndex(elem => elem === numbers[mid]);
    }
  }
}