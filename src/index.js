// Напишите метод getCenter для связанного списка, который возвращает:
// null - если список пустой
// центральный элемент - если список состоит из нечетного количества элементов
// левый из двух центральных элементов - если список состоит из четного количества элементов

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

		getCenter() {
      if (this.head === null) {
         return null;
      }
      let n = 1;
      let curr = this.head;
			if (curr.next === null) {
				return curr;
			}
      while(curr.next !== this.tail) {
        curr = curr.next;
        n++;
      }
      let center = (n % 2 === 0)? n/2 : (n-1)/2;
      curr = this.head;
      while(!(center === 0)) {
        center--;
        curr = curr.next;
      }
      return curr;
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
