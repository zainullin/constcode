const { reverse } = require('../src/index');

describe("Тестирование метода Array.prototype.fill", () => {
	it("Тест 1", () => {
		const numbers = [];

		const result = reverse(numbers);

		expect(numbers).toEqual([]);
		expect(result).toBe(numbers);
	});

	it("Тест 2", () => {
		const numbers = [1, 2, 3];

		const result = reverse(numbers);

		expect(numbers).toEqual([3, 2, 1]);
		expect(result).toBe(numbers);
	});

	it("Тест 3", () => {
		const numbers = [1, 2, 3, 4];

		const result = reverse(numbers);

		expect(numbers).toEqual([4, 3, 2, 1]);
		expect(result).toBe(numbers);
	});
});