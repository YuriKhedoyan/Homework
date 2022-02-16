const includesNumber = num => {
  const arr = String(num).split("");
  
  return arr.some((el, i) => { return el === "7" && arr.slice(i + 1).includes("7") })
}