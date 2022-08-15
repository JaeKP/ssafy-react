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

/* Redux Store -------------------------------------------------------------- */

const { createStore } = require('redux');

/* store ← reducer  */
const store = createStore(countReducer);

/* getState */
console.log('getState ------------------------------------------');
console.log(store.getState());

/* dispatch */
console.log('dispatch ------------------------------------------');
store.dispatch({type: 'INCREMENT'});
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
