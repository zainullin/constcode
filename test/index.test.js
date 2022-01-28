const { concat } = require('../src/index');

describe("Тестирование метода Array.prototype.concat", () => {
	it("Тест 1", () => {
		const array = [1, 2, 3];
		const result = concat(array);

		expect(result).toEqual([1, 2, 3]);
		expect(array).toEqual([1, 2, 3]);
	});

	it("Тест 2", () => {
		const array = [1, 2, 3];
		const result = concat(array, 4, 5, 6);

		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
		expect(array).toEqual([1, 2, 3]);
	});

	it("Тест 3", () => {
		const array = [1, 2, 3];
		const result = concat(array, 4, [5, 6], 7);

		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
		expect(array).toEqual([1, 2, 3]);
	});

	it("Тест 4", () => {
		const array = [1, 2, 3];
		const result = concat(array, 4, [5, 6], 7, [[[8]]]);

		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, [[8]]]);
		expect(array).toEqual([1, 2, 3]);
	});
});