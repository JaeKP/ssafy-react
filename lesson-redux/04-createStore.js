/* reducer function --------------------------------------------------------- */

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

/* Create Store -------------------------------------------------------------- */

class Store {
  #state;
  #reducer = null;
  #listeners = [];

  constructor(reducer) {
    if (!reducer) throw new Error('reducer 함수 설정은 반드시 필요합니다.');
    this.#reducer = reducer;
  }

  getState() {
    return this.#state;
  }

  #setState(newState) {
    this.#state = newState;
  }

  dispatch(action) {
    const newState = this.#reducer(this.#state, action);
    this.#setState(newState);
    this.#listeners.forEach((listener) => listener?.());
  }

  subscribe(listener) {
    this.#listeners.push(listener);
    return /* unsubscribe */ () => {
      this.#listeners = this.#listeners.filter(
        (_listener) => !Object.is(_listener, listener)
      );
    };
  }
}

const createStore = (reducer) => {
  const store = new Store(reducer);
  store.dispatch({ type: '@INIT'});
  return store;
};

/* store ← reducer  */
const store = createStore(countReducer);

/* getState */
console.log('getState ------------------------------------------');
console.log(store.getState());

/* dispatch */
console.log('dispatch ------------------------------------------');
store.dispatch({ type: 'INCREMENT' });
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
const UNSUBSCRIBE = 7;
const FPS = 5;
const clearId = setInterval(() => {
  if (count === UNSUBSCRIBE) {
    unsubscribe();
    console.log('Redux 스토어 구독 취소');
  }

  store.dispatch({ type: 'INCREMENT' });

  if (++count >= MAX) {
    clearInterval(clearId);
    console.log('인터벌 클리어');
  }
}, 1000 / FPS);
