const judge = require("./judge");

function sort(arr) {
  const size = arr.length;
  for ( let i = 1; i < size; i++ ) {
    const cur = arr[i];
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