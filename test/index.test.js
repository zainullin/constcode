const { padStart } = require('../src/index');

describe("Тестирование метода String.prototype.padStart", () => {
	it("Тест 1", () => {
		const string = "Hello world!";
		const result = "Hello world!";

		expect(padStart(string, 2)).toBe(result);
		expect(string.padStart(2)).toBe(result);
	});

	it("Тест 2", () => {
		const string = "Hello world!";
		const result = "   Hello world!";

		expect(padStart(string, 15)).toBe(result);
		expect(string.padStart(15)).toBe(result);
	});

	it("Тест 3", () => {
		const string = "Hello world!";
		const result = "XXXHello world!";

		expect(padStart(string, 15, "X")).toBe(result);
		expect(string.padStart(15, "X")).toBe(result);
	});

	it("Тест 4", () => {
		const string = "Hello world!";
		const result = "121Hello world!";

		expect(padStart(string, 15, "12")).toBe(result);
		expect(string.padStart(15, "12")).toBe(result);
	});

	it("Тест 5", () => {
		const string = "Hello world!";
		const result = "123Hello world!";

		expect(padStart(string, 15, "12345")).toBe(result);
		expect(string.padStart(15, "12345")).toBe(result);
	});
});