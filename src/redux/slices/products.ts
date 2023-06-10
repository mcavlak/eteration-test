import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface ProductState {
  all: Product[];
  selected: Product | null;
}

const initialState: ProductState = {
  all: [],
  selected: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products/"
    ).then((res) => res.json());
    return response;
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products/"
    ).then((res) => res.json());
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.selected = action.payload;
    });
  },
});

export default productSlice.reducer;
