// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.reverse:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// Напишите полифил метода Array.prototype.reverse. В теле полифила не используйте никаких методов класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.reverse()  <=> reverse(array)

function reverse(arr) {
  const result = [];
  while (arr.length > 0) {
    result.push(arr.pop());
  }
  while (result.length > 0) {
    arr.push(result.shift());
  }
  return arr;
}


module.exports = {
  reverse,
};
