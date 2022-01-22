const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply one negative and onbe positive number', () => {
    const result = multiply(-4, 2);
    expect(result).toBe(-8);
  });
  test('should multiply one number=0 and another nu,ber', () => {
    const result = multiply(0, 9);
    expect(result).toBe(0);
  });
});
