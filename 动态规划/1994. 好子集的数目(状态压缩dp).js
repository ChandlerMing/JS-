/**
 * https://www.codepile.net/pile/ZdKJagm1
 * @param {number[]} nums
 * @return {number}
 */
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const bads = [4, 9, 25];
const mod = 1e9 + 7;
var numberOfGoodSubsets = function (nums) {
  // cnt
  const cnt = count(nums);
  // dp
  const dp = new Array(1 << primes.length).fill(0);
  // 初始化
  dp[0] = 1;
  // 转移
  for (let i = 2; i <= 30; i++) {
    // 特殊情况跳过
    if (isBadNum(i) || count[i] === 0) {
      continue;
    }
    const mask = getMask(i);
    for (let prevMask = 0; prevMask < (1 << primes.length); prevMask++) {
      // 重复选择 跳过
      if ((prevMask & mask) > 0) {
        continue;
      }
      dp[prevMask | mask] += (dp[prevMask] * cnt[i]) % mod;
    }
  }
  // 结果
  return getAns(dp, cnt[1]);
}

function count(nums) {
  const cnt = new Array(31).fill(0);
  nums.forEach(num => {
    cnt[num]++;
  })
  return cnt;
}

function isBadNum(num) {
  for (b of bads) {
    if (num % b === 0) {
      return true;
    }
  }
  return false;
}

function getMask(num) {
  let mask = 0;
  primes.forEach((el, index) => {
    if (num % el === 0) {
      mask += (1 << index);
    }
  })
  return mask;
}

function getAns(dp, cnt41) {
  let res = 0;
  for (let i = 1; i < (1 << 10); i++) {
    res += dp[i];
    res %= mod;
  }
  // 对 1 特殊处理
  for (let i = 0; i < cnt41; i++) {
    res = (res * 2) % mod;
  }
  return res;
}

console.log(numberOfGoodSubsets([10, 11, 5, 1, 10, 1, 3, 1, 26, 11, 6, 1, 1, 15, 1, 7, 22, 1, 1, 1, 1, 1, 23, 1, 29, 5, 6, 1, 1, 29, 1, 1, 21, 19, 1, 1, 1, 2, 1, 11, 1, 15, 1, 22, 14, 1, 1, 1, 1, 6, 7, 1, 14, 3, 5, 1, 22, 1, 1, 1, 17, 1, 29, 2, 1, 15, 10, 1, 5, 7, 1, 1, 1, 30, 1, 30, 1, 21, 10, 1, 1, 1, 1, 1, 2, 6, 5, 7, 3, 1, 1, 19, 29, 1, 7, 13, 14, 1, 5, 26, 19, 11, 1, 1, 1, 1, 1, 1, 1, 1, 22, 15, 1, 1, 13, 1, 17, 1, 1, 1, 13, 6, 1, 10, 1, 1, 17, 1, 1, 3, 14, 7, 17, 1, 13, 1, 1, 1, 1, 1, 11, 1, 1, 6, 1, 1, 1, 1, 1, 2, 1, 30, 2, 26, 1, 1, 14, 1, 26, 29, 30, 1, 13, 21, 1, 1, 14, 21, 1, 23, 1, 15, 23, 21, 1, 30, 19, 19, 1, 10, 23, 3, 3, 17, 22, 2, 26, 1, 11, 1, 23, 1, 1, 1, 15, 1, 1, 13, 1, 1]));
console.log(numberOfGoodSubsets([1, 2, 3, 4]));