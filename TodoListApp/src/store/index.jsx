import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer as todoList } from './slices/todoList';
import { reducer as visibilityFilter } from './slices/visibilityFilter';

const rootReducer = combineReducers({
  todoList,
  visibilityFilter,
});

const preloadedState = {
  todoList: [
    { id: 'learn-react', doit: 'React 학습', completed: true },
    { id: 'learn-redux', doit: 'Redux 학습', completed: false },
  ],
};

const ehancer = composeWithDevTools();

const store = createStore(rootReducer, preloadedState, ehancer);

export const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};

export * from './slices/todoList';
export * from './slices/visibilityFilter';
