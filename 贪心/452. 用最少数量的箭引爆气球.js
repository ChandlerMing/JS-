/**
 * @param {number[][]} points
 * @return {number}
 * [[10,16],[2,8],[1,6],[7,12]]
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let prev = points[0][1],
    total = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prev) {
      total++;
      prev = points[i][1];
    }
  }
  return total;
};