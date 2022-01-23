const { getGraphFromAM } = require('../src/index');

describe("Тестирование функции getGraphFromAM", () => {
	it("Тест 1", () => {
		const graph = {
			nodes: [0, 1, 2, 3],
			edges: [],
		};

		const am = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		];

		expect(getGraphFromAM(am)).toEqual(graph);
	});

	it("Тест 2", () => {
		const graph = {
			nodes: [0, 1, 2, 3],
			edges: [
				[0, 1],
				[0, 2],
				[0, 3],
				[1, 2],
			],
		};

		const am = [
			[0, 1, 1, 1],
			[1, 0, 1, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
		];

		expect(getGraphFromAM(am)).toEqual(graph);
	});

	it("Тест 3", () => {
		const graph = {
			nodes: [0, 1, 2, 3],
			edges: [
				[0, 1],
				[0, 2],
				[2, 3],
			],
		};

		const am = [
			[0, 1, 1, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 1],
			[0, 0, 1, 0],
		];

		expect(getGraphFromAM(am)).toEqual(graph);
	});
});