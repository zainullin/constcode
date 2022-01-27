const { createList, createItem } = require('../src/index');

// describe("Тестирование метода includes", () => {
// 	it("Тест 1", () => {
// 		const list = createList();
// 		const item = createItem("item");

// 		expect(list.includes(item)).toBe(false);

// 		expect(list.head).toBe(null);
// 		expect(list.tail).toBe(null);
// 	});

// 	it("Тест 2", () => {
// 		const list = createList();
// 		const item = createItem("item");

// 		list.push(item);

// 		expect(list.includes(item)).toBe(true);

// 		expect(list.head).toBe(item);
// 		expect(list.tail).toBe(item);

// 		expect(item.next).toBe(null);
// 		expect(item.prev).toBe(null);
// 	});

// 	it("Тест 3", () => {
// 		const list = createList();

// 		const item1 = createItem("item1");
// 		const item2 = createItem("item2");
// 		const item3 = createItem("item3");
// 		const item4 = createItem("item4");
// 		const item5 = createItem("item5");

// 		list.push(item1);
// 		list.push(item2);
// 		list.push(item3);
// 		list.push(item4);

// 		expect(list.includes(item1)).toBe(true);
// 		expect(list.includes(item2)).toBe(true);
// 		expect(list.includes(item3)).toBe(true);
// 		expect(list.includes(item4)).toBe(true);
// 		expect(list.includes(item5)).toBe(false);

// 		expect(list.head).toBe(item1);
// 		expect(list.tail).toBe(item4);

// 		expect(item1.next).toBe(item2);
// 		expect(item1.prev).toBe(null);

// 		expect(item2.next).toBe(item3);
// 		expect(item2.prev).toBe(item1);

// 		expect(item3.next).toBe(item4);
// 		expect(item3.prev).toBe(item2);

// 		expect(item4.next).toBe(null);
// 		expect(item4.prev).toBe(item3);

// 		expect(item5.next).toBe(null);
// 		expect(item5.prev).toBe(null);
// 	});
// });