import { combineReducers } from 'redux';
import contactsSlice from './contacts/contacts.slice';
import filterSlice from './filter/filter.slice';
import authSlice from './auth/auth.slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice),
  contacts: contactsSlice,
  filter: filterSlice,
});
