import { createSlice } from '@reduxjs/toolkit';
import { authCurrent, authLogin, authLogout, authRegister } from './auth.thunk';

const authInitialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
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
