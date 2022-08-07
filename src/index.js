import 'react-app-polyfill/stable';
import 'styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'contexts';
import App from './App';

/* -------------------------------------------------------------------------- */

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
