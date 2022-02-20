import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import ContactItem from './ContactItem';

const ContactList = () => {
  const items = useSelector(contactsSelectors.getFilteredItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <ListGroup as="ol">
      {items.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ListGroup>
  );
};

export default ContactList;
