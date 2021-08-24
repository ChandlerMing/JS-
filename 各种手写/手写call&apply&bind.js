Function.prototype.myCall = function (obj, ...args) {
  obj = obj || window;
  obj.fn = this;
  let res = obj.fn(...args);
  delete obj.fn;
  return res;
}

Function.prototype.myApply = function (obj, args) {
  obj = obj || window;
  args = args || [];
  obj.fn = this;
  let res = obj.fn(...args);
  delete obj.fn;
  return res;
}

Function.prototype.myBind = function (obj) {
  obj = obj || window;
  return (...args) => {
    return this.call(obj, ...args)
  }
}

let a = {
  name: 'zqm',
  run(month, day) {
    console.log(`${this.name} is running.-------${month}.${day}`);
  }
}

a.run(8, 24);

let b = {
  name: 'lxl'
}

a.run.call(b, 8, 24)
a.run.myCall(b, 8, 24)

a.run.apply(b, [8, 25])
a.run.myApply(b, [8, 25])

a.run.bind(b)(8, 26);
a.run.myBind(b)(8, 26);
