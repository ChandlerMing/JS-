/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let mid = i + 1;
    let right = nums.length - 1;
    while (mid < right) {
      let x = nums[i] + nums[mid] + nums[right];
      if (x > 0) {
        right--;
      } else if (x < 0) {
        mid++;
      } else {
        res.push([nums[i], nums[mid], nums[right]]);
        while (mid < right && nums[mid] === nums[mid + 1]) {
          mid++;
        }
        mid++;
        while (mid < right && nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));