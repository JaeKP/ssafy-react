import { classNames } from 'utils';
import { elementType, oneOfType, string } from 'prop-types';
import styles from './styles.module.scss';

/* -------------------------------------------------------------------------- */

export function A11yHidden({ as: Component, className, ...restProps }) {
  return (
    <Component
      className={classNames(styles.wrapper)(className)}
      {...restProps}
    />
  );
}

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
};

A11yHidden.propTypes = {
  as: oneOfType([elementType, string]),
  className: string,
};
