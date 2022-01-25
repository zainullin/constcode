// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.reduce:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Напишите полифил метода Array.prototype.reduce. В теле полифила не используйте никаких методов класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.reduce(callback, initialValue)  <=> reduce(array, callback, initialValue)

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

module.exports = {
  reduce,
};
