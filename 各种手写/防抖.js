function debounce(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function test(content) {
  console.log(new Date().getTime(), content);
}

const test1 = debounce(test, 1000);

for (let i = 0; i < 10000; i++) {
  console.log(new Date().getTime());
  test1(111);
}