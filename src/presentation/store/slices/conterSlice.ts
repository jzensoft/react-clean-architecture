import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CounterState = {
    counter: number
}

const initSate: CounterState = {
    counter: 0
}

const couterSlice = createSlice({
    name: "counter",
    initialState: initSate,
    reducers: {
        plus: (state: CounterState, action: PayloadAction) => {
            state.counter = state.counter + 1
        },
        minus: (state:CounterState, action:PayloadAction) => {
            state.counter = state.counter - 1
        }
    },
    extraReducers: (builder) => { }
})

export const { plus, minus } = couterSlice.actions
export const counterSelector = (store: RootState) => store.counterReducer
export default couterSlice.reducer