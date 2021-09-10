function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

function curry(fn) {
  let argPool = [];
  return function _fn (...args) {
    if (args.length) {
      argPool = [...argPool, ...args];
      return _fn;
    } else {
      return fn(argPool);
    }
  }
}

let add = curry(sum);

console.log(add(1,2,3)(1)());