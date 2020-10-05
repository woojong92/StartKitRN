import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  onKakaoButtonPress,
  onNaverButtonPress,
} from '~/services/Authentication';

export const logInAdapter = createEntityAdapter();
const initialState = logInAdapter.getInitialState({
  entities: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null,

  userEmail: null,
  userEmailType: null,
  userPassword: null,
  userSnsKey: null,
});

const fetchSNSLogin = createAsyncThunk(
  'logIn/fetchSNSLogin',
  async (snsType, { getState, requestId }) => {
    const { loading, currentRequestId } = getState().logIn;
    if (loading !== 'pending' || currentRequestId !== requestId) {
      return;
    }

    if (snsType === 'kakao') {
      const respnse = await onKakaoButtonPress();
      return respnse.data;
    } else if (snsType === 'naver') {
      const respnse = await onNaverButtonPress();
      return respnse.data;
    } else if (snsType === 'google') {
      const respnse = await onGoogleButtonPress();
      return respnse.data;
    } else if (snsType === 'facebook') {
      const respnse = await onFacebookButtonPress();
      return respnse.data;
    }
  },
);

// import logInAPI from './logInAPI';

// const fetchLogIn = createAsyncThunk(
//   'logIn/fetchLogIn',
//   async ({ getState, requestId }) => {
//     const {
//       loading,
//       currentRequestId,
//       // error,
//       userEmail,
//       userEmailType,
//       userPassword,
//       userSnsKey,
//     } = getState().logIn;
//     if (loading !== 'pending' || currentRequestId !== requestId) {
//       return;
//     }
//     const params = { userEmail, userEmailType, userPassword, userSnsKey };
//     const response = await logInAPI(params);
//     return response;
//   },
// );

export const logInSlice = createSlice({
  name: 'logIn',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchSNSLogin.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchSNSLogin.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.entities.push(action.payload);
        state.currentRequestId = undefined;
      }
    },
    [fetchSNSLogin.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

const { reducer, actions } = logInSlice;
export const { setSNSAccessToken } = actions;
export default reducer;
