import axios from 'axios';

export const PrivateAPI = axios.create({
 baseURL: 'https://connections-api.goit.global',
});

export const PublicAPI = axios.create({
 baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = token => {
  
  PrivateAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  PrivateAPI.defaults.headers.common['Authorization'] = ``;
  
};
