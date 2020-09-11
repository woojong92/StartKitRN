import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Authentication/LogIn/logInSlice';
import emailLogInReducer from './features/Authentication/EmailLogIn/emailLogInSlice';
import necessaryUserInfoReducer from './features/Authentication/NecessaryUserInfo/necessaryUserInfoSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    emailLogIn: emailLogInReducer,
    necessaryUserInfo: necessaryUserInfoReducer,
  },
  middleware: [],
  enhancers: [],
});
