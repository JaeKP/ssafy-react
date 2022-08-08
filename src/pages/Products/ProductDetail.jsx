import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as SvgBackLink } from 'assets/arrowLeft.svg';
import { A11yHidden, WireframeBox, Spinner } from 'components';
import styles from './Products.module.scss';
import { classNames, setDocumentTitle } from 'utils';
import { useVowel } from 'hooks';

/* -------------------------------------------------------------------------- */

export default function ProductDetail() {
  const { uid } = useParams();
  const { loading, data: vowel } = useVowel(uid);

  if (loading) {
    return (
      <Spinner
        stroke="rgba(38, 227, 192, 0.65)"
        messages={{
          begin: `${uid} 데이터 로드 중입니다.`,
          finish: `${uid} 데이터 로드가 완료되었습니다.`,
        }}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {setDocumentTitle(`${vowel?.letter ?? `${uid}로딩 중...`}`)}
        </title>
      </Helmet>
      <div className={classNames('page')(styles.container)}>
        <div className={styles.wrapper}>
          <WireframeBox className={styles.grid} style={{ height: null }}>
            <table className={styles.table}>
              <A11yHidden as="caption">
                한글 자음 ${vowel.letter} 풀이
              </A11yHidden>
              <tbody>
                <tr>
                  <th scole="row">이름</th>
                  <td>{vowel.name}</td>
                </tr>
                <tr>
                  <th scole="row">모양</th>
                  <td>{vowel.shape}</td>
                </tr>
                <tr>
                  <th scole="row">소리</th>
                  <td>{vowel.sounds}</td>
                </tr>
              </tbody>
            </table>
          </WireframeBox>
          <Link
            to="/products"
            className={styles.backLink}
            aria-label="뒤로 가기"
          >
            <SvgBackLink />
          </Link>
        </div>
      </div>
    </>
  );
}
