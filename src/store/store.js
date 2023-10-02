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
  name: "router",
  initialState: "",
  reducers: {
    routerStatePush(state, link) {
      return (state = link.payload);
    },
  },
});

export default configureStore({
  reducer: {
    menu: menu.reducer,
    router: router.reducer,
  },
});

export let { changeState } = menu.actions;
export let { routerStatePush } = router.actions;
