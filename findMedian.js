const findMedian = (nums1, nums2) => {
  const arrayNumbers = nums1.concat(nums2).sort((a, b) => a- b);
  const halfArrayLength = arrayNumbers.length / 2;
  if (arrayNumbers.length % 2 !== 0) {
      return arrayNumbers[Math.floor(halfArrayLength)];
  } else {
      return (arrayNumbers[halfArrayLength] + arrayNumbers[halfArrayLength - 1]) / 2
  }
};