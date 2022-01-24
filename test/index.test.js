const { every } = require('../src/index');

describe("Тестирование метода Array.prototype.every", () => {
	it("Тест 1", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		expect(every(numbers, (x) => x > 5)).toBe(false);
		expect(every(numbers, (x) => x > -5)).toBe(true);

		expect(numbers.every((x) => x > 5)).toBe(false);
		expect(numbers.every((x) => x > -5)).toBe(true);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 2", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		expect(every(numbers, (x, i) => x > i)).toBe(false);
		expect(every(numbers, (x, i) => x + i >= 1)).toBe(true);

		expect(numbers.every((x, i) => x > i)).toBe(false);
		expect(numbers.every((x, i) => x + i >= 1)).toBe(true);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 3", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		expect(every(numbers, (x, i, array) => array[i] === x)).toBe(true);
		expect(every(numbers, (x, i, array) => array[i] < x)).toBe(false);

		expect(numbers.every((x, i, array) => array[i] === x)).toBe(true);
		expect(numbers.every((x, i, array) => array[i] < x)).toBe(false);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 4", () => {
		const users = [
			{ id: 13, name: "Алексей" },
			{ id: 15, name: "Сергей" },
			{ id: 2, name: "Тимофей" },
		];

		expect(
			every(
				users,
				function (user) {
					return this.minId <= user.id && user.id <= this.maxId;
				},
				{ minId: 1, maxId: 100 }
			)
		).toBe(true);

		expect(
			every(
				users,
				function (user) {
					return this.minId <= user.id && user.id <= this.maxId;
				},
				{ minId: 10, maxId: 22 }
			)
		).toBe(false);

		expect(
			users.every(
				function (user) {
					return this.minId <= user.id && user.id <= this.maxId;
				},
				{ minId: 1, maxId: 100 }
			)
		).toBe(true);

		expect(
			users.every(
				function (user) {
					return this.minId <= user.id && user.id <= this.maxId;
				},
				{ minId: 10, maxId: 22 }
			)
		).toBe(false);

		expect(users).toEqual([
			{ id: 13, name: "Алексей" },
			{ id: 15, name: "Сергей" },
			{ id: 2, name: "Тимофей" },
		]);
	});
});