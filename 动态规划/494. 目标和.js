/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  res = 0;
  const backTracing = (start = 0, sum = 0) => {
    if (start === nums.length) {
      res += sum === target ? 1 : 0;
      return;
    }
    backTracing(start + 1, sum + nums[start]);
    backTracing(start + 1, sum - nums[start]);
  }
  backTracing();
  return res;
};

/**
  * 输入: nums: [1, 1, 1, 1, 1], S: 3
  * 输出: 5
  * 解释:
  * -1+1+1+1+1 = 3
  * +1-1+1+1+1 = 3
  * +1+1-1+1+1 = 3
  * +1+1+1-1+1 = 3
  * +1+1+1+1-1 = 3
  * 
  * sum(P) 前面符号为+的集合；sum(N) 前面符号为减号的集合
  * 所以题目可以转化为
  * sum(P) - sum(N) = target 
  * => sum(nums) + sum(P) - sum(N) = target + sum(nums)
  * => 2 * sum(P) = target + sum(nums) 
  * => sum(P) = (target + sum(nums)) / 2
  * 因此题目转化为01背包，也就是能组合成容量为sum(P)的方式有多少种
  */
var findTargetSumWays = function (nums, target) {
  const n = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur);
  const amount = (target + sum) / 2;
  if (sum < Math.abs(target) || (sum + target) % 2 === 1) {
    return 0;
  }
  const dp = new Array(amount + 1).fill('').map(() => new Array(n + 1).fill(0));
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 0; i <= amount; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums[j - 1] > i) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - nums[j - 1]][j - 1];
      }
    }
  }
  return dp[amount][n];
};

/**
 * 状态压缩
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var findTargetSumWays = function (nums, target) {
  const n = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur);
  const amount = (target + sum) / 2;
  if (sum < Math.abs(target) || (sum + target) % 2 === 1) {
    return 0;
  }
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = amount; j >= 0; j--) {
      if (j >= nums[i]) {
        dp[j] = dp [j] + dp[j - nums[i]];
      }
    }
  }
  return dp[amount];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
console.log(findTargetSumWays([1], 2));[0, 0, 0, 0, 0, 0, 0, 0, 1]
console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
console.log(findTargetSumWays([100], -200));