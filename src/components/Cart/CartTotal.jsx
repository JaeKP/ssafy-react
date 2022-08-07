import { node } from 'prop-types';
import { currencyKR } from 'utils';
import styles from './CartTotal.module.css';

export default function CartTotal({ children }) {
  return (
    <output className={styles.container}>
      구매 총액﹕{currencyKR(children)}
    </output>
  );
}

CartTotal.propTypes = {
  children: node,
};
