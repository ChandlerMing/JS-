let arr = [1, 2, 3, [4, 5], [6, [7, [8, 9]]], 10];

function flatten(arr) {
  let res = [];
  arr.forEach(value => {
    const isArray = Object.prototype.toString.call(value).split(' ').pop().slice(0, -1) === 'Array';
    if (isArray) {
      res = res.concat(...flatten(value))
    } else {
      res.push(value)
    }
  })
  return res;
}

console.log(arr);
console.log(flatten(arr));