/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const res = new Array(temperatures.length);
  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }
  return res;
};

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));