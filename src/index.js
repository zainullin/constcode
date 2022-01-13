
// Полифил Array.prototype.map
// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.map:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Напишите полифил метода Array.prototype.map. В теле полифила не используйте никаких методов класса Array или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.map(callback, thisArg)  <=> map(array, callback, thisArg)
// Примечание: для привязки контекста thisArg можете использовать в начале тела функции следующий фрагмент:
// if (thisArg) {
//   callback = callback.bind(thisArg);
// }

function map(arr, callback, thisArg) {
  if (thisArg) {
    callback = callback.bind(thisArg);
  }
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = callback(arr[i], i);
  }
  return result;
}

module.exports = {
  map,
};
