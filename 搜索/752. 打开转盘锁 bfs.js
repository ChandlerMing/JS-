/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let visited = new Set(deadends);
  const bfs = ["0000"];
  const indexAdd = (source, index) => {
    let tar = source[index];
    if (tar === '9') {
      tar = '0'
    } else {
      tar = String.fromCharCode(tar.charCodeAt(0) + 1);
    }
    return source.substring(0, index) + tar + source.substring(index + 1);
  }
  const indexMinus = (source, index) => {
    let tar = source[index];
    if (tar === '0') {
      tar = '9'
    } else {
      tar = String.fromCharCode(tar.charCodeAt(0) - 1);
    }
    return source.substring(0, index) + tar + source.substring(index + 1);
  }
  let res = -1;
  let switchTimes = 0;
  while (bfs.length) {
    let turnLength = bfs.length;
    while (turnLength--) {
      const cur = bfs.shift();
      if (visited.has(cur)) {
        continue;
      }
      if (cur === target) {
        return switchTimes;
      }
      visited.add(cur);
      for (let i = 0; i < 4; i++) {
        const addRes = indexAdd(cur, i);
        if (!visited.has(addRes)) {
          bfs.push(addRes);
        }
        const minusRes = indexMinus(cur, i);
        if (!visited.has(minusRes)) {
          bfs.push(minusRes);
        }
      }
    }
    switchTimes++;
  }
  return res;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
