// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.filter:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Напишите полифил метода Array.prototype.filter. В теле полифила не используйте никаких методов класса Array или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.filter(callback, thisArg)  <=> filter(array, callback, thisArg)
// callbackFn - Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.
// Принимает три аргумента
// element - Текущий обрабатываемый элемент в массиве.
// index (Необязательный) - Индекс текущего обрабатываемого элемента в массиве.
// array (Необязательный) - Обрабатываемый массив, на котором был вызван метод filter().
// thisArg (Необязательный) - Значение, используемое в качестве this при вызове колбэк-функции callbackFn.



function filter(arr, callback, thisArg) {
  if (thisArg) {
    callback = callback.bind(thisArg);
  }
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr) === true) {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  filter,
};
