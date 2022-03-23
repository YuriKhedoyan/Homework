const copyObject = obj => {
  const copiedObj = {};

  for (let key in obj) {
    copiedObj[key] = obj[key];
  }

  return copiedObj;
};

const deepClone = obj => JSON.parse(JSON.stringify(obj));