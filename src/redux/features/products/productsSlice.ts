import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};
const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
