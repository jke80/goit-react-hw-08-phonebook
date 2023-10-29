import { Button, Text, Wrap } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/auth/auth.selectors';
import { authLogout } from 'redux/auth/auth.thunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const token = useSelector(selectToken);
  const handleClick = () => {
    dispatch(authLogout(token));
  };

  return (
    <Wrap>
      <Text>{name},</Text>
      <Button type="button" onClick={handleClick} size='xs'>
        Logout
      </Button>
    </Wrap>
  );
};
