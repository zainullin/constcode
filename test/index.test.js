const { startsWith } = require('../src/index');

describe("Тестирование метода String.prototype.startWith", () => {
	it("Тест 1", () => {
		const string = "Hello world!";
		const search = "Hello";

		expect(startsWith(string, search)).toBe(true);
		expect(string.startsWith(search)).toBe(true);
	});

	it("Тест 2", () => {
		const string = "Hello world!";
		const search = "hello";

		expect(startsWith(string, search)).toBe(false);
		expect(string.startsWith(search)).toBe(false);
	});

	it("Тест 3", () => {
		const string = "Hello world!";
		const search = "Hello";

		expect(startsWith(string, search, 2)).toBe(false);
		expect(string.startsWith(search, 2)).toBe(false);
	});

	it("Тест 4", () => {
		const string = "Hello world!";
		const search = "world";

		expect(startsWith(string, search)).toBe(false);
		expect(string.startsWith(search)).toBe(false);
	});

	it("Тест 5", () => {
		const string = "Hello world!";
		const search = "world";

		expect(startsWith(string, search, 6)).toBe(true);
		expect(string.startsWith(search, 6)).toBe(true);
	});
});