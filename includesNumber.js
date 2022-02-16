function includesNumber(num) {
  const arr = String(num).split("");

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "7" && arr.slice(i + 1).includes("7")) {
          return true;
      }
  }
  return false;
}