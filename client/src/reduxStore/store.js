import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './slices/authSlice'
import messageSlice from './slices/messageSlice'
const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        message:messageSlice
    }
})

export default store;