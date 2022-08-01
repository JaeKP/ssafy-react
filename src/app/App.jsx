import './App.css';
import { useState } from 'react';
import { translator } from '@/api';
import { TranslateContents, TranslateButton } from '@/components';

export default function App() {
  const [lang, setLang] = useState(() => translator.currentLanguageMode);
  const [label, setLabel] = useState(() => translator.getLabel());
  const [contents, setContents] = useState(() => translator.getContents());

  const handleTranslation = () => {
    translator.toggleLanguageMode();
    setLang(translator.currentLanguageMode);
    setLabel(translator.getLabel());
    setContents(translator.getContents());
  };

  return (
    <div id="app">
      <TranslateContents lang={lang} contents={contents} />
      <TranslateButton label={label} onClick={handleTranslation} />
    </div>
  );
}
