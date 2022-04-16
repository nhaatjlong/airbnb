import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth";
import { setMessage } from "./message";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Router from "next/router";

if (typeof window !== "undefined") {
  // Perform localStorage action
  var user = JSON.parse(localStorage.getItem("airbnb"));
}

const initialState = user
  ? { isLoggedIn: true, user, isLoading: false }
  : { isLoggedIn: false, user: null };

export const handleAuthenticated = createAsyncThunk(
  "auth/handleAuthenticated",
  () => console.log("Login with Google success")
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const res = await authService.register(username, email, password);
      thunkAPI.dispatch(setMessage(res.data.message));
      toast.success("Successfull");
      Router.back();
      return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      toast.warning(error.response.data);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await authService.login(email, password);
      thunkAPI.dispatch(setMessage(res.message));
      console.log(res.message, "mess");
      Cookies.set("airbnb", res?.token);
      localStorage.setItem("airbnb", JSON.stringify(res.user));
      return { user: res };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      toast.warning(error.response.data);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [handleAuthenticated.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [handleAuthenticated.pending]: (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = true;
    },
    [handleAuthenticated.rejected]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    },

    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const authReducer = authSlice.reducer;
export default authReducer;
