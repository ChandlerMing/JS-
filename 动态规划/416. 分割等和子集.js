/**
 * 0-1 背包变种
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const n = nums.length;
  const dp = new Array(n + 1).fill('').map(() => new Array(target + 1).fill(false));
  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = true;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (j < nums[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[n][target];
};

console.log(canPartition([1, 5, 11, 5]));