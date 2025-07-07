import { createSlice } from "@reduxjs/toolkit";

const signSlice = createSlice({
  name: "sign",
  initialState: { signUp: true },
  reducers: {
    toggle: (state) => {
      state.signUp = !state.signUp;
    },
  },
});

export const { toggle } = signSlice.actions;
export default signSlice.reducer;
