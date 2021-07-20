function New(constructor, ...args) {
  const obj = new Object();
  obj.__proto__ = constructor.prototype;
  constructor.apply(obj, args);
  return obj;
}

function Student(name, age) {
  this.name = name;
  this.age = age;
}

let newPerson = New(Student, 'hanson', 18);

console.log(newPerson.name); // hanson