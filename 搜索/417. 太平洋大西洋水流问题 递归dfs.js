/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) return;
  const P = new Array(heights.length).fill([]).map(() => new Array(heights[0].length).fill(false));
  const A = new Array(heights.length).fill([]).map(() => new Array(heights[0].length).fill(false));
  const res = [];
  const dfs = (map, i, j) => {
    if (map[i][j]) return;
    map[i][j] = true;
    if (P[i][j] && A[i][j]) {
      res.push([i, j]);
    }
    const direction = [-1, 0, 1, 0, -1];
    for (let d = 0; d < direction.length - 1; d++) {
      const di = i + direction[d], dj = j + direction[d + 1];
      if (di < 0 || dj < 0 || di > heights.length - 1 || dj > heights[0].length - 1) continue;
      if (heights[di][dj] >= heights[i][j]) {
        dfs(map, di, dj);
      }
    }
  }
  for (let i = 0; i < heights.length; i++) {
    dfs(P, i, 0); // left column
    dfs(A, i, heights[0].length - 1); // right column
  }
  for (let i = 0; i < heights[0].length; i++) {
    dfs(P, 0, i); // top row
    dfs(A, heights.length - 1, i); // bottom row
  }
  return res;
};

console.log(JSON.stringify(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])));