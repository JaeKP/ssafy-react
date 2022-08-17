import React from 'react';
import { oneOf, oneOfType, elementType, string } from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

/* Button ------------------------------------------------------------------- */

function _Button({ type, className, ...restProps }) {
  return (
    <button
      type={type}
      className={classNames(styles.button, className)}
      {...restProps}
    />
  );
}

_Button.defaultProps = {
  type: 'button',
};

_Button.propTypes = {
  type: oneOf([...'button reset submit'.split(' ')]),
  className: string,
};

export const Button = React.memo(_Button);
Button.displayName = 'Button';

/* Button Group ------------------------------------------------------------- */

Button.Group = function ButtonGroup({
  as: Component,
  className,
  ...restProps
}) {
  return (
    <Component className={classNames(styles.group, className)} {...restProps} />
  );
};

Button.Group.defaultProps = {
  as: 'div',
};

Button.Group.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
};
