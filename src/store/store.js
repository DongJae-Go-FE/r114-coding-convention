import { configureStore, createSlice } from "@reduxjs/toolkit";

let menu = createSlice({
    name : 'menu',
    initialState : false
  })
  
  export default configureStore({
    reducer: {
        menu : menu.reducer
    }
  }) 
