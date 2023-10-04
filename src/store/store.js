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

let drawerIsOpen = createSlice({
  name: "drawerIsOpen",
  initialState: false,
  reducers: {
    drawerStateChange(state, date) {
      return (state = date.payload);
    },
  },
});

export default configureStore({
  reducer: {
    menu: menu.reducer,
    router: router.reducer,
    drawerIsOpen: drawerIsOpen.reducer,
  },
});

export let { changeState } = menu.actions;
export let { routerStatePush } = router.actions;
export let { drawerStateChange } = drawerIsOpen.actions;
