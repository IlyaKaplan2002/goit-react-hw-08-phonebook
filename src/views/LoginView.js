import React from 'react';
import { Navigate } from 'react-router-dom';
import mainRoutes from 'constants/routes/mainRoutes';
import AuthForm from 'components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const LoginView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  const onSubmit = user => dispatch(authOperations.logIn(user));

  if (isLoggedIn) return <Navigate to={mainRoutes.login.redirectTo} />;
  return <AuthForm onSubmit={onSubmit} isLogIn={true} />;
};

export default LoginView;
