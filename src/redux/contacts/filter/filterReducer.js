import { createReducer } from '@reduxjs/toolkit';
import changeFilter from './filterActions';

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

export default filterReducer;
