import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const channelsStore = createSlice({
    name: "channels",
    initialState: {
        channels: [],
    },
    reducers: {
        setChannel: (state, action) => {
            state.channels = action.payload;
        },
    }
})
const {setChannel} = channelsStore.actions;
const getChannels = () => {
    return (dispatch) => {
        axios.get('http://geek.itheima.net/v1_0/channels').then(res=>{
            console.log(res.data)
            dispatch(setChannel(res.data.data.channels))
        })
    }
};
const channelsReducer = channelsStore.reducer
export {getChannels}
export default channelsReducer