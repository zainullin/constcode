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


const list = createList();

const item1 = createItem("item1");
const item2 = createItem("item2");
const item3 = createItem("item3");
const item4 = createItem("item4");

list.push(item1);
list.push(item2);
list.push(item3);
list.push(item4);

console.log(list.getSize());

// expect(list.getSize()).toBe(4);