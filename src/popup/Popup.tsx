import './Popup.css';
import { createRoot } from 'react-dom/client';
import { MemoButton, SvgIcon } from '@/components';
import { useCallback, useLayoutEffect, useState } from 'react';

function Popup(): JSX.Element {
  const [time, setTime] = useState('00:00');
  const [isRun, setIsRun] = useState(false);

  useLayoutEffect(() => {
    chrome.storage.local.get(['isRunning'], ({ isRunning }) => {
      setIsRun(isRunning);
    });

    const updateTime = () => {
      chrome.storage.local.get(
        ['timer', 'timeoutOption'],
        ({ timer, timeoutOption }) => {
          const minutes = `${timeoutOption - Math.ceil(timer / 60)}`.padStart(
            2,
            '0'
          );

          let seconds = '00';
          if (timer % 60 !== 0) {
            seconds = `${60 - (timer % 60)}`.padStart(2, '0');
          }

          setTime(`${minutes}:${seconds}`);
        }
      );
    };

    const clearId = setInterval(updateTime, 1000);
    return () => clearInterval(clearId);
  }, []);

  const handleToggleTimer = useCallback(() => {
    chrome.storage.local.get(['isRunning'], (result) => {
      const updateState = !result.isRunning;
      chrome.storage.local.set({
        isRunning: updateState,
      });
      setIsRun(updateState);
    });
  }, []);

  const handleResetTimer = useCallback(() => {
    chrome.storage.local.set(
      {
        timer: 0,
        isRunning: false,
      },
      () => {
        setIsRun(false);
      }
    );
  }, []);

  return (
    <div className="app">
      <img src="icon.png" alt="토마토 타이머" />
      <time>{time}</time>
      <div className="buttonGroup">
        <MemoButton
          label={`타이머 ${isRun ? '정지' : '시작'}`}
          onClick={handleToggleTimer}
        >
          <SvgIcon type={`${isRun ? 'stop' : 'play'}`} />
        </MemoButton>
        <MemoButton label="타이머 초기화" onClick={handleResetTimer}>
          <SvgIcon type="reset" />
        </MemoButton>
      </div>
    </div>
  );
}

const reactDomRoot = createRoot(document.getElementById('root') as HTMLElement);
reactDomRoot.render(<Popup />);
