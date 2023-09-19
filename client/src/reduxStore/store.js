import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slices/authSlice'
import messageSlice from './slices/messageSlice'
import groupSlice from './slices/groupSlice'
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        message:messageSlice,
        groups:groupSlice,
        search:searchSlice
    }
})

export default store;