import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      // Additional logic or state updates can be added here
    },
    logout: (state) => {
      state.isAuthenticated = false;
      // Additional logic or state updates can be added here
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { loginSuccess, logout, setUserName } = authSlice.actions;

export default authSlice.reducer;
