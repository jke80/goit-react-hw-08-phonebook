import PropTypes from 'prop-types';

// import { ContactStyled } from './ContactStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import {
  Avatar,
  IconButton,
  ListItem,
  Spacer,
  Text,
  Wrap,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const handelDelete = () => {
    toast({
      title: 'Delete contact.',
      description: `Contact deleted successfully`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      <Wrap>
        <IconButton
          type="button"
          size='xs'
          aria-label="Delete contact"
          icon={<DeleteIcon />}
          onClick={handelDelete}
        />
        <Avatar size='xs' name={name} />
        <Text >{name} </Text>
        <PhoneIcon />
        <Text >{number}</Text>
        <Spacer />
      </Wrap>
    </ListItem>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
