import { useSelector, useDispatch } from 'react-redux';
import { setVisibilityFilter } from 'store/features/visibilityFiler';
import { css } from '@emotion/css';

const linkActionStyle = css`
  cursor: not-allowed;
  padding: 0 0.3em;
  line-height: 1;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: #533dab;
`;

export const FilterLink = ({ filter, children, ...restProps }) => {
  const currentFilter = useSelector(({ visibilityFilter }) => visibilityFilter);
  const dispatch = useDispatch();

  return currentFilter.includes(filter) ? (
    <span className={linkActionStyle}>{children}</span>
  ) : (
    <a onClick={() => dispatch(setVisibilityFilter(filter))} {...restProps}>
      {children}
    </a>
  );
};
