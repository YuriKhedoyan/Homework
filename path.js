const checkPath = str => {
  const elementsArr = str.split("/").filter(Boolean);

  return elementsArr.reduce((acum, el, i) => {
    if (el === "..") {
      acum.pop();
    } else {
      acum.push(i === elementsArr.length - 1 ? el : el + "/");
    }
    return acum;
  }, []).join("");
}