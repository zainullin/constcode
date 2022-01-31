// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.splice:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Напишите полифил метода Array.prototype.splice. В теле полифила не используйте никаких методов класса Array или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.splice(start, deleteCount, item1, item2, ...)  <=> splice(array, start, deleteCount, item1, item2, ...)

function splice(...args) {
  const result = [];
  const [array, start, deleteCount, ...items] = args;
  if (start === undefined && deleteCount === undefined && items.length === 0) {
    while (array.length !== 0) {
      result.push(array.shift());
    }
    return result;
  }
  if (start !== undefined && deleteCount === undefined && items.length === 0) {
    // start - Индекс, по которому начинает изменять массив.
    // Если больше длины массива, реальный индекс будет установлен на длину массива.
    // Если отрицателен, указывает индекс элемента с конца.

    // const array = [0, 1, 2, 3, 4, 5];
    // const result = splice(array, 2);
    // expect(array).toEqual([0, 1]);
    // expect(result).toEqual([2, 3, 4, 5]);
    const array_tmp = [];
    if (start >= 0 && start <= array.length) {
      for (let i = 0; i < start; i++) {
        array_tmp.push(array.shift());
      }
      for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
      }
      array.length = 0;
      for (let i = 0; i < array_tmp.length; i++) {
        array.push(array_tmp[i]);
      }
    }
    return result;
  }
  if (start !== undefined && deleteCount !== undefined && items.length === 0) {
    // const array = [0, 1, 2, 3, 4, 5];
    // const result = splice(array, 2, 2);
    // expect(array).toEqual([0, 1, 4, 5]);
    // expect(result).toEqual([2, 3]);
    const array_tmp = [];
    if (start >= 0 && start + deleteCount <= array.length) {
      for (let i = 0; i < start; i++) {
        array_tmp.push(array[i]);
      }
      for (let i = start + deleteCount; i < array.length; i++) {
        array_tmp.push(array[i]);
      }
      for (let i = start; i < start + deleteCount; i++) {
        result.push(array[i]);
      }
      array.length = 0;
      for (let i = 0; i < array_tmp.length; i++) {
        array.push(array_tmp[i]);
      }
    }
    return result;
  }

  if (start !== undefined && deleteCount !== undefined && items.length > 0) {
    // const array = [0, 1, 2, 3, 4, 5];
    // const result = splice(array, 1, 4, 4, 3, 2, 1);
    // expect(array).toEqual([0, 4, 3, 2, 1, 5]);
    // expect(result).toEqual([1, 2, 3, 4]);
    // const array_tmp = [];
    // itemN Необязательный
    // Необязательные параметры. Добавляемые к массиву элементы.
    // Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.
    const array_tmp = [];
    if (start >= 0 && start + deleteCount <= array.length) {
      for (let i = 0; i < start; i++) {
        array_tmp.push(array[i]);
      }
      for (let i = 0; i < items.length; i++) {
        array_tmp.push(items[i]);
      }
      for (let i = start + deleteCount; i < array.length; i++) {
        array_tmp.push(array[i]);
      }
      for (let i = start; i < start + deleteCount; i++) {
        result.push(array[i]);
      }
      array.length = 0;
      for (let i = 0; i < array_tmp.length; i++) {
        array.push(array_tmp[i]);
      }
    }


    return result;
  }
}

module.exports = {
  splice,
};
