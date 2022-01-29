// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.findIndex:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Напишите полифил метода Array.prototype.findIndex. В теле полифила не используйте никаких методов класса Array
// или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.findIndex(item, thisArg)  <=> findIndex(array, item, thisArg)

function findIndex(array, callback, thisArg) {
  const fn = callback.bind(thisArg);
  for (let i = 0; i < array.length; i += 1) {
    if (fn(array[i], i, thisArg)) return i;
  }
  return -1;
}

module.exports = {
  findIndex,
};
