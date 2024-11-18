/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const deltaX = [-1, 0, 1];
  const deltaY = [-1, 0, 1];
  const vectors = deltaX.flatMap((x) => deltaY.map((y) => [x, y]));
  const upperBound = [img[0].length - 1, img.length - 1];
  const lowerBound = [0, 0];
  const res = img.map((row, y) => row.map((_, x) => {
      const [sum, count] = vectors.reduce((acc, delta) => {
          const [sum, count] = acc;
          const dx = x + delta[0];
          const dy = y + delta[1];
          if (dx >= lowerBound[0] && dx <= upperBound[0] && dy >= lowerBound[1] && dy <= upperBound[1]) {
              return [sum + img[dy][dx], count + 1];
          }
          return acc;
      }, [0, 0])
      return Math.floor(sum / count);
  }))
  return res;
};

imageSmoother([[100,200,100],[200,50,200],[100,200,100]])