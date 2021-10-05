/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  max = Math.max(...dp)
  return max;
};

// 二分
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const f = [-1, nums[0]];
  for (let i = 1; i < n; ++i) {
    let x = nums[i];
    let l = 0, r = f.length - 1;
    while (l < r) {
      let mid = l + r + 1 >> 1;
      if (x > f[mid]) l = mid;
      else r = mid - 1;
    }
    f[l + 1] = x;
  }
  return f.length - 1;
};

// 二分
var lengthOfLIS = function (nums) {
  let top = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    let l = 0, r = top.length - 1;
    while (l <= r) {
      const mid = ~~((l + r) / 2);
      if (cur <= top[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    top[l] = cur;
  }
  return top.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));