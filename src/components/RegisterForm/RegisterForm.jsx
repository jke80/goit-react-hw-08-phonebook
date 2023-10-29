import {
  Button,
  Center,
  Container,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
// import { Loading } from 'components/Loading/Loading';
import { useDispatch } from 'react-redux';
// import { selectIsLoading } from 'redux/auth/auth.selectors';
import { authLogin, authRegister } from 'redux/auth/auth.thunk';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const toast = useToast();
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
       await dispatch(
        authRegister({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      
      toast({
        title: 'Create user.',
        description: `User created`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      dispatch(
        authLogin({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    } catch (e) {
      toast({
        title: 'Create user.',
        description: `User creation error`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.log('rejected', e);
    }

    form.reset();
  };

  return (
    <Container maxW="300px" borderWidth="1px" borderRadius="lg" p="10px">
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
        <Center>
          <Button colorScheme="blue" variant="outline" type="submit">
            <Text>Register</Text>
          </Button>
        </Center>
      </form>
    </Container>
  );
};
