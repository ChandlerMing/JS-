function throttle(fn, time) {
  let flag = true;
  // return (...args) => { 不能使用箭头函数 否则调用的时候 this 将指向 windows
  return function(...args) {
    if (!flag) {
      return;
    }
    fn.apply(this, args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, time)
  }
}

function test(content) {
  console.log(content);
}

const test1 = throttle(test, 1000)

setInterval(()=>{
  test1(111)
}, 100)
