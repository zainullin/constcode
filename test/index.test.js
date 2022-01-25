const { reduce } = require('../src/index');

describe("Тестирование метода Array.prototype.reduce", () => {
	it("Тест 1", () => {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const getSum = (a, b) => a + b;

		expect(reduce(numbers, getSum)).toBe(55);
		expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(numbers.reduce(getSum)).toBe(55);
	});

	it("Тест 2", () => {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const getSum = (a, b) => a + b;

		expect(reduce(numbers, getSum, 1000)).toBe(1055);
		expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(numbers.reduce(getSum, 1000)).toBe(1055);
	});

	it("Тест 3", () => {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const getSum = (a, b, i) => a + b + i;

		expect(reduce(numbers, getSum)).toBe(100);
		expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(numbers.reduce(getSum)).toBe(100);
	});

	it("Тест 4", () => {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const getSum = (a, b, i, array) =>
			a + b + i + array[array.length - 1 - i];

		expect(reduce(numbers, getSum)).toBe(145);
		expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(numbers.reduce(getSum)).toBe(145);
	});

	// it("Тест 5", () => {
	// 	expect(() => reduce([], () => {})).toThrowError(
	// 		new TypeError("Reduce of empty array with no initial value")
	// 	);
	// });
});