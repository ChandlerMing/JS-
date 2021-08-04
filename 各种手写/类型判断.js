function type(tar) {
  return Object.prototype.toString.call(tar).split(' ').pop().slice(0, -1);
}

console.log(type(1));
console.log(type(' '));
console.log(type(true));
console.log(type({}));
console.log(type(()=>{}));
console.log(type(undefined));
console.log(type(null));
console.log(type(Symbol()));
console.log(type(10n));
