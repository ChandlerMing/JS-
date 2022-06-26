/**
 * Type annotation
 */
function greeter1(person: string) {
  return "Hello, " + person;
}

// let user = [0, 1, 2]; // will incur a warning
let user1 = "Chandler"

console.log(greeter1(user1));

/**
 * InterFace
 */
interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Chandler", lastName: "Ming"};

console.log(greeter2(user2));

/**
 * Class
 */
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter3(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Jane", "M.", "User");

console.log(greeter3(user3))
