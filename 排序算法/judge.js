const array = require("./array");

module.exports = function judge(f) {
  console.log('result:' + f(array));
  console.time('sort');
  f(array)
  console.timeEnd('sort');
}