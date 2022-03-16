class Node {
  constructor(key, val, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addLastNode(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  removeFirstNode() {
    if (this.size === 0) {
      return null;
    }
    const firstNode = this.head.next;
    this.removeNode(firstNode);
    return firstNode;
  }
}

class LRUCache {
  constructor(capacity) {
    this.size = capacity;
    this.map = new Map();
    this.cache = new DoubleLinkedList();
  }
  addRecently(key, val) {
    const node = new Node(key, val);
    this.cache.addLastNode(node);
    this.map.set(key, node);
  }
  setRecently(key) {
    const node = this.map.get(key);
    this.cache.removeNode(node);
    this.cache.addLastNode(node);
  }
  removeLeastRecently() {
    const node = this.cache.removeFirstNode();
    this.map.delete(node.key);
  }
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    this.setRecently(key);
    return this.map.get(key).val;
  }
  put(key, val) {
    if (this.map.has(key)) {
      const oldNode = this.map.get(key);
      this.cache.removeNode(oldNode);
      this.map.delete(key);
      this.addRecently(key, val);
      return;
    }
    if (this.cache.size === this.size) {
      this.removeLeastRecently();
    }
    this.addRecently(key, val);
  }
}

