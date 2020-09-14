import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Authentication/LogIn/logInSlice';
import emailLogInReducer from './features/Authentication/EmailLogIn/emailLogInSlice';
import necessaryUserInfoReducer from './features/Authentication/NecessaryUserInfo/necessaryUserInfoSlice';
import optionalUserInfoReducer from './features/Authentication/OptionalUserInfo/optionalUserInfoSlice';
import confirmPhoneNumberReducer from './features/Authentication/ConfirmPhoneNumber/confirmPhoneNumberSlice';
import agreementReducer from './features/Authentication/Agreement/agreementSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    emailLogIn: emailLogInReducer,
    necessaryUserInfo: necessaryUserInfoReducer,
    optionalUserInfo: optionalUserInfoReducer,
    confirmPhoneNumber: confirmPhoneNumberReducer,
    agreement: agreementReducer,
  },
  middleware: [],
  enhancers: [],
});
