// Напишите полифил метода Array.prototype.concat. В теле полифила не используйте никаких методов класса Array или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.concat(...values)  <=> concat(array, ...values)
// Примечания:
// Функция concat в качестве первого аргумента всегда получает массив
// Не все аргументы являются массивами. Чтобы проверить на массив можете пользоваться одним из следующих способов:
// Array.isArray(value)
// value instanceof Array
const result = [];

function concat(...array) {
  const pull = []
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] instanceof Array && array[i].length > 0) {
      for (let j = 0; j < array[i].length; j += 1) {
        pull.push(array[i][j]);
      }
    } else {
      pull.push(array[i]);
    }
  }
  return pull;
}

module.exports = {
  concat,
};
