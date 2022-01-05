import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "lib/api/services";
import { LOCAL_STORAGE_ITEMS, ROLES } from "lib/helpers/constants";

export const currentRole = createAsyncThunk("auth/currentRole", async () => {
  const res = await AuthService.currentRole();
  return res.data;
});

const initialState = {
  currentUser: {},
  currentRole: {
    role: ROLES.GUEST,
    resources: [],
  },
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
  extraReducers: (builder) => {
    builder.addCase(currentRole.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(currentRole.fulfilled, (state, action) => {
      state.loading = false;
      state.currentRole = action.payload;
    });

    builder.addCase(currentRole.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const logout = () => (dispatch, getState) => {
  const currentUserId = getState().auth.currentUser.id;
  const refreshToken = localStorage.getItem(LOCAL_STORAGE_ITEMS.REFRESH_TOKEN);
  if (refreshToken && currentUserId)
    AuthService.logout(refreshToken, currentUserId);
  localStorage.clear();
  dispatch(authSlice.actions.logout());
};

export const { login } = authSlice.actions;

export default authSlice.reducer;
