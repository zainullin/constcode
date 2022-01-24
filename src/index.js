// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.join:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Напишите полифил метода Array.prototype.join. В теле полифила не используйте никаких методов класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.join(separator)  <=> join(array, separator)

function join(array, separator = ',') {
  let str = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === array.length - 1) {
      str = str + String(array[i]);
    } else {
      str = str + String(array[i]) + separator;
    }
  }
  return str;
}

module.exports = {
  join,
};
