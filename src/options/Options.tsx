import './Options.css';
import { createRoot } from 'react-dom/client';
import { Headline } from '@/components/Headline';
import iconPath from '@/static/icon.png';

function Options(): JSX.Element {
  return (
    <div className="app">
      <Headline as="h1">토마토 타이머 옵션</Headline>
      <p>익스텐션 옵션을 구성합니다.</p>
      <img src={iconPath} alt="React" />
    </div>
  );
}

const reactDomRoot = createRoot(document.getElementById('root') as HTMLElement);
reactDomRoot.render(<Options />);
