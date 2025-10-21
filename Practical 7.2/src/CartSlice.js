import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { count: 0 },
  reducers: {
    addItem: (state) => { state.count += 1 },
    removeItem: (state) => { if (state.count > 0) state.count -= 1 }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
