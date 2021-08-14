Array.prototype._map = function (fn, callbackThis = null) {
  return this.reduce((acc, cur, index, array) => acc.concat(fn.call(callbackThis, cur, index, array)), [])
}

let a = [1, 2, 3, 4, 5];

console.log(a.map(el => el * 2));

console.log(a._map(el => el * 2));