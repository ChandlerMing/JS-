/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums.length) {
    return;
  }
  let min = [nums[0]], max = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    min[i] = Math.min(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i]);
    max[i] = Math.max(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i]);
  }
  return Math.max(...max);
};