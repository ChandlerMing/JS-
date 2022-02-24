/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = 0;
  const n = s.length;
  const dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = i - 2 >= 0 ? dp[i - 2] + 2 : 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses(")()())"));
