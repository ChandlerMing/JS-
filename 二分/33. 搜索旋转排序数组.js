/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1, res = -1;
  while (l <= r) {
    const mid = int(l + ((r - l) >> 1))
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[l]) {
      if (target >= nums[l] && target <= nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return res;
};

var int = function (num) {
  return Math.floor(num)
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));