import styles from './A11yHidden.module.css';
import { oneOfType, elementType, string, bool, node } from 'prop-types';
import { classNames } from 'utils';

export function A11yHidden({
  as: Comp,
  className,
  focusable,
  children,
  ...restProps
}) {
  return (
    <Comp
      className={classNames(styles.a11yHidden, className, {
        [styles.focusable]: focusable,
      })}
      {...restProps}
    >
      {children}
    </Comp>
  );
}

A11yHidden.defaultProps = {
  as: 'span',
};

A11yHidden.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  focusable: bool,
  children: node,
};
