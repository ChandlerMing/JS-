/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach(i => {
    const res = map.has(i) ? map.get(i) + 1 : 1;
    map.set(i, res)
  })
  const bukket = []
  for (let item of map.entries()) {
    let cur = item[1]
    if (!bukket[cur]) {
      bukket[cur] = [];
    }
    bukket[cur].push(item);
  }
  const res = [];
  for (let i = bukket.length - 1; i >= 0 && k > 0; i--) {
    if (bukket[i]) {
      for (let j = 0; j < bukket[i].length; j++) {
        if (k <= 0) break;
        res.push(bukket[i][j][0]);
        k--;
      }
    }
  }
  return res;
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))