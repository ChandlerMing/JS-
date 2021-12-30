/**
 * Use memory
 * @param {*} s 
 * @returns 
 */
function minInsertions(s) {
  const size = s.length;
  const cache = new Array(size).fill([]).map(() => new Array(size).fill(0));
  function dp(i, j) {
    if (i >= j) {
      return 0;
    }
    if (cache[i][j] !== 0) {
      return cache[i][j];
    }
    if (s[i] === s[j]) {
      cache[i][j] = dp(i + 1, j - 1);
    } else {
      cache[i][j] = Math.min(dp(i + 1, j), dp(i, j - 1)) + 1;
    }
    return cache[i][j];
  }
  return dp(0, size - 1);
};

/**
 * DpTable
 */
function minInsertions(s) {
  const size = s.length;
  const DpTable = new Array(size).fill([]).map(() => new Array(size).fill(0));
  for (let i = size - 2; i >= 0; i--) {
    for (let j = i + 1; j < size; j++) {
      DpTable[i][j] = s[i] === s[j] ? DpTable[i + 1][j - 1] : Math.min(DpTable[i + 1][j], DpTable[i][j - 1]) + 1;
    }
  }
  return DpTable[0][size - 1];
};
