const judge = require("./judge");

/*
  Core: select the smalllest item in the array every time and concat it to the ordered interval
  Space complexity: O(1)
  Time complexity:
    Best: O(n^2)
    Worst: O(n^2)
    Average: O(n^2)
*/

function sort(arr) {
  const size = arr.length;
  for ( let i = 0; i < size - 1; i++ ) {
    let minIndex = i; // mark the samllest item`s index
    for ( let j = i + 1; j < size; j++ ) {
      if ( arr[j] < arr[minIndex] ) {
        minIndex = j;
      }
    }
    const tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

judge(sort);