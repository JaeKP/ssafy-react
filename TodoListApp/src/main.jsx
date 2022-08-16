import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoListApp } from '@/components/TodoListApp';
import { StoreProvider } from '@/store';
import '@/styles/global.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <StoreProvider>
      <TodoListApp />
    </StoreProvider>
  </StrictMode>
);
