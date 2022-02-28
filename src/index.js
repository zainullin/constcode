// https://school.constcode.ru/problem/solver/91
// Напишите функцию getIntersection, которая принимает любое количество массивов (не менее 2) и возвращает новый массив из элементов,
// которые встречаются во всех входных массивах. Функция не должна менять входные параметры.
// Например
// getIntersection(
// 	[1, 2, 3, 1, 2, 3],
// 	[1, 1, 1, 1, 1, 1]
// ) // [1] - так как только 1 встречается в обоих массивах.

function getIntersection(...args) {
  // Найдем только уникальные элементы во входных массивах.
  const set = new Set();
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      set.add(args[i][j]);
    }
  }
  // Теперь все уникальные элементы из Set положим в массив
  let arr = [...set];
  //arr.sort((a, b) => a - b);
  // сделаем такую структуру  Map
  // уникальный элемент => []
  // уникальный элемент => []

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], []);
  }
  // чтобы понять какие элементы есть во всех входных массивах
  // уникальный элемент => [номер массива, где есть этот элемент, номер массива, где есть этот элемент, ...]
  for (let i = 0; i < args.length; i++) {
    // проход по всем входным массивам
    // в каждом массиве берем последовательно элементы и запихиваем в Map
    for (let j = 0; j < args[i].length; j++) {
      map.get(args[i][j]).push(i);
    }
  }
  const result = [];

  map.forEach((value, key) => {
    const set = new Set();
    for (let i = 0; i < value.length; i++) {
      set.add(value[i]);
    }
    let arr = [...set];
    // arr.sort((a, b) => a - b);
    map.set(key, arr);
  });

  map.forEach((value, key) => {
    if (value.length === args.length) {
      result.push(key);
    }
  });

  return result;
}

module.exports = {
  getIntersection,
};
