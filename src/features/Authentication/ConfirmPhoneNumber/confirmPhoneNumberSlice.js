import {
  createSlice,
  createEntityAdapter,
  // createAsyncThunk,
  // createSelector,
} from '@reduxjs/toolkit';

export const confirmPhoneNumberAdapter = createEntityAdapter();
const initialState = confirmPhoneNumberAdapter.getInitialState({
  phoneNumber: '',
  certificationNumber: '',
});

export const confirmPhoneNumberSlice = createSlice({
  name: 'confirmPhoneNumber',
  initialState: initialState,
  reducers: {
    initialize(state) {
      state.phoneNumber = '';
      state.certificationNumber = '';
    },
    changeField(state, { payload: { key, value } }) {
      if (key === 'phoneNumber') {
        state.phoneNumber = value;
      } else if (key === 'certificationNumber') {
        state.certificationNumber = value;
      }
    },
  },
});

const { reducer, actions } = confirmPhoneNumberSlice;
export const { initialize, changeField } = actions;
export default reducer;
