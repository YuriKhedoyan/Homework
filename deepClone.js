const deepClone = obj => {
  const copiedObj = {};
    
  for (let key in obj) {
    if (typeof obj[key] === "object") {
        copiedObj[key] = deepClone(key);
    } else {
        copiedObj[key] = obj[key];
    }
  }
  
  return copiedObj;
}