import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'contexts';
import 'styles/global.scss';
import App from 'App';

/* -------------------------------------------------------------------------- */

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
