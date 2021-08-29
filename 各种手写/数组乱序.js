let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function shuffle(arr) {
  let size = arr.length;
  while (size) {
    let toExchange = ~~(Math.random() * size--);
    const tmp = arr[size];
    arr[size] = arr[toExchange];
    arr[toExchange] = tmp;
  }
  return arr;
}

console.log(shuffle(arr));