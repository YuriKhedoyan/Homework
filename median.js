const median = arr => {
  return arr.sort((a, b) => a-b).length % 2 !== 0 ? arr[Math.floor(arr.length / 2)] : (arr[Math.floor(arr.length / 2) - 1]);
}