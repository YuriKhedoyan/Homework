const findMedian = (nums1, nums2) => {
  const tempValue = nums1.concat(nums2).sort((a,b) => a- b);
  
  if ( tempValue.length % 2 !== 0 ) {
      return tempValue[Math.floor(tempValue.length / 2)];
  } else {
      return (tempValue[tempValue.length / 2] + tempValue[tempValue.length / 2 - 1]) / 2
  }
};