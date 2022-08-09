/**
 * TranslateContent
 * @param {language, contents, ...restProps} props
 * @returns JSX.Element
 */
export const TranslateContent = ({
  language,
  contents: { headline, description },
  ...restProps
}) => (
  <div className="contents" lang={language} {...restProps}>
    <h1>{headline}</h1>
    <p>{description}</p>
  </div>
);
