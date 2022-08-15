function describe(description, callback) {
  console.group(description);
  callback?.();
  console.groupEnd();
}

function test(description, callback) {
  console.group(description);
  callback?.();
  console.groupEnd();
}

function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(
          `전달 값 ${received} 과 기대 값 ${expected}이 같지 않습니다.`
        );
      }
    },
    toEqual(expected) {
      for (let [key, value] of Object.entries(expected)) {
        if (received[key] !== value) {
          throw new Error(
            `전달 값 ${received} 과 기대 값 ${expected}이 같지 않습니다.`
          );
        }
      }
    },
  };
}

function typeOf(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

function isArrayOrObject(data) {
  return typeOf(data) === 'object' || Array.isArray(data);
}

function immutable(object) {
  if (Array.isArray(object)) {
    object.map((item) =>
      isArrayOrObject(item) ? immutable(Object.freeze(item)) : item
    );
  }
  if (typeOf(object) === 'object') {
    for (let [key, value] of Object.entries(object)) {
      if (isArrayOrObject(value)) {
        object[key] = immutable(Object.freeze(value));
      }
    }
  }
  return Object.freeze(object);
}

module.exports = {
  describe,
  test,
  expect,
  typeOf,
  immutable,
};
