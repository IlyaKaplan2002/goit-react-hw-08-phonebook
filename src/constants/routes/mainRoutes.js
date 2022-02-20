import { lazy } from 'react';

const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "ContactsView" */)
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "LoginView" */)
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "RegisterView" */)
);

const mainRoutes = {
  contacts: {
    name: 'Contacts',
    path: '/contacts',
    component: ContactsView,
    privat: true,
    restricted: null,
    redirectTo: '/login',
  },
  login: {
    name: 'Login',
    path: '/login',
    component: LoginView,
    privat: false,
    restricted: true,
    redirectTo: '/contacts',
  },
  register: {
    name: 'Register',
    path: '/register',
    component: RegisterView,
    privat: false,
    restricted: true,
    redirectTo: '/contacts',
  },
};

export default mainRoutes;
