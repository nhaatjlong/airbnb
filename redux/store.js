import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/auth";
import messageReducer from "./slice/message";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
  devTools: true,
});

export default store;
