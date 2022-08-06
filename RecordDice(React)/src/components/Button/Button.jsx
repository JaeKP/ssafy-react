import { oneOf, oneOfType, elementType, string } from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

/* Button ------------------------------------------------------------------- */

export function Button({ type, className, ...restProps }) {
  return (
    <button
      type={type}
      className={classNames(styles.button, className)}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: oneOf([...'button reset submit'.split(' ')]),
  className: string,
};

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
