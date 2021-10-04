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

var maxEnvelopes = function (envelopes) {

};