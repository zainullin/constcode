const { findUser } = require('../src/index');

describe('Тестирование метода String.prototype.repeat', () => {
  it('Тест 1', () => {
    expect(repeat('', 0)).toBe('');
    expect(repeat('', 1)).toBe('');
    expect(repeat('', 10)).toBe('');
    expect(repeat('', 100)).toBe('');
  });
});
