// Напишите метод unshift для связанного списка по аналогии с методом unshift у класса Array (у массива).
// Метод unshift должен добавить 1 элемент в начало списка.
// Подсказка: в тестах можно увидеть много подсказок к реализации метода.
// Примечание: постарайтесь написать метод unshift самостоятельно.

// https://school.constcode.ru/problem/solver/63

function createList() {
  return {
    head: null,
    tail: null,

    unshift(item) {
      if (this.head === null && this.tail === null) {
        this.head = item;
        this.tail = item;
        return;
      }
      item.prev = null;
			item.next = this.head;
			this.head.prev = item;
			this.head = item;
    },
  };
}

function createItem(value) {
  return {
    next: null,
    prev: null,
    value,
  };
}

module.exports = {
  createItem,
  createList,
};
