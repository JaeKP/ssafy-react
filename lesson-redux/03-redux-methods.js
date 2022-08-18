/* action types ------------------------------------------------------------- */
// 액션 타입(상수) 작성

let INCREMENT;
let DECREMENT;

/* reducer function --------------------------------------------------------- */

// 카운터 리듀서 작성
let initialState = 0;
const countReducer = (state = initialState, action) => {};

/* Redux Store -------------------------------------------------------------- */

// Redux 모듈을 불러와 store 생성

const store = {};

/* getState */
console.log('getState ------------------------------------------');


/* dispatch */
console.log('dispatch ------------------------------------------');


/* subscribe => unsubscribe */
console.log('subscribe => unsubscribe --------------------------');

const buttonVNode = {
  type: 'button',
  props: { type: 'button', children: 7 },
};

function renderButton() {
  // store 상태 가져와 buttonVNode의 props.children 값으로 설정
  buttonVNode.props.children = {};
  console.log(buttonVNode.props.children);
}

// store 구독 → 구독 취소 함수 반환
let unsubscribe;

// store 상태 가져와 count 값으로 설정
let count = 0;

const MAX = 10;
const UNSUBSCRIBED = 7;
const FPS = 5;

const clearId = setInterval(() => {
  if (count === UNSUBSCRIBED) {
    // store 구독 취소 설정

    console.log('Redux 스토어 구독 취소');
  }
  
  // store 상태 업데이트
  
  if (++count >= MAX) {
    clearInterval(clearId);
    console.log('인터벌 클리어');
  }
}, 1000 / FPS);