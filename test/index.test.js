const { createList, createItem } = require('../src/index');

describe("Тестирование метода getCenter", () => {
	it("Тест 1", () => {
		const list = createList();

		expect(list.getCenter()).toBe(null);

		expect(list.head).toBe(null);
		expect(list.tail).toBe(null);
	});

	it("Тест 2", () => {
		const list = createList();
		const item = createItem("item");

		list.push(item);

		expect(list.getCenter()).toBe(item);

		expect(list.head).toBe(item);
		expect(list.tail).toBe(item);

		expect(item.next).toBe(null);
		expect(item.prev).toBe(null);
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

		expect(list.getCenter()).toBe(item2);

		expect(list.head).toBe(item1);
		expect(list.tail).toBe(item4);

		expect(item1.next).toBe(item2);
		expect(item1.prev).toBe(null);

		expect(item2.next).toBe(item3);
		expect(item2.prev).toBe(item1);

		expect(item3.next).toBe(item4);
		expect(item3.prev).toBe(item2);

		expect(item4.next).toBe(null);
		expect(item4.prev).toBe(item3);
	});

	it("Тест 4", () => {
		const list = createList();

		for (let i = 0; i < 1000; i++) {
			list.push(createItem(`item${i + 1}`));
			expect(list.getCenter().value).toBe(`item${parseInt(i / 2 + 1)}`);
		}

		expect(list.head.value).toBe("item1");
		expect(list.tail.value).toBe("item1000");

		expect(list.head.next.value).toBe("item2");
		expect(list.tail.prev.value).toBe("item999");
	});
});