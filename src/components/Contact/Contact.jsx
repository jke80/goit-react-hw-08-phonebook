import PropTypes from 'prop-types';

// import { ContactStyled } from './ContactStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
  Wrap,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handelDelete = () => {
    dispatch(deleteContact(id));
    toast({
      title: 'Delete contact.',
      description: `Contact deleted successfully`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <ListItem>
        <VStack spacing={4} align="stretch">
          <Wrap>
            <Avatar size="xs" name={name} />
            <Text>{name} </Text>
            <Spacer />
            <IconButton
              colorScheme="blue"
              variant="outline"
              type="button"
              size="xs"
              aria-label="Delete contact"
              icon={<DeleteIcon />}
              onClick={handelDelete}
            />
          </Wrap>
          <Wrap>
            <PhoneIcon />

            <Text>{number}</Text>
            <Spacer />
            <IconButton
              colorScheme="blue"
              variant="outline"
              type="button"
              size="xs"
              aria-label="Edit contact"
              icon={<EditIcon />}
              onClick={onOpen}
            />
          </Wrap>
        </VStack>
        <Divider />
      </ListItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <EditContactForm
              patchedContact={{ id, name, number }}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
