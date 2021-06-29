/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const arr = s.split('');
  const map = new Map();
  arr.forEach(i=>{
    const value = map.has(i) ? map.get(i) + 1 : 1;
    map.set(i, value)
  })
  const bukket = [];
  for (let item of map.entries()) {
    const curIndex = item[1];
    if (!bukket[curIndex]) {
      bukket[curIndex] = [];
    }
    bukket[curIndex].push(item);
  }
  let res = ''
  for (let i = bukket.length - 1; i >= 0; i--) {
    if (!bukket[i]) continue;
    bukket[i].forEach(e => {
      res += e[0].repeat(e[1])
    })
  }
  return res;
};

console.log(frequencySort('leetcode'));