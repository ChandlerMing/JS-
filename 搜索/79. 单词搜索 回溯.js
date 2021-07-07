/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board || !board[0]) return;
  let res = false;
  const visited = new Array(board.length).fill([]).map(() => new Array(board[0].length).fill(false))
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backTracking(i,j);
    }
  }
  function backTracking(i, j, process = 0) {
    if (board[i][j] !== word[process]) return;
    visited[i][j] = true;
    process++;
    if (process === word.length) {
      res = true;
      return;
    }
    const direction = [-1, 0, 1, 0, -1];
    for (let d = 0; d < direction.length - 1; d++) {
      const di = i + direction[d], dj = j + direction[d + 1];
      if (di >= 0 && di < board.length && dj >= 0 && dj < board[0].length && !visited[di][dj]) {
        backTracking(di, dj, process);
      }
    }
    visited[i][j] = false;
  }
  return res
};

console.log(exist(
  [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
  ],
  "ABCCED"
));

// console.log(exist(
//   [
//     ["a","b"],
//   ],
//   "ba"
// ));