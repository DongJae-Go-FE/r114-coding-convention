import { configureStore, createSlice } from "@reduxjs/toolkit";

let menu = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    changeState(state) {
      return !state;
    },
  },
});

export default configureStore({
  reducer: {
    menu: menu.reducer,
  },
});


export let { changeState } = menu.actions 