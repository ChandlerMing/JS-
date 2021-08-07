class myPromise {
  // 声明3个状态，分别为pending等待/resolve解决/reject拒绝
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECT = 'rejected'
  constructor(executor) {
    // executor为执行者
    // 一开始是等待状态
    this.status = myPromise.PENDING
    this.value = null
    // 用于保存需要执行的函数
    this.callbacks = []
    // 这里使用try..catch的原因是如果在promise中出现了错误信息的情况，就直接丢给reject来处理
    try {
      // class内this遵循严格模式，此处的this是指向的window
      // 使用bind认为干预this指向
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      // 把错误信息给reject来处理
      this.reject(error)
    }
  }
  // 类方法
  resolve(value) {
    // 这里需要增加一个判断，如果当前Promise的状态为pending的时候，才能进行状态更改和处理
    if (this.status === myPromise.PENDING) {
      // 执行类方法的时候就要改变Promise的状态和值
      this.status = myPromise.FULFILLED
      this.value = value
      setTimeout(() => {
        // 这里还是要处理为异步任务，如果promise内出现异步处理的函数内还有同步任务
        // 那么需要先解决同步任务，再进行Promise的状态改变和处理
        // 可以结合后文的图片来理解[图：Pending状态下的异步处理]
        this.callbacks.map(callback => {
          // 这里应该这样理解，当状态异步改变的时候，先把then里面的方法保存起来，然后等状态改变了
          // 就从之前保存的函数中，拿到then里面的对应方法执行
          callback.onFulfilled(value)
        })
      })
    }
  }
  reject(reason) {
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.REJECT
      this.value = reason
      setTimeout(() => {
        this.callbacks.map(callback => {
          // 这里用map应该是存入的时候使用了数组push，这里map会对每个数组数据进行处理，这里数组只有1个数据
          // 所以是执行1次，存入的又是一个对象所以可以用callback.onRejected获取对应函数
          callback.onRejected(reason)
        })
      })
    }
  }
  // then方法的实现
  then(onFulfilled, onRejected) {
    // 两个函数不是必须传入的，例如会出现then(null,onRejected)的情况
    if (typeof onFulfilled !== 'function') {
      // 自己封装一个空函数上去
      // 同时返回value的值，由此来实现穿透
      onFulfilled = () => { return this.value }
    }
    if (typeof onRejected !== 'function') {
      // 自己封装一个空函数上去
      onRejected = () => { return this.value }
    }
    // 这里是返回一个全新的promise，是为了让then支持链式调用
    // 将返回的Promise进行保存用于之后返回判断
    let promise = new myPromise((resolve, reject) => {
      if (this.status === myPromise.PENDING) {
        // 这里是等待状态，在promise内部的函数是异步执行的，例如过多少秒之后才解决，
        // 那么我们手写的Promise就应该在pending状态下，保存需要执行的函数.
        // 异步改变状态的时候，会先来到这里保存函数
        this.callbacks.push({
          // 这里将保存的函数进行了一次包装，如果异步then中出现了错误，也会全部交给onRejected来处理
          onFulfilled: value => {
            this.parse(promise, onFulfilled(value), resolve, reject)
            // try {
            //    // 这里的更改主要是针对Promise的内部函数的异步处理
            //    let result = onFulfilled(value)
            //    // 通过instanceof来判断result是否是通过myPromise实现的，从而确定是否是返回的Promise
            //    if (result instanceof myPromise) {
            //       // 如果是Promise的话，目的还是要改变Promise的状态，并且返回值
            //       // 此时 result 是一个Promise
            //       // 这里相当于重新执行了一次返回的Promise，递归
            //       result.then(resolve,reject)
            //    } else {
            //       // 普通值直接返回
            //       resolve(result)
            //    }
            // } catch (error) {
            //    // then的异步处理中出现error就交给onRejected处理
            //    // 同时这里的处理函数从onRejected改为reject，相当于把错误代码交给了
            //    // 最后一个then来处理
            //    reject(error)
            // }
          },
          onRejected: reason => {
            this.parse(promise, onRejected(reason), resolve, reject)
          },
        })
      }
      // 这里判断状态，必须是解决状态的情况才会执行onFulfilled函数，否则会出现状态没改变也执行的情况
      if (this.status === myPromise.FULFILLED) {
        // 使用setTimeout将then中的处理变成异步方法，这样才能符合正常promise的运行顺序
        // 这时这些代码不会立即执行，而是进入下一个loop中
        // 这里有点小问题，是setTimeout是宏任务，和自带promise相比，这个会比自带的then晚执行
        setTimeout(() => {
          // 因为链式调用把之前的值保存，然后传递给下一个then
          // 函数要是运行了就是把值传递，没有就是传递函数
          this.parse(promise, onFulfilled(this.value), resolve, reject)
        }, 0)
      }
      if (this.status === myPromise.REJECT) {
        setTimeout(() => {
          this.parse(promise, onRejected(this.value), resolve, reject)
        }, 0)
      }
    })
    return promise
  }
  // 代码复用
  parse(promise, result, resolve, reject) {
    if (promise === result) {
      // 这里的判断用于限制Promise.then不能返回自身
      throw new TypeError('aaa')
    }
    // 使用try..catch也是为了捕获then中出现的错误，只有写了catch才会有错误信息输出
    try {
      // 这里的更改主要是针对Promise的内部函数的异步处理
      // 通过instanceof来判断result是否是通过myPromise实现的，从而确定是否是返回的Promise
      if (result instanceof myPromise) {
        // 如果是Promise的话，目的还是要改变Promise的状态，并且返回值
        // 此时 result 是一个Promise
        // 这里相当于重新执行了一次返回的Promise，递归
        result.then(resolve, reject)
      } else {
        // 普通值直接返回
        resolve(result)
      }
    } catch (error) {
      // then的异步处理中出现error就交给onRejected处理
      // 同时这里的处理函数从onRejected改为reject，相当于把错误代码交给了
      // 最后一个then来处理
      reject(error)
    }
  }
  // resolve静态方法
  static resolve(value) {
    // 主要还是返回一个Promise
    return new myPromise((resolve, reject) => {
      //也是需要判断传入的是不是Promise
      if (value instanceof myPromise) {
        // 如果传入的是Promise，那么状态就和传入的Promise一样
        value.then(resolve, reject)
      } else {
        // 这种是原生状态，普通值直接返回
        resolve(value)
      }
    })
  }
  // reject静态方法实现
  static reject(value) {
    // 主要还是返回一个Promise
    return new myPromise((resolve, reject) => {
      reject(value)
    })
  }
  // all静态方法，都成功才成功，返回的还是Promise
  static all(promises) {
    return new myPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(
          value => {
            // 每次成功就保存一次值
            values.push(value)
            if (values.length === promises.length) {
              // 如果存入结果的数组长度等于传入promise的数组长度，那么就相当于所有的Promise都是成功的
              resolve(values)
            }
          },
          reason => {
            // 任何一个传入的Promise的状态为reject的话就改变返回的all的promise的状态
            // 上面的resolve就不会继续走了
            reject(reason)
          })
      })
    })

  }
  // race静态方法，谁快用谁，不管成功还是失败，返回的也是Promise
  static race(promises) {
    return new myPromise((resolve, reject) => {
      promises.map(promise => {
        promise.then(
          value => {
            // 状态只改变一次，所以直接使用就可以
            resolve(value)
          },
          reason => {
            reject(reason)
          }
        )
      })
    })
  }
}