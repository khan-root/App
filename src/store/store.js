import { configureStore } from "@reduxjs/toolkit";
import useReducer from '../viewModal/users_view_modal/userSlice'

export const store = configureStore({
    reducer:{
        user: useReducer,
    }
})