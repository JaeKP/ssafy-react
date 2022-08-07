import { arrayOf, exact, node, string } from 'prop-types';
import styles from './styles.module.scss';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

/* -------------------------------------------------------------------------- */

export function BaseLayout({ navigation, children, ...restProps }) {
  return (
    <div className={styles.wireframe} {...restProps}>
      <Header className="wireframeBox">
        <Navigation list={navigation} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <div className="wireframeBox"></div>
      </Footer>
    </div>
  );
}

BaseLayout.propTypes = {
  navigation: arrayOf(exact({ id: string, href: string, text: string })),
  children: node,
};
