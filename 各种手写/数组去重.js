let arr = [1, 2, 2, 3, 4, 5, 4, 6, 7, 6, 8]

// convenient way
function unique1(arr) {
  return [...new Set(arr)];
}

// better performance
function unique2(arr) {
  let res = [];
  let map = {};
  for (let i of arr) {
    if (map[i]) {
      continue;
    }
    map[i] = 1;
    res.push(i);
  }
  return res;
}

console.log(arr);
console.log(unique1(arr));
console.log(unique2(arr));
