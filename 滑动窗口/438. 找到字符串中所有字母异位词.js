/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = new Map(), window = new Map();
  let left = 0, right = 0, valid = 0, res = [];
  while (right < s.length) {
    let inWindow = s[right];
    if (need.has(inWindow)) {
      window.set(inWindow, ~~window.get(inWindow) + 1)
      if (window.get(inWindow) === need.get(inWindow)) {
        valid++;
      }
    }
    while (valid === p.length) {
      res.push(left);
      while () {

      }
    }
  }
};