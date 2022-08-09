import App from './App.js';

const { StrictMode } = React;
const { createRoot } = ReactDOM;

const container = document.getElementById('root');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
