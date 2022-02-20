import AuthForm from 'components/AuthForm';
import mainRoutes from 'constants/routes/mainRoutes';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const RegisterView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  const onSubmit = user => dispatch(authOperations.signUp(user));

  if (isLoggedIn) return <Navigate to={mainRoutes.register.redirectTo} />;
  return <AuthForm onSubmit={onSubmit} isLogIn={false} />;
};

export default RegisterView;
