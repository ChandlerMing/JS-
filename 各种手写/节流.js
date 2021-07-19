function throttle(fn, time) {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return;
    }
    fn(...args);
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




