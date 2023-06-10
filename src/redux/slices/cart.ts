import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {},
    removeFromCart: (state, action: PayloadAction<string>) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
