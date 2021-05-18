/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const res = [-1, -1]
  if (nums.length === 0) {
    return res;
  }
  let left = leftBound(nums, target)
  let right = rightBound(nums, target)
  if (nums[left] !== target || nums[right] !== target) {
    return res
  }
  res[0] = left, res[1] = right
  return res;
};

var int = function (num) {
  return Math.floor(num);
}

var leftBound = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = int(l + (r - l) / 2);
    if (nums[mid] >= target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return r + 1;
}

var rightBound = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = int(l + (r - l) / 2);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l - 1;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));