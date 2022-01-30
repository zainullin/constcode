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

const list = createList();
const item = createItem("item");

list.push(item);

// expect(list.getCenter()).toBe(item);

// expect(list.head).toBe(item);
// expect(list.tail).toBe(item);

// expect(item.next).toBe(null);
// expect(item.prev).toBe(null);

console.log(list.getCenter().value);

// expect(list.getCenter()).toBe(item2);