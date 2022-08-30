import './Popup.css';
import { createRoot } from 'react-dom/client';
import { Headline } from '@/components/Headline';

function Popup(): JSX.Element {
  return (
    <div className="app">
      <Headline as="h1">토마토 타이머</Headline>
      <p>익스텐션 프로그램을 작성합니다.</p>
      <img src="icon.png" alt="React" />
    </div>
  );
}

const reactDomRoot = createRoot(document.getElementById('root') as HTMLElement);
reactDomRoot.render(<Popup />);
