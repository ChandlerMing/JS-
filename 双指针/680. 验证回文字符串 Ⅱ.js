/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function (s) {
  let l = 0, r = s.length - 1, fix = 0;
  while (l <= r) {
      if (s[l] !== s[r]) {
          return judge(s.slice(l, r)) || judge(s.slice(l + 1, r + 1));
      }
      l++;
      r--;
  }
  return true;
};

var judge = function (s) {
  let l = 0, r = s.length - 1;
  while (l <= r) {
      if (s[l] !== s[r]) {
          return false;
      }
      l++;
      r--;
  }
  return true;
}