import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onDelete = () => dispatch(contactsOperations.deleteContacts(id));

  return (
    <ListGroup.Item
      as="li"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>
        {name}: {number}
      </span>
      <Button onClick={onDelete} type="button">
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
