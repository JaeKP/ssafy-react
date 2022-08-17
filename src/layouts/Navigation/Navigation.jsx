import { string, shape, arrayOf } from 'prop-types';
import { NavLink } from 'react-router-dom';
// import classNames from 'classnames';
import { SkipToContent } from 'components';
import styles from './Navigation.module.scss';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function Navigation({ list, className, currentPage, ...restProps }) {
  return (
    <>
      <SkipToContent currentPage={currentPage} />
      {list && (
        <nav className={classNames(styles.container)(className)} {...restProps}>
          <ul className={classNames(styles.list)('resetList')}>
            {list.map((item) => (
              <Navigation.Item key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

Navigation.defaultProps = {
  currentPage: '',
};

const NavigationItemType = shape({
  id: string,
  href: string,
  text: string,
});

Navigation.propTypes = {
  list: arrayOf(NavigationItemType),
  className: string,
  currentPage: string,
};

/* -------------------------------------------------------------------------- */

Navigation.Item = function NavigationItem({ item, className, ...restProps }) {
  return (
    <li className={styles.item} {...restProps}>
      <NavLink
        to={item.href}
        className={({ isActive }) => {
          return classNames(styles.link)(
            `${className ?? ''} ${isActive ? styles.active : ''}`
          );
        }}
      >
        {item.text}
      </NavLink>
    </li>
  );
};

Navigation.Item.propTypes = {
  item: NavigationItemType.isRequired,
  className: string,
};
