import { Button, Container, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/auth/auth.thunk';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const data = dispatch(
        authRegister({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    form.reset();
  };

  return (
    <Container maxW='300px' borderWidth='1px' borderRadius='lg' p='10px'>
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button colorScheme='blue' variant='outline' type="submit">Register</Button>
    </form>
  </Container>);
};
