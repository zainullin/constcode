const { filter } = require('../src/index');

describe("Тестирование метода Array.prototype.filter", () => {
	it("Тест 1", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];
		const isEven = (x) => x % 2 === 0;

		expect(filter(numbers, isEven)).toEqual([0, 2]);

		expect(numbers.filter(isEven)).toEqual([0, 2]);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 2", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];
		const isMore = (x, i) => i >= x;

		expect(filter(numbers, isMore)).toEqual([0, 1, 1, 2, 7]);

		expect(numbers.filter(isMore)).toEqual([0, 1, 1, 2, 7]);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 3", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];
		const isUniq = (x, i, l) => l.lastIndexOf(x) === i;

		expect(filter(numbers, isUniq)).toEqual([5, 0, 1, 2, 7, 9]);

		expect(numbers.filter(isUniq)).toEqual([5, 0, 1, 2, 7, 9]);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});

	it("Тест 4", () => {
		const numbers = [1, 5, 9, 0, 1, 1, 2, 7, 9];
		const obj = { k: 5 };
		const isMore = function (x) {
			return this.k > x;
		};

		expect(filter(numbers, isMore, obj)).toEqual([1, 0, 1, 1, 2]);
		expect(numbers.filter(isMore, obj)).toEqual([1, 0, 1, 1, 2]);

		expect(numbers).toEqual([1, 5, 9, 0, 1, 1, 2, 7, 9]);
	});
});