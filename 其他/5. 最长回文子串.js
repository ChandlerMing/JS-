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
  return arr.slice(resRange[0], resRange[1]).filter(el => el != '#').join('');
};

var longestPalindrome = function (s) {
  function expend(s, left, right) {
    while (left >=0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  if (s.length < 2) {
    return s;
  }
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expend(s, i, i);
    let len2 = expend(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2); // len - 1 巧妙适配奇数偶数
      end = i + Math.floor(len / 2);
    }
  }
  return s.slice(start, end + 1);
};

console.log(longestPalindrome('cbbd'))