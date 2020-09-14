import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const authenticationAdapter = createEntityAdapter();
const initialState = authenticationAdapter.getInitialState({
  snsType: null,
  snsAccessToken: null,
  accessToken: null,
  me: null,
});

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    setAccessToken(state) {
      state.accessToken = 'access_token';
    },
    logOut(state) {
      state.accessToken = null;
    },
  },
});

const { reducer, actions } = authenticationSlice;
export const { setAccessToken, logOut } = actions;
export default reducer;
