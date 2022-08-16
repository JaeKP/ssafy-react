export const loadState = (key = '@reduxState') => {
  try {
    const serializeState = localStorage.getItem(key);
    if (!serializeState) return undefined;
    return JSON.parse(serializeState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state, key = '@reduxState') => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    // 오류 무시
  }
};
