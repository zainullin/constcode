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
			const pop_element = this.head;
			if (!this.tail) {
				return;
			} 
			if (this.head === this.tail) {				
				this.head = null;
				this.tail = null;
				return pop_element;
			}
			
			this.head = pop_element.next;
			this.head.prev = null;

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

const list = createList();
const item1 = createItem('item1');
const item2 = createItem('item2');

list.push(item1);
list.push(item2);

const popedItem = list.pop();

console.log(list.head);
console.log('=====================')
console.log(item1);
