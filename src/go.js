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


const list = createList();
const item = createItem("item");

list.push(item);

// expect(list.includes(item)).toBe(true);
console.log(list.includes(item));