import { setVisibilityFilter } from '../store/index.js';

const { useSelector, useDispatch } = ReactRedux;

export const FilterLink = ({ filter, children, ...restProps }) => {
  const currentFilter = useSelector(({ visibilityFilter }) => visibilityFilter);
  const dispatch = useDispatch();

  return currentFilter === filter ? (
    <span className="filterActived">{children}</span>
  ) : (
    <a onClick={() => dispatch(setVisibilityFilter(filter))} {...restProps}>
      {children}
    </a>
  );
};
