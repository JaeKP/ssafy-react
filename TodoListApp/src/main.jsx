import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { TodoListApp } from '@/components/TodoListApp';
import { configureStore } from '@/store';
import '@/styles/global.css';

const { store } = configureStore();
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <TodoListApp />
    </Provider>
  </StrictMode>
);
