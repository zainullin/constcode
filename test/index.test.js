const { createItem, createList } = require('../src/index');

describe("Тестирование метода push", () => {
	it("Тест 1", () => {
		const list = createList();
		const item = createItem("item");

		list.push(item);

		expect(list.head).toBe(item);
		expect(list.tail).toBe(item);

		expect(item.next).toBe(null);
		expect(item.prev).toBe(null);
	});

	it("Тест 2", () => {
		const list = createList();
		const item1 = createItem("item1");
		const item2 = createItem("item2");

		list.push(item1);
		list.push(item2);

		expect(list.head).toBe(item1);
		expect(list.tail).toBe(item2);

		expect(item1.next).toBe(item2);
		expect(item1.prev).toBe(null);

		expect(item2.next).toBe(null);
		expect(item2.prev).toBe(item1);
	});

	it("Тест 3", () => {
		const list = createList();

		const item1 = createItem("item1");
		const item2 = createItem("item2");
		const item3 = createItem("item3");

		list.push(item1);
		list.push(item2);
		list.push(item3);

		expect(list.head).toBe(item1);
		expect(list.tail).toBe(item3);

		expect(item1.next).toBe(item2);
		expect(item1.prev).toBe(null);

		expect(item2.next).toBe(item3);
		expect(item2.prev).toBe(item1);

		expect(item3.next).toBe(null);
		expect(item3.prev).toBe(item2);
	});
});