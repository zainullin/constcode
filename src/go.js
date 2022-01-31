const { splice } = require('../src/index');

const array = [0, 1, 2, 3, 4, 5];
const result = splice(array, 1, 4, 4, 3, 2, 1);

// expect(array).toEqual([0, 4, 3, 2, 1, 5]);
// expect(result).toEqual([1, 2, 3, 4]);

console.log(result);
