import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { addContact } from 'redux/contacts/contacts.thunk';
import { Button, Container, FormLabel, Input, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';


const INITIAL_STATE = {
  name: '',
  number: '',
};

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const toast = useToast();
  
  const handelChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handelSubmit = e => {
    const { name, number } = state;
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      toast({
        title: 'Add contact.',
        description: `${name} is already in contacts`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return;
    }
    dispatch(addContact({ name, number }));
    toast({
      title: 'Add contact.',
      description: `Contact ${name} added successfully`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setState(INITIAL_STATE);
  };

  return (
    <Container maxW='300px' borderWidth='1px' borderRadius='lg' p='10px'>
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
      <Button type="submit" leftIcon={<AddIcon/>}>Add Contact</Button>
    </form>
    </Container>
  );
};
