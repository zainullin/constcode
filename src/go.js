function createItem(value) {
  return {
    next: null,
    prev: null,
    value,
  };
}


function createList(arr = []) {
  return {
    head: null,
    tail: null,

    push(item) {
      if (arr.length === 0) {
        this.head = item;
        this.tail = item;
        arr.push(item);
        item.prev = null;
        item.next = null;
        return;
      }
      if (arr.length === 1) {
        tail = item;
        arr.push(item);
        // head - без изменений
        item.prev = head;
        item.next = null;
        return;
      }
      tmp = tail;
      tmp.next = item;
      // head - без изменений
      tail = item;
      arr.push(item);
      item.prev = tmp;
      item.next = null;
    },
  };
}

const list = createList();
const item = createItem('item');
list.push(item);

console.log(list.head, list.tail);