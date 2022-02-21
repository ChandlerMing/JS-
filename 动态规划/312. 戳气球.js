/**
 * @param {number[]} nums
 * @return {number}
 */
// 回溯 正向模拟穷举 超时
var maxCoins = function (nums) {
  let res = 0;
  function dp(nums, sum = 0) {
    if (!nums.length) {
      res = Math.max(res, sum);
      return 0;
    }
    for (let i = 0; i < nums.length; i++) {
      const left = i - 1 < 0 ? 1 : nums[i - 1];
      const right = i + 1 > nums.length - 1 ? 1 : nums[i + 1];
      const cur = nums[i] * left * right;
      const numsBk = nums.slice();
      nums.splice(i, 1);
      dp(nums, sum + cur);
      nums = numsBk;
    }
    return sum;
  }
  dp(nums);
  return res;
};
// 动态规划 逆向反推 dp[i][j]开区间分割子问题 通过
var maxCoins = function (nums) {
  nums = [1, ...nums, 1];
  const n = nums.length - 1;
  const dp = new Array(nums.length).fill('').map(() => new Array(nums.length).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[j] * nums[k]);
      }
    }
  }
  return dp[0][n];
};

console.log(maxCoins([3, 1, 5, 8]));
// console.log(maxCoins([1, 5]));