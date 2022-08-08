/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Helmet } from 'react-helmet-async';
import { classNames, setDocumentTitle } from 'utils';
import { WireframeBox } from 'components';
import styles from './Landing.module.scss';

/* -------------------------------------------------------------------------- */

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('홈')}</title>
      </Helmet>
      <div className={classNames('page')(styles.container)}>
        <h2 tabIndex={0} className={styles.headline}>
          홈
        </h2>
        <WireframeBox className={classNames('child')(styles.grid)}>
          <WireframeBox style={{ height: null }} />
          <WireframeBox
            className={classNames('children')(styles.gridItem)}
            style={{ height: null }}
          />
          <WireframeBox style={{ height: null }} />
        </WireframeBox>
      </div>
    </>
  );
}
