// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод String.prototype.indexOf:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// Напишите полифил метода Array.prototype.indexOf. В теле полифила не используйте никаких методов класса String или других классов.
//  Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// string.indexOf(item, fromIndex)  <=> string(array, item, fromIndex)

// Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван,
// начиная с индекса fromIndex. Возвращает -1, если значение не найдено.

// searchValue - Строка, представляющая искомое значение.
// fromIndex - Необязательный параметр. Местоположение внутри строки, откуда начинать поиск. Может быть любым целым числом.
// Значение по умолчанию установлено в 0. Если fromIndex < 0, поиск ведётся по всей строке (так же, как если бы был передан 0).
// Если fromIndex >= str.length, метод вернёт -1, но только в том случае, если searchValue не равен пустой строке,
// в этом случае он вернёт str.length.

function indexOf(str, searchString, fromPosition = 0) {
  const regExp = new RegExp(`\\b` + searchString, 'g');
  if (fromPosition > 0) {
    str = str.substring(fromPosition, str.length);
  }
  if (fromPosition < 0) {
    fromPosition = 0;
  }

  const execResult = regExp.exec(str);
  
  if (execResult === null) {
    return -1;    
  } else {
    // console.log(`execResult.index = ${execResult.index}`);
    return execResult.index + fromPosition;
  }
}
module.exports = {
  indexOf,
};