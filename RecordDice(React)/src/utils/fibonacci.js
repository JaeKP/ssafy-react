export function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function memoFibonacci(n) {
  return memoFibonacci.cache[n]
    ? memoFibonacci.cache[n]
    : (memoFibonacci.cache[n] = fibonacci(n));
}

memoFibonacci.cache = {};
