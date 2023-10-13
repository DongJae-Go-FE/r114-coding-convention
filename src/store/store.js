import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from "redux-persist";

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

const reducers = combineReducers({
  menu: menu.reducer,
  router: router.reducer,
  drawerIsOpen: drawerIsOpen.reducer,
  subMenu: subMenu.reducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whiteList: ["menu", "router", "drawerIsOpen", "subMenu"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export let { changeState } = menu.actions;
export let { routerStatePush } = router.actions;
export let { drawerStateChange } = drawerIsOpen.actions;
export let { subMenuChange } = subMenu.actions;
