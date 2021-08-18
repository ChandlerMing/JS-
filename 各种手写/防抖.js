function debounce(fn, delay) {
  let timer;
  // return (...args) => { 不能使用箭头函数 否则调用的时候 this 将指向 windows
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function test() {
  console.log(this.name);
}

const test1 = debounce(test, 1000);

const a = {
  name: 'zqm',
  test1
}

for (let i = 0; i < 10000; i++) {
  console.log(new Date().getTime());
  a.test1();
}