const includesNumber = num => {
  const arr = String(num).split("");
  
  return arr.slice(arr.findIndex(el => el === "7") + 1).includes("7");
}