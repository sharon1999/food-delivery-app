import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push({ ...action.payload });
    },
    addQuantity(state, action) {
      const item = state.items.find((item) => item?.id === action.payload?.id);
      if (item) {
        item.quantity++;
      }
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item?.id === action.payload?.id);
      if(item.quantity === 1){
        state.items = state.items.filter((product) => product?.id !== item?.id);
      }
      
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    clearCart(state) {
      state.items.length = 0;
    },
  },
});

export const { addItem, addQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
