/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let length = Math.max(v1.length, v2.length);
  for (let i = 0; i < length; i++) {
    v1[i] = parseInt(v1[i]) || 0
    v2[i] = parseInt(v2[i]) || 0
    if (v1[i] > v2[i]) {
      return 1;
    } else if (v1[i] < v2[i]) {
      return -1;
    }
  }
  return 0;
};