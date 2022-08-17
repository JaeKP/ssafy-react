import { describe, test, expect, beforeAll } from 'vitest';
import { fibonacci, memoFibonacci } from './fibonacci';

describe('fibonacci 테스트', () => {
  let tester;
  const getRandomMinMax = (min, max) =>
    Math.floor(Math.random() * max - min) + min;

  beforeAll(() => {
    tester = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  });

  test('fibonacci 유틸리티', () => {
    tester.forEach((n, i) => expect(fibonacci(i)).toBe(n));
    expect(fibonacci.cache).toBeFalsy();
  });

  test('Memoized fibonacci 유틸리티', () => {
    tester.forEach((n, i) => expect(memoFibonacci(i)).toBe(n));

    let randomNumber = getRandomMinMax(0, tester.length);
    expect(!!memoFibonacci.cache[randomNumber]).toBeTruthy();
    console.log('memoFibonacci.cache:', memoFibonacci.cache);
  });
});
