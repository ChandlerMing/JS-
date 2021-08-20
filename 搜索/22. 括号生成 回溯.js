/**
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

console.log(generateParenthesis(2));