function clone(source, map = new WeakMap()) {
  if (typeof source === 'object' && source !== null) {
    let cloneTarget = Array.isArray(source) ? [] : {};
    if (source instanceof Date || source instanceof RegExp || source instanceof Set || source instanceof Map) {
      cloneTarget = new source.constructor(source);
    }
    if (map.get(source)) {
      return map.get(source);
    }
    map.set(source, cloneTarget);
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        cloneTarget[key] = clone(source[key], map);
      }
    }
    return cloneTarget;
  } else {
    return source;
  }
};

let source = {
  name: 'zqm',
  age: 18,
  Male: true,
  son: {
    name: 'donkey',
    age: 12,
    Male: false,
    son: null,
  },
  base: ['Shanghai', 'HongKong', 'LA', { type: 'hidden', name: 'HF' }],
  rich: undefined,
  run: function () {
    console.log('runnning')
  },
  time: new Date(),
  regexp: new RegExp("\\w+"),
  set: new Set([1, 2, 3]),
  map: new Map([[1, 1], [2, 2], [3, 3]]),
}
// source.son.parent = source

let target = clone(source);
target.name = 'zzqm';
target.base[3].type = 'show';
target.map.set(4, 4);

// console.log(JSON.stringify(source));
// console.log(JSON.stringify(target));
console.log(source);
console.log(target);