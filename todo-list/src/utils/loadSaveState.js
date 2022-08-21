const STORE_KEY = 'redux/store';
let isDev = process.env.NODE_ENV.includes('development');

const logStyle = `
  font-weight: bold;
  color: #0856cc;
`;

export const loadState = (key = STORE_KEY) => {
  const storeData = localStorage.getItem(key);
  isDev &&
    console.log(`%c@loadState → Redux Store 상태 "${key}" 로드`, logStyle);
  return storeData ? JSON.parse(storeData) : undefined;
};

export const saveState = (storeState, key = STORE_KEY) => {
  const serializedState = JSON.stringify(storeState);
  isDev &&
    console.log(`%c@saveState → Redux Store 상태 "${key}" 저장`, logStyle);
  localStorage.setItem(key, serializedState);
};
