const { endsWith } = require('../src/index');

describe("Тестирование метода String.prototype.endsWith", () => {
	it("Тест 1", () => {
		const string = "Hello world!";
		const search = "!";

		expect(endsWith(string, search)).toBe(true);
		expect(string.endsWith(search)).toBe(true);
	});

	it("Тест 2", () => {
		const string = "Hello world!";
		const search = "world";

		expect(endsWith(string, search)).toBe(false);
		expect(string.endsWith(search)).toBe(false);
	});

	it("Тест 3", () => {
		const string = "Hello world!";
		const search = "world";

		expect(endsWith(string, search, 11)).toBe(true);
		expect(string.endsWith(search, 11)).toBe(true);
	});

	it("Тест 4", () => {
		const string = "Hello world!";
		const search = "Hello";

		expect(endsWith(string, search, 11)).toBe(false);
		expect(string.endsWith(search, 11)).toBe(false);
	});

	it("Тест 5", () => {
		const string = "Hello world!";
		const search = "Hello";

		expect(endsWith(string, search, 5)).toBe(true);
		expect(string.endsWith(search, 5)).toBe(true);
	});

	it("Тест 6", () => {
		const string = "Hello world!";
		const search = "Hello";

		expect(endsWith(string, search, 2)).toBe(false);
		expect(string.endsWith(search, 2)).toBe(false);
	});
});