import { logger, formatText } from './utils';

logger(
  '안녕! 웹팩 😃',
  formatText(`
    font-size: 4rem;
    font-weight: bold;
  `)
);
