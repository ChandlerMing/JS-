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
  let rank = 0;
  while (true) {
    const pivot = nums.shift(), left = [], right = [];
    nums.forEach(i => {
      i >= pivot ? left.push(i) : right.push(i);
    })
    if (rank === 0) {
      rank = left.length + 1;
    } else {
      rank = rank < k ? rank + left.length + 1 : rank - (right.length + 1);
    }
    if (rank === k) {
      return pivot;
    } else {
      nums = rank > k ? left : right;
    }
  }
};

console.log(findKthLargest(shuffle([5,2,4,1,3,6,0]), 4));