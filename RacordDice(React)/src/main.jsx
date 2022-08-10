import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import App from '@/app/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App
      buttons={[
        {
          id: 'button-zero',
          content: 'read a doc',
          type: 'button',
        },
        {
          id: 'button-one',
          content: 'formatting document',
          type: 'reset',
        },
      ]}
    />
  </StrictMode>
);
