import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactOperations from './contactsOperations';
import { filterReducer } from './filter';

const itemsReducer = createReducer([], {
  [contactOperations.getContacts.fulfilled]: (_, { payload }) => payload,

  [contactOperations.addContacts.fulfilled]: (items, { payload }) => [
    ...items,
    payload,
  ],

  [contactOperations.deleteContacts.fulfilled]: (items, { payload }) => [
    ...items.filter(item => item.id !== payload),
  ],
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
