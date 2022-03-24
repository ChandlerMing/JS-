/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  let res = 1;
  while (n) {
    if (n & 1) {
      res *= x;
    }
    x *= x;
    n = n >>> 1;
  }
  return res;
};

var myPow = function (x, n) {
  function quickPow(x, n) {
    if (n === 0) {
      return 1;
    }
    if (n % 2 === 0) {
      const tmp = myPow(x, n / 2);
      return tmp * tmp;
    } else {
      return x * myPow(x, n - 1);
    }
  }
  if (n < 0) {
    return 1 / quickPow(x, -n);
  } else {
    return quickPow(x, n);
  }
};

console.log(myPow(1.00000, -2147483648));