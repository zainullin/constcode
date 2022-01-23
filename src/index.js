// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.some:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// Напишите полифил метода Array.prototype.some. В теле полифила не используйте никаких методов класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.some(callback, thisArg)  <=> some(array, callback, thisArg)

function some(arr, fn1, thisArg = null) {
  const fn = fn1.bind(thisArg);
  for (let i = 0; i < arr.length; i += 1) {
    if (fn(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}


module.exports = {
  some,
};
