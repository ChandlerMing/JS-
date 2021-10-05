/**
 * 排序 + 动态规划
 * @param {number[][]} envelopes
 * @return {number}
*/

function lengthOfLIS(arr) {
  let dp = new Array(arr.length).fill(1);
  let max = 1;
  dp.forEach((el, index) => {
    for (let i = 0; i < index; i++) {
      if (arr[i] < arr[index]) {
        dp[index] = Math.max(dp[index], dp[i] + 1);
        max = Math.max(max, dp[index])
      }
    }
  })
  return max;
}

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

var maxEnvelopes = function (envelopes) {
  const compare = (a, b) => {
    const d1 = a[0] - b[0], d2 = a[1] - b[1];
    if (d1 === 0) {
      return -d2;
    }
    return d1;
  }
  let arr = envelopes.sort(compare).map(el => el[1]);
  return lengthOfLIS(arr);
};

console.log(maxEnvelopes([[1, 3], [3, 5], [6, 7], [6, 8], [8, 4], [9, 5]]));