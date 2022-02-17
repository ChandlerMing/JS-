/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  let res = Number.MAX_VALUE;
  if (k === 1) {
    return n;
  }
  if (n === 0) {
    return 0;
  }
  for (let i = 1; i <= n; i++) {
    res = Math.min(res, Math.max(
      superEggDrop(k, n - i), superEggDrop(k - 1, i - 1)
    ) + 1);
  }
  return res;
};

var superEggDrop = function (k, n) {
  const memo = new Map();
  function dp(k, n) {
    let res = Number.MAX_VALUE;
    if (k === 1) {
      return n;
    }
    if (n === 0) {
      return 0;
    }
    if (memo.has(k + n + '')) {
      return memo.get(k + n + '')
    }
    for (let i = 1; i <= n; i++) {
      res = Math.min(res, Math.max(
        superEggDrop(k, n - i), superEggDrop(k - 1, i - 1)
      ) + 1);
    }
    memo.set(k + n + '', res);
    return res;
  }
  return dp(k, n);
};

var superEggDrop = function (k, n) {
  const memo = new Map();
  function dp(k, n) {
    let res = Number.MAX_VALUE;
    if (k === 1) {
      return n;
    }
    if (n === 0) {
      return 0;
    }
    if (memo.has(k + '-' + n)) {
      return memo.get(k + '-' + n)
    }
    let left = 1, right = n;
    while (left <= right) {
      let mid = ~~((right + left) / 2);
      const broken = dp(k - 1, mid - 1), unBroken = dp(k, n - mid);
      if (broken > unBroken) {
        right = mid - 1;
        res = Math.min(res, broken + 1);
      } else {
        left = mid + 1;
        res = Math.min(res, unBroken + 1);
      }
    }
    memo.set(k + '-' + n, res);
    return res;
  }
  return dp(k, n);
};

var superEggDrop = function (k, n) {
  let dpTable = new Array(k + 1).fill('').map(() => new Array(n + 1).fill(0));
  for (let j = 1; j <= n; j++) {
    dpTable[1][j] = j;
  }
  for (let i = 2; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (i > j) {
        dpTable[i][j] = dpTable[i - 1][j];
      } else {
        let left = 1, right = j;
        let res = Number.MAX_VALUE;
        while (left <= right) {
          let mid = ~~((left + right) / 2);
          const broken = dpTable[i - 1][mid - 1], unBroken = dpTable[i][j - mid];
          if (broken >= unBroken) {
            right = mid - 1;
            res = Math.min(res, broken + 1)
            if (broken === unBroken) {
              break;
            }
          } else {
            left = mid + 1;
            res = Math.min(res, unBroken + 1)
          }
        }
        dpTable[i][j] = res;
      }
    }
  }
  return dpTable[k][n];
};

console.log(superEggDrop(2, 7));