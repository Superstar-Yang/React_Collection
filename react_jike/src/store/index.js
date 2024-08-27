import {configureStore, createStore} from "@reduxjs/toolkit";
import userReducer from '@/store/modules/user.js'
const store = configureStore({
    reducer: {
        user:userReducer
    }
})
export default store;