/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    return b[0] - a[0] === 0 ? a[1] - b[1] : b[0] - a[0];
  });
  for (let i = 0; i < people.length; i++) {
    const person = people.splice(i, 1)[0];
    people.splice(person[1], 0, person);
  }
  return people;
};
console.log(reconstructQueue([[9, 0], [7, 0], [1, 9], [3, 0], [2, 7], [5, 3], [6, 0], [3, 4], [6, 2], [5, 2]]));