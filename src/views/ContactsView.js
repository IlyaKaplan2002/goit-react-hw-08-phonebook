import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import mainRoutes from 'constants/routes/mainRoutes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const ContactsView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) return <Navigate to={mainRoutes.contacts.redirectTo} />;

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default ContactsView;
