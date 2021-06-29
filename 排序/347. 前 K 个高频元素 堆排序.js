/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // count the number`s frequency
  const map = new Map();
  nums.forEach(i => {
    const res = map.has(i) ? map.get(i) + 1 : 1;
    map.set(i, res)
  })
  nums = [...map];
  // maintain a small root heap
  const heap = [];
  const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
  }
  // make the end item the right place
  const bubbleUp = (heap) => {
    let cur = heap.length - 1;
    while (true) {
      const parent = Math.floor((cur - 1) / 2);
      if (parent < 0 ) break;
      if (heap[cur][1] < heap[parent][1]) {
        swap(heap, cur, parent);
        cur = parent;
      } else {
        break;
      }
    }
    return heap;
  }
  // make the head item the right place
  const bubbleDown = (heap) => {
    let cur = 0;
    while (true) {
      let child = Math.floor(cur * 2 + 1);
      if (child > heap.length - 1) break;
      if (child + 1 <= heap.length - 1 && heap[child + 1][1] < heap[child][1]) {
        child += 1;
      }
      if (heap[child][1] < heap[cur][1]) {
        swap(heap, cur, child);
        cur = child;
      } else {
        break;
      }
    }
    return heap;
  }
  // do the maintain job
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (heap.length < k) {
      heap.push(number);
      bubbleUp(heap);
    } else if (number[1] > heap[0][1]) { // if the number bigger than the minimum of the heap, it`s top k
      heap[0] = number;
      bubbleDown(heap);
    }
  }
  return heap.map(e => e[0]);
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))