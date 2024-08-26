import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./countReducers";
const store = configureStore({
    reducer: {
        counter: countReducer
    }
})
export default store;