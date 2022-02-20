import authOperations from './authOperations';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: '',
  isRefreshing: false,
};

const authReducer = createReducer(initialState, {
  [authOperations.signUp.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [authOperations.logIn.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [authOperations.logOut.fulfilled]: state => {
    state.user = { name: null, email: null };
    state.token = '';
    state.isLoggedIn = false;
  },
  [authOperations.getCurrentUser.fulfilled]: (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  },
  [authOperations.getCurrentUser.pending]: state => {
    state.isRefreshing = true;
  },
  [authOperations.getCurrentUser.rejected]: state => {
    state.user = { name: null, email: null };
    state.isRefreshing = false;
  },
});

export default authReducer;
