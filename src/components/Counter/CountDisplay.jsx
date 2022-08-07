import { node } from 'prop-types';
import styles from './Counter.module.css';

export default function CountDisplay({ children }) {
  return <output className={styles.output}>{children}</output>;
}

CountDisplay.propTypes = {
  children: node,
};
