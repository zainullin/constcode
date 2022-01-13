const { map } = require('../src/index');


describe("Тестирование метода Array.prototype.map", () => {
	it("Тест 1", () => {
		const numbers = [1, 2, 3, 4, 5];
		const result = [2, 4, 6, 8, 10];

		const getDouble = (x) => 2 * x;

		expect(map(numbers, getDouble)).toEqual(result);
		expect(numbers.map(getDouble)).toEqual(result);
		expect(numbers).toEqual([1, 2, 3, 4, 5]);
	});

	it("Тест 2", () => {
		const numbers = [1, 2, 3, 4, 5];
		const result = [0, 0, 0, 0, 0];
		const getZero = (x) => 0;

		expect(map(numbers, getZero)).toEqual(result);
		expect(numbers.map(getZero)).toEqual(result);
		expect(numbers).toEqual([1, 2, 3, 4, 5]);
	});

	it("Тест 3", () => {
		const numbers = [1, 2, 3, 4, 5];
		const result = [1, 3, 5, 7, 9];
		const getItemWithIndex = (x, i) => x + i;

		expect(map(numbers, getItemWithIndex)).toEqual(result);
		expect(numbers.map(getItemWithIndex)).toEqual(result);
		expect(numbers).toEqual([1, 2, 3, 4, 5]);
	});

	it("Тест 3", () => {
		const numbers = [1, 2, 3, 4, 5];
		const result = [1001, 1002, 1003, 1004, 1005];
		const obj = { k: 1000 };

		const getItemWithIndex = function (x, i) {
			return x + this.k;
		};

		expect(map(numbers, getItemWithIndex, obj)).toEqual(result);
		expect(numbers.map(getItemWithIndex, obj)).toEqual(result);

		expect(numbers).toEqual([1, 2, 3, 4, 5]);
		expect(obj).toEqual({ k: 1000 });
	});
});