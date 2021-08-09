/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length;
  if (!n) {
    return 0;
  }
  let left = 0, right = 0, min = Number.MAX_VALUE, sum = 0;
  while (right < n) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++
    }
    right++;
  }
  return min === Number.MAX_VALUE ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));