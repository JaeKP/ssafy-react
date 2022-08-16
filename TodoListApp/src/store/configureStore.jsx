import throttle from 'lodash/throttle';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer as visibilityFilter } from './slices/visibilityFilter';
import { reducer as todoList } from './slices/todoList';
import { loadState, saveState } from './localStorage';

const THROTTLE_TIME = 1000;

const rootReducer = combineReducers({
  todoList,
  visibilityFilter,
});

export const configureStore = () => {
  const preloadedState = loadState();
  const ehancer = composeWithDevTools();
  const store = createStore(rootReducer, preloadedState, ehancer);

  const unsubPersistedState = store.subscribe(
    throttle(() => {
      console.log('@THROTTLED : CHANGED REDUX STATE');
      saveState({ ...store.getState() });
    }, THROTTLE_TIME)
  );

  return { store, unsubPersistedState };
};
