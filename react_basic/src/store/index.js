import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./modules/counter.js";
import channelsReducer from "./modules/channels.js";
const store = configureStore({
    reducer: {
        counter: countReducer,
        channel:channelsReducer
    }
})
export default store;