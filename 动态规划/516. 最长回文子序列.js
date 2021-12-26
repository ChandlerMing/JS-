/**
 * unoptimized
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // const dpTable = new Array(s.length).fill([]).map(() => new Array(s.length).fill(0));
  function dp(i, j) {
    if (i === j) {
      return 1;
    }
    if (i > j) {
      return 0;
    }
    if (s[i] === s[j]) {
      return dp(i + 1, j - 1) + 2;
    } else {
      return Math.max(dp(i + 1, j), dp(i, j - 1));
    }
  }
  return dp(0, s.length - 1);
};


/**
 * Use Cache
 * @param {String} s 
 * @returns {number}
 */
var longestPalindromeSubseq1 = function (s) {
  const cache = new Array(s.length).fill([]).map(() => new Array(s.length).fill(-1));
  function dp(i, j) {
    if (cache[i][j] !== -1) {
      return cache[i][j];
    }
    if (i === j) {
      return 1;
    }
    if (i > j) {
      return 0;
    }
    if (s[i] === s[j]) {
      cache[i][j] = dp(i + 1, j - 1) + 2;
    } else {
      cache[i][j] = Math.max(dp(i + 1, j), dp(i, j - 1));
    }
    return cache[i][j];
  }
  return dp(0, s.length - 1);
};


/**
 * DpTable
 * @param {String} s 
 * @returns {number}
 */
var longestPalindromeSubseq2 = function (s) {
  const dpTable = new Array(s.length).fill([]).map(() => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    dpTable[i][i] = 1;
  }
  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dpTable[i][j] = dpTable[i + 1][j - 1] + 2;
      } else {
        dpTable[i][j] = Math.max(dpTable[i + 1][j], dpTable[i][j - 1]);
      }
    }
  }
  return dpTable[0][s.length - 1];
};

const testCase = ['bbbab', 'cbbd'];

testCase.forEach(el => {
  console.log(longestPalindromeSubseq2(el));
})