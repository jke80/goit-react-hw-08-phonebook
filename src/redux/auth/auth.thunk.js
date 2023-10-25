import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  PrivateAPI,
  PublicAPI,
  clearAuthHeader,
  setAuthHeader,
} from 'http/http';

//creds = {name, email, password}
export const authRegister = createAsyncThunk(
  'auth/register',
  async (creds, thunkAPI) => {
    try {
      const resp = await PublicAPI.post('/users/signup', creds);
      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//creds = {email, password}
export const authLogin = createAsyncThunk(
  'auth/login',
  async (creds, thunkAPI) => {
    try {
      const resp = await PublicAPI.post('/users/login', creds);
      console.log(resp);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const resp = await PrivateAPI.post('/users/logout');
      clearAuthHeader();
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authCurrent = createAsyncThunk(
  'auth/current',
  async (token, thunkAPI) => {
    try {
      setAuthHeader(token);
      const resp = await PrivateAPI.get('/users/current');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
