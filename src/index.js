// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод String.prototype.padStart:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// Напишите полифил метода String.prototype.padStart. В теле полифила не используйте никаких методов класса String или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это строка. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// string.padStart(targetLength, padString)  <=> padStart(string, targetLength, padString)
// Метод padStart() заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины.
// Заполнение осуществляется в начале (слева) текущей строки.
// Синтаксис
// str.padStart(targetLength [, padString])
// targetLength - Длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки,
// текущая строка будет возвращена без изменений.
// padString Необязательный - Строка для заполнения текущей строки. Если эта строка слишком длинная для заданной длины, она будет обрезана.
// Значение по умолчанию - " " (U+0020).
// Возвращаемое значение - String заданной длины с заполнением строкой, выполненное в начале.

function padStart(str, repeatCount, padString) {
  if (repeatCount === undefined && padString === undefined) {
    return str;
  }
  if (padString === undefined) {
    if (str.length >= repeatCount) {
      return str;
    } else {
      let result = '';
      for (let i = 0; i < repeatCount - str.length; i++){
        result = result + ' ';
      }
      for (let i = 0; i < str.length; i++) {
        result = result + str[i];
      }
      return result;
    }
  }

  // str, repeatCount, padString
  let addStr = '';
  if (str.length >= repeatCount) {
    return str;
  } else {    
    while(addStr.length < repeatCount - str.length){
      addStr = addStr + padString;
    }
    // addStr = addStr + padString;
    let cutDelta = addStr.length % (repeatCount - str.length);
    addStr = addStr.substring(0, addStr.length - cutDelta);
  }
  return addStr + str;
}

module.exports = {
  padStart,
};
