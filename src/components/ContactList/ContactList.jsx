//import { ContactListStyled } from './ContactListStyled';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/contacts/contacts.selectors';
import { useSelector } from 'react-redux';
import { Container, OrderedList } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Container w='100%'>
      <OrderedList spacing={5}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </OrderedList>
    </Container>
  );
};
