let str = '699999999.99';

function solve1(str) {
  let arr = str.split('.')[0].split('').reverse();
  return arr.reduce((acc, cur, index) => {
    return (index % 3 === 0) ? (cur + ',' + acc) : (cur + '' + acc);
  }) + '.' + str.split('.')[1]
}

function solve2(str) {
  let _str = str.replace(/\B(?=(\d{3})+\b)/g, ',');
  return _str;
}

function solve3(str) {
  let _str = +str; // parseInt
  return _str.toLocaleString();
}

console.log(solve1(str));
console.log(solve2(str));
console.log(solve3(str));