/* action types ------------------------------------------------------------- */
// 액션 타입(상수) 작성

let INCREMENT = 'counter/increment';
let DECREMENT = 'counter/decrement';
let RESET = 'counter/reset';

/* reducer function --------------------------------------------------------- */

// 카운터 리듀서 작성
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

/* Redux Store -------------------------------------------------------------- */

// Redux 모듈을 불러와 store 생성
const { createStore } = require('redux');

const store = createStore(countReducer, 1);
/*
  store = {
    getState()
    dispatch(action)
    subscribe(listener) => unsubscribe
  }
*/

/* getState */
console.log('getState ------------------------------------------');
console.log(store.getState());

/* dispatch */
console.log('dispatch ------------------------------------------');
store.dispatch({
  type: INCREMENT,
});

console.log(store.getState());

/* subscribe => unsubscribe */
console.log('subscribe => unsubscribe --------------------------');

const buttonVNode = {
  type: 'button',
  props: { type: 'button', children: 7 },
};

function renderButton() {
  // store 상태 가져와 buttonVNode의 props.children 값으로 설정
  buttonVNode.props.children = store.getState();
  console.log(buttonVNode.props.children);
}

// store 구독 → 구독 취소 함수 반환
const unsubscribe = store.subscribe(renderButton);
console.log('typeof unsubscribe', typeof unsubscribe);

// store 상태 가져와 count 값으로 설정
let count = store.getState();

const MAX = 10;
const UNSUBSCRIBED = 7;
const FPS = 5;

const clearId = setInterval(() => {
  if (count === UNSUBSCRIBED) {
    // store 구독 취소 설정
    unsubscribe();
    console.log('Redux 스토어 구독 취소');
  }

  // store 상태 업데이트
  store.dispatch({ type: INCREMENT });

  if (++count >= MAX) {
    clearInterval(clearId);
    console.log('인터벌 클리어');
  }
}, 1000 / FPS);
