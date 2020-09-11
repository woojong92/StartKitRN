import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Authentication/LogIn/logInSlice';
import emailLogInReducer from './features/Authentication/EmailLogIn/emailLogInSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    emailLogIn: emailLogInReducer,
  },
  middleware: [],
  enhancers: [],
});
