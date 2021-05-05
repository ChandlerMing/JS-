/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let max = -1, res = '';
  for (let word of dictionary) {
    if (word.length < max) continue;
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === word[j]) j++;
    }
    if (j === word.length) {
      if (j > max) {
        max = j;
        res = word;
      } else if (j === max) {
        if (word < res) {
          res = word;
        }
      }
    }
  }
  return res;
};

findLongestWord("abpcplea", ["ewaf", "awefawfwaf"]);