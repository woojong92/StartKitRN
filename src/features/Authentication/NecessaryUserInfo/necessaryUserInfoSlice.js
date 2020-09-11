import {
  createSlice,
  createEntityAdapter,
  // createAsyncThunk,
  // createSelector,
} from '@reduxjs/toolkit';

export const necessaryUserInfoAdapter = createEntityAdapter();
const initialState = necessaryUserInfoAdapter.getInitialState({
  emailId: '',
  emailAddress: '',
  password: '',
});

export const necessaryUserInfoSlice = createSlice({
  name: 'emailLogIn',
  initialState: initialState,
  reducers: {
    initialize(state) {
      state.emailId = '';
      state.emailAddress = '';
      state.password = '';
    },
    changeField(state, { payload: { key, value } }) {
      if (key === 'emailId') {
        state.emailId = value;
      } else if (key === 'emailAddress') {
        state.emailAddress = value;
      } else if (key === 'password') {
        state.password = value;
      }
    },
  },
});

const { reducer, actions } = necessaryUserInfoSlice;
export const { initialize, changeField } = actions;
export default reducer;
