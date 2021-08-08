// 手写版
function PromiseAll(quene) {
  return new Promise((resolve, reject) => {
    let size = quene.length
    let value = new Array(size);
    quene.forEach((promise, index) => {
      promise.then(res => {
        value[index] = res;
        size--;
        if (size === 0) {
          resolve(value)
        }
      }).catch(reason => {
        reject(reason)
      })
    })
  })
}

let promiseQuene = [];

for (let i = 0; i < 5; i++) {
  promiseQuene.push(new Promise((resolve) => {
    setTimeout(() => {
      console.log(i + 1);
      resolve(i + 1);
    }, 100 * Math.random());
  }))
}

// let all = Promise.all(promiseQuene).then(res => {
//   console.log(res);
// })

let all = PromiseAll(promiseQuene).then(res => {
  console.log(res);
})
