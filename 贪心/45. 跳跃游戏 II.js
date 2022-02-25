/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let end = 0; // 当前跳跃所能到达的边界
  let steps = 0; // 步数
  let max = 0; // 当前跳跃所有位置可达的最大距离
  for (let i = 0; i < nums.length - 1; i++) { // 最后一个位置不需要遍历，因为在此之前max肯定大于等于该位置的索引
    max = Math.max(max, i + nums[i]); // 更新当前跳跃中i位置可达的最大距离
    if (i === end) { // 已经到达边界，必须跳一下！！！
      end = max; // 更新新的边界
      steps++; // 必须跳一下
    }
  }
  return steps;
};

console.log(jump([2, 3, 1, 1, 4]));