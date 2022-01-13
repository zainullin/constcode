const { printNumbers } = require('../src/index');


describe("Тестирование функции printNumbers", () => {
	const log = console.log;

	it("Тест 1", () => {
		console.log = jest.fn();

		printNumbers(2);

		expect(console.log.mock.calls).toEqual([[1], [2], [1]]);
	});

	it("Тест 2", () => {
		console.log = jest.fn();

		printNumbers(5);

		expect(console.log.mock.calls).toEqual([
			[1],
			[2],
			[3],
			[4],
			[5],
			[4],
			[3],
			[2],
			[1],
		]);
	});

	it("Тест 3", () => {
		console.log = jest.fn();

		printNumbers(10);
		log(console.log.mock.calls);

		expect(console.log.mock.calls).toEqual([
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
			[9],
			[8],
			[7],
			[6],
			[5],
			[4],
			[3],
			[2],
			[1],
		]);
	});
});