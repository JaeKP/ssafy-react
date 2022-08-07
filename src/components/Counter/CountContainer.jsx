import { node, string } from 'prop-types';
import styles from './Counter.module.css';
import { A11yHidden } from 'components';
import { classNames } from 'utils';

/* ---------------------------------------------------------------------- */

export default function CountContainer({
  id,
  headline,
  className,
  children,
  ...restProps
}) {
  return (
    <div
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      aria-describedby={id}
      className={classNames(styles.container, className)}
      {...restProps}
    >
      <A11yHidden id={id}>{headline}</A11yHidden>
      {children}
    </div>
  );
}

CountContainer.defaultProps = {
  headline:
    '카운트 증가 또는 감소 버튼을 눌러, 카운트 값을 변경할 수 있습니다.',
};

CountContainer.propTypes = {
  id: string.isRequired,
  headline: string,
  className: string,
  children: node,
};
