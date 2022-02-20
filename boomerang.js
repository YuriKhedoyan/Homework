const boomerang = arr => arr.reduce((acum, el, i, array) => {
    if (array[i] === array[i + 2]) {
      acum.push(array.slice(i, i + 3));
    }

    return acum;
  }, [])