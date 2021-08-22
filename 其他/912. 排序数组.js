/**
 * @param {number[]} nums
 * @return {number[]}
 */
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

var sortArray = function (nums, left = 0, right = nums.length - 1) {

};

console.log(sortArray([3,2,1,5]));