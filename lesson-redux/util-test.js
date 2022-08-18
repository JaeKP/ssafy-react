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

const toBe = (received, expected, not = false) => {
  let condition = !not ? received !== expected : received === expected;
  if (condition) {
    throw new Error(
      `전달 값 ${received} 과 기대 값 ${expected}이 ${!not ? '같지 않습니다.' : '같습니다.'}`
    );
  }
}

const toEqual = (received, expected, not = false) => {
  for (let [key, value] of Object.entries(expected)) {
    if (received[key] !== value) {
      throw new Error(
        `전달 값 ${received} 과 기대 값 ${expected}이 ${!not ? '같지 않습니다.' : '같습니다.'}`
      );
    }
  }
};

function expect(received) {
  return {
    toBe(expected) { toBe(received, expected); },
    toEqual(expected) { toEqual(received, expected); },
    not: {
      toBe(expected) { toBe(received, expected, true); },
      toEqual(expected) { toEqual(received, expected, true); },
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
