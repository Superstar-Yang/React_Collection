import {configureStore} from "@reduxjs/toolkit";
import foodsReducer from './modules/takeaway.js'
const store = configureStore({
    reducer: {
        foods:foodsReducer
    }
})
export default store