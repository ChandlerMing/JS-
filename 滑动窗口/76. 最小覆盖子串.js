/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
  let left = 0 , right = 0, process = 0, minLength = Number.MAX_VALUE, res = '';
  let need = new Map();
  let window = new Map();
  for (let char of t) {
    need.set(char, ~~need.get(char) + 1);
  }
  while (right < s.length) {
    let inWindow = s[right];
    if (need.has(inWindow)) {
      window.set(inWindow, ~~window.get(inWindow) + 1);
      if (window.get(inWindow) === need.get(inWindow)) {
        process++;
      }
    }
    while (process === need.size) {
      if (right - left + 1 < minLength) {
        res = s.slice(left, right + 1);
        minLength = right - left + 1;
      }
      let outWindow = s[left];
      if (need.has(outWindow)) {
        if (window.get(outWindow) === need.get(outWindow)) {
          process--;
        }
        window.set(outWindow, ~~window.get(outWindow) - 1);
      }
      left++;
    }
    right++;
  }
  return res;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));