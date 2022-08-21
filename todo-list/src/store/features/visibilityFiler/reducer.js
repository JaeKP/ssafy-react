import { SHOW_ACTIVED, SHOW_ALL, SHOW_COMPLETED } from './actionTypes';

const initialState = SHOW_ALL;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      state = initialState;
      break;
    case SHOW_ACTIVED:
      state = SHOW_ACTIVED;
      break;
    case SHOW_COMPLETED:
      state = SHOW_COMPLETED;
      break;
    default:
      return state;
  }
  return state;
};
