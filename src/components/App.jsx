import React from 'react';
// import { Form } from './Form/Form';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.thunk';
// import { selectContacts, selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { Layout } from './Layout/Layout';
// import { Loading } from './Loading/Loading';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { authCurrent } from 'redux/auth/auth.thunk';
import { selectToken } from 'redux/auth/auth.selectors';

export const App = () => {
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const token = useSelector(selectToken);
  useEffect(()=>{
    dispatch(authCurrent(token));
  },[dispatch, token]);

  return (
    <Routes>
      <Route path='/goit-react-hw-08-phonebook/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='contacts' element={<ContactsPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
