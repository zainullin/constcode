function reduce(array, callback, initialValue) {
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let result = (initialValue === undefined)?  array[0] : initialValue;
  let i =  (initialValue === undefined)?  1 : 0;
  for (; i < array.length; i += 1) {
    // (a, b, i, array) 
    result = callback(result, array[i], i, array);
  }
  return result;
}
const numbers = [];
const getSum = (a, b) => a + b;

console.log(numbers.reduce(getSum), reduce(numbers, getSum));

// it("Тест 5", () => {
//   expect(() => reduce([], () => {})).toThrowError(
//     new TypeError("Reduce of empty array with no initial value")
//   );
// });