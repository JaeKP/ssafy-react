import './Contents.css';

export const TranslateContents = ({
  lang,
  contents: { headline, description },
}) => {
  return (
    <div className="contents" lang={lang}>
      <h1>{headline}</h1>
      <p>{description}</p>
    </div>
  );
};
