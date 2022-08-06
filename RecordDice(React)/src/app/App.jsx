import styles from './App.module.css';
import { Button, Wrapper, Logo, Dice, Record } from '@/components';

export default function App() {
  return (
    <Wrapper as="article" className={styles.container}>
      <Logo alt="Record Dice (Counter)" />
      <Dice />
      <Button.Group>
        <Button>주사위 굴리기</Button>
        <Button disabled>기록</Button>
        <Button disabled>초기화</Button>
      </Button.Group>
      <Record.List
        caption="레코드 리스트"
        headers={[
          { id: 'header-1', scope: 'col', content: '회차' },
          { id: 'header-2', scope: 'col', content: '기록' },
          { id: 'header-3', scope: 'col', content: '합계' },
        ]}
      >
        <Record.Item values={[1, 6, 6]} />
      </Record.List>
    </Wrapper>
  );
}
