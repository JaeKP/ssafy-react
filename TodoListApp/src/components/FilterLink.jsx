/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useSelector, useDispatch } from 'react-redux';
import { setVisibilityFilter } from '@/store';

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
