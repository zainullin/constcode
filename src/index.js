// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод String.prototype.startsWith:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
// Напишите полифил метода String.prototype.startsWith. В теле полифила не используйте никаких методов класса String или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это строка. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// string.startsWith(searchString, position)  <=> startsWith(string, searchString, position)
// function includes(...rest) {
//   const str = rest[0];
//   const subStr = rest[1];
//   const position = rest[2] === undefined ? 0 : rest[2];
//   let pattern = new RegExp('\\b' + subStr, 'g');

//   let matches = false;
//   while (true) {
//     matches = pattern.exec(str);
//     if (matches === null) return false;
//     if (matches.index >= position) return true;
//   }
// }


function startsWith(str, searchString, position = 0) {
  const regExp = new RegExp(`\\b` + searchString, 'g');
  const execResult = regExp.exec(str);
  
  return ( execResult !== null && execResult.index === position )? true: false;
}

module.exports = {
  startsWith,
};
