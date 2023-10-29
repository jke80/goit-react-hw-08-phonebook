import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { authCurrent } from 'redux/auth/auth.thunk';
import { selectIsRefreshing, selectToken } from 'redux/auth/auth.selectors';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { Loading } from './Loading/Loading';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (isRefreshing) return;
    dispatch(authCurrent(token));
  }, [dispatch, token, isRefreshing]);

  return isRefreshing ? (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="" element={<RestrictedRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/goit-react-hw-08-phonebook/" />} />
      </Route>
    </Routes>
  ) : (
    <Loading />
  );
};
