import classNames from 'classnames';
import { oneOf, elementType, string, oneOfType } from 'prop-types';
import styles from './Dice.module.css';

export function Dice({ as: Component, content, className, ...restProps }) {
  return (
    <Component className={classNames(styles.counter, className)} {...restProps}>
      {content}
    </Component>
  );
}

Dice.defaultProps = {
  content: '?',
  as: 'output',
};

Dice.propTypes = {
  content: oneOf(['?', ...'1 2 3 4 5 6'.split(' ').map((n) => +n)]),
  as: oneOfType([string, elementType]),
  className: string,
};
