import { throttle } from 'lodash';
import { createStore, combineReducers } from 'redux';
import { reducer as todoList } from './features/todoList';
import { reducer as visibilityFilter } from './features/visibilityFiler';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { loadState, saveState } from 'utils';

/* root reducer ------------------------------------------------------------- */

const rootReducer = combineReducers({
  todoList,
  visibilityFilter,
});

/* store options ------------------------------------------------------------ */

const preloadedState = {
  todoList: [
    { id: 'learn-react', doit: 'React 학습', completed: true },
    { id: 'learn-redux', doit: 'Redux 학습', completed: true },
    {
      id: 'learn-rtk',
      doit: 'Redux Toolkit 학습',
      completed: false,
    },
  ],
};

const ehancer = devToolsEnhancer();

/* store -------------------------------------------------------------------- */

const store = createStore(rootReducer, loadState() ?? preloadedState, ehancer);

export default store;

/* subscription ------------------------------------------------------------- */

export const unsubscribe = store.subscribe(
  throttle(() => saveState(store.getState()), 1000)
);
