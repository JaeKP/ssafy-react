import React from 'react';
import ReactDOM from 'react-dom';
import { logger, formatText } from './utils';

logger(
  '안녕! 웹팩 😃',
  formatText(`
    font-size: 4rem;
    font-weight: bold;
  `)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement('div', null, 'app')
);
