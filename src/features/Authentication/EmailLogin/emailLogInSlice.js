import {
  createSlice,
  createEntityAdapter,
  // createAsyncThunk,
  // createSelector,
} from '@reduxjs/toolkit';
// import LoginAPI from '../../../services/loginAPI';
// import { normalize, schema } from 'normalizr'

// email, password를 user로부터 입력받는다.
// fetch -> email LogIn Api 를 통해 백엔드로부터 유효한 email과 password인지 확인 한 후,
// 성공 -> response로 access_token과 사용자 기본정보를 가져와 Users Store에 저장한다.
// 실패 -> error message

export const emailLogInAdapter = createEntityAdapter();
const initialState = emailLogInAdapter.getInitialState({
  email: '',
  password: '',
});

export const emailLogInSlice = createSlice({
  name: 'emailLogIn',
  initialState: initialState,
  reducers: {
    initialize(state) {
      state.email = '';
      state.password = '';
    },
    changeField(state, { payload: { key, value } }) {
      if (key === 'email') {
        state.email = value;
      } else if (key === 'password') {
        state.password = value;
      }
    },
  },
});

// 안되는 이유를 모르겠음... 나중에 적용
// export const {
//   email: emailFromEmailLogIn,
//   password: passwordFromEmailLogIn,
// } = emailLogInAdapter.getSelectors((state) => state.emailLogIn);

const { reducer, actions } = emailLogInSlice;
export const { initialize, changeField } = actions;
export default reducer;
