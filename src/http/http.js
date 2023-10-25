import axios from 'axios';

export const PrivateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const PublicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  console.log('setAuthHeader');
  PrivateAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  PrivateAPI.defaults.headers.common['Authorization'] = ``;
  console.log('clearAuthHeader');
};
