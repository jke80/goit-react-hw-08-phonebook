//import { ContactListStyled } from './ContactListStyled';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/contacts/contacts.selectors';
import { useSelector } from 'react-redux';
import { Container, List } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      <List w="600px" spacing="3">
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </List>
    </Container>
  );
};
