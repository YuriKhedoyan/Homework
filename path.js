const checkPath = str => {
  let elementsArr = str.split("/");

  return elementsArr.reduce((acum, el, i) => {
    if (elementsArr[i + 1] !== ".." && el !== ".." && el !== "" && i !== elementsArr.length - 1) {
      acum.push(el + "/");
      return acum;

    } else if (i === elementsArr.length - 1) {
      acum.push(el);
      return acum;
    }
    return acum;
  }, []).join("");
}