import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// https://connections-api.herokuapp.com

const userInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

//creds = {name, email, password}
export const authRegister = createAsyncThunk(
  'auth/register',
  async (creds, thunkAPI) => {
    try {
      const resp = await userInstance.post('/users/signup', creds);
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
      const resp = await userInstance.post('/users/login', creds);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (token, thunkAPI) => {
    try {
      userInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const resp = await userInstance.post('/users/logout');
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
        userInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const resp = await userInstance.get('/users/current');
      return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );