/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// based on exchange
var permute = function (nums) {
  if (!nums.length) return;
  const res = [];
  const swap = (a, b) => {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
  const backTracking = (position) => {
    if (position === nums.length - 1) {
      res.push(Object.assign([], nums));
      return;
    }
    for (let i = position; i < nums.length; i++) {
      swap(i, position);
      backTracking(position + 1);
      swap(i, position);
    }
  }
  backTracking(0);
  return res;
};

// based on search
var permute1 = function (nums) {
  if (!nums.length) return;
  const res = [];
  const backTracking = (cur = []) => {
    if (cur.length === nums.length) {
      res.push(Object.assign([], cur));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (cur.includes(nums[i])) continue;
      cur.push(nums[i]);
      backTracking(cur);
      cur.pop();
    }
  }
  backTracking();
  return res;
};


console.log(permute([1,2,3]));