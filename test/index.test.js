const { splice } = require('../src/index');

describe("Тестирование метода Array.prototype.spice", () => {
	it("Тест 1", () => {
		const array = [0, 1, 2, 3, 4, 5];

		const result = splice(array);

		expect(array).toEqual([]);
		expect(result).toEqual([0, 1, 2, 3, 4, 5]);
	});

	it("Тест 2", () => {
		const array = [0, 1, 2, 3, 4, 5];

		const result = splice(array, 2);

		expect(array).toEqual([0, 1]);
		expect(result).toEqual([2, 3, 4, 5]);
	});

	it("Тест 3", () => {
		const array = [0, 1, 2, 3, 4, 5];

		const result = splice(array, 2, 2);

		expect(array).toEqual([0, 1, 4, 5]);
		expect(result).toEqual([2, 3]);
	});

	it("Тест 4", () => {
		const array = [0, 1, 2, 3, 4, 5];

		const result = splice(array, 1, 4);

		expect(array).toEqual([0, 5]);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("Тест 5", () => {
		const array = [0, 1, 2, 3, 4, 5];

		const result = splice(array, 1, 4, 4, 3, 2, 1);

		expect(array).toEqual([0, 4, 3, 2, 1, 5]);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("Тест 5", () => {
		const array = [0, 1, 2, 3, 4, 5];

		const result = splice(array, 1, 4, null);

		expect(array).toEqual([0, null, 5]);
		expect(result).toEqual([1, 2, 3, 4]);
	});
});