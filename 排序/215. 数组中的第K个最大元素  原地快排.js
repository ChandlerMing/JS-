function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }
  return array;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let l = 0, r = nums.length - 1, target = nums.length - k;
  while (l < r) {
    let mid = quickSelection(nums, l, r);
    if (mid === target) {
      return nums[mid];
    }
    if (mid < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[l];
};

function quickSelection(nums, l, r) {
  let i = l, j = r;
  while (i < j) {
    while (i < j && nums[j] >= nums[l]) {
      j--;
    }
    while (i < j && nums[i] <= nums[l]) {
      i++;
    }
    if (i !== j) {
      const t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
    }
  }
  const t = nums[l];
  nums[l] = nums[i];
  nums[i] = t;
  return j;
}

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))