import { string } from 'prop-types';
import styles from './styles.module.scss';
import { classNames } from 'utils';

/* component ---------------------------------------------------------------- */

export function Header({ className, ...restProps }) {
  return (
    <header
      className={classNames(styles.container)(className)}
      {...restProps}
    />
  );
}

Header.propTypes = {
  className: string,
};
