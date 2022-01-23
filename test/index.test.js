const { some } = require('../src/index');

describe("Тестирование метода Array.prototype.some", () => {
	it("Тест 1", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		expect(some(numbers, (x) => x > 5)).toBe(true);
		expect(some(numbers, (x) => x < -5)).toBe(false);
		expect(some(numbers, (x) => x === 0)).toBe(true);
		expect(some(numbers, (x) => x === 10)).toBe(false);

		expect(numbers.some((x) => x > 5)).toBe(true);
		expect(numbers.some((x) => x < -5)).toBe(false);
		expect(numbers.some((x) => x === 0)).toBe(true);
		expect(numbers.some((x) => x === 10)).toBe(false);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 2", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		expect(some(numbers, (x, i) => i > x)).toBe(true);
		expect(some(numbers, (x, i) => i < x)).toBe(true);
		expect(some(numbers, (x, i) => i === x)).toBe(true);
		expect(some(numbers, (x, i) => i === 2 * x)).toBe(false);

		expect(numbers.some((x, i) => i > x)).toBe(true);
		expect(numbers.some((x, i) => i < x)).toBe(true);
		expect(numbers.some((x, i) => i === x)).toBe(true);
		expect(numbers.some((x, i) => i === 2 * x)).toBe(false);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 3", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];

		expect(some(numbers, (x, i, array) => array[i] === 2 * x)).toBe(true);
		expect(some(numbers, (x, i, array) => array[i] === x - 5)).toBe(false);

		expect(numbers.some((x, i, array) => array[i] === 2 * x)).toBe(true);
		expect(numbers.some((x, i, array) => array[i] === x - 5)).toBe(false);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 4", () => {
		const users = [
			{ id: 13, name: "Алексей" },
			{ id: 15, name: "Сергей" },
			{ id: 2, name: "Тимофей" },
		];

		expect(
			some(
				users,
				function (user) {
					return user.name === this.name;
				},
				{
					name: "Алексей",
				}
			)
		).toBe(true);

		expect(
			some(
				users,
				function (user) {
					return user.name === this.name;
				},
				{
					name: "Татьяна",
				}
			)
		).toBe(false);

		expect(
			users.some(
				function (user) {
					return user.name === this.name;
				},
				{
					name: "Алексей",
				}
			)
		).toBe(true);

		expect(
			users.some(
				function (user) {
					return user.name === this.name;
				},
				{
					name: "Татьяна",
				}
			)
		).toBe(false);

		expect(users).toEqual([
			{ id: 13, name: "Алексей" },
			{ id: 15, name: "Сергей" },
			{ id: 2, name: "Тимофей" },
		]);
	});
});