import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const logInAdapter = createEntityAdapter();
const initialState = logInAdapter.getInitialState({
  snsAccessToken: null,
  snsType: null,
  snsUuid: null,
  snsEmail: null,
  snsUserName: null,
  snsBirth: null,
  snsGender: null,
});

export const logInSlice = createSlice({
  name: 'logIn',
  initialState: initialState,
  reducers: {
    setSNSAccessToken(state) {
      state.snsAccessToken = 'aaaa';
    },
  },
});

const { reducer, actions } = logInSlice;
export const { setSNSAccessToken } = actions;
export default reducer;
