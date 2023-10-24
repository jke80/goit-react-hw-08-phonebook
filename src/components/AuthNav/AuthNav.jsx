import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/goit-react-hw-08-phonebook/login">log in</NavLink>
      <NavLink to="/goit-react-hw-08-phonebook/register">register</NavLink>
    </div>
  );
};
