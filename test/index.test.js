const { fill } = require('../src/index');

describe("Тестирование метода Array.prototype.fill", () => {
	it("Тест 1", () => {
		const numbers = [1, 2, 3];
		const obj = {};

		const result1 = fill(numbers, obj);
		const result2 = numbers.fill(obj);

		expect(numbers).toEqual([obj, obj, obj]);
		expect(result1).toBe(numbers);
		expect(result2).toBe(numbers);
	});

	it("Тест 2", () => {
		const numbers = [1, 2, 3, 4, 5];
		const obj = {};

		const result = fill(numbers, obj, 2);

		expect(numbers).toEqual([1, 2, obj, obj, obj]);
		expect(result).toBe(numbers);
	});

	it("Тест 3", () => {
		const numbers = [1, 2, 3, 4, 5];
		const obj = {};

		const result = fill(numbers, obj, 2, 4);

		expect(numbers).toEqual([1, 2, obj, obj, 5]);
		expect(result).toBe(numbers);
	});
});