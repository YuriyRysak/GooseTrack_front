import PropTypes from 'prop-types';
// import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedInUser,
  selectIsRefreshingUser,
} from 'redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedInUser);
  const isRefreshing = useSelector(selectIsRefreshingUser);
  // const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
