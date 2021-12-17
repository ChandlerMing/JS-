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

testCase.forEach(test => {
  console.log(minDistance(...test));
});
