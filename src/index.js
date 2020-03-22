
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  let result = [];
  matrix.forEach((elem,i) => {
    if (i % 2 === 0) {
      result.push.apply(result, elem);
    } else {
      result.push.apply(result, elem.reverse());
    }
  })
  return result;
}
