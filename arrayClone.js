const deleteEl = (arr, num) => [...arr.slice(0, num), ...arr.slice(num+1)];