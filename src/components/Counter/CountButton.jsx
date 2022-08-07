import { forwardRef } from 'react';
import { bool, oneOf, string } from 'prop-types';
import { ReactComponent as SvgIconMinus } from 'assets/icons/minus.svg';
import { ReactComponent as SvgIconPlus } from 'assets/icons/plus.svg';
import styles from './Counter.module.css';
import { classNames } from 'utils';

const CountButton = forwardRef(function CountButton(
  { type, label, withTitle, mode, isMin, isMax, className, ...restProps },
  ref
) {
  const isPlusMode = mode.includes('plus');
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={withTitle && label}
      className={classNames(styles.button, className)}
      disabled={isPlusMode ? isMax : isMin}
      {...restProps}
    >
      {isPlusMode ? <SvgIconPlus /> : <SvgIconMinus />}
    </button>
  );
});

CountButton.defaultProps = {
  type: 'button',
  withTitle: true,
  mode: 'plus',
  isMin: false,
  isMax: false,
};

CountButton.propTypes = {
  type: string,
  label: string.isRequired,
  withTitle: bool,
  mode: oneOf(['plus', 'minus']),
  isMin: bool,
  isMax: bool,
  className: string,
};

export default CountButton;
