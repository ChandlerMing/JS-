function get(query) {
  console.log(this.baseUrl + query);
}

function decorator(fn) {
  return function (...args) {
    console.log('Before Send');
    return fn.apply(this, args);
  }
}

const logGet = decorator(get);

const base = {
  baseUrl: 'www.decorator.com',
  get: get,
  logGet: logGet
}

base.get('/list1');

base.logGet('/list1');