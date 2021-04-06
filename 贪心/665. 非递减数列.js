/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (nums.length < 2) return true;
  nums = [-Number.MAX_VALUE, ...nums, Number.MAX_VALUE];
  let desFix = 0;
  for (let i = 0; i < nums.length && desFix < 2; i++) {
    if (nums[i + 1] < nums[i]) {
      if (nums[i - 1] <= nums[i + 1]) {
        nums[i] = nums[i - 1];
        desFix++;
      } else {
        nums[i + 1] = nums[i];
        desFix++;
      }
    }
  }
  return desFix < 2;
};
console.log(checkPossibility([4, 2, 1]));
