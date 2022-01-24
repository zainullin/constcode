const { join } = require('../src/index');

describe("Тестирование метода Array.prototype.join", () => {
	it("Тест 1", () => {
		const numbers = [1, 2, 3];

		expect(join(numbers)).toBe("1,2,3");
		expect(numbers.join()).toBe("1,2,3");
	});

	it("Тест 2", () => {
		const numbers = [1, 2, 3];

		expect(join(numbers, ",")).toBe("1,2,3");
		expect(numbers.join(",")).toBe("1,2,3");
	});

	it("Тест 3", () => {
		const numbers = [1, 2, 3];

		expect(join(numbers, " ")).toBe("1 2 3");
		expect(numbers.join(" ")).toBe("1 2 3");
	});

	it("Тест 4", () => {
		const numbers = [1, 2, 3];

		expect(join(numbers, " !! 123 !! ")).toBe("1 !! 123 !! 2 !! 123 !! 3");
		expect(numbers.join(" !! 123 !! ")).toBe("1 !! 123 !! 2 !! 123 !! 3");
	});
});