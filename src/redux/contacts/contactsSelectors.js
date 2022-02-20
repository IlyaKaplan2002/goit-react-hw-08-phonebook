import { getFilter } from './filter';

const getItems = state => state.contacts.items;

const getFilteredItems = state =>
  getItems(state).filter(({ name }) =>
    name.toLowerCase().includes(getFilter(state))
  );

const selectors = { getItems, getFilteredItems };

export default selectors;
