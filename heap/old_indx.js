// Перед выполнение этого задания рекомендовано ознакомиться с документацией метод Array.prototype.splice:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Напишите полифил метода Array.prototype.splice. В теле полифила не используйте никаких методов класса Array или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.splice(start, deleteCount, item1, item2, ...)  <=> splice(array, start, deleteCount, item1, item2, ...)
function deleteDoubledArrayElements(arr) {
  arr = [...new Set(array)];
  return arr;
}

function deleteArrayElementByIndex(arr, inx) {
  if (inx < 0) return arr;
  if (inx >= arr.length) {
    return arr;
  }
  for (let i = inx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

function compareNumbersDescending(a, b) {
  return b - a;
}

function compareNumbersAscending(a, b) {
  return a - b;
}

function deleteArrayElementsByIndices(arr, indices) {
  // удалить из indices повторяющиеся элементы
  arr = deleteDoubledArrayElements(arr);
  // упорядочить индексы по убыванию
  indices.sort(compareNumbersDescending);
  // удалить те индексы, которых нет в arr
  for (let i = 0; i < indices.length; i++) {
    if (indices[i] < 0) {
      deleteArrayElementByIndex(indices, i);
    }
  }
  indices.sort(compareNumbersAscending);
  for (let i = 0; i < indices.length; i++) {
    if (indices[i] > array.length) {
      deleteArrayElementByIndex(indices, i);
    }
  }
  indices.sort(compareNumbersDescending);
  for (let i = 0; i < indices.length; i++) {
    deleteArrayElementByIndex(arr, indices[i]);
  }
  return arr;
}

function splice(...args) {
  // array, start, deleteCount, item1, item2, ...
  let array = args[0];
  let start = args[1] === undefined ? 0 : args[1];
	let deleteCount = args[2] === undefined ? 0 : args[2];
	// start - Индекс, по которому начинает изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива.
	// Если отрицателен, указывает индекс элемента с конца.

	// 1. splice() - входной массив => [], выходной превращается в входной массив.
	const result = [];
	if (start === undefined) {
		while(array.length !== 0) {
			result.push(array.shift());
		}
		return result;
	} 
	if (start !== undefined) {
		const k = array.length - start;
		for (let i = 0; i < k; i++) {
			result.unshift(array.pop());
		}
		return result;
	} 
	if (deleteCount !== undefined) {
		const k = array.length - start;
		for (let i = 0; i < k; i++) {
			result.unshift(array.pop());
		}

		return result;
	}
}

module.exports = {
  splice,
};
