/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let arr = ['#', ...s.split('').join('#'), '#'];
  let maxLength = 0;
  let resRange = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    let left = i - 1, right = i + 1;
    let cur = 0;
    while (left >= 0 && right < arr.length) {
      if (arr[left] === arr[right]) {
        cur++;
        left--;
        right++;
      } else {
        break;
      }
    }
    if (cur > maxLength) {
      maxLength = cur;
      resRange = [left + 1, right - 1 + 1] // 'right - 1' offsets the final 'right++'. 'right + 1' adapt the slice index.
    }
  }
  return arr.slice(resRange[0], resRange[1]).filter(el => el != '#').join('');;
};

console.log(longestPalindrome('cbbd'))