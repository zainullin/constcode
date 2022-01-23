const { forEach } = require('../src/index');

describe("Тестирование метода Array.prototype.forEach", () => {
	it("Тест 1", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		const buff1 = [];
		const buff2 = [];

		forEach(numbers, (x) => buff1.push(x));
		numbers.forEach((x) => buff2.push(x));

		expect(buff1).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
		expect(buff2).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 2", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		const buff1 = [];
		const buff2 = [];

		forEach(numbers, (x, i) => buff1.push(x + i));
		numbers.forEach((x, i) => buff2.push(x + i));

		expect(buff1).toEqual([1, 6, 11, 3, 5, 6, 8, 14, 17]);
		expect(buff2).toEqual([1, 6, 11, 3, 5, 6, 8, 14, 17]);
		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 3", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		forEach(numbers, (_, __, array) => {
			expect(array).toBe(numbers);
		});

		numbers.forEach((_, __, array) => {
			expect(array).toBe(numbers);
		});

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 4", () => {
		const users = [
			{ id: 13, name: "Алексей" },
			{ id: 15, name: "Сергей" },
			{ id: 2, name: "Тимофей" },
		];

		const names1 = [];
		const ids1 = [];

		forEach(
			users,
			function (item) {
				names1.push(item[this.key]);
			},
			{ key: "name" }
		);

		forEach(
			users,
			function (item) {
				ids1.push(item[this.key]);
			},
			{ key: "id" }
		);

		expect(names1).toEqual(["Алексей", "Сергей", "Тимофей"]);
		expect(ids1).toEqual([13, 15, 2]);

		const names2 = [];
		const ids2 = [];

		users.forEach(
			function (item) {
				names2.push(item[this.key]);
			},
			{ key: "name" }
		);

		users.forEach(
			function (item) {
				ids2.push(item[this.key]);
			},
			{ key: "id" }
		);

		expect(names2).toEqual(["Алексей", "Сергей", "Тимофей"]);
		expect(ids2).toEqual([13, 15, 2]);

		expect(users).toEqual([
			{ id: 13, name: "Алексей" },
			{ id: 15, name: "Сергей" },
			{ id: 2, name: "Тимофей" },
		]);
	});
});