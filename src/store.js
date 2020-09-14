import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './features/Authentication/authenticationSlice';
import logInReducer from './features/Authentication/LogIn/logInSlice';
import emailLogInReducer from './features/Authentication/EmailLogIn/emailLogInSlice';
import necessaryUserInfoReducer from './features/Authentication/NecessaryUserInfo/necessaryUserInfoSlice';
import optionalUserInfoReducer from './features/Authentication/OptionalUserInfo/optionalUserInfoSlice';
import confirmPhoneNumberReducer from './features/Authentication/ConfirmPhoneNumber/confirmPhoneNumberSlice';
import agreementReducer from './features/Authentication/Agreement/agreementSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    logIn: logInReducer,
    emailLogIn: emailLogInReducer,
    necessaryUserInfo: necessaryUserInfoReducer,
    optionalUserInfo: optionalUserInfoReducer,
    confirmPhoneNumber: confirmPhoneNumberReducer,
    agreement: agreementReducer,
  },
  middleware: [],
  enhancers: [],
});
