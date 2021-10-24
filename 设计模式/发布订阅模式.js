class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  subscribe(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event).add(cb);
  }
  unsubscirbe(event, cb) {
    if (!this.events.has(event)) {
      return;
    }
    this.events.get(event).delete(cb);
  }
  unsubscirbeAll(event) {
    if (!this.events.has(event)) {
      return;
    }
    this.events.get(event).clear();
  }
  publish(event, ...args) {
    const cbs = this.events.get(event);
    for (const cb of cbs.values()) {
      cb(...args);
    }
  }
}

const eventEmitter = new EventEmitter();

const cb1 = (name) => { console.log(`click ${name} 1`); };
const cb2 = (name) => { console.log(`click ${name} 2`); };

console.log('---------start----------');

eventEmitter.subscribe('click', cb1);
eventEmitter.subscribe('click', cb2);
eventEmitter.publish('click', 'button')

console.log('------------------------');

eventEmitter.unsubscirbe('click', cb2);
eventEmitter.publish('click', 'button');

console.log('------------------------');

eventEmitter.unsubscirbeAll('click');
eventEmitter.publish('click', 'button');

console.log('----------end-----------');
