import './Options.css';
import { createRoot } from 'react-dom/client';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Headline, MemoButton, SvgIcon } from '@/components';
import iconPath from '@/static/icon.png';

const MIN = 1;
const MAX = 60;
const VALUE = 25;

function Options(): JSX.Element {
  const [timeoutOption, setTimeoutOption] = useState<number | string>(VALUE);

  useLayoutEffect(() => {
    chrome.storage.local.get(['timeoutOption'], (result) => {
      setTimeoutOption(result.timeoutOption);
    });
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = Number(e.target.value);
    if (value < MIN || value > MAX) {
      value = VALUE;
    }
    setTimeoutOption(value);
  };

  const handleSave = useCallback(() => {
    chrome.storage.local.set({
      timeoutOption,
      timer: 0,
      isRunning: false,
    });
  }, [timeoutOption]);

  return (
    <div className="app">
      <Headline as="h1">토마토 타이머 옵션</Headline>
      <p>알림을 받을 타이머 시간(1 ~ 60분)을 설정하세요.</p>
      <div className="control">
        <label>
          타임아웃(분) :{' '}
          <input
            type="number"
            min={MIN}
            max={MAX}
            value={timeoutOption}
            onChange={handleChange}
          />
        </label>
        <MemoButton label="저장" onClick={handleSave}>
          <SvgIcon type="send" />
        </MemoButton>
      </div>
      <img src={iconPath} alt="토마토 타이머" />
    </div>
  );
}

const reactDomRoot = createRoot(document.getElementById('root') as HTMLElement);
reactDomRoot.render(<Options />);
