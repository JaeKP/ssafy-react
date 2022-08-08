import { useCallback } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { SkipToContent } from 'components';
import { useAuth } from 'contexts';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function Navigation({ list, className, ...restProps }) {
  const { currentUser } = useAuth();

  return (
    <>
      <SkipToContent />
      {list && (
        <nav className={classNames(styles.container)(className)} {...restProps}>
          <ul className={classNames(styles.list)('resetList')}>
            {list.map((item) => {
              if (!currentUser && item.href.includes('dashboard')) {
                return null;
              }
              return <Navigation.Item key={item.id} item={item} />;
            })}
          </ul>
        </nav>
      )}
    </>
  );
}

const NavigationItemType = shape({
  id: string,
  href: string,
  text: string,
});

Navigation.propTypes = {
  list: arrayOf(NavigationItemType),
  className: string,
};

/* -------------------------------------------------------------------------- */

Navigation.Item = function NavigationItem({ item, ...restProps }) {
  const handleSkipToContent = useCallback((e) => {
    if (e.key === 'Enter') {
      setTimeout(() => document.getElementById('content').focus(), 200);
    }
  }, []);

  const { pathname } = useLocation();

  return (
    <li className={styles.item} {...restProps}>
      <NavLink
        to={item.href}
        className={({ isActive }) => {
          return classNames(styles.link)(
            isActive ||
              (item.text.includes('프로덕트') && pathname.match(/product/))
              ? styles.active
              : ''
          );
        }}
        onKeyUp={handleSkipToContent}
      >
        {item.text}
      </NavLink>
    </li>
  );
};

Navigation.Item.propTypes = {
  item: NavigationItemType.isRequired,
};
