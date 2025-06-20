import { configureStore } from '@reduxjs/toolkit'

//You're importing the configureStore function from Redux Toolkit. This function is used to set up and configure your Redux store in a simpler and more efficient way compared to the traditional Redux approach.

import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})