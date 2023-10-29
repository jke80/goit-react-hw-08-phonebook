import { Center, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Center h='100px'>{isLoggedIn ? <Heading>Welcome, {name}</Heading> : <Heading>Please log in</Heading>}</Center>
  );
};

export default HomePage;
