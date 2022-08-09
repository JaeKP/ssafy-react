const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!key || typeof key !== 'string') {
      throw new TypeError(
        'memo 함수의 첫번째 인자는 string 타입만 허용합니다.'
      );
    }

    if (!callback) return cache[key];

    if (cache[key]) {
      return cache[key];
    } else {
      console.log(`cached: ${key}`);
      return (cache[key] = callback?.());
    }
  };
})();
