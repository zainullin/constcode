// Напишите метод push для связанного списка по аналогии с методом push у класса Array (у массива).
// Метод push должен добавить 1 элемент в конец списка.
// Подсказка: в тестах можно увидеть много подсказок к реализации метода.
// Примечание: постарайтесь написать метод push самостоятельно.

function createList() {
  return {
    head: null,
    tail: null,

    push(item) {
      if (this.head === null && this.tail === null){
        this.head = item;
        this.tail = item;
        return
      }
      
      this.tail.next = item;
      item.prev = this.tail;
      this.tail = item;
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
