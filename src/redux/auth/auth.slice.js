import { createSlice } from '@reduxjs/toolkit';
import { authCurrent, authLogin, authLogout, authRegister } from './auth.thunk';

const authInitialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authRegister.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isError = null;
        state.isLoading = false;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(authLogin.pending, state => {
        state.isError = null;
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(authLogout.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authLogout.rejected, (state,action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(authCurrent.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(authCurrent.rejected, state => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = true;
      });
  },
});

export default authSlice.reducer;
