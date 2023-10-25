import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <div>
          <NavLink to="/goit-react-hw-08-phonebook/login">log in</NavLink>
          <NavLink to="/goit-react-hw-08-phonebook/register">register</NavLink>
        </div>
      )}
    </>
  );
};
