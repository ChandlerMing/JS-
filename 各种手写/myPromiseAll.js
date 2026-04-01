const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const promiseArr = Array.from(promises);
    const promiseSize = promiseArr.length;

    if (promiseSize === 0) {
      resolve([]);
      return;
    }

    const result = new Array(promiseSize);
    let count = 0;

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promiseSize) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};
