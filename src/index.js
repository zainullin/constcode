// Напишите метод includes для связанного списка по аналогии с методом includes у класса Array (у массива).
// Метод includes принимает 1 аргумент: элемент - и возвращает true если элемент присутствует в списке, а иначе возвращает false.
// Подсказка: в тестах можно увидеть много подсказок к реализации метода.
// Примечание: постарайтесь написать метод includes самостоятельно.

function createList() {
	return {
		head: null,
		tail: null,

		push(item) {
			if (!this.tail) {
				this.head = item;
				this.tail = item;
				return;
			}

			this.tail.next = item;
			item.prev = this.tail;
			this.tail = item;
		},

		includes(item) {
      let curr = this.head;
      if (curr === null) return false;
      while(curr !== null){
        if (curr === item) return true;
        curr = curr.next;
      }
      return false;
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
  createList, createItem, 
};
