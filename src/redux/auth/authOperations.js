import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { Notify } from 'notiflix';
import { _axios } from 'api';
import { authSelectors } from '.';

const token = {
  set(token) {
    _axios.defaults.headers.common.Authorization = token;
  },

  unset() {
    _axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk('auth/signUp', async user => {
  try {
    const res = await authApi.signUp(user);
    token.set(res.token);
    return res;
  } catch (error) {
    Notify.failure('Email exists!');
    throw new Error(error);
  }
});

const logIn = createAsyncThunk('auth/logIn', async user => {
  try {
    const res = await authApi.logIn(user);
    token.set(res.token);
    return res;
  } catch (error) {
    Notify.failure('Wrong email or password!');
    throw new Error(error);
  }
});

const logOut = createAsyncThunk('auth/logOut', async user => {
  try {
    await authApi.logOut(user);
    token.unset();
  } catch (error) {
    Notify.failure('Your token is bad!');
    throw new Error(error);
  }
});

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const persistedToken = authSelectors.getToken(thunkAPI.getState());
    if (token) {
      token.set(persistedToken);
      try {
        const res = await authApi.getCurrentUser();
        return res;
      } catch (error) {
        Notify.failure('Your token is bad!');
        throw new Error(error);
      }
    }
  }
);

const operations = { signUp, logIn, logOut, getCurrentUser };

export default operations;
