function mySetInterval(fn, interval) {
  function _job() {
    setTimeout(_job, interval);
    fn();
  }
  setTimeout(_job, interval);
}

mySetInterval(() => { console.log(1)}, 1000)