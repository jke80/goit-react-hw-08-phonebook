import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Loading } from 'components/Loading/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';
import { fetchContacts } from 'redux/contacts/contacts.thunk';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <AddContactForm />
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

export default ContactsPage;
