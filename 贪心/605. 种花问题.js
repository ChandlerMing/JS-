var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0];
  const flowerbedSize = flowerbed.length;
  let max = 0;
  if (!flowerbedSize) return false;
  for (let i = 1; i < flowerbedSize - 1; i++) {
    const pre = i - 1;
    const next = i + 1;
    if (!flowerbed[i] && !flowerbed[pre] && !flowerbed[next]) {
      max++;
      flowerbed[i] = 1;
    }
  }
  return n <= max;
};
console.log(canPlaceFlowers([1, 0, 0, 0, 1]));