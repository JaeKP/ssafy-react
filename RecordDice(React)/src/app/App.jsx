import { number } from 'prop-types';
import { useCallback, useState, useEffect, useMemo } from 'react';
import { Button, Wrapper, Logo, Dice, Record } from '@/components';
import { getRandomMinMax } from '@/utils/getRandom';
import diceSound from '@/lib/DiceSound';
import styles from './App.module.css';

let clearId;

export default function App({ FPS }) {
  const [headers] = useState([
    { id: 'header-1', scope: 'col', content: '회차' },
    { id: 'header-2', scope: 'col', content: '기록' },
    { id: 'header-3', scope: 'col', content: '합계' },
  ]);

  const [total, setTotal] = useState(0);
  const [values, setValues] = useState([]);
  const [isStart, setIsStart] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    function rollingDice() {
      setDiceContent(getRandomMinMax(1, 6));
      clearId = setTimeout(rollingDice, 1000 / FPS);
    }

    if (isRolling) {
      diceSound.play();
      rollingDice();
    } else {
      diceSound.stop();
      clearTimeout(clearId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FPS, isRolling]);

  const [count, setCount] = useState(1);
  const [diceContent, setDiceContent] = useState('?');

  const handleRollingDice = useCallback(() => {
    if (isStart === null) setIsStart(true);
    setIsRolling(!isRolling);
  }, [isStart, isRolling]);

  const handleRecord = useCallback(() => {
    setCount(count + 1);

    let willTotal = total + diceContent;
    setTotal(willTotal);
    setValues((values) => {
      return [...values, [count, diceContent, willTotal]];
    });
  }, [total, count, diceContent]);

  const handleReset = useCallback(() => {
    setCount(1);
    setValues([]);
    setIsStart(null);
    setIsRolling(false);
    setDiceContent('?');
  }, []);

  const renderRecordItems = useMemo(
    () =>
      values.map((value) => {
        return <Record.Item key={value.toString()} values={value} />;
      }),
    [values]
  );

  return (
    <Wrapper as="article" className={styles.container}>
      <Logo alt="Record Dice (Counter)" />
      <Dice content={diceContent} />
      <Button.Group>
        <Button onClick={handleRollingDice}>주사위 굴리기</Button>
        <Button onClick={handleRecord} disabled={!isStart || isRolling}>
          기록
        </Button>
        <Button onClick={handleReset} disabled={!isStart || isRolling}>
          초기화
        </Button>
      </Button.Group>
      <Record.List
        caption="레코드 리스트"
        headers={headers}
        hidden={values.length === 0}
      >
        {values.length > 0 ? renderRecordItems : null}
      </Record.List>
    </Wrapper>
  );
}

App.defaultProps = {
  FPS: 12,
};

App.propTypes = {
  FPS: number,
};
