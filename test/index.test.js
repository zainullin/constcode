const { createItem, createList } = require('../src/index');

describe("Тестирование метода pop", () => {
	it("Тест 1", () => {
		const list = createList();
		const item = createItem("item");

		list.push(item);

		const popedItem = list.pop();

		expect(list.head).toBe(null);
		expect(list.tail).toBe(null);

		expect(item.next).toBe(null);
		expect(item.prev).toBe(null);
		expect(item).toBe(popedItem);
	});

	it("Тест 2", () => {
		const list = createList();
		const item1 = createItem("item1");
		const item2 = createItem("item2");

		list.push(item1);
		list.push(item2);

		const popedItem = list.pop();

		expect(list.head).toBe(item1);
		expect(list.tail).toBe(item1);

		expect(item1.next).toBe(null);
		expect(item1.prev).toBe(null);

		expect(item2.next).toBe(null);
		expect(item2.prev).toBe(null);

		expect(item2).toBe(popedItem);
	});

	it("Тест 3", () => {
		const list = createList();
		const item1 = createItem("item1");
		const item2 = createItem("item2");
		const item3 = createItem("item3");
		const item4 = createItem("item4");

		list.push(item1);
		list.push(item2);
		list.push(item3);
		list.push(item4);

		const popedItem = list.pop();

		expect(list.head).toBe(item1);
		expect(list.tail).toBe(item3);

		expect(item1.next).toBe(item2);
		expect(item1.prev).toBe(null);

		expect(item2.next).toBe(item3);
		expect(item2.prev).toBe(item1);

		expect(item3.next).toBe(null);
		expect(item3.prev).toBe(item2);

		expect(item4.next).toBe(null);
		expect(item4.prev).toBe(null);

		expect(item4).toBe(popedItem);
	});
});