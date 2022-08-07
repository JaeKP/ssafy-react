import { exact, func, number, string } from 'prop-types';
import styles from './CartItem.module.css';
import { Counter } from 'components';
import { useTheme } from 'contexts';
import { currencyKR } from 'utils';

/* -------------------------------------------------------------------------- */

export default function CartItem({
  product: { id, photo, name, price, amount, maxAmount },
  onUpdate,
  ...restProps
}) {
  const {
    theme: {
      value: { forground },
    },
  } = useTheme();

  return (
    <li className={styles.container} key={id} {...restProps}>
      <img className={styles.photo} src={photo} alt="" />
      <div className={styles.info}>
        <b
          className={styles.name}
          style={{
            color: forground.includes('fff')
              ? forground.replace(/fff/, 'aaa')
              : null,
          }}
        >
          {name}
        </b>
        <span className={styles.price} style={{ color: forground }}>
          {currencyKR(price)}
        </span>
      </div>
      <div className={styles.amount}>
        <Counter
          id={id}
          current={amount}
          max={maxAmount > 0 ? maxAmount : 50}
          style={{ transform: 'scale(0.75)' }}
          onUpdate={(count) => onUpdate(id, count)}
        />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  product: exact({
    id: string,
    photo: string,
    name: string,
    price: number,
    amount: number,
    maxAmount: number,
  }),
  onUpdate: func,
};
