import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchContact } from 'redux/contacts/contacts.thunk';
import {
  Button,
  Center,
  Container,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export const EditContactForm = ({ patchedContact, onClose }) => {
  const { id, name, number } = patchedContact;
  const dispatch = useDispatch();
  const [state, setState] = useState({ name, number });
  const toast = useToast();

  const handelChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handelSubmit = e => {
    const { name, number } = state;
    e.preventDefault();
    dispatch(patchContact({ id, name, number }));
    toast({
      title: 'Edit contact.',
      description: `Contact ${name} edited successfully`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Container maxW="300px" borderWidth="1px" borderRadius="lg" p="10px">
      <form onSubmit={handelSubmit}>
        <FormLabel>
          Name
          <Input
            onChange={handelChange}
            value={state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            onChange={handelChange}
            value={state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Center>
          <Button
            colorScheme="blue"
            variant="outline"
            type="submit"
            leftIcon={<EditIcon />}
          >
            Edit Contact
          </Button>
        </Center>
      </form>
    </Container>
  );
};
