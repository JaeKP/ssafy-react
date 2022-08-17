import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import { getPublic } from '@/utils/getPublic';
import styles from './Logo.module.css';

export const Logo = React.memo(
  ({ as: Component, path, alt, className, ...restProps }) => {
    return (
      <Component
        className={classNames(styles.container, className)}
        {...restProps}
      >
        <img src={getPublic(path)} alt={alt} />
      </Component>
    );
  }
);

Logo.displayName = 'Logo';

Logo.defaultProps = {
  as: 'h1',
  path: 'logo.png',
};

Logo.propTypes = {
  path: string,
  alt: string.isRequired,
  className: string,
};
