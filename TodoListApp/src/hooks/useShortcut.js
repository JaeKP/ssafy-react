import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  SHOW_ALL,
  SHOW_ACTIVED,
  SHOW_COMPLETED,
  setVisibilityFilter,
} from '@/store/slices/visibilityFilter';

export function useShortcut() {
  const dispatch = useDispatch();

  useEffect(() => {
    const changeVisibleFilter = (filter) =>
      dispatch(setVisibilityFilter(filter));

    const handleShortcut = (e) => {
      if (e.ctrlKey) {
        switch (e.key) {
          case '1':
            changeVisibleFilter(SHOW_ALL);
            break;
          case '2':
            changeVisibleFilter(SHOW_ACTIVED);
            break;
          case '3':
            changeVisibleFilter(SHOW_COMPLETED);
        }
      }
    };

    document.addEventListener('keyup', handleShortcut);

    return () => document.removeEventListener('keyup', handleShortcut);
  }, [dispatch]);
}
