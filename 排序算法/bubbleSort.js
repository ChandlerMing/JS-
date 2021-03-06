const judge = require("./judge");

/*
  Core: compare the near two item and swap it if necessary
  Space complexity: O(1)
  Time complexity:
    Best: O(n)
    Worst: O(n^2)
    Average: O(n^2)
*/

// bubbleSort 
function sort(arr) {
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

// bubbleSort in ES6 (optimized)
function sort_ES6(arr) {

  // mark the unSorted boundary
  let boundary = arr.length - 1;

  while ( boundary > 0 ) {
    const curBoundary = boundary;
    boundary = 0;
    for ( let i = 0; i < curBoundary; i++ ) {
      if ( arr[i] > arr[i + 1] ) {
        [ arr[i], arr[i + 1] ] = [ arr[i+1], arr[i] ]; //Howerver, destructuring makes performance bad
        boundary = i;
      }
    }
  }

  return arr;
  
}

judge(sort);