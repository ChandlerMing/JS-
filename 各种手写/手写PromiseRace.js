// 手写版
function PromiseRace(quene) {
  return new Promise((resolve, reject) => {
    quene.forEach(promise => {
      promise.then(res => {
        resolve(res)
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

// let all = Promise.race(promiseQuene).then(res => {
//   console.log('race-res:', res);
// })

let all = PromiseRace(promiseQuene).then(res => {
  console.log('race-res:', res);
})
