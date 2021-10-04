/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  const res = new Array(n).fill(1);
  let prefix = 1, suffix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= prefix;
    res[n - i - 1] *= suffix;
    prefix *= nums[i];
    suffix *= nums[n - i - 1];
  }
  return res;
};