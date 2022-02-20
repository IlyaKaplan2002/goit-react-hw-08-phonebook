import _axios from './constants';
import { getData, getId } from './helpers';

const getContacts = () => _axios.get('contacts').then(getData);

const addContacts = contact => _axios.post('contacts', contact).then(getData);

const deleteContacts = id => _axios.delete(`contacts/${id}`).then(getId);

const contactsApi = { getContacts, addContacts, deleteContacts };

export default contactsApi;
