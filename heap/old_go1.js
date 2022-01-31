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

const array = [0, 1, 5, 2, 58, -11];
const result = [1, 5, -11];

const unsortedArray = [3, 4, 14, 0, -30];


console.log(deleteArrayElementsByIndices(array, unsortedArray));


// console.log(deleteArrayElementByIndex(array, 1));
//console.log(deleteArrayElementByIndex(array, -1));
// console.log(deleteArrayElementByIndex(array, 3));
// console.log(deleteArrayElementByIndex(array, 4));