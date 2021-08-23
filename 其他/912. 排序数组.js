/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 最简单快排
var sortArray = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  let pivotIndex = ~~(nums.length / 2);
  let pivot = nums.splice(pivotIndex, 1)[0];
  let left = [], right = [];
  nums.forEach(el => {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  })
  return sortArray(left).concat([pivot], sortArray(right));
};

// 双路快排
var sortArray = function (nums, left = 0, right = nums.length - 1) {
  function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  }
  if (left > right) {
    return;
  }
  let mid = ~~(left + (right - left) / 2), i = left + 1, j = right;
  let pivot = nums[mid];
  swap(nums, left, mid);
  while (true) {
    while (i <= right && nums[i] <= pivot) {
      i++;
    }
    while (j >= left + 1 && nums[j] >= pivot) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j)
    i++;
    j--;
  }
  swap(nums, left, j)
  sortArray(nums, left, j - 1)
  sortArray(nums, j + 1, right)
  return nums;
};

// 三路快排
// Todo

console.log(sortArray([-1, 2, -8, -10]));