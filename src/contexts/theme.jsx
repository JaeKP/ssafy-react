import { exact, string } from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';

/* -------------------------------------------------------------------------- */

const colors = {
  white: '#fff',
  black: '#000',
};

const themeConfig = {
  light: {
    forground: colors.black,
    background: colors.white,
  },
  dark: {
    forground: colors.white,
    background: colors.black,
  },
};

const initialTheme = {
  current: 'light',
  value: themeConfig['light'],
};

const TypeTheme = {
  forground: string,
  background: string,
};

/* -------------------------------------------------------------------------- */

const ThemeContext = createContext();

/* -------------------------------------------------------------------------- */

const themeReducer = (theme, action) => {
  if (action.type === CHANGE) {
    let currentTheme = action.payload;
    return {
      current: currentTheme,
      value: themeConfig[currentTheme],
    };
  }

  return initialTheme;
};

const CHANGE = 'theme/change';

const changeThemeAction = (willCurrent) => ({
  type: CHANGE,
  payload: willCurrent,
});

/* -------------------------------------------------------------------------- */

export const ThemeProvider = ({ theme: initialTheme, ...restProps }) => {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  const changeTheme = useCallback(
    (willCurrent) => dispatch(changeThemeAction(willCurrent)),
    []
  );

  const themeValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme, changeTheme]
  );

  return <ThemeContext.Provider value={themeValue} {...restProps} />;
};

ThemeProvider.defaultProps = {
  theme: initialTheme,
};

ThemeProvider.propTypes = {
  theme: exact({
    current: string,
    value: exact(TypeTheme),
  }),
};

/* -------------------------------------------------------------------------- */

export const useTheme = () => {
  const themeValue = useContext(ThemeContext);
  if (!themeValue) {
    throw new Error(
      'useTheme 훅은 ThemeProvider 컴포넌트의 하위 컴포넌트에서만 사용 가능합니다.'
    );
  }
  return themeValue;
};
