import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Loading } from 'components/Loading/Loading';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Form />
      {!!contacts?.length && <Filter />}
      {(isLoading && !error && !!filteredContacts?.length && (
        <h2>
          Contacts <Loading />
        </h2>
      )) ||
        (isLoading && !error && (
          <h2>
            <Loading />
          </h2>
        )) ||
        (!!filteredContacts?.length && <h2>Contacts</h2>)}

      <ContactList />
    </>
  );
};
