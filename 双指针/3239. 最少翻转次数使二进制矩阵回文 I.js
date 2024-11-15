/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  const m = grid.length;
  const n = (grid[0] || []).length;
  if (m === 0 || n === 0) {
      return 0;
  }
  const getCnt = (arr) => arr.reduce((acc, cur, index, arr) => {
      const mid = Math.floor(arr.length / 2);
      if (index >= mid) {
          return acc;
      }
      return acc + (cur ^ arr[arr.length - index - 1]);
  }, 0)
  const row = grid.reduce((acc, cur) => {
      return acc + getCnt(cur);
  }, 0);
  const col = grid[0].reduce((acc, cur, index) => {
      return acc + getCnt(grid.map(item => item[index]));
  }, 0);
  return Math.min(row, col);
};