const median = (arr1, arr2) => {
  const clone = arr1.concat(arr2).sort((a,b) => a - b);
  return clone.length % 2 === 0 ? clone[clone.length / 2] : clone[Math.floor(clone.length / 2)];
}
