import { StoreContext } from '../context.js';

const { useContext } = React;

export const useSelector = (callback) => {
  const storeValue = useContext(StoreContext);
  if (!storeValue)
    throw new Error('useSelector는 Store 컨텍스트 안에서만 사용해야 합니다.');
  return callback?.(storeValue);
};
