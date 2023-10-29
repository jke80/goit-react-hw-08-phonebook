import { Button, Center, Container, FormLabel, Input, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/auth/auth.thunk';

export const LoginForm = () => {
  const dispatch = useDispatch();
const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(
        authLogin({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      
      toast({
        title: 'Login user.',
        description: `User login success`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Login user.',
        description: `User login error`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    form.reset();
  };

  return (
    <Container maxW="300px" borderWidth="1px" borderRadius="lg" p="10px">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <Input type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password
          <Input type="password" name="password" />
        </FormLabel>
        <Center>
          <Button colorScheme="blue" variant="outline" type="submit">
           Login
          </Button>
        </Center>
      </form>
    </Container>
  );
};
