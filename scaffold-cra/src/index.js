import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

console.log(process.env);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

if (!process.env.NODE_ENV.includes('production')) {
  import('./reportWebVitals')
    .then(({ default: reportWebVitals }) => reportWebVitals(console.log))
    .catch((error) => console.error(error.message));
}
