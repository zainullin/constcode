// Напишите метод pop для связанного списка по аналогии с методом pop у класса Array (у массива).
// Метод pop должен удалять 1 элемент из конца списка и возвращать его.
// Подсказка: в тестах можно увидеть много подсказок к реализации метода.
// Примечание: постарайтесь написать метод pop самостоятельно.

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

		pop() {
			const pop_element = this.tail;
			if (!this.tail) {
				return;
			} 
			if (this.head === this.tail) {				
				this.head = null;
				this.tail = null;
				return pop_element;
			}
			
			this.tail = pop_element.prev;
			this.tail.next = null;

			pop_element.next = null;
			pop_element.prev = null;
			return pop_element;
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
