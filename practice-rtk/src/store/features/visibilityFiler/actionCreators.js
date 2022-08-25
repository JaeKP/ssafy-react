import { SHOW_ACTIVED, SHOW_ALL, SHOW_COMPLETED } from './actionTypes';

export const showAll = () => ({ type: SHOW_ALL });

export const showActived = () => ({ type: SHOW_ACTIVED });

export const showCompleted = () => ({ type: SHOW_COMPLETED });

export const setVisibilityFilter = (filter) => {
  switch (filter) {
    default:
    case SHOW_ALL:
      return showAll();
    case SHOW_ACTIVED:
      return showActived();
    case SHOW_COMPLETED:
      return showCompleted();
  }
};
