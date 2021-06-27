const judge = require("./judge");

/*
  Core: Select a item and do the partition by it
  Space complexity: O(n)
  Time complexity:
    Best: O(nlogn)
    Worst: O(n^2)
    Average: O(nlogn)
*/

function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr.shift(), left = [], right = [];
  arr.forEach(item => {
    item < pivot ? left.push(item) : right.push(item)
  });
  return sort(left).concat([pivot], sort(right));
}

function sortInPlace(arr,left = 0, right = arr.length - 1) {
  if (left > right) {
    return 
  }
  const pivot = arr[left], head= left, tail = right;
  while (left !== right) {
    while (arr[right] >= pivot && left < right) {
      right--;
    }
    while (arr[left] <= pivot && left < right) {
      left++;
    }
    if ( left !== right) {
      const tmp = arr[right];
      arr[right] = arr[left];
      arr[left] = tmp;
    }
  }
  arr[head] = arr[left];
  arr[left] = pivot;
  sortInPlace(arr, 0, left - 1);
  sortInPlace(arr, right + 1, tail);
  return arr;
}

judge(sortInPlace);