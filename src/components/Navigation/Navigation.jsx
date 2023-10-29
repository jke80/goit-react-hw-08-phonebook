import { Spacer, Wrap } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Wrap>
      <NavLink to="/goit-react-hw-08-phonebook/">Home</NavLink>
      <Spacer/>
      {isLoggedIn && (
        <NavLink to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink>
      )}
    </Wrap>
  );
};
