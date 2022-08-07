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

const binarySearchWhitRecurisa = arr => {
  const initialArray = arr;

  return function search(searchElement, array=arr) {
      const max = array[array.length - 1];
      const min = array[0];
      
      if (min > max || arr.length - 1 < searchElement) return -1;
      
      const mid = Math.floor(array.length / 2);
      
      if (array[mid] === searchElement) return initialArray.findIndex(el => el === array[mid]);
      if (searchElement > array[mid]) {
          return search(searchElement, array.slice(mid));
      } else {
          return search(searchElement, array.slice(0, mid));
      }
}}