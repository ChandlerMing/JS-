/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  if (!isConnected || !isConnected[0]) return;
  const visited = new Array(isConnected.length).fill(false);
  let res = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      res++;
      dfs(i);
    }
  }
  function dfs(i) {
    if (visited[i]) return;
    visited[i] = true;
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j]) {
        dfs(j);
      }
    }
  }
  return res;
};

console.log(findCircleNum(
  [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1]
  ]
));