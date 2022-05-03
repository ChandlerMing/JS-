/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = new MonotonicQueue();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      queue.push(nums[i]);
    } else {
      queue.push(nums[i]);
      res.push(queue.max());
      queue.shift(nums[i - k + 1]);
    }
  }
  return res;
};

class MonotonicQueue {
  constructor() {
    this.queue = [];
  }
  push(val) {
    while (this.queue.length > 0 && val > this.queue[this.queue.length - 1]) {
      this.queue.pop();
    }
    this.queue.push(val);
  }
  shift(val) {
    if (this.queue.length > 0 && val === this.queue[0]) {
      this.queue.shift();
    }
  }
  max() {
    if (this.queue.length === 0) {
      return;
    }
    return this.queue[0];
  }
}