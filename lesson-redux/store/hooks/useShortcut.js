import { SHOW_ACTIVED, SHOW_ALL, SHOW_COMPLETED } from '../actions/types.js';
import { setVisibilityFilter } from '../actions/creators.js';
import { useDispatch } from './useDispatch.js';

const { useEffect } = React;

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
  }, []);
}
