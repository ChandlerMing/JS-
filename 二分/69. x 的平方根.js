/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0, r = x, ans = -1;
  while (l <= r) {
    const mid = int(l + (r - l) / 2);
    const mid2 = mid * mid;
    if (mid2 <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};

var int = function (x) {
  return Math.floor(x);
}

console.log(mySqrt(8));