/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Number.MAX_VALUE;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    if (cur > max) {
      max = cur;
    }
    if (cur < 0) {
      cur = 0;
    }
  }
  return max;
};

console.log(maxSubArray());