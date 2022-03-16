class LFUCache {
  constructor(size) {
    this.keyToVal = new Map();
    this.keyToFreq = new Map();
    this.freqToKey = new Map();
    this.size = size;
    this.minFreq = 0;
  }
  put(key, val) {
    if (this.size <= 0) {
      return;
    }
    if (this.keyToVal.has(key)) {
      this.keyToVal.set(key, val);
      this.increaseFreq(key);
      return;
    }
    if (this.keyToVal.size === this.size) {
      this.removeMinFreqKey();
    }
    this.keyToVal.set(key, val);
    this.keyToFreq.set(key, 1);
    if (!this.freqToKey.has(1)) {
      this.freqToKey.set(1, new Set());
    }
    this.freqToKey.get(1).add(key);
    this.minFreq = 1;
  }
  get(key) {
    if (!this.keyToVal.has(key)) {
      return -1;
    }
    this.increaseFreq(key)
    return this.keyToVal.get(key);
  }
  increaseFreq(key) {
    const freq = this.keyToFreq.get(key);
    this.keyToFreq.set(key, freq + 1);
    this.freqToKey.get(freq).delete(key);
    if (!this.freqToKey.has(freq + 1)) {
      this.freqToKey.set(freq + 1, new Set());
    }
    this.freqToKey.get(freq + 1).add(key);
    if (this.freqToKey.get(freq).size === 0) {
      this.freqToKey.delete(freq);
      if (freq === this.minFreq) {
        this.minFreq++;
      }
    }
  }
  removeMinFreqKey() {
    const keyList = this.freqToKey.get(this.minFreq);
    const deletedKey = keyList.values().next().value;
    keyList.delete(deletedKey);
    if (keyList.size === 0) {
      this.freqToKey.delete(this.minFreq);
    }
    this.keyToVal.delete(deletedKey);
    this.keyToFreq.delete(deletedKey)
  }
}