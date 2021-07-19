/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  const map = this.map;
  const value = map.get(key);
  if (value !== undefined) {
    map.delete(key);
    map.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  const map = this.map;
  const capacity = this.capacity;
  if (map.has(key)) {
    map.delete(key);
  } else if (map.size >= capacity) {
    map.delete(map.keys().next().value);
  }
  map.set(key, value);
  return null;
};
