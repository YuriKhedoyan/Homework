const swapNodes = (head, k) => {
  let index = 0;

  while (head.next)
    if (index === k) {
      const tempValue = head.value;
      head.value = next.value;
      next.value = tempValue;
    } else {
      index += 1;
    }

  return head;
}