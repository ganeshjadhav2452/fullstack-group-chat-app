import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slices/authSlice'
import messageSlice from './slices/messageSlice'
import groupsSlice from './slices/groupsSlice'
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        message:messageSlice,
        groups:groupsSlice,
        search:searchSlice
    }
})

export default store;