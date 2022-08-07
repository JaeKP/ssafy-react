import { classNames } from 'utils';
import { ReactComponent as SvgIconCart } from 'assets/icons/cart.svg';
import { elementType, node, oneOfType, string } from 'prop-types';
import styles from './CartTitle.module.css';

export default function CartTitle({
  as: Component,
  className,
  children,
  ...restProps
}) {
  return (
    <Component
      className={classNames(styles.container, className)}
      {...restProps}
    >
      <SvgIconCart className={styles.svg} />
      {children}
    </Component>
  );
}

CartTitle.defaultProps = {
  as: 'h2',
};

CartTitle.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  children: node,
};
