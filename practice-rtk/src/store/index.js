import { throttle } from 'lodash';
import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from 'utils';
// import { reducer as todoList } from './features/todoList';
// import { reducer as visibilityFilter } from './features/visibilityFiler';
import todoList from './slices/todoList';
import visibilityFilter from './slices/visibilityFilter';
import beverageList from './slices/beverageList';
import { SAVE_STORAGE_SETTING } from 'pages/Setting';

/* root reducer ------------------------------------------------------------- */

const reducers = {
  todoList,
  visibilityFilter,
  beverageList,
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

export const subscription = () => {
  return store.subscribe(throttle(() => saveState(store.getState()), 1000));
};

export const unsubscription = subscription();

/* settings ----------------------------------------------------------------- */

let isSaveLocalStorage = loadState(SAVE_STORAGE_SETTING) ?? true;

if (!isSaveLocalStorage) {
  unsubscription();
}
