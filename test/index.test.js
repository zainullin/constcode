const { padEnd } = require('../src/index');

describe("Тестирование метода String.prototype.padEnd", () => {
	it("Тест 1", () => {
		const string = "Hello world!";
		const result = "Hello world!";

		expect(padEnd(string, 2)).toBe(result);
		expect(string.padEnd(2)).toBe(result);
	});

	it("Тест 2", () => {
		const string = "Hello world!";
		const result = "Hello world!   ";

		expect(padEnd(string, 15)).toBe(result);
		expect(string.padEnd(15)).toBe(result);
	});

	it("Тест 3", () => {
		const string = "Hello world!";
		const result = "Hello world!XXX";

		expect(padEnd(string, 15, "X")).toBe(result);
		expect(string.padEnd(15, "X")).toBe(result);
	});

	it("Тест 4", () => {
		const string = "Hello world!";
		const result = "Hello world!121";

		expect(padEnd(string, 15, "12")).toBe(result);
		expect(string.padEnd(15, "12")).toBe(result);
	});

	it("Тест 5", () => {
		const string = "Hello world!";
		const result = "Hello world!123";

		expect(padEnd(string, 15, "12345")).toBe(result);
		expect(string.padEnd(15, "12345")).toBe(result);
	});
});