import {createSlice} from "@reduxjs/toolkit";

const countStore = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.counter++;
        },
        decrement: (state, action) => {
            state.counter--;
        }
    }
})

const {increment, decrement} = countStore.actions;
export {increment, decrement};
const reducer = countStore.reducer
export default reducer;