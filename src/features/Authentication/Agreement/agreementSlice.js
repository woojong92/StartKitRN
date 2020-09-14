import {
  createSlice,
  createEntityAdapter,
  // createAsyncThunk,
  // createSelector,
} from '@reduxjs/toolkit';

export const agreementAdapter = createEntityAdapter();
const initialState = agreementAdapter.getInitialState({
  useAndPrivacyAgreement: false,
  locationAgreement: false,
  marketingAgreement: false,
});

export const agreementSlice = createSlice({
  name: 'agreement',
  initialState: initialState,
  reducers: {
    initialize(state) {
      state.useAndPrivacyAgreement = false;
      state.locationAgreement = false;
      state.marketingAgreement = false;
    },
    changeField(state, { payload: { key, value } }) {
      if (key === 'useAndPrivacyAgreement') {
        state.useAndPrivacyAgreement = value;
      } else if (key === 'locationAgreement') {
        state.locationAgreement = value;
      } else if (key === 'marketingAgreement') {
        state.marketingAgreement = value;
      }
    },
  },
});

const { reducer, actions } = agreementSlice;
export const { initialize, changeField } = actions;
export default reducer;
