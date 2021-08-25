/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let distance = nums.length - 1;
  let maxIndex = nums[0];
  for (let i = 0; i <= maxIndex; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= distance) {
      return true;
    }
  }
  return false;
};


console.log(canJump([2, 3, 1, 1, 4]));

console.log(canJump([0]));

console.log(canJump([1, 2, 3]));