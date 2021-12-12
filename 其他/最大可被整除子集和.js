function foo(n, m, arr) {
  const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);
  const select = (arr, k) => {
    const res = [];
    const backTracking = (start = 0, cur = []) => {
      if (cur.length === k) {
        res.push(Object.assign([], cur));
        return;
      }
      for (let i = start; i < arr.length; i++) {
        cur.push(arr[i]);
        backTracking(i + 1, cur);
        cur.pop();
      }
    };
    backTracking();
    return res;
  };
  const base = sum(arr);
  let res = -Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    const selected = select(arr, i)
    for (let j = 0; j < selected.length; j++) {
      const cur = base - sum(selected[j]);
      if (cur % m === 0) {
        res = Math.max(res, cur);
      }
    }
  }
  return res === -Number.MAX_VALUE ? -1 : res;
}

console.log(foo(8, 5, [3, 7, 11, 6, 2, 9, 5, 13]));
console.log(foo(8, 4, [3, 11, 3]));