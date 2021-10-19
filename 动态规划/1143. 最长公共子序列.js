/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  function dp(i, j) {
    if (i === -1 || j === -1) {
      return 0;
    }
    if (text1[i] === text2[j]) {
      return dp(i - 1, j - 1) + 1;
    } else {
      return Math.max(dp(i - 1, j), dp(i, j - 1));
    }
  }
  return dp(text1.length - 1, text2.length - 1);
};
var longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length + 1).fill(0).map(el => new Array(text2.length + 1).fill(0));
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};

console.log(longestCommonSubsequence("abcde", "ace"));
