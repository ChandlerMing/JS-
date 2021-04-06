var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 1) {
    return 0;
  }
  let n = intervals.length;
  intervals.sort((a, b) => (a[1] - b[1]));
  let total = 0, prev = intervals[0][1];
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < prev) {
      total++;
    } else {
      prev = intervals[i][1];
    }
  }
  return total;
};
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));