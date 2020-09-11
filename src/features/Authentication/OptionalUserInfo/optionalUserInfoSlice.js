import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const optionalUserInfoAdapter = createEntityAdapter();
const initialState = optionalUserInfoAdapter.getInitialState({
  userName: '',
  birth: '',
  gender: '',
});

export const optionalUserInfoSlice = createSlice({
  name: 'optionalUserInfo',
  initialState: initialState,
  reducers: {
    initialize(state) {
      state.userName = '';
      state.birth = '';
      state.gender = '';
    },
    changeField(state, { payload: { key, value } }) {
      if (key === 'userName') {
        state.userName = value;
      } else if (key === 'birth') {
        state.birth = value;
      } else if (key === 'gender') {
        state.gender = value;
      }
    },
  },
});

const { reducer, actions } = optionalUserInfoSlice;
export const { initialize, changeField } = actions;
export default reducer;
