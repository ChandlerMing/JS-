/**
 * @param {number[]} nums
 * @return {number}
 */
// By dp array
// var rob = function (nums) {
//   if (nums.length <= 2) {
//     return Math.max(...nums);
//   }
//   const dp = [nums[0], Math.max(nums[0], nums[1])];
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//   }
//   return dp[nums.length - 1];
// };

// optimizing
var rob = function (nums) {
  let pre1 = 0, pre2 = 0, cur = 0;
  for (let i in nums) {
    cur = Math.max(pre2 + nums[i], pre1);
    pre2 = pre1;
    pre1 = cur;
  }
  return cur;
};

console.log(rob([1,2,3,1]));