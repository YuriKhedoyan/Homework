function tag(txt) {
  let txtArr = txt.split("");
  let result = [];
  let count = 0;

  for (let i = 0; i < txt.length; i++) {
    if (txtArr[0] === "<" && txtArr[0 + 1] !== "/") {
      count += 1;
      result.push(txtArr.slice(1, txtArr.indexOf(">")).join("") + count);
      txtArr.splice(0, txtArr.indexOf(">"))
    } else {
      txtArr.splice(0, 1);
    }
    if (txtArr.length === 0) break;
  }

  return result;
}

function text(txt) {
  let txtArr = txt.split("");
  let result = [];

  for (let i = 0; i < txt.length; i++) {
    if (txtArr[0] === ">" && txtArr[1] !== "<" && txtArr[2] !== "<") {
      result.push(txtArr.slice(1, txtArr.indexOf("<")).join(""))
      txtArr.splice(0, txtArr.indexOf("<"))
    }
    txtArr.splice(0, 1);
    if (txtArr.length === 0) break;
  }

  return result;
}

function textAndTag(txt) {
  return tag(txt).reduce((acum, el, i) => {
    acum[el] = [text(txt)[i]].join("");

    return acum;
  }, {})
}