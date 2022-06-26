/**
 * easy to understand
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  if (n === 0) {
    return res;
  }
  backtracking(0, 0, n, '', res)
  return res;
};

var backtracking = function (left, right, n, cur, res) {
  if (left > n || right > n) {
    return;
  }
  if (left < right) {
    return;
  }
  if (cur.length === 2 * n) {
    res.push(cur);
    return;
  }

  cur += '(';
  backtracking(left + 1, right, n, cur, res);
  cur = cur.slice(0, -1);

  cur += ')';
  backtracking(left, right + 1, n, cur, res);
  cur = cur.slice(0, -1);
}

/**
 * compact
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  function build(cur, leftRemain, rightRemain) {
    if (leftRemain > 0) {
      build(cur + '(', leftRemain - 1, rightRemain);
    }
    if (rightRemain > 0 && leftRemain < rightRemain) {
      build(cur + ')', leftRemain, rightRemain - 1);
    }
    if (cur.length === 2 * n) {
      res.push(cur);
    }
  }
  build('', n, n);
  return res;
};

console.log(generateParenthesis(3));