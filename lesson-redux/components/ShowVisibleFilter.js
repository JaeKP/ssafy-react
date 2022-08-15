import { SHOW_ACTIVED, SHOW_ALL, SHOW_COMPLETED } from '../store/index.js';
import { FilterLink } from './FilterLink.js';

export const ShowVisibleFilter = () => {
  return (
    <span className="showVisibleFilter">
      <FilterLink href="#all" filter={SHOW_ALL}>
        모두
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#actived" filter={SHOW_ACTIVED}>
        활성 상태만
      </FilterLink>{' '}
      /{' '}
      <FilterLink href="#completed" filter={SHOW_COMPLETED}>
        완료된 상태만
      </FilterLink>{' '}
      보기
      <br />
      <span className="shortcut">
        단축키: <code>ctrl + 1, 2, 3</code>
      </span>
    </span>
  );
};
