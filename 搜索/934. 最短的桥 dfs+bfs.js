/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestBridge = function (grid) {
  if (!grid.length || !grid[0].length) {
    return;
  }
  const direction = [-1, 0, 1, 0, -1];
  const bfs = [];
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 2) {
      return;
    }
    if (grid[i][j] === 0) {
      bfs.push([i, j]);
      return;
    }
    grid[i][j] = 2;
    for (let d = 0; d < direction.length - 1; d++) {
      const di = i + direction[d], dj = j + direction[d + 1];
      dfs(di, dj);
    }
  }
  let dfsFinish = false;
  for (let i = 0; i < grid.length; i++) {
    if (dfsFinish) {
      break;
    }
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        dfsFinish = true;
        break;
      }
    }
  }
  let step = 1;
  while (bfs.length) {
    let nodes = bfs.length
    while (nodes--) {
      const cur = bfs.shift(), i = cur[0], j = cur[1];
      for (let d = 0; d < direction.length - 1; d++) {
        const di = i + direction[d], dj = j + direction[d + 1];
        if (di < 0 || di >= grid.length || dj < 0 || dj >= grid[0].length || grid[di][dj] === 2) {
          continue;
        }
        if (grid[di][dj] === 1) {
          return step;
        }
        if (grid[di][dj] === 0) {
          bfs.push([di, dj]);
        }
        grid[di][dj] = 2; // 找了一个通宵的bug在这里 之前是 grid[i][j]
      }
    }
    step++;
  }
};