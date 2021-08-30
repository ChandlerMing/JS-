/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stack1 = [];
  let stack2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack1.push(i);
    } else if (s[i] === '*') {
      stack2.push(i);
    } else {
      if (stack1.length > 0) {
        stack1.pop();
      } else if (stack2.length > 0) {
        stack2.pop();
      } else {
        return false;
      }
    }
  }
  while (stack1.length > 0 && stack2.length > 0) {
    if (stack1.pop() > stack2.pop()) {
      return false;
    }
  }
  return !stack1.length;
};

console.log(checkValidString('(*)'));