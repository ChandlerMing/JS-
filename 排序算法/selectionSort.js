const judge = require("./judge");

function sort(arr) {
  const size = arr.length;
  for ( let i = 0; i < size - 1; i++ ) {
    let minIndex = i;
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