/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n < 1) {
    return;
  }
  const res = [];
  const column = new Array(n).fill(false);
  const left45 = new Array(2 * n  - 1).fill(false), right45 = new Array(2 * n  - 1).fill(false);
  const cur = new Array(n).fill([]).map(() => new Array(n).fill('.'));

  const backTracking = (row) => {
    if (row === n) {
      res.push(cur.map(item => item.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (column[col] || left45[row + col] || right45[(n - 1 - col) + row]) {
        continue;
      }
      cur[row][col] = 'Q';
      column[col] = true;
      left45[col + row] = true;
      right45[(n - 1 - col) + row] = true;
      backTracking(row + 1);
      cur[row][col] = '.';
      column[col] = false;
      left45[col + row] = false;
      right45[(n - 1 - col) + row] = false;
    }
  }

  backTracking(0);
  return res;
};

console.table(solveNQueens(4));