/* action types ------------------------------------------------------------- */

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';
const RESET = 'counter/reset';

/* reducer function --------------------------------------------------------- */

let initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

/* Create Store -------------------------------------------------------------- */

// #2. Redux와 유사한 Store 클래스 작성
class Store {
  // ES 2022 (6월)
  #state;
  #reducer;
  #listeners = [];

  constructor(reducer, preloadedState) {
    this.#state = preloadedState ?? 0;
    this.#reducer = reducer;
  }

  getState() {
    return this.#state;
  }

  dispatch(action) {
    this.#state = this.#reducer(this.getState(), action);
    this.#listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.#listeners.push(listener);
    return () => {
      this.#listeners = this.#listeners.filter((l) => !Object.is(l, listener));
    };
  }

  replaceReducer(newReducer) {
    this.#reducer = newReducer;
    return this;
  }
}

const createStore = (reducer, preloadedState) => {
  return new Store(reducer, preloadedState);
};

// #1. Redux.createStore 메서드와 유사한 createStore 함수 작성
// 먼저 함수 형태로 작성해 본 후, 클래스 방식으로 이어 진행해보겠습니다.
const _createStore = (reducer, preloadedState) => {
  if (!reducer || typeof reducer !== 'function') throw new Error('....');

  // 외부에서 접근이 불가능한 상태
  let state = preloadedState ?? 0;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    if (!('type' in action)) throw new Error('...');
    state = reducer(getState(), action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return function unsubscribe() {
      listeners = listeners.filter((l) => !Object.is(l, listener));
    };
  };

  // store 객체 반환
  return {
    getState,
    dispatch,
    subscribe,
  };
};

// createStore 함수를 사용해 store 생성
const store = createStore(countReducer);

/* getState */
console.log('getState ------------------------------------------');
console.log(store.getState());

/* dispatch */
console.log('dispatch ------------------------------------------');
store.dispatch({ type: INCREMENT });
console.log(store.getState());

/* subscribe => unsubscribe */
console.log('subscribe => unsubscribe --------------------------');

const buttonVNode = {
  type: 'button',
  props: { type: 'button', children: 7 },
};

function renderButton() {
  buttonVNode.props.children = store.getState();
  console.log(buttonVNode.props.children);
}

const unsubscribe = store.subscribe(renderButton);

let count = store.getState();

const MAX = 10;
const UNSUBSCRIBED = 7;
const FPS = 5;

const clearId = setInterval(() => {
  if (count === UNSUBSCRIBED) {
    unsubscribe();
    console.log('Redux 스토어 구독 취소');
  }

  store.dispatch({ type: INCREMENT });

  if (++count >= MAX) {
    clearInterval(clearId);
    console.log('인터벌 클리어');
  }
}, 1000 / FPS);
