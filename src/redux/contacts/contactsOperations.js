import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsApi } from 'api';
import { Notify } from 'notiflix';

const getContacts = createAsyncThunk('contacts/get', async () => {
  const contacts = await contactsApi.getContacts();
  return contacts;
});

const addContacts = createAsyncThunk('contacts/add', async contact => {
  const { name } = contact;

  const contacts = await contactsApi.getContacts();
  if (contacts.filter(item => item.name === name).length > 0) {
    Notify.failure(`${name} is already in contacts`);
    throw Error('Exists');
  }

  const addedContact = await contactsApi.addContacts(contact);

  return addedContact;
});

const deleteContacts = createAsyncThunk('contacts/delete', async contactId => {
  await contactsApi.deleteContacts(contactId);
  return contactId;
});

const operations = { getContacts, addContacts, deleteContacts };

export default operations;
