/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = new Map(), window = new Map();
  let left = 0, right = 0, valid = 0, res = [];
  for (let char of p) {
    need.set(char, ~~need.get(char) + 1);
  }
  while (right < s.length) {
    let inWindow = s[right];
    if (need.has(inWindow)) {
      window.set(inWindow, ~~window.get(inWindow) + 1)
      if (window.get(inWindow) === need.get(inWindow)) {
        valid++;
      }
    }
    while (valid === need.size) {
      if (right - left + 1 === p.length) {
        res.push(left);
      }
      let outWindow = s[left];
      if (need.has(outWindow)) {
        if (window.get(outWindow) === need.get(outWindow)) {
          valid--;
        }
        window.set(outWindow, ~~window.get(outWindow) - 1)
      }
      left++;
    }
    right++;
  }
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));