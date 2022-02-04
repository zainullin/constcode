const { indexOf } = require('../src/index');

describe("Тестирование метода String.prototype.indexOf", () => {
	it("Тест 1", () => {
		expect(indexOf("Hello world!", "Hello")).toBe(0);
		expect("Hello world!".indexOf("Hello")).toBe(0);

		expect(indexOf("Hello world!", "Hello", 0)).toBe(0);
		expect("Hello world!".indexOf("Hello", 0)).toBe(0);

		expect(indexOf("Hello world!", "Hello", 2)).toBe(-1);
		expect("Hello world!".indexOf("Hello", 2)).toBe(-1);
	});

	it("Тест 2", () => {
		expect(indexOf("Hello world!", "hello")).toBe(-1);
		expect("Hello world!".indexOf("hello")).toBe(-1);

		expect(indexOf("Hello world!", "hello", 0)).toBe(-1);
		expect("Hello world!".indexOf("hello", 0)).toBe(-1);

		expect(indexOf("Hello world!", "hello", 2)).toBe(-1);
		expect("Hello world!".indexOf("hello", 2)).toBe(-1);
	});

	it("Тест 3", () => {
		expect(indexOf("Hello world!", "world")).toBe(6);
		expect("Hello world!".indexOf("world")).toBe(6);

		expect(indexOf("Hello world!", "world", -1)).toBe(6);
		expect("Hello world!".indexOf("world", -1)).toBe(6);

		expect(indexOf("Hello world!", "world", 0)).toBe(6);
		expect("Hello world!".indexOf("world", 0)).toBe(6);

		expect(indexOf("Hello world!", "world", 1)).toBe(6);
		expect("Hello world!".indexOf("world", 1)).toBe(6);

		expect(indexOf("Hello world!", "world", 5)).toBe(6);
		expect("Hello world!".indexOf("world", 5)).toBe(6);
	});

	it("Тест 4", () => {
		expect(indexOf("Hello world!", "Hello world!")).toBe(0);
		expect("Hello world!".indexOf("Hello world!")).toBe(0);

		expect(indexOf("Hello world!", "Hello world!", 0)).toBe(0);
		expect("Hello world!".indexOf("Hello world!", 0)).toBe(0);

		expect(indexOf("Hello world!", "Hello world!", -1)).toBe(0);
		expect("Hello world!".indexOf("Hello world!", -1)).toBe(0);

		expect(indexOf("Hello world!", "Hello world!", 1)).toBe(-1);
		expect("Hello world!".indexOf("Hello world!", 1)).toBe(-1);
	});
});