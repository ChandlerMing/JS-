/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (A, n) {
  if (n < 2) {
    return n;
  }
  let maxSize = 1;
  let dp = new Array(A.length).fill(0).map(() => new Array(A.length).fill(false));
  // l为当前串的大小 思路为从小串推导到大串
  for (let l = 0; l < n; l++) {
    for (let i = 0; i + l < n; i++) {
      let j = i + l;
      if (l === 0) {
        dp[i][j] = true;
      } else if (l === 1) {
        dp[i][j] = A[i] === A[j];
      } else {
        dp[i][j] = (A[i] === A[j] && dp[i + 1][j - 1])
      }
      if (dp[i][j]) {
        maxSize = Math.max(maxSize, l + 1);
      }
    }
  }
  return maxSize;
};

console.log(longestPalindrome("abc1234321ab", 12))