import { oneOfType, string, elementType } from 'prop-types';

export function Wrapper({ as: Component, ...restProps }) {
  return <Component {...restProps} />;
}

Wrapper.defaultProps = {
  as: 'div',
};

Wrapper.propTypes = {
  as: oneOfType([string, elementType]),
};
