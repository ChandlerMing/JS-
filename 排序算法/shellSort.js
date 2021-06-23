const judge = require("./judge");

/*
  Core: select the smalllest item in the array every time and concat it to the ordered interval
  Space complexity: O(1)
  Time complexity:
    Best: O(nlogn)
    Worst: O(n^1.5)
    Average: O(nlogn)
*/

function sort(arr) {
  const size = arr.length;
  let gap = Math.floor(size / 2);
  
  while (gap > 0) {
    for (let i = gap; i < size; i++) {
      const tmp = arr[i];
      let preIndex = i - gap;

      while (tmp < arr[preIndex]) {
        arr[preIndex + gap] = arr[preIndex];
        preIndex -= gap;
      }
      
      arr[preIndex + gap] = tmp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

judge(sort);