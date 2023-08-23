import { configureStore } from '@reduxjs/toolkit';
import soreReducer from "./storeSlice";

const store = configureStore({
  reducer: {
    paragraph: soreReducer
  }
});

export default store;
