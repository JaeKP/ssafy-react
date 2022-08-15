import { store } from './store/index.js';
import { TodoListApp } from './compiled/TodoListApp.js';

const { StrictMode } = React;
const { Provider } = ReactRedux;
const { createRoot } = ReactDOM;
const reactDomRoot = createRoot(document.getElementById('root'));

reactDomRoot.render(
  <StrictMode>
    <Provider store={store}>
      <TodoListApp />
    </Provider>
  </StrictMode>
);
