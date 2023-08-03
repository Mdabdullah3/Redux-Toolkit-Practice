/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from './../../../types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Types
interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const extingCart = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (extingCart) {
        extingCart.quantity = extingCart.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    // Remove single Product Ouantity from cart
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const extingCart = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (extingCart && extingCart.quantity! > 1) {
        extingCart.quantity = extingCart.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },

    // Remove a Prouct  cart
    removeCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeCart, removeOne } = CartSlice.actions;
export default CartSlice.reducer;
