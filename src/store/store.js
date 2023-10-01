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

let router = createSlice({
  name: "routerState",
  initialState: "",
  reducers: {
    routerStatePush(state) {
      return state;
    },
  },
});

export default configureStore({
  reducer: {
    menu: menu.reducer,
    routerState: router.reducer,
  },
});

export let { changeState } = menu.actions;
export let { routerStatePush } = router.actions;
