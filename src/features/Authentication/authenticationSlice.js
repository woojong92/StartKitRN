import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const authenticationAdapter = createEntityAdapter();
const initialState = authenticationAdapter.getInitialState({
  snsType: null,
  snsAccessToken: null,
  accessToken: null,
  me: null,
  //
  loading: 'idle',
  currentRequestId: null,
  error: null,

  // 로그인 및 회원가입 필수 정보
  userEmailType: null,
  userEmail: null,
  userPassword: null,
  userSnsKey: null,
  // 추가 입력 정보
  userName: null,
  userNickname: null,
  userGender: null,
  userAddress: null,
  userPhone: null,
  // 약관 동의
  serviceAccept: false,
  locationAccept: false,
  marketingAccept: false,
});

// logIn Action Function
const fetchLogIn = createAsyncThunk(
  'authentication/fetchLogIn',
  async ({ getState, requestId }) => {
    const {
      loading,
      currentRequestId,
      error,
      userEmailType,
      userEmail,
      userPassword,
      userSnsKey,
    } = getState().authentication;

    if (loading !== 'pending' || currentRequestId !== requestId) {
      return;
    }
    // const params = { userEmailType, userEmail, userPassword, userSnsKey };
    // try{

    // }catch(error) {
    //   console.log(error);
    // }

    // const response = await logInAPI(params);
    // return response;
  },
);

// logOut Action Function
// me Action Function

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
    initialize(state) {
      state.userEmailType = '';
      state.userEmail = '';
      state.userPassword = '';
      state.userSnsKey = '';
      state.userName = '';
      state.userNickname = '';
      state.userGender = '';
      state.password = '';
      state.userAddress = '';
      state.userPhone = '';
      state.serviceAccept = '';
      state.locationAccept = '';
      state.marketingAccept = '';
    },
    changeField(state, { payload: { key, value } }) {
      if (key === 'userEmailType') {
        state.userEmailType = value;
      } else if (key === 'userEmail') {
        state.userEmail = value;
      } else if (key === 'userPassword') {
        state.userPassword = value;
      } else if (key === 'userSnsKey') {
        state.userSnsKey = value;
      } else if (key === 'userName') {
        state.userName = value;
      } else if (key === 'userNickname') {
        state.userNickname = value;
      } else if (key === 'userGender') {
        state.userGender = value;
      } else if (key === 'userAddress') {
        state.userAddress = value;
      } else if (key === 'userPhone') {
        state.userPhone = value;
      } else if (key === 'serviceAccept') {
        state.serviceAccept = value;
      } else if (key === 'locationAccept') {
        state.locationAccept = value;
      } else if (key === 'marketingAccept') {
        state.marketingAccept = value;
      }
    },
  },
  extraReducers: {
    [fetchLogIn.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchLogIn.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.entities.push(action.payload);
        state.currentRequestId = undefined;
      }
    },
    [fetchLogIn.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

const { reducer, actions } = authenticationSlice;
export const { setAccessToken, logOut, changeField, initialize } = actions;
export default reducer;
