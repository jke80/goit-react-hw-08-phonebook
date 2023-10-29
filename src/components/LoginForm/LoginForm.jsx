import { Button, Container, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/auth/auth.thunk';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authLogin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxW='300px' borderWidth='1px' borderRadius='lg' p='10px'>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <Input type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password
          <Input type="password" name="password" />
        </FormLabel>
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};
