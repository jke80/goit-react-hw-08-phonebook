import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Loading } from 'components/Loading/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';
import { fetchContacts } from 'redux/contacts/contacts.thunk';
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Center>
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={onOpen}
          leftIcon={<AddIcon />}
        >
          Add contact
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AddContactForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {!!contacts?.length && <Filter />}
      {isLoading && !error && <Loading />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
