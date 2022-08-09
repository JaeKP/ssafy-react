import translator from './translator.js';
import { TranslateContent } from './Contents.js';
import { TranslateButton } from './Button.js';

const { useState } = React;

/**
 * App
 * @returns JSX.Element
 */
const App = () => {
  const [label, setLabel] = useState(() => translator.getLabel());
  const [language, setLanguage] = useState(() => translator.currentMode);
  const [contents, setContents] = useState(() => translator.getContents());

  const handleTranslation = () => {
    translator.toggleLanguageMode();
    setLabel(translator.getLabel());
    setLanguage(translator.currentMode);
    setContents(translator.getContents());
  };
  return (
    <div id="app">
      <TranslateContent language={language} contents={contents} />
      <TranslateButton label={label} onClick={handleTranslation} />
    </div>
  );
};

export default App;
