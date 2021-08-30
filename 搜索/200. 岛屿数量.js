/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let height = grid.length;
  let width = grid[0].length;
  let direction = [-1, 0, 1, 0, -1];
  let res = 0;
  // let map = new Array(height).fill([]).map(() => new Array(width).fill(true));
  function dfs(i, j) {
    if (i < 0 || i > height - 1 || j < 0 || j > width - 1 || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    for (let d = 0; d < direction.length - 1; d++) {
      dfs(i + direction[d], j + direction[d + 1])
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        res++;
        dfs(i, j)
      }
    }
  }
  return res;
};

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]));