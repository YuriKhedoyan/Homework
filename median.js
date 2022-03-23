const median = (arr1, arr2) => {
  const sortedArray = arr1.concat(arr2).sort((a,b) => a - b);
  const index = clone.length / 2;
  return sortedArray.length % 2 === 0 ? sortedArray[index] : sortedArray[Math.floor(index)];
}