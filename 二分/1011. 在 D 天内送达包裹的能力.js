/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let max = 0, min = 0;
  weights.forEach(item => {
    max += item;
    if (item > min) {
      min = item;
    }
  })
  while (min <= max) {
    const curSize = parseInt((min + max) / 2);
    const flag = canShip(weights, days, curSize);
    if (flag) {
      max = curSize - 1;
    } else {
      min = curSize + 1;
    }
  }
  return min;
};

function canShip(weights, days, size) {
  let dayNeeded = 0
  let total = 0
  for (let i = 0; i < weights.length; i++) {
    if (total + weights[i] > size) {
      total = 0;
      dayNeeded += 1;
      i--;
    } else {
      total += weights[i]
    }
    if (dayNeeded > days) {
      return false;
    }
  }
  if (dayNeeded + 1 > days) {
    return false;
  }
  return true;
}

console.log(shipWithinDays([1,2,3,1,1], 1));

// console.log(canShip([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 12));
