// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.every:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// Напишите полифил метода Array.prototype.every. В теле полифила не используйте никаких методов класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.every(callback, thisArg)  <=> every(array, callback, thisArg)

function every(arr, fn1, thisArg = null) {
  const fn = fn1.bind(thisArg);
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}


module.exports = {
  every,
};
