// overflow.js
const format = function (bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};

const print = function() {
  const memoryUsage = process.memoryUsage();
  console.log(`heapTotal: ${format(memoryUsage.heapTotal)}, heapUsed: ${format(memoryUsage.heapUsed)}`);
}

const total = [];
setInterval(function() {
  total.push(new Array(20 * 1024 * 1024)); // 大内存占用
  print();
}, 1000)
