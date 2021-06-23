const judge = require("./judge");

/* 
  Core: Insert the item into the ordered interval of the array.(left==>right)
  Space complexity: O(1)
  Time complexity:
    Best: O(n)
    Worst: O(n^2)
    Average: O(n^2)
*/

/* 
 *  插入排序的思想： 
 *  每次循环前，数组左边都是部分有序的序列， 
 *  然后选择右边待排元素，将其值保存下来 
 *  依次和左边已经排好的元素比较 
 *  如果小于左边的元素，就将左边的元素右移一位 
 *  直到和最左边的比较完成，或者待排元素不比左边元素小 
*/  

function sort(arr) {
  const size = arr.length;
  for ( let i = 1; i < size; i++ ) {
    const cur = arr[i]; // the item need to be settled
    let pointer = i - 1;
    while ( cur < arr[pointer] && pointer >= 0 ) {
      arr[pointer + 1] = arr[pointer]
      pointer--;
    }
    arr[pointer+1] = cur;
  }
  return arr;
}

judge(sort);