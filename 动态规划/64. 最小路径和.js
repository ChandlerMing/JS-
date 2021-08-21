/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let width = grid[0].length, height = grid.length;
  let dp = new Array(height).fill([]).map(() => new Array(width).fill(0));
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  return dp[height - 1][width - 1];
};


console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
