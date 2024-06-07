import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    autenticado: false,
  },
  reducers: (create) => ({
    login: (state, action) => {
      state.autenticado = true;
    },
    logout: (state) => {
      state.autenticado = false;
    },
  }),
});

export default authSlice;
export const { login, logout } = authSlice.actions;
