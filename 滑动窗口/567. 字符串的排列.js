/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let need = new Map(), window = new Map();
  let left = 0, right = 0, valid = 0;
  for (let char of s1) {
    need.set(char, ~~need.get(char) + 1);
  }
  while (right < s2.length) {
    let inWindow = s2[right];
    if (need.has(inWindow)) {
      window.set(inWindow, ~~window.get(inWindow) + 1);
      if (window.get(inWindow) === need.get(inWindow)) {
        valid++;
      }
    }
    while (valid === need.size) {
      if (right - left + 1 === s1.length) {
        return true;
      }
      let outWindow = s2[left];
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
  return false;
};

console.log(checkInclusion("hello", "ooolleoooleh"));