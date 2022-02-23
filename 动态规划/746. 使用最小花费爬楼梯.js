/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n]
};

var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let pre1 = 0;
  let pre2 = 0;
  for (let i = 2; i <= n; i++) {
    const tmp = pre1;
    pre1 = Math.min(pre1 + cost[i - 1], pre2 + cost[i - 2]);
    pre2 = tmp;
  }
  return pre1;
};

console.log(minCostClimbingStairs([10, 15, 20]));