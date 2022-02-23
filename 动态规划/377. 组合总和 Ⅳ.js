/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const n = nums.length;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= nums[j]) {
        dp[i] = dp[i] + dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));