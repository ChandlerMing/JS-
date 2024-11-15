/**
 * https://leetcode-cn.com/problems/the-number-of-good-subsets/solution/js-da-biao-wei-yun-suan-hui-su-by-chen-x-khkf/
 * @param {number[]} nums
 * @return {number}
 */
const map = [[2, 1], [3, 2], [5, 4], [6, 3], [7, 8], [10, 5], [11, 16], [13, 32], [14, 9], [15, 6], [17, 64], [19, 128], [21, 10], [22, 17], [23, 256], [26, 33], [29, 512], [30, 7]];
var numberOfGoodSubsets = function (nums) {
  const mod = 1e9 + 7;
  // 统计nums[i]的数量
  const cnt = new Array(31).fill(0);
  nums.forEach(v => cnt[v]++);
  let res = 0;
  // 回溯统计好子集
  (function dfs(i, mask, cur) {
    res = (res + cur) % mod;
    for (let j = i; j < 18; j++) {
      // 有重复使用的质数，或数量为0，进行剪枝
      if ((mask & map[j][1]) > 0 || cnt[map[j][0]] === 0) continue;
      dfs(j + 1, mask | map[j][1], (cur || 1) * cnt[map[j][0]] % mod);
    }
  })(0, 0, 0);
  // 每一个1都能和已存在的好子集组成新的好子集
  while (cnt[1]--) res = (res * 2) % mod;
  return res;
};

var numberOfGoodSubsets = function (nums) {
}


console.log(numberOfGoodSubsets([10, 11, 5, 1, 10, 1, 3, 1, 26, 11, 6, 1, 1, 15, 1, 7, 22, 1, 1, 1, 1, 1, 23, 1, 29, 5, 6, 1, 1, 29, 1, 1, 21, 19, 1, 1, 1, 2, 1, 11, 1, 15, 1, 22, 14, 1, 1, 1, 1, 6, 7, 1, 14, 3, 5, 1, 22, 1, 1, 1, 17, 1, 29, 2, 1, 15, 10, 1, 5, 7, 1, 1, 1, 30, 1, 30, 1, 21, 10, 1, 1, 1, 1, 1, 2, 6, 5, 7, 3, 1, 1, 19, 29, 1, 7, 13, 14, 1, 5, 26, 19, 11, 1, 1, 1, 1, 1, 1, 1, 1, 22, 15, 1, 1, 13, 1, 17, 1, 1, 1, 13, 6, 1, 10, 1, 1, 17, 1, 1, 3, 14, 7, 17, 1, 13, 1, 1, 1, 1, 1, 11, 1, 1, 6, 1, 1, 1, 1, 1, 2, 1, 30, 2, 26, 1, 1, 14, 1, 26, 29, 30, 1, 13, 21, 1, 1, 14, 21, 1, 23, 1, 15, 23, 21, 1, 30, 19, 19, 1, 10, 23, 3, 3, 17, 22, 2, 26, 1, 11, 1, 23, 1, 1, 1, 15, 1, 1, 13, 1, 1]));