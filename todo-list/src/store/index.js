import { throttle } from 'lodash';
import { configureStore } from '@reduxjs/toolkit';
// import { reducer as todoList } from './features/todoList';
// import { reducer as visibilityFilter } from './features/visibilityFiler';
import todoList from './slices/todoList';
import visibilityFilter from './slices/visibilityFilter';
import { loadState, saveState } from 'utils';

/* root reducer ------------------------------------------------------------- */

const reducers = {
  todoList,
  visibilityFilter,
};

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

/* store -------------------------------------------------------------------- */

const store = configureStore({
  reducer: reducers,
  preloadedState: loadState() ?? preloadedState,
  devTools: true,
});

export default store;

/* subscription ------------------------------------------------------------- */

export const unsubscribe = store.subscribe(
  throttle(() => saveState(store.getState()), 1000)
);
