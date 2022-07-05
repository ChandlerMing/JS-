/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const n = 2, m = 3;
  let start = "";
  const target = "123450"
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      start += board[i][j];
    }
  }
  const queue = [start];
  const set = new Set([start]);
  const neighbor = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4]
  ]
  let step = 0;
  const swap = (str, i, j) => {
    const arr = str.split('');
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr.join('');
  }
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      if (cur === target) {
        return step;
      }
      // find the position of 0
      let index = 0;
      while (cur[index] !== '0') {
        index++;
      }
      for (let j = 0; j < neighbor[index].length; j++) {
        let newBoard = cur;
        newBoard = swap(newBoard, index, neighbor[index][j]);
        if (!set.has(newBoard)) {
          queue.push(newBoard);
          set.add(newBoard)
        }
      }
    }
    step++;
  }
  return -1;
};

console.log(slidingPuzzle([[1, 2, 3], [4, 0, 5]]));
console.log(slidingPuzzle([[1, 2, 3], [4, 5, 0]]));
console.log(slidingPuzzle([[1, 2, 3], [5, 4, 0]]));
console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]]))