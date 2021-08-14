function myInstanceof(source, target) {
  if (typeof source !== 'object' || typeof target !== 'function') {
    return false;
  }
  let proto = source.__proto__;
  while (proto) {
    if (proto === target.prototype) {
      return true;
    } else {
      proto = proto.__proto__;
    }
  }
  return false;
}

class Person {
  static type = 'Person'
  constructor(name) {
    this.name = name
  }
}

class Student extends Person {
  static type = 'Student'
  constructor(name, major) {
    super(name)
    this.major = major
  }
}

let p = new Person('P')

let s = new Student('P', 'S')

console.log(p, s, s instanceof Student, s instanceof Person);

console.log(myInstanceof(s, Student), myInstanceof(s, Person), myInstanceof([], Object));