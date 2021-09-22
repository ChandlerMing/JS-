/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let res = [];
  function isValid(board, r, c, n) {
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === n || board[i][c] === n) {
        return false;
      }
      // 9 x 9 范围内搜索 巧妙
      if (board[~~(r / 3) * 3 + ~~(i / 3)][~~(c / 3) * 3 + i % 3] === n) {
        return false;
      }
    }
    return true;
  }
  function backtrack(board, i, j) {
    const m = 9, n = 9;
    if (j === n) {
      return backtrack(board, i + 1, 0);
    }
    if (i === m) {
      res = board;
      return true;
    }
    if (board[i][j] !== '.') {
      return backtrack(board, i, j + 1);
    }
    for (let k = 0; k < 9; k++) {
      let char = k + 1 + '';
      if (!isValid(board, i, j, char)) {
        continue;
      }
      board[i][j] = char;
      if (backtrack(board, i, j + 1)) {
        return true;
      }
      board[i][j] = '.'
    }
    return false;
  }
  backtrack(board, 0, 0);
  return res;
};

console.log(solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));