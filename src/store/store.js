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
    drawerStateChange(state, data) {
      return (state = data.payload);
    },
  },
});

let subMenu = createSlice({
  name: "subMenu",
  initialState: 0,
  reducers: {
    subMenuChange(state, data) {
      return (state = data.payload);
    },
  },
});

export default configureStore({
  reducer: {
    menu: menu.reducer,
    router: router.reducer,
    drawerIsOpen: drawerIsOpen.reducer,
    subMenu: subMenu.reducer,
  },
});

export let { changeState } = menu.actions;
export let { routerStatePush } = router.actions;
export let { drawerStateChange } = drawerIsOpen.actions;
export let { subMenuChange } = subMenu.actions;
