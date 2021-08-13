// function resolve(str) {
//   let arr = str.split(' ');
//   return arr.pop().length;
// }

// console.log(resolve('Hello World'));

// console.log(resolve('    '));

给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。  

示例 1：

输入：nums = [1,2,0]
输出：3
示例 2：

输入：nums = [3,4,-1,1]
输出：2
示例 3：

输入：nums = [7,8,9,11,12]
输出：1

function resolve(arr) {
  let min = Number.MAX_VALUE
  let max = -Number.MAX_VALUE
  arr.forEach(el => {
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
  })
  if (min > 1 && max < 0) {
    return 1;
  } else {
    if (max - min + 1 === arr.length) {
      return max + 1;
    } else {
      let res = 1;
      let map = new Set(arr)
      while (res < max) {
        if (map.has(res)) {
          res++;
          continue;
        } else {
          return res;
        }
      }
    }
  }
}


console.log(resolve([7,8,9,11,12]));