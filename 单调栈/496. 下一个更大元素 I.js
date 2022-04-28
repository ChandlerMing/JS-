/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 模拟
var nextGreaterElement = function (nums1, nums2) {
  const res = new Array(nums1.length);
  for (let i = 0; i < res.length; i++) {
    let find = false;
    let right = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        right = true;
        continue;
      }
      if (right && nums2[j] > nums1[i]) {
        res[i] = j;
        find = true;
      }
    }
    if (!find) {
      res[i] = -1;
    }
  }
  return res;
};

// 单调栈
var nextGreaterElement = function (nums1, nums2) {
  let res = new Array(nums1.length).fill(0);
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(nums2[i]);
  }
  res = res.map((_,index) => map.get(nums1[index]));
  return res;
};

console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));