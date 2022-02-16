const includesNumber = num => {
  const arr = String(num).split("");
  const index = arr.findIndex(el => el === "7");
  
  return arr.slice(index + 1).includes("7");
}