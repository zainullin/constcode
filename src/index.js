// Напишите функцию printNumbers - которая принимает число n и выводит в консоль номера от 1 до n и наоборот. Решите задачу через рекурсию.
// Примечание - функция не должна ничего возвращать. Все что нужно - это вывести числа в консоль через console.log().
// Пример:
// printNumbers(3);
// 1
// 2
// 3
// 2
// 1

function printNumbers(n, arr = [], init = false) {
  if (!init) {
    const MAX = Number(n);
    for (let i = 1; i <= MAX; i += 1) {
      arr.push(i);
    }
    for (let i = MAX - 1; i > 0; i -= 1) {
      arr.push(i);
    }
    init = true;
  }

  if (!(arr.length === 0)) {
    console.log(arr.pop());
    printNumbers(n, arr, init);
  }
}

module.exports = {
  printNumbers,
};
