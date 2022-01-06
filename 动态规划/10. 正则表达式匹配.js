/**
 * unoptimized
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
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

/**
 * Use memory
 */
var isMatch = function (s, p) {
  const sL = s.length;
  const pL = p.length;
  const memo = new Map();
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
    const key = i + '' + j;
    if (memo.has(key)) {
      return memo.get(key);
    }
    let res = false;
    if (s[i] === p[j] || p[j] === '.') {
      if (j < pL - 1 && p[j + 1] === '*') {
        res = dp(i + 1, j) || dp(i, j + 2);
      } else {
        res = dp(i + 1, j + 1);
      }
    } else {
      if (j < pL - 1 && p[j + 1] === '*') {
        res = dp(i, j + 2);
      }
    }
    memo.set(key, res);
    return res;
  }
  return dp(0, 0);
};


console.log(isMatch('aa', 'a*'))