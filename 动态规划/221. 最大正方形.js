/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }
  let dp = new Array(matrix.length).fill([]).map(() => new Array(matrix[0].length).fill(0));
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res ** 2;
};

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));