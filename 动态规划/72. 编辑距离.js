/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

const testCase = [
  ['horse', 'ros'],
  ['ros', 'horse'],
];
/**
 * unoptimized
 */
let minDistance = function (word1, word2) {
  // step 1: deteminate the direction of transform. ( word1 => word2 )
  let bound1 = word1.length;
  let bound2 = word2.length;
  function dp(i, j) {
    if (i === word1.length) {
      return bound2 - j;
    }
    if (j === word2.length) {
      return bound1 - i;
    }
    if (word1[i] === word2[j]) {
      return dp(i + 1, j + 1);
    } else {
      return Math.min(
        dp(i, j + 1) + 1, // Inject word2[j]
        dp(i + 1, j) + 1, // Delete word1[i]
        dp(i + 1, j + 1) + 1 // Change word1[i]
      );
    }
  }
  return dp(0, 0);
};

/**
 * memoryTable
 * @param word1 
 * @param word2 
 * @returns 
 */

let minDistance1 = function (word1, word2) {
  // step 1: deteminate the direction of transform. ( word1 => word2 )
  let bound1 = word1.length;
  let bound2 = word2.length;
  const memoryTable = new Array(bound1).fill([]).map(el => new Array(bound2).fill(-1));
  function dp(i, j) {
    if (i === word1.length) {
      return bound2 - j;
    }
    if (j === word2.length) {
      return bound1 - i;
    }
    if (memoryTable[i][j] !== -1) {
      return memoryTable[i][j];
    }
    if (word1[i] === word2[j]) {
      memoryTable[i][j] = dp(i + 1, j + 1)
    } else {
      memoryTable[i][j] = Math.min(
        dp(i, j + 1) + 1, // Inject word2[j]
        dp(i + 1, j) + 1, // Delete word1[i]
        dp(i + 1, j + 1) + 1 // Change word1[i]
      );
    }
    return memoryTable[i][j];
  }
  return dp(0, 0);
};

/**
 * dpTable without recursion
 * @param word1 
 * @param word2 
 * @returns 
 */
let minDistance2 = function (word1, word2) {
  // base case is dpTable[0][j] and dpTable[i][0]
  let bound1 = word1.length + 1; // j iterate
  let bound2 = word2.length + 1; // i iterate
  const dpTable = new Array(bound2).fill([]).map(el => new Array(bound1).fill(-1));
  for (let j = 0; j < bound1; j++) {
    dpTable[0][j] = j;
  }
  for (let i = 0; i < bound2; i++) {
    dpTable[i][0] = i;
  }
  for (let i = 1; i < bound2; i++) {
    for (let j = 1; j < bound1; j++) {
      if (word1[j - 1] === word2[i - 1]) {
        dpTable[i][j] = dpTable[i - 1][j - 1];
      } else {
        dpTable[i][j] = Math.min(dpTable[i - 1][j - 1], dpTable[i - 1][j], dpTable[i][j - 1]) + 1;
      }
    }
  }
  return dpTable[bound2 - 1][bound1 - 1];
};

testCase.forEach(test => {
  console.log(minDistance2(...test));
});
