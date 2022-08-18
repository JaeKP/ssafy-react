/* action types ------------------------------------------------------------- */

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';
const RESET = 'counter/reset';

/* Reducer ------------------------------------------------------------------ */

let initailCount = 9;

const MIN = 0;
const MAX = 100;

const countReducer = (state = initailCount, action) => {
  let newState;
  let max = action.max ?? MAX;
  let min = action.min ?? MIN;

  switch (action.type) {
    case INCREMENT:
      newState = state + action.step;
      newState = newState > max ? max : newState;
      console.log(`INCREMENT: ${state} → ${newState}`);
      return newState;
    case DECREMENT:
      newState = state - action.step;
      newState = newState < min ? min : newState;
      console.log(`DECREMENT: ${state} → ${newState}`);
      return newState;
    case RESET:
      console.log('----------------------------------');
      console.log(`RESET: ${state} → ${initailCount}`);
      console.log('----------------------------------');
      return initailCount;
    default:
      return state;
  }
};

/* Redux Store -------------------------------------------------------------- */

const store = Redux.createStore(countReducer);

/* Counter ------------------------------------------------------------------ */

function Counter({ count = 0, step = 1, min = 0, max = 100 }) {
  return (
    <div className="counter">
      <output className="count">{count}</output>
      <div className="buttonGroup">
        <button
          type="button"
          aria-label={`${step} 증가`}
          disabled={count >= max}
          onClick={() => store.dispatch({ type: INCREMENT, step, min, max })}
        >
          + {step}
        </button>
        <button
          type="button"
          aria-label={`${step} 감소`}
          disabled={count <= min}
          onClick={() => store.dispatch({ type: DECREMENT, step, min, max })}
        >
          - {step}
        </button>
        <button
          type="button"
          disabled={count === initailCount}
          onClick={() => store.dispatch({ type: RESET })}
        >
          초기화
        </button>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);

/* Render ------------------------------------------------------------------- */

function render() {
  let count = store.getState();
  reactDomRoot.render(<Counter count={count} step={6} min={7} max={77} />);
}

render();

/* Subscribe ---------------------------------------------------------------- */

store.subscribe(render);
