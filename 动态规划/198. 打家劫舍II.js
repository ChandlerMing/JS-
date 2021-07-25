/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  const robFirst = nums.slice(0, -1);
  const robLast = nums.slice(1);
  let pre1 = 0, pre2 = 0, cur1 = 0, cur2 = 0;
  for (let i of robFirst) {
    cur1 = Math.max(pre1, pre2 + i);
    pre2 = pre1;
    pre1 = cur1;
  }
  pre1 = 0, pre2 = 0;
  for (let i of robLast) {
    cur2 = Math.max(pre1, pre2 + i);
    pre2 = pre1;
    pre1 = cur2;
  }
  return Math.max(cur1, cur2);
};

console.log(rob([1]));