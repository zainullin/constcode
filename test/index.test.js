const { printNumbers } = require('../src/index');


describe("Тестирование функции printNumbers", () => {
	it("Тест 1", () => {
		console.log = jest.fn();

		printNumbers(2);

		expect(console.log.mock.calls).toEqual([[2], [1], [2]]);
	});

	it("Тест 2", () => {
		console.log = jest.fn();

		printNumbers(5);

		expect(console.log.mock.calls).toEqual([
			[5],
			[4],
			[3],
			[2],
			[1],
			[2],
			[3],
			[4],
			[5],
		]);
	});

	it("Тест 3", () => {
		console.log = jest.fn();

		printNumbers(10);

		expect(console.log.mock.calls).toEqual([
			[10],
			[9],
			[8],
			[7],
			[6],
			[5],
			[4],
			[3],
			[2],
			[1],
			[2],
			[3],
			[4],
			[5],
			[6],
			[7],
			[8],
			[9],
			[10],
		]);
	});
});