const { getAdjacencyMatrix } = require('../src/index');

describe("Тестирование функции getAdjacencyMatrix", () => {
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

		expect(getAdjacencyMatrix(graph)).toEqual(am);
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

		expect(getAdjacencyMatrix(graph)).toEqual(am);
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

		expect(getAdjacencyMatrix(graph)).toEqual(am);
	});

	it("Тест 4", () => {
		const graph = {
			nodes: ["Москва", "Питер", "Омск", "Звенигород"],
			edges: [
				["Москва", "Питер"],
				["Москва", "Омск"],
				["Москва", "Звенигород"],
				["Питер", "Омск"],
			],
		};

		const am = [
			[0, 1, 1, 1],
			[1, 0, 1, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
		];

		expect(getAdjacencyMatrix(graph)).toEqual(am);
	});
});