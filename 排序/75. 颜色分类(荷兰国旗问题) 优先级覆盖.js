/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  let bound0 = 0, bound1 = 0;
  for (let i = 0; i < nums.length; i++) {
      const cur = nums[i];
      nums[i] = 2;
      if (cur < 2) {
          nums[bound1++] = 1;
      }
      if (cur < 1) {
          nums[bound0++] = 0;
      }
  }
  return nums;
};