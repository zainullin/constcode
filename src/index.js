// https://school.constcode.ru/problem/solver/59
// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод String.prototype.endsWith:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
// Напишите полифил метода String.prototype.endsWith. В теле полифила не используйте никаких методов класса String или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это строка. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// string.endsWith(searchString, position)  <=> endsWith(string, searchString, position)

// Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false.
// searchString - Символы, искомые в конце строки.
// length - Необязательный параметр. Позволяет искать внутри строки, обрезая её по диапазону; по умолчанию равен длине строки.

function endsWith(str, searchString, position) {
  if (position !== undefined) {
    str = str.substring(0, position);    
  }
  const regExp = new RegExp(searchString + `$`, 'g');
  const execResult = regExp.exec(str);
  return execResult !== null ? true : false;
}
module.exports = {
  endsWith,
};