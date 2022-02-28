const { getIntersection } = require('../src/index');

// const result = getIntersection(
//   [1, 2, 3],
//   [2, 4, 6, 1]
// );

const result = getIntersection(
  [3, 6, 7, 6, 2, 8, 3, 2, 9, 3],
  [8, 9, 5, 2, 9, 4, 0, 9, 6, 6],
  [0, 3, 6, 5, 9, 3, 1, 2]
);


console.log(result);



// const array1 = [
//   0, 10, 12, 9, 5, 6, 9, 12, 9, 10, 12, 11, 11, 8, 7, 12, 12, 2, 13,
//   2,
// ];

// const array2 = [
//   11, 9, 12, 8, 11, 13, 2, 1, 13, 5, 3, 1, 5, 5, 14, 8, 8, 8, 9, 3,
// ];

// const array3 = [
//   13, 3, 6, 2, 1, 3, 3, 9, 10, 5, 11, 13, 8, 1, 4, 3, 1, 13, 5, 6,
// ];

// const array4 = [
//   12, 4, 9, 9, 3, 11, 5, 2, 12, 9, 5, 9, 9, 3, 13, 2, 8, 5, 4, 4,
// ];

// const array5 = [
//   14, 6, 12, 3, 12, 14, 4, 5, 7, 6, 10, 0, 0, 5, 10, 11, 7, 12, 12, 3,
// ];

// console.log(getIntersection(array1, array2, array3, array4, array5));

