import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/LogIn/logInSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [],
  enhancers: [],
});
