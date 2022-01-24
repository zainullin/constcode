// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.fill:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// Напишите полифил метода Array.prototype.fill. В теле полифила не используйте никаких методов класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.fill(value, start, end)  <=> fill(array, value, start, end)

function fill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i += 1) {
    array[i] = value;
  }
  return array;
}


module.exports = {
  fill,
};
