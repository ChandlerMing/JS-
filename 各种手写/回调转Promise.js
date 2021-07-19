const fs = require('fs');

const promisify = (cb) => {
  if (typeof cb !== 'function') {
    throw new Error('The argument must be of type Function.')
  }
  return function(...args) {
    return new Promise((resolve, reject) => {
      cb(...args, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      })
    })
  }
}

const read = promisify(fs.readFile);

read('./test.txt', 'utf-8').then(res => console.log(res)).catch(err=>console.error(err))
