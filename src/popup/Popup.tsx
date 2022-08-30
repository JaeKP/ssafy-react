import './Popup.css';
import { createRoot } from 'react-dom/client';
import { Headline } from '@/components/Headline';

function Popup(): JSX.Element {
  return (
    <div className="app">
      <Headline as="h1">Chrome 익스텐션 보일러플레이트 with React</Headline>
    </div>
  );
}

const reactDomRoot = createRoot(document.getElementById('root') as HTMLElement);
reactDomRoot.render(<Popup />);
