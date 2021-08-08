class zPromise {
  constructor(executor) {
    this.value = null;
    this.callbacks = [];
    executor(this.resolve.bind(this));
  }
  resolve(value) {
    setTimeout(() => {
      this.value = value;
      this.callbacks.forEach(callback => callback(value));
    })
  }
  then(onResolved) {
    return new zPromise(resolve => {
      this.callbacks.push(() => {
        let res = onResolved(this.value);
        if (res instanceof zPromise) {
          res.then(resolve)
        } else {
          resolve(res)
        }
      })
    })
  }
}

let z = new zPromise((resolve) => {
  setTimeout(() => {
    resolve(1)
    console.log('z0:', 0);
  }, 1000);
}).then(res => {
  console.log('z1:', res);
  return 2;
}).then(res => {
  console.log('z2:', res);
  return new zPromise(resolve => {
    setTimeout(() => {
      resolve(3)
    }, 1000);
  })
}).then(res => {
  console.log('z3:', res);
})

// let p = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1)
//     console.log('p:', 2);
//   }, 1000);
// }).then(res => {
//   console.log('p:', res);
// })