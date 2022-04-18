const twoSum = (nums, target) => {
  return nums.reduce((acum, el, i) => {

      acum.push(...nums.slice(i + 1).reduce((result, elem, ind, array) => {
          if ( el + array[ind] === target ) {
              result.push(i, i + ind + 1);
          }
          return result;
      }, []));

      return acum;
  }, [])
}