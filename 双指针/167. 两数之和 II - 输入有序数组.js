var twoSum = function (numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));