const judge = require("./judge");

/*
  Core: heapify the tree
  Space complexity: O(1)
  Time complexity:
    Best: O(nlogn)
    Worst: O(nlogn)
    Average: O(nlogn)
*/

function sort(arr) {
  const size = arr.length;
  // bulid the heap (Big Root)
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heaptify(arr, i, size - 1)
  }
  // swap the big root to the end and maintain the heap
  for (let i = size - 1; i > 0; i--) {
    const tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;
    heaptify(arr, 0, i - 1);
  }
  return arr;
}

function heaptify(arr, start, end) {
  const dad = start;
  let son = dad * 2 + 1;
  if (son > end) return;
  if (son + 1 <= end && arr[son + 1] > arr[son]) {
    son += 1;
  }
  if (arr[son] > arr[dad]) {
    const tmp = arr[dad];
    arr[dad] = arr[son];
    arr[son] = tmp;
    heaptify(arr, son, end)
  }
}

judge(sort);