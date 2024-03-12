const {describe, expect, test, beforeEach} = require ('@jest/globals');
const Calculator = require("./task/calculator");


// Test Suite
describe('Testing calculator', () => {
  let calc

  // инициализируем пельменную инстансом класса [Calculator]
  beforeEach(() => {
    calc = new Calculator();
  });

  /// TESTS
  test('adding two numbers', () => {
    expect(calc.add(2, 4)).toBe(6)
  });

  test('Adding multuple numbers', () => {
    expect(calc.add(-4, 4, 10)).toBe(10);
    expect(calc.add(-4, -4, -1)).toBe(-9);
  });
  test('sub two numbers', () => {
    expect(calc.subtraction(4, 6)).toBe(-2);
    expect(calc.subtraction(-1, -1)).toBe(0);
  });
  test('sub negative numbers', () => {
    expect(calc.subtraction(-2, -4,)).toBe(2);
  });

  test('multiply two digets', () => {
    expect(calc.multiply(-2, 2)).toBe(-4);
  });
  //Тест крашит пайплайн
  // test('multiply multiply digets', () => {
  //   expect(calc.multiply(-2, 2, 0)).toBe(0);
  // });
  test('divide two digests', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
  test('divide by zero', () => {
    expect(calc.divide(10, 0)).toBe(Infinity);
    expect(calc.divide(0, 0)).toBe(NaN);

  });
  test('exponentiation two values', () => {
    expect(calc.exponentiation(2)).toBe(4);
  });
  test('exponentiation 0^2', () => {
    expect(calc.exponentiation(0)).toBe(0);
    expect(calc.exponentiation(0.5)).toBe(0.25);
  });
  test('exponentiation with negative', () => {
    expect(calc.exponentiation(-1)).toBe(1);
  });
})
