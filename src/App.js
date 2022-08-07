import { useEffect } from 'react';
import { useTheme } from 'contexts';
import { Cart } from 'components';
import styles from 'styles/App.module.css';

export default function App() {
  const {
    theme: {
      current,
      value: { forground, background },
    },
    changeTheme,
  } = useTheme();

  useEffect(() => {
    document.body.style.cssText = `
      background: ${background};
      color: ${forground};
    `;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  let willChangeThemeName = current.includes('light') ? 'dark' : 'light';

  return (
    <div className="app">
      <button
        type="button"
        className={styles.controller}
        style={{
          background: forground,
          color: background,
        }}
        onClick={() => changeTheme(willChangeThemeName)}
      >
        <b>{willChangeThemeName.toUpperCase()}</b> 모드 변경
      </button>
      <Cart />
    </div>
  );
}
