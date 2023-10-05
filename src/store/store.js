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

//메인 메뉴 스테이트

let mainMenuOn = createSlice({
  name: "mainMenuOn",
  initialState: 0,
  reducers: {
    mainMenuOnChange(state, data) {
      return (state = data.payload);
    },
  },
});

//서브 메뉴 스테이트

export default configureStore({
  reducer: {
    menu: menu.reducer,
    router: router.reducer,
    drawerIsOpen: drawerIsOpen.reducer,
    mainMenuOn: mainMenuOn.reducer,
  },
});

export let { changeState } = menu.actions;
export let { routerStatePush } = router.actions;
export let { drawerStateChange } = drawerIsOpen.actions;
export let { mainMenuOnChange } = mainMenuOn.actions;
