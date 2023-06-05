import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  redirectTo = '/',
  component: Component,
  restricted = false,
  ...routeProps
}) => {
  const { isLoggedIn } = useAuth();

  const shouldRedirect = isLoggedIn && routeProps.restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
