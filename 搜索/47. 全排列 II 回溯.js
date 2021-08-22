var permuteUnique = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let visited = new Array(nums.length).fill(false);
  function resolve(cur = []) {
    if (cur.length === nums.length) {
      res.push(cur.slice());
      return;
    }
    for (let i = 0 ; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      cur.push(nums[i])
      visited[i] = true;
      resolve(cur);
      cur.pop();
      visited[i] = false;
    }
  }
  resolve();
  return res;
};

console.log(permuteUnique([1,1,2]));