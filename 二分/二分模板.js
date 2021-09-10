/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = ~~(left - (left - right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search([1, 2, 2, 2, 2, 2, 2, 2, 3, 5], 4));

var searchLeftBound = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = ~~(left - (left - right) / 2);
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return -1;
  }
  return left;
};

console.log(searchLeftBound([1, 2, 2, 2, 2, 2, 2, 2, 3, 5], 2));

var searchRightBound = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = ~~(left - (left - right) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (right < 0 || nums[right] !== target) {
    return -1;
  }
  return right;
};

console.log(searchRightBound([1, 2, 2, 2, 2, 2, 2, 2, 3, 5], 2));