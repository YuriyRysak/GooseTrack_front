import PropTypes from 'prop-types';
// import { useAuth } from 'components/hooks';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedInUser } from 'redux/auth/selectors';

const PublicRoute = ({
  redirectTo = '/',
  component: Component,
  restricted = false,
  ...routeProps
}) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedInUser);

  const shouldRedirect = isLoggedIn && routeProps.restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
