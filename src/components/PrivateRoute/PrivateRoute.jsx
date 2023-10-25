import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/goit-react-hw-08-phonebook/login" />
  );
};
