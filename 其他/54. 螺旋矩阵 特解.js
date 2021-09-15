/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let i = 0, j = 0, di = 0, dj = 1, res = [];
  if (!matrix) {
    return res;
  }
  let heigth = matrix.length, width = matrix[0].length;
  for (let k = 0; k < heigth * width; k++) {
    res.push(matrix[i][j]);
    matrix[i][j] = null;
    if (matrix[Math.abs(i + di) % heigth][Math.abs(j + dj) % width] === null) {
      [di, dj] = [dj, -di]
    }
    i += di;
    j += dj;
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))