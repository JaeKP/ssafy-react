import { bool, node } from 'prop-types';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }
  return children;
}

ProtectedRoute.defaultProps = {
  isAllowed: false,
};

ProtectedRoute.propTypes = {
  isAllowed: bool,
  children: node,
};
