/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const backTracking = (start = 1, cur = []) => {
    if (cur.length === k) {
      res.push(Object.assign([], cur));
      return;
    }
    for (let i = start; i <= n; i++) {
      cur.push(i);
      backTracking(i + 1, cur);
      cur.pop();
    }
  }
  backTracking();
  return res;
};

console.log(JSON.stringify(combine(4,2)));