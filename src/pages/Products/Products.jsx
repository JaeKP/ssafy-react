/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Spinner, WireframeBox } from 'components';
import { classNames, setDocumentTitle } from 'utils';
import styles from './Products.module.scss';
import { useVowels } from 'hooks';

/* -------------------------------------------------------------------------- */

export default function Products() {
  const { loading, data: vowels } = useVowels();

  if (loading) {
    return (
      <Spinner
        stroke="rgba(38, 227, 192, 0.65)"
        messages={{
          begin: '한글 모음 데이터 로드 중입니다.',
          finish: '한글 모음 데이터 로드가 완료되었습니다.',
        }}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('프로덕트')}</title>
      </Helmet>
      <div className={classNames('page')(styles.container)}>
        <h2 tabIndex={0} className={styles.headline}>
          프로덕트
        </h2>
        <WireframeBox className={styles.grid} style={{ height: null }}>
          {vowels.map((vowel) => (
            <WireframeBox key={vowel.id}>
              <Link className={styles.link} to={`/product/${vowel.uid}`}>
                {vowel.letter}
              </Link>
            </WireframeBox>
          ))}
        </WireframeBox>
      </div>
    </>
  );
}
