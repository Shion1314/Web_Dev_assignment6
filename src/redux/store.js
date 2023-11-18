

import { configureStore } from '@reduxjs/toolkit';
import authorReducer from './authorSlice';

const store = configureStore({
  reducer: {
    author: authorReducer,
  },
});

export default store;
