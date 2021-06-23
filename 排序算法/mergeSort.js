const judge = require("./judge");

/*
  Core: split and order the sub array
  Space complexity: O(n)
  Time complexity:
    Best: O(nlogn)
    Worst: O(nlogn)
    Average: O(nlogn)
*/

function sort(arr) {
  const size = arr.length
  if (size < 2) {
    return arr
  }
  const mid = Math.floor(size / 2)
  const left = arr.slice(0, mid)
  const rigth = arr.slice(mid)
  return merge(sort(left), sort(rigth))
}

function merge(left, right) {
  const res = []
  while (left.length > 0 && right.length > 0) {
    res.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return res.concat(left, right)
}

judge(sort);