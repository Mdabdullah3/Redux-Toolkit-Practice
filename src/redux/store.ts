import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productsSlice from './features/products/productsSlice';
import { api } from './api/apiSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productsSlice,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
