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
  const size = nums.length;
  // build the heap
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heaptify(nums, i, size - 1)
  }
  for (let i = size - 1; i > size - 1 - k; i--) {
    const t = nums[i];
    nums[i] = nums[0];
    nums[0] = t;
    heaptify(nums, 0, i - 1);
  }
  return nums[size - k];
};

function heaptify(nums, start, end) {
  const dad = start
  let child = start * 2 + 1;

  if (child > end) {
    return;
  }

  if (child + 1 <= end && nums[child+1] > nums[child]) {
    child += 1;
  }

  if (nums[child] > nums[dad]) {
    const t = nums[child];
    nums[child] = nums[dad];
    nums[dad] = t;
    heaptify(nums, child, end)
  }
}

console.log(findKthLargest([2, 1], 1))