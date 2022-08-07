import { string } from 'prop-types';
import styles from './styles.module.scss';
import { classNames } from 'utils';

export function Footer({ className, ...restProps }) {
  return (
    <footer
      className={classNames(styles.container)(className)}
      {...restProps}
    />
  );
}

Footer.propTypes = {
  className: string,
};
