/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const res = new Array(nums.length);
  const stack = [];
  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums[i % nums.length] >= stack[stack.length - 1]) {
      stack.pop();
    }
    res[i % nums.length] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(nums[i % nums.length]);
  }
  return res;
};

console.log(nextGreaterElements([1,2,1]));