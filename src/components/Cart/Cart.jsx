import styles from './Cart.module.css';
import { useCallback, useMemo, useState } from 'react';
import CartTitle from './CartTitle';
import CartList from './CartList';
import CartTotal from './CartTotal';

/* -------------------------------------------------------------------------- */

export function Cart() {
  const [products, setProducts] = useState([
    {
      id: 'milk',
      photo: 'http://item.ssgcdn.com/22/52/99/item/1000039995222_i1_180.jpg',
      name: '1A 우유 900mL',
      price: 1880,
      amount: 1,
      maxAmount: 0,
    },
    {
      id: 'bean-sprouts',
      photo: 'http://item.ssgcdn.com/81/94/81/item/1000016819481_i1_180.jpg',
      name: '맛있는 콩나물 500g',
      price: 1280,
      amount: 1,
      maxAmount: 0,
    },
    {
      id: 'tofu',
      photo: 'http://item.ssgcdn.com/76/94/81/item/1000016819476_i1_232.jpg',
      name: '고소한 두부 1kg',
      price: 2280,
      amount: 1,
      maxAmount: 2,
    },
  ]);

  const handleUpdateAmount = useCallback((id, count) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            amount: count,
          };
        }
        return product;
      })
    );
  }, []);

  const totalPrice = useMemo(
    () => products.reduce((acc, { price, amount }) => acc + price * amount, 0),
    [products]
  );

  return (
    <section className={styles.container}>
      <CartTitle>장바구니</CartTitle>
      <CartList products={products} onUpdate={handleUpdateAmount} />
      {products.length === 0 && <p>구매할 상품을 리스트에 포함하세요.</p>}
      <CartTotal>{totalPrice}</CartTotal>
    </section>
  );
}
