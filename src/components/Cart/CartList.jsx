import { arrayOf, func } from 'prop-types';
import styles from './CartList.module.css';
import CartItem from './CartItem';

/* -------------------------------------------------------------------------- */

const CartList = ({ products, onUpdate }) => (
  <ul className={styles.container}>
    {products.map((product) => (
      <CartItem key={product.id} product={product} onUpdate={onUpdate} />
    ))}
  </ul>
);

CartList.propTypes = {
  products: arrayOf(CartItem.propTypes.product),
  onUpdate: func,
};

export default CartList;
