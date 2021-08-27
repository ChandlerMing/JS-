const interval = 1000
let ms = 5432  // 从服务器和活动开始时间计算出的时间差，这里测试用 50000 ms
let trim = ms % interval;

let count = 0
let startTime
let timeCounter
if (ms >= 0) {
  if (trim > 0) {
    setTimeout(() => {
      startTime = new Date().getTime()
      ms -= trim
      console.log(ms);
      timeCounter = setTimeout(countDownStart, interval)
    }, trim)
  } 
}

function countDownStart() {
  count++
  const offset = new Date().getTime() - (startTime + count * interval)
  let nextTime = interval - offset
  if (nextTime < 0) {
    nextTime = 0
  } 
  ms -= interval
  if (ms <= 0) {
    console.log('活动开始')
    clearTimeout(timeCounter)
  } else {
    console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`)
    timeCounter = setTimeout(countDownStart, nextTime)
  }
}