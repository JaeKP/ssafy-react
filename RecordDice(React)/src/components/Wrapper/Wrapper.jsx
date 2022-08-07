import { forwardRef } from 'react';
import { oneOfType, string, elementType } from 'prop-types';

export const Wrapper = forwardRef(function _Wrapper(
  { as: Component, ...restProps },
  ref
) {
  return <Component ref={ref} {...restProps} />;
});

Wrapper.defaultProps = {
  as: 'div',
};

Wrapper.propTypes = {
  as: oneOfType([string, elementType]),
};

Wrapper.displayName = 'Wrapper';
