const median = (arr1, arr2) => {
  arr1 = arr1.concat(arr2)
  return arr1.sort((a, b) => a-b).length % 2 !== 0 ? arr1[Math.floor(arr1.length / 2)] : (arr1[Math.floor(arr1.length / 2)]);
}