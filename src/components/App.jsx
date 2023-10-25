import React from 'react';
// import { Form } from './Form/Form';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//import { fetchContacts } from 'redux/contacts/contacts.thunk';
// import { selectContacts, selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { Layout } from './Layout/Layout';
// import { Loading } from './Loading/Loading';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { authCurrent } from 'redux/auth/auth.thunk';
import { selectIsRefreshing, selectToken } from 'redux/auth/auth.selectors';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { Loading } from './Loading/Loading';

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

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  ) : (
    <Loading />
  );
};
