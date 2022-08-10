import styles from './App.module.css';
import reactLogo from '@/assets/react.svg';
import { Button } from '@/components';

export default function App() {
  return (
    <div className={styles.container} lang="en">
      <h1>React + Vite</h1>
      <figure>
        <img src={reactLogo} alt="React" height={100} />
      </figure>
      <Button className="extendButton">read a document</Button>
      <Button>write a fiction</Button>
    </div>
  );
}
