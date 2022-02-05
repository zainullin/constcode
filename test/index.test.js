const { repeat } = require('../src/index');

describe('Тестирование метода String.prototype.repeat', () => {
  it('Тест 1', () => {
    expect(repeat('', 0)).toBe('');
    expect(repeat('', 1)).toBe('');
    expect(repeat('', 10)).toBe('');
    expect(repeat('', 100)).toBe('');
  });

  it('Тест 2', () => {
    expect(repeat('!', 0)).toBe('');
    expect(repeat('a', 0)).toBe('');
    expect(repeat('1', 0)).toBe('');
  });

  it('Тест 3', () => {
    expect(repeat('!', 1)).toBe('!');
    expect(repeat('a', 1)).toBe('a');
    expect(repeat('1', 1)).toBe('1');
  });

  it("Тест 4", () => {
  	expect(repeat("!!!", 1)).toBe("!!!");
  	expect(repeat("aaa", 1)).toBe("aaa");
  	expect(repeat("111", 1)).toBe("111");
  });

  it("Тест 5", () => {
  	expect(repeat("!", 3)).toBe("!!!");
  	expect(repeat("a", 3)).toBe("aaa");
  	expect(repeat("1", 3)).toBe("111");
  });

  it("Тест 6", () => {
  	expect(repeat("Hello world!", 3)).toBe(
  		"Hello world!Hello world!Hello world!"
  	);
  });
});
