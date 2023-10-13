import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import counterReducer from "./slices/conterSlice";
import photoReducer from "./slices/photoSlice"

const reducer = {
    counterReducer,
    photoReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()