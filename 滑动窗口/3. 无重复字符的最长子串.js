/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let left = 0, right = 0;
  while (right < s.length) {
    let inWindow = s[right++];
    map.set(inWindow, ~~map.get(inWindow) + 1);
    while (map.get(inWindow) > 1) {
      let outWindow = s[left++];
      map.set(outWindow, map.get(outWindow) - 1);
    }
    max = Math.max(max, right - left);
  }
  return max;
};

console.log(lengthOfLongestSubstring('pwwkew'));