/* action types ------------------------------------------------------------- */

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

/* reducer function --------------------------------------------------------- */

let initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

/* Create Store -------------------------------------------------------------- */

// #2. Redux와 유사한 Store 클래스 작성
class Store {}

// #1. Redux.createStore 메서드와 유사한 createStore 함수 작성
const createStore = () => {};

// createStore 함수를 사용해 store 생성
const store = {
  getState(){},
  dispatch(){},
  subscribe(){},
};

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
