import { Spacer, Wrap, WrapItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <Wrap>
          <WrapItem>
            <NavLink to="/goit-react-hw-08-phonebook/login">Log in</NavLink>
          </WrapItem>
          <Spacer />
          <WrapItem>
            <NavLink to="/goit-react-hw-08-phonebook/register">
              Register
            </NavLink>
          </WrapItem>
        </Wrap>
      )}
    </>
  );
};
