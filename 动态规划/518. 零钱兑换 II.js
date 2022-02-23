/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let n = coins.length;
  const dp = new Array(amount + 1).fill('').map(() => new Array(n + 1).fill(0));
  // base case
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = 1; j <= n; j++) {
      if (i - coins[j - 1] < 0) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - coins[j - 1]][j];
      }
    }
  }
  return dp[amount][n];
};

var change = function (amount, coins) {
  let n = coins.length;
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = dp[j] + dp[j - coins[i]];
      }
    }
  }
  return dp[amount];
};

console.log(change(5, [1, 2, 5]));