function myPromise() {
  const cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.value = value;
      this.cbs.forEach(cb => cb(value));
    })
  }
}