import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_ITEMS } from "lib/helpers/constants";

const initialState = {
  currentUser: {},
  loading: false,
  loggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
