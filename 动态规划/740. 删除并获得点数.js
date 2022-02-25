/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = [];
  nums.forEach(el => { map[el] = ~~(map[el]) + 1 });
  const n = map.length;
  const dp = new Array(n + 1);
  dp[0] = 0;
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (!map[i]) {
      dp[i] = dp[i - 1];
      continue;
    }
    if (map[i - 1]) {
      dp[i] = Math.max(dp[i - 1], map[i] * i + (i - 2 >= 0 ? dp[i - 2] : 0));
    } else {
      dp[i] = dp[i - 1] + map[i] * i;
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

var deleteAndEarn = function (nums) {
  const map = [];
  let size = 0;
  nums.forEach(el => { map[el] = ~~(map[el]) + 1; size++; });
  const dp = new Array(size + 1);
  dp[0] = 0;
  let dpIndex = 1;
  let max = 0;
  map.forEach((el, index) => {
    if (map[index - 1]) {
      dp[dpIndex] = Math.max(dp[dpIndex - 1], index * el + (dpIndex - 2 >= 0 ? dp[dpIndex - 2] : 0));
    } else {
      dp[dpIndex] = dp[dpIndex - 1] + index * el;
    }
    max = Math.max(max, dp[dpIndex++]);
  })
  return max;
};


console.log(deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]))
console.log(deleteAndEarn([3, 4, 2]));