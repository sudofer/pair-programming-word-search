const transpose = function (matrix) {
  let result = [];
  for (const y in matrix[0]) {
    //console.log(`y: ${y}`);
    let temp = [];
    for (const x in matrix) {
      //console.log(`x: ${x}`);
      temp.push(matrix[x][y]);
    }
    result.push(temp);
  }
  return result;
};

module.exports = transpose;
