import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Authentication/LogIn/logInSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [],
  enhancers: [],
});
