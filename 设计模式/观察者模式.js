// 被观察者
class Subject {
  constructor() {
    this.observers = new Set();
  }
  addObserver(ob) {
    this.observers.add(ob);
  }
  delObserver(ob) {
    this.observers.delete(ob);
  }
  notifyObserver() {
    for (const oberver of this.observers.values()) {
      oberver.update();
    }
  }
}
// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`observer-${this.name} update.`);
  }
}

const subject = new Subject();
const oberver1 = new Observer('o1');
const oberver2 = new Observer('o2');

subject.addObserver(oberver1);
subject.addObserver(oberver2);
subject.notifyObserver();