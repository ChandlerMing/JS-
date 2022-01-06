/**
 * unoptimized
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
  const sL = s.length;
  const pL = p.length;
  function dp(i, j) {
    if (j === pL) {
      return i === sL;
    }
    if (i === sL) {
      if ((pL - j) % 2 !== 0) {
        return false;
      }
      for (; j < pL; j += 2) {
        if (p[j + 1] !== '*') {
          return false;
        }
      }
      return true;
    }
    if (s[i] === p[j] || p[j] === '.') {
      if (j < pL - 1 && p[j + 1] === '*') {
        return dp(i + 1, j) || dp(i, j + 2);
      }
      return dp(i + 1, j + 1);
    } else {
      if (j < pL - 1 && p[j + 1] === '*') {
        return dp(i, j + 2);
      }
      return false;
    }
  }
  return dp(0, 0);
};
