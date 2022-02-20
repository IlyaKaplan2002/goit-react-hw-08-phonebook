import _axios from './constants';
import { getData } from './helpers';

const signUp = user => _axios.post('/users/signup', user).then(getData);

const logIn = user => _axios.post('/users/login', user).then(getData);

const logOut = () => _axios.post('/users/logout');

const getCurrentUser = () => _axios.get('/users/current').then(getData);

const authApi = {
  signUp,
  logIn,
  logOut,
  getCurrentUser,
};

export default authApi;
