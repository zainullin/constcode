function reduce(array, callback, initialValue = array[0]) {
  let result = initialValue;
  for (let i = 1; i < array.length; i += 1) {
    // (a, b, i, array) 
    result = callback(result, array[i], i, array);
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers0 = [1];
const getSum = (a, b, i, array) => a + b + i + array[array.length - 1 - i];


// console.log(numbers.reduce(getSum, 0), reduce(numbers, getSum));
//console.log(numbers0.reduce(getSum), reduce(numbers0, getSum));
console.log(numbers.reduce(getSum), reduce(numbers, getSum));

// expect(reduce(numbers, getSum)).toBe(145);
// 
// 
