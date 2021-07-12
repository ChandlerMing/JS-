/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const row = board.length, column = board[0].length;
  const direction = [-1, 0, 1, 0, -1];
  const bfs = (i, j) => {
    board[i][j] = '-';
    for (let d = 0; d < direction.length - 1; d++) {
      const di = i + direction[d], dj = j + direction[d + 1];
      if (di < 0 || di >= row || dj < 0 || dj >= column || board[di][dj] !== 'O') {
        continue;
      }
      bfs(di, dj);
    }
  }
  for (let j = 0; j < column; j++) {
    if (board[0][j] === 'O') {
      bfs(0, j);
    }
  }
  for (let i = 1; i < row; i++) {
    if (board[i][column - 1] === 'O') {
      bfs(i, column - 1);
    }
  }
  for (let j = column - 2; j >= 0; j--) {
    if (board[row - 1][j] === 'O') {
      bfs(row - 1, j);
    }
  }
  for (let i = row - 2; i >= 0; i--) {
    if (board[i][0] === 'O') {
      bfs(i, 0);
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '-') {
        board[i][j] = 'O'
      }
    }
  }
  return board;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve1 = function (board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const row = board.length, column = board[0].length;
  const visited = new Set();
  const direction = [-1, 0, 1, 0, -1];
  const bfs = (i, j) => {
    board[i][j] = '-';
    visited.add(i+ ',' + j);
    for (let d = 0; d < direction.length - 1; d++) {
      const di = i + direction[d], dj = j + direction[d + 1];
      if (di < 0 || di >= row || dj < 0 || dj >= column || board[di][dj] !== 'O' || visited.has(di+ ',' + dj)) {
        continue;
      }
      bfs(di, dj);
    }
  }
  for (let j = 0; j < column; j++) {
    if (board[0][j] === 'O') {
      bfs(0, j);
    }
  }
  for (let i = 1; i < row; i++) {
    if (board[i][column - 1] === 'O') {
      bfs(i, column - 1);
    }
  }
  for (let j = column - 2; j >= 0; j--) {
    if (board[row - 1][j] === 'O') {
      bfs(row - 1, j);
    }
  }
  for (let i = row - 2; i >= 0; i--) {
    if (board[i][0] === 'O') {
      bfs(i, 0);
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '-') {
        board[i][j] = 'O'
      }
    }
  }
  return board;
};
const src = [["X", "O", "O", "X", "X", "X", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], ["X", "O", "O", "X", "X", "O", "O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "O", "O", "X", "O"], ["O", "O", "O", "X", "X", "X", "X", "O", "X", "O", "X", "X", "O", "O", "O", "O", "X", "O", "X", "O"], ["O", "O", "O", "X", "X", "O", "O", "X", "O", "O", "O", "X", "X", "X", "O", "O", "X", "O", "O", "X"], ["O", "O", "O", "O", "O", "O", "O", "X", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], ["X", "O", "O", "O", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "X"], ["O", "O", "O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X"], ["O", "O", "O", "X", "O", "X", "O", "O", "X", "X", "O", "X", "O", "X", "X", "O", "X", "X", "X", "O"], ["O", "O", "O", "O", "X", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "X", "O", "X"], ["O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "X", "O"], ["X", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "X", "O", "X", "X", "X", "O", "X", "X", "O", "O"], ["X", "X", "O", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "X"], ["O", "X", "O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "X", "O", "X", "O", "O", "O"], ["O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "O", "O", "O", "X", "O", "X", "O", "O", "O", "O"], ["X", "O", "O", "X", "O", "X", "O", "O", "O", "O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "X"], ["X", "O", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "X", "O", "X", "O", "O", "O", "O"], ["O", "X", "X", "O", "O", "O", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "X", "O", "O"], ["O", "X", "O", "O", "O", "O", "X", "X", "O", "O", "X", "O", "X", "O", "O", "X", "O", "O", "X", "X"], ["O", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "O", "O", "O", "X", "X", "O", "O", "O"]];
const res1 = solve(JSON.parse(JSON.stringify(src)));
const res2 = solve1(JSON.parse(JSON.stringify(src)));

console.log(src);
console.log(res1);
console.log(res2);

for (let i = 0; i < res1.length; i++) {
  for (let j = 0; j < res1[0].length; j++) {
    if (res1[i][j] != res2[i][j]) {
      console.log([i, j]);
    }
  }
}


// console.table(solve1([["O","O","O"],["O","O","O"],["O","O","O"]]));