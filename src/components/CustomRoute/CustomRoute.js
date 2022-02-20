import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const CustomRoute = ({
  privat,
  restricted,
  redirectTo,
  component: Component,
  path,
}) => {
  const isLoggedIn = false;

  if ((privat && !isLoggedIn) || (!privat && restricted && isLoggedIn)) {
    return <Navigate to={redirectTo} />;
  }

  return <Route path={path} element={<Component />} />;
};

export default CustomRoute;
