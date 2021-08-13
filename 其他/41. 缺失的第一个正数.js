/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  let n = nums.length
  nums = nums.map(el => el <= 0 ? n + 1 : el);
  nums.forEach(el => {
      const cur = Math.abs(el)
      if (cur <= n) {
          nums[cur - 1] = -Math.abs(nums[cur - 1]);
      }
  })
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }
  return n + 1
};