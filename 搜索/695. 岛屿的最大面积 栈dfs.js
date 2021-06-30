/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // handle the boundary cases
  if (!grid || !grid[0]) return;
  // every two continued item like [-1,0] or [0, 1]
  // means the location of the item nearby of four different directions in the matrix
  const direction = [-1, 0, 1, 0, -1];
  const jobStack = [];
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for ( let j = 0; j < grid[0].length; j++) {
      let area = 0;
      if (grid[i][j] === 1) {
        area += 1;
        jobStack.push([i, j]);
        grid[i][j] = 0;
      }
      while (jobStack.length > 0) {
        const [ii, jj] = jobStack.pop();
        for (let d = 0; d < direction.length - 1; d++) {
          const [vi, vj] = [ii +  direction[d], jj + direction[d+1]]
          if (grid[vi] && grid[vi][vj] && grid[vi][vj] === 1) {
            area += 1;
            jobStack.push([vi, vj]);
            grid[vi][vj] = 0;
          }
        }
      }
      maxArea = Math.max(area, maxArea)
    }
  }
  return maxArea;
};

const matrix = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]

console.log(maxAreaOfIsland(matrix))