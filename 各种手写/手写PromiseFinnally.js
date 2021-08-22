Promise.prototype.finally = function (callback) {
  return this.then(data => {
    return Promise.resolve(callback()).then(() => data);
  }, err => {
    return Promise.resolve(callback()).then(() => { throw err })
  })
}

// Promise.resolve(2).finally(()=> {}).then(res=>{console.log(res)})
// Promise.resolve(2).finally(()=> 22).then(res=>{console.log(res)})
// Promise.resolve(2).finally(()=> new Promise((resolve)=>{setTimeout(()=>{resolve(22)}, 5000)})).then(res=>{console.log(res)})



Promise.reject(3).finally(() => { }).then(null, res => { console.log(res) })
Promise.reject(3).finally(() => 22).then(null ,res => { console.log(res) })
Promise.reject(3).finally(() => new Promise((resolve) => { setTimeout(() => { resolve(22) }, 5000) })).then(null, res => { console.log(res) })