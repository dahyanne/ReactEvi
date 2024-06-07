import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";

export const rootReducer = combineReducers({
  auth: auth.reducer,
});

export default configureStore({
  reducer: rootReducer,
});
