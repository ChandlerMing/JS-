/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  function backTrack(nums, start, track) {
    res.push(track.slice());
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      backTrack(nums, i + 1, track);
      track.pop();
    }
  };
  backTrack(nums, 0, []);
  return res;
};

console.log(subsets([1, 2, 3]));