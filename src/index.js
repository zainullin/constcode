
// Напишите метод getSize - который возвращает число равное количеству элементов в списке.
// Пример:
// const list = createList();
// console.log(list.getSize()); // 0
// list.push(createItem());
// console.log(list.getSize()); // 1
// list.push(createItem());
// console.log(list.getSize()); // 2

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

		getSize() {
      let count = 0;
      let curr = this.head;
      if (curr == null) return count;
      while(count++, curr.next !== null) {
        curr = curr.next;
      }
      return count;
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
