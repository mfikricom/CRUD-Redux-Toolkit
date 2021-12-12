import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});
