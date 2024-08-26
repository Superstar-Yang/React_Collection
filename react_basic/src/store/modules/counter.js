import {createSlice} from "@reduxjs/toolkit";

const countStore = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        },
        add: (state, action) => {
            state.count += action.payload;
        }
    }
})
const {increment, decrement,add} = countStore.actions;
const reducer = countStore.reducer
// 按需暴露
export {increment, decrement,add};
// 默认暴露
export default reducer;
